import Head from "next/head";
import { Box, Space, Stack } from "@mantine/core";
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
        <meta
          name="description"
          content=" Motivated Front-End Developer with a solid foundation in React,
              JavaScript, NextJS, and more, eager to apply academic training and
              hands-on experience in a professional setting. Possesses a keen
              eye for design and a commitment to writing clean, efficient code."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/leoalex.ico" />
      </Head>
      <Box
        style={{
          backgroundImage:
            "linear-gradient(0,  var(--mantine-color-primary-gray-2), #FFFFFF)",
        }}
      >
        <Header />
        <Space h={20} />
        <Stack
          maw={1200}
          mx="auto"
          px={30}
          pb={20}
          gap={isTablet ? 60 : 120}
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
      </Box>
    </>
  );
}
