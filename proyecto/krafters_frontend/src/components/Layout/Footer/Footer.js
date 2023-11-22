import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="images/logo.jpg" alt="Gaming"></Image>
            </Link>
          </div>
          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contactanos</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="twitter" icon="twitter" />
            <Button
              as="a"
              href="#"
              circular
              color="instagram"
              icon="instagram"
            />
            <Button as="a" href="#" circular color="youtube" icon="youtube" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>copyright 2023 Gaming - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
