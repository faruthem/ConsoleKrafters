import * as Yup from "yup";

export function initialValues() {
  return {
    email: "", //"FerretWeb@gmail.com"
    username: "", //"Farithem"
    name: "", //"El niño del hurón"
    password: "", //"Soy un hurón"
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    username: Yup.string().required(),
    name: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}
