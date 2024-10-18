import { Text, Group, Image, Box, Space } from "@mantine/core";
import { socialLinks } from "@/common";

const Footer = () => {
  return (
    <Box
      bg="white"
      style={{
        boxShadow: "4px 0px 12px #00000020",
        // background: "linear-gradient(180deg, #80000000, #000000)",
      }}
      mt={40}
    >
      <Box maw={1200} mx="auto" px={30} py={18}>
        <Text fz={{ base: 20, sm: 26 }} fw={500} ta="center">
          Get in touch
        </Text>
        <Space h={12} />
        <Group gap={12} justify="center">
          <a href={"mailto:leoalex960@gmail.com"} target="_blank">
            <Image src="/images/gmail.webp" alt="gmail" w={35} h={35} />
          </a>
          <a href={socialLinks.github} target="_blank">
            <Image src="/images/github_logo.webp" alt="github" w={30} h={30} />
          </a>
          <a href={socialLinks.linkedIn} target="_blank">
            <Image
              src="/images/linkedin_logo.webp"
              alt="linkedIn"
              w={30}
              h={30}
            />
          </a>
        </Group>
      </Box>
    </Box>
  );
};

export default Footer;
