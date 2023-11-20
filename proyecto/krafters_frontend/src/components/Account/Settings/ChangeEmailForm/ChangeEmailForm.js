import { Form } from "semantic-ui-react";
import styles from "./ChangeEmailForm.module.scss";

export function ChangeEmailForm() {
  return (
    <Form className={styles.form}>
      <label>Cambiar correo electronico</label>
      <Form.Input name="email" placeholder="Nuevo correo electronico" />
      <Form.Input name="repeatEmail" placeholder="Repetir correo electronico" />
      <Form.Button name="submit">Enviar</Form.Button>
    </Form>
  );
}
