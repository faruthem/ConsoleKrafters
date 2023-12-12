import styles from "./Wishlisticon.module.scss";
import classNames from "classnames";
import { Icon } from "semantic-ui-react";

export function Wishlisticon(props) {
  const { gameId, className } = props;

  return (
    <Icon
      name="heart"
      className={classNames(styles.wishlistIcon, {
        [className]: className,
      })}
    />
  );
}
