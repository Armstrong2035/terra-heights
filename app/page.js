import ScrollingAppBar from "@/components/AppBar/ScrollingAppBar";
import Body from "@/components/body/Body";
import Head from "next/head";
import { hero, gallery, location, floorPlans } from "@/utils/siteConfig";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href={hero.heroImage}
          as="image"
          type="image/webp"
        />
      </Head>
      <div>
        <ScrollingAppBar />
        <Body
          images={gallery.images}
          heroImage={hero.heroImage}
          masterPlan={location.masterPlan}
          floorPlanImages={floorPlans.images}
        />
      </div>
    </>
  );
}
