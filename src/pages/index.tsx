import { ArticlesSection } from "@/components/articles";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileApps } from "@/components/mobileApps";
import { OurServices } from "@/components/ourServices";
import { Providers } from "@/components/providers";
import { Testimonials } from "@/components/testimonials";
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
          <Hero />
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
