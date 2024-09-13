import { socialLinks } from "@/common";
import {
  Center,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  Button,
  CenterProps,
  Avatar,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";

const PersonalInfo = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 426px)");
  return (
    <Flex h={{ base: "70vh", xs: "60vh", sm: "90vh" }}>
      <Grid
        h="100%"
        w="100%"
        align="center"
        style={{
          alignContent: "center",
        }}
        gutter="xl"
      >
        <Grid.Col span="auto">
          <Stack
            gap={isTablet ? 20 : 38}
            align={isMobile ? "center" : "flex-start"}
            justify="center"
          >
            <ProfileImage display={{ base: "flex", sm: "none" }} />

            <Text
              fz={{ base: 20, sm: 48 }}
              fw={800}
              lh="1.25"
              ta={{ base: "center", xs: "start" }}
            >
              LEO ALEX THOMAS
            </Text>
            <Text
              fz={{ base: 14, md: 16 }}
              lh="1.5"
              c="primary-gray.4"
              pt={4}
              ta={{ base: "center", xs: "start" }}
            >
              Motivated Front-End Developer with a solid foundation in React,
              JavaScript, NextJS, and more, eager to apply academic training and
              hands-on experience in a professional setting. Possesses a keen
              eye for design and a commitment to writing clean, efficient code.
            </Text>
            <Button
              component="a"
              href="https://docs.google.com/document/d/1URW4J0ghk0hcDxApqMUHAkIz1sIj_Zw-b-XWhAp-NgE/edit?usp=sharing"
              download
              target="_blank"
              size={isMobile ? "md" : "lg"}
              radius="lg"
              w={{ base: "100%", sm: "fit-content" }}
            >
              View Resume
            </Button>
            <Group gap={12} justify={isTablet ? "center" : "flex-start"}>
              <a href={socialLinks.github} target="_blank">
                <Image
                  src="/images/github_logo.webp"
                  alt="github"
                  width={25}
                  height={25}
                />
              </a>
              <a href={socialLinks.linkedIn} target="_blank">
                <Image
                  src="/images/linkedin_logo.webp"
                  alt="linkedIn"
                  width={25}
                  height={25}
                />
              </a>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span="content" display={{ base: "none", sm: "flex" }}>
          <ProfileImage />
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

const ProfileImage = (props?: CenterProps) => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <Center {...props} maw={{ base: 180, sm: 300 }} pos="relative">
      <Avatar size={isTablet ? 180 : 300} pos="relative">
        <Image
          src="/images/leoProfileAnimated.webp"
          alt="leo"
          width={isTablet ? 180 : 300}
          height={isTablet ? 180 : 300}
          layout="responsive"
          priority
          style={{
            borderRadius: "100%",
            boxShadow: "0px 2px 15px #00000050",
          }}
        />
      </Avatar>
    </Center>
  );
};

export default PersonalInfo;
