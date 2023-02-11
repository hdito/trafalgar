import { ArticlesSection } from "@/components/articles";
import { Description } from "@/components/description";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { MobileApps } from "@/components/mobileApps";
import { OurServices } from "@/components/ourServices";
import { Testimonials } from "@/components/testimonials";
import { Nav } from "@/components/nav";
import { Mulish } from "@next/font/google";
import Head from "next/head";

const mulish = Mulish({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Trafalgar</title>
        <meta name="description" content="Trafalgar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mulish.className}>
        <Header />
        <main>
          <Description />
          <OurServices />
          <Providers />
          <MobileApps />
          <Testimonials />
          <ArticlesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
