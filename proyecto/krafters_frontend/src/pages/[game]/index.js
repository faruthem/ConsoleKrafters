export { default } from "./game"; //las exportaciones de paginas deben ser default
import { Game } from "@/api";

export async function getServerSideProps(context) {
  const {
    params: { game },
  } = context;

  const gameCtrl = new Game();
  const response = await gameCtrl.getBySlug(game);
  console.log(game);

  return {
    props: {
      game: response,
    },
  };
}
