import { Text, Group, Image, Box } from "@mantine/core";
import { socialLinks } from "@/common";

const Footer = () => {
  return (
    <Box
      bg="white"
      style={{
        boxShadow: "4px 0px 12px #00000020",
      }}
      mt={40}
    >
      <Box maw={1200} mx="auto" px={30} py={18}>
        <Group justify="space-between" align="center">
          <Text
            fz={{ base: 16, sm: 20 }}
            component="a"
            href="mailto:leoalex960@gmail.com"
          >
            leoalex960@gmail.com
          </Text>
          <Group gap={12} justify="center">
            <a href={socialLinks.github} target="_blank">
              <Image
                src="/images/github_logo.webp"
                alt="github"
                w={30}
                h={30}
              />
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
        </Group>
      </Box>
    </Box>
  );
};

export default Footer;
