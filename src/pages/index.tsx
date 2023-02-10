import { ArticlesSection } from "@/components/articlesSection";
import { Description } from "@/components/description";
import { Header } from "@/components/header";
import { LeadingHealthcareProviders } from "@/components/leadingHealthcareProviders";
import { Logo } from "@/components/logo";
import { MobileAppsSection } from "@/components/mobileAppsSection";
import { OurServices } from "@/components/ourServices";
import { Testimonials } from "@/components/testimonials";
import { TopNavBar } from "@/components/topNavBar";
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
        <Header>
          <Logo />
          <TopNavBar />
        </Header>
        <main>
          <Description />
          <OurServices />
          <LeadingHealthcareProviders />
          <MobileAppsSection />
          <Testimonials />
          <ArticlesSection />
        </main>
      </div>
    </>
  );
}
