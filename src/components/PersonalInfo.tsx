import { SocialMediaLink } from "@/types";
import { Center, Flex, Grid, Group, Stack, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const socialLinks: SocialMediaLink = {
  github: "https://github.com/LeoAlexThomas",
  linkedIn: "https://www.linkedin.com/in/leoalex-thomas/",
};

const PersonalInfo = () => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <Flex h={{ base: 300, sm: "90vh" }}>
      <Grid
        h="100%"
        w="100%"
        align="center"
        style={{
          alignContent: "center",
        }}
      >
        <Grid.Col span="auto">
          <Stack px={20} align="stretch" justify="center">
            <Text
              fz={{ base: 20, sm: 48 }}
              fw={500}
              lh="1.25"
              ta={{ base: "center", sm: "start" }}
            >
              LEO ALEX THOMAS
            </Text>
            <Text
              fz={{ base: 14, md: 20 }}
              lh="1.25"
              c="grey"
              ta={{ base: "center", sm: "start" }}
            >
              Frontend Developer
            </Text>
            <Group gap={12} justify={isTablet ? "center" : "flex-start"}>
              <a href={socialLinks.github} target="_blank">
                <Image
                  src="/images/github_logo.svg"
                  alt="github"
                  w={{ base: 25, sm: 45 }}
                  h={{ base: 25, sm: 45 }}
                />
              </a>
              <a href={socialLinks.linkedIn} target="_blank">
                <Image
                  src="/images/linkedin_logo.svg"
                  alt="linkedIn"
                  w={{ base: 25, sm: 45 }}
                  h={{ base: 25, sm: 45 }}
                />
              </a>
            </Group>
          </Stack>
        </Grid.Col>
        <Grid.Col span="content" display={{ base: "none", sm: "flex" }}>
          <Center>
            <Image
              src="/images/leoProfile.webp"
              alt="leo"
              maw={{ base: 200, sm: 500 }}
              style={{
                aspectRatio: 1.0,
                borderRadius: "100%",
                boxShadow: "0px 2px 15px #00000050",
              }}
            />
          </Center>
        </Grid.Col>
      </Grid>
    </Flex>
  );
};

export default PersonalInfo;
