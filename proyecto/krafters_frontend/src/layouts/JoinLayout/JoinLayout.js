import Link from "next/link";
import { Icon, Image } from "semantic-ui-react";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";
import styles from "./JoinLayout.module.scss";

export function JoinLayout(props) {
  const { children } = props;
  const router = useRouter();
  const { user } = useAuth();

  if (user) router.push("/");
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming"></Image>
        </Link>

        <Link href="/">
          <Icon name="close"></Icon>
        </Link>
      </div>
      <div className={styles.blockLeft}>{children}</div>
      <div className={styles.blockRight} />
    </div>
  );
}