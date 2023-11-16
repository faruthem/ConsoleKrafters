import { Form } from "semantic-ui-react";
import styles from "./ChangeNameForm.module.scss";

export function ChangeNameForm() {
  return (
    <Form>
      <label>Nombre y apellidos</label>
      <div className={styles.content}>
        <Form.Input name="name" placeholder="Nombre y apellidos" />
        <Form.Button type="submit">Enviar</Form.Button>
      </div>
    </Form>
  );
}
