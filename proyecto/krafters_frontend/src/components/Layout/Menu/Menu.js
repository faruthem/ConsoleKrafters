import { useState, useEffect } from "react";
import { Image, Icon, input } from "semantic-ui-react";
import { map } from "lodash";
import { Platform } from "@/api";
import styles from "./Menu.module.scss";
import Link from "next/link";

const platformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await platformCtrl.getAll();
        setPlatforms(response.data);
      } catch (error) {
        console.error(
          "Hola Kevin, soy un pinche error en tu plataforma",
          error
        );
      }
    })();
  }, []);

  return (
    <div className={styles.platforms}>
      {map(platforms, (platform) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image src={platform.attributes.icon.data.attributes.url} />
          {platform.attributes.title}
        </Link>
      ))}
    </div>
  );
}
