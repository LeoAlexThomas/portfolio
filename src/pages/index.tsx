import Head from "next/head";
import { Space, Stack } from "@mantine/core";
import Header from "@/components/Header";
import SkillContent from "@/components/Skills";
import PersonalInfo from "@/components/PersonalInfo";
import Experiences from "@/components/Experience";
import { useMediaQuery } from "@mantine/hooks";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  const isTablet = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Head>
        <title>Leo Alex Thomas Portfolio</title>
        <meta name="description" content="Leo alex thomas portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Space h={20} />
      <Stack
        maw={1200}
        mx="auto"
        px={30}
        pb={20}
        gap={isTablet ? 60 : 80}
        style={{
          overflow: "hidden",
        }}
      >
        <PersonalInfo />
        <SkillContent />
        <Experiences />
        <Projects />
      </Stack>
      <Footer />
    </>
  );
}
