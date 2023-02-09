import { Description } from "@/components/description";
import { Header } from "@/components/header";
import { Logo } from "@/components/logo";
import { OurServices } from "@/components/ourServices";
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
        </main>
      </div>
    </>
  );
}
