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
  Box,
  Space,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Image from "next/image";
import buttonStyle from "../styles/button.module.css";
import { motion } from "framer-motion";

const PersonalInfo = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const isMobile = useMediaQuery("(max-width: 426px)");
  const fadeInAnimation = {
    initial: { opacity: 0, y: 40 }, // Start from bottom and transparent
    animate: { opacity: 1, y: 0 }, // End at normal position and fully opaque
  };
  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      transition={{ duration: 0.3, delay: 0.1 }}
      whileInView="animate"
      viewport={{
        once: true,
      }}
      style={{
        position: "relative",
      }}
    >
      <Grid
        h="100%"
        w="100%"
        align="center"
        my={{ base: 0, sm: 90 }}
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
            <Box>
              <Text
                ff="Noto Serif"
                fz={{ base: 32, sm: 48 }}
                fw={800}
                lh="1.25"
                ta={{ base: "center", xs: "start" }}
                c="primary-gray.8"
              >
                LEO ALEX THOMAS
              </Text>
              <Space h={12} />
              <Text
                ff="Noto Serif"
                fz={{ base: 22, sm: 26 }}
                fw={800}
                lh="1.25"
                ta={{ base: "center", xs: "start" }}
                c="gray"
              >
                Software Engineer
              </Text>
            </Box>
            <Text
              fz={{ base: 16, md: 20 }}
              lh="1.5"
              c="primary-gray.6"
              pt={4}
              ta={{ base: "center", xs: "start" }}
            >
              Motivated Front-End Developer with a solid foundation in React,
              JavaScript, NextJS, and more, eager to apply academic training and
              hands-on experience in a professional setting. Possesses a keen
              eye for design and a commitment to writing clean, efficient code.
            </Text>
            <Button
              className={buttonStyle.gradientButton}
              component="a"
              href="https://drive.google.com/file/d/1Hapcd02ZqOiMVxdxCSranwwZe97FI1TE/view?usp=sharing"
              download
              target="_blank"
              size={isMobile ? "md" : "lg"}
              radius="lg"
              w={{ base: "100%", sm: "fit-content" }}
            >
              View Resume
            </Button>
            <Group
              gap={isTablet ? 12 : 24}
              justify={isTablet ? "center" : "flex-start"}
            >
              <a href={socialLinks.github} target="_blank">
                <Box
                  style={{
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                  w={45}
                  h={45}
                >
                  <Image
                    src="/images/github_logo.webp"
                    alt="github"
                    width={45}
                    height={45}
                  />
                </Box>
              </a>
              <a href={socialLinks.linkedIn} target="_blank">
                <Box
                  style={{
                    borderRadius: isTablet ? 4 : 12,
                    overflow: "hidden",
                  }}
                  w={45}
                  h={45}
                >
                  <Image
                    src="/images/linkedin_logo.webp"
                    alt="linkedIn"
                    width={45}
                    height={45}
                  />
                </Box>
              </a>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span="content" display={{ base: "none", sm: "flex" }}>
          <ProfileImage />
        </Grid.Col>
      </Grid>
    </motion.div>
  );
};

const ProfileImage = (props?: CenterProps) => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <Center {...props} maw={{ base: 180, sm: 300 }}>
      <Avatar
        size={isTablet ? 180 : 300}
        style={{
          boxShadow: "0px 0px 15px #00000030",
        }}
      >
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
