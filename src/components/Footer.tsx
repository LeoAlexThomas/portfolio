import { Text, Group, Image, Box, Space } from "@mantine/core";
import { socialLinks } from "@/common";

const Footer = () => {
  return (
    <Box
      bg="#afafaf50"
      style={{
        boxShadow: "4px 0px 12px #00000050",
      }}
      mt={40}
    >
      <Box maw={1200} mx="auto" px={30} py={18}>
        <Text fz={{ base: 20, sm: 26 }} fw={500} ta="center" c="primary-gray.9">
          Get in touch
        </Text>
        <Space h={12} />
        <Group gap={12} justify="center">
          <a href={"mailto:leoalex960@gmail.com"} target="_blank">
            <Image src="/images/mail.svg" alt="gmail" w={35} h={35} />
          </a>
          <a href={socialLinks.github} target="_blank">
            <Box
              style={{
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <Image src="/images/github.svg" alt="github" w={30} h={30} />
            </Box>
          </a>
          <a href={socialLinks.linkedIn} target="_blank">
            <Image src="/images/linkedin.svg" alt="linkedIn" w={40} h={40} />
          </a>
        </Group>
      </Box>
    </Box>
  );
};

export default Footer;
