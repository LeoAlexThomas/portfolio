import { Avatar, Box, Group, Text } from "@mantine/core";
import { HeaderEnum } from "./utils";
import { useState } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  url: string;
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    url: `/`,
  },
  {
    label: "Projects",
    url: `/#${HeaderEnum.project}`,
  },
  {
    label: "Skills",
    url: `/#${HeaderEnum.skills}`,
  },
  {
    label: "Experiences",
    url: `/#${HeaderEnum.experience}`,
  },
  {
    label: "Contact",
    url: `/#${HeaderEnum.contact}`,
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState<string>(navLinks[0].url);

  const links = navLinks.map((link, index) => (
    <Link key={index} href={link.url}>
      <Text
        fz={16}
        lh="1.25"
        c={activeTab === link.url ? "#000000" : "#00000070"}
        onClick={() => setActiveTab(link.url)}
      >
        {link.label}
      </Text>
    </Link>
  ));

  return (
    <Box
      w="100%"
      bg="white"
      py={12}
      px={20}
      style={{
        boxShadow: "0px 4px 12px #00000020",
      }}
    >
      <Group w="100%" maw={1600} mx="auto" justify="space-between">
        <Box
          p={4}
          style={{
            border: "1px solid",
            borderColor: "#00000050",
            borderRadius: "100%",
            boxShadow: "0px 0px 8px #00000040",
          }}
        >
          <Avatar
            name="Leo Alex Thomas"
            src="/images/leoProfile.webp"
            alt="profilePic"
            size="md"
          />
        </Box>
        <Group visibleFrom="sm" gap={12}>
          {links}
        </Group>
      </Group>
    </Box>
  );
};

export default Header;
