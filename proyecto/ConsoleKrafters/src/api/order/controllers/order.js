'use strict';
require('dotenv').config(); // Carga las variables del archivo .env
const stripe = require ('stripe')(process.env.stripe_secret_pass);
function calcDiscountPrice (price, discount){
    if(!discount) return price;

    const discountAmount = (price * discount) / 100;
    const result = price - discountAmount;

    return result.toFixed(2)
}

/**
 * order constructor
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi})=> ({
    async paymentOrder(ctx){
        //ctx.body = "Pago y pedido generado correctamente."
        const { token,products,idUser, addressShipping }= ctx.request.body;//Envio token de pago, más listado de productos id usuario y dirección de envio
//Calculo el total que me va a costar 
        let totalPayment =0;
        products.forEach((product) => {
            const priceTemp = calcDiscountPrice(
                product.attributes.price,
                product.attributes.discount
            );
            totalPayment += Number(priceTemp)*product.quantity;
        });
        const charge = await stripe.charges.create({
            amount: Math.round(totalPayment *100),
            currency: "eur",
            surce: token.id,
            description: `User ID: ${idUser}`,
        });
//Aquí termina el calculo

//Ejecuto pago en stripe y creo data
        const data = {
            products,
            user: idUser,
            totalPayment,
            idPayment: charge.id,
            addressShipping,
        };
//Obtengo el modelo para registrar datos, valido modelo y data
        const model = strapi.contentTypes["api::order.order"];
        const validData = await strapi.entityValidator.validateEntityCreation(
            model,
            data
        );
//Guardo datos en base de datos y retorno al cliente 
        const entry = await strapi.db
        .query("api::order.order")
        .create({data: validData});

        return entry;

    },
}));








//Cliente ---> Stripe (TokenPayment) ---> cliente(TokenPayment + ordenData) ---> Server (TokenPayment + orderData) --->Stripe (KO, ERROR)---> Servidor ----> Cliente