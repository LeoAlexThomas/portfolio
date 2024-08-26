import Head from "next/head";
import { Space, Stack } from "@mantine/core";
import Header from "@/components/Header";
import SkillContent from "@/components/Skills";
import PersonalInfo from "@/components/PersonalInfo";

export default function Home() {
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
        maw={1600}
        mx="auto"
        px={30}
        pb={20}
        style={{
          overflow: "hidden",
        }}
      >
        <PersonalInfo />
        <SkillContent />
      </Stack>
    </>
  );
}
