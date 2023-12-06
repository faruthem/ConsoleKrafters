import { Container } from "semantic-ui-react";
import { BasicLayout } from "@/layouts";
import { Home } from "@/components/Home";
import { Separator, BarTrust, BannerAd } from "@/components/Shared";

const platformsId = {
  nintendo: 4,
  playStation: 2,
  pc: 1,
  xbox: 3,
};

export default function HomePage() {
  return (
    <>
      <BasicLayout>
        <Home.BannerLastGamePublished />

        <Separator height={100} />

        <Container>
          <Home.LatestGames title="Ultimos lanzamientos" />
        </Container>

        <Separator height={100} />

        <BarTrust />

        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="PlayStation"
            limit={3}
            platformId={platformsId.playStation}
          />
        </Container>

        <Separator height={100} />

        <BannerAd
          title="Registrate y obtén los mejores precios"
          subtitle="Compara con otros juegos y elige el tuyo"
          btnTitle="Entrar ahora"
          btnLink="/account"
          image="/images/img01.png"
        />
        <Separator height={50} />

        <Container>
          <Home.LatestGames
            title="Xbox"
            limit={3}
            platformId={platformsId.xbox}
          />
        </Container>

        <Separator height={100} />

        <Container>
          <Home.LatestGames
            title="Nintendo"
            limit={3}
            platformId={platformsId.nintendo}
          />
        </Container>

        <Separator height={100} />

        <Container>
          <Home.LatestGames title="PC" limit={3} platformId={platformsId.pc} />
        </Container>

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
