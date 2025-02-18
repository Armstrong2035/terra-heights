import ScrollingAppBar from "@/components/AppBar/ScrollingAppBar";
import Body from "@/components/body/Body";
import Head from "next/head";

export const dynamic = "force-static";

const images = [
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812368/Image_17_uijjge.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812345/Image_14_z1k4zk.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812176/Image_6_jeo8hz.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812174/Image_3_t18f2j.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812370/Image_15_h3tqqe.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812166/Image_4_gfo9g1.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812167/Image_10_vnj8dm.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812174/Image_2_jcasuw.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1200,dpr_auto/v1739812348/Image_16_jtzocq.png",
];

// Hero image - using larger width since it's the main image
const heroImage =
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1920,dpr_auto/v1739812183/Image_7_rhskvt.png";

// Master plan - also using larger width for detail
const masterPlan =
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1600,dpr_auto/v1739877645/Image_8_iyjper.png";

// Floor plans need good resolution for detail
const floorPlanImages = [
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877699/3_-_TYPE_A_gbtlwi.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877698/4_-_TYPE_A_ekjjqw.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877699/1_-_TYPE_A_pjuhx2.png",
  "https://res.cloudinary.com/dulafqaoq/image/upload/q_auto,f_auto,w_1400,dpr_auto/v1739877697/2_-_TYPE_B_z5w7a1.png",
];
export default function Home() {
  return (
    <>
      <Head>
        <link rel="preload" href={heroImage} as="image" type="image/webp" />
      </Head>
      <div>
        <ScrollingAppBar />
        <Body
          images={images}
          heroImage={heroImage}
          masterPlan={masterPlan}
          floorPlanImages={floorPlanImages}
        />
      </div>
    </>
  );
}
