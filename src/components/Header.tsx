import { Avatar, Box, Group, Text } from "@mantine/core";
import { HeaderEnum } from "./utils";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLink {
  label: string;
  id: HeaderEnum;
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    id: HeaderEnum.home,
  },
  {
    label: "Projects",
    id: HeaderEnum.project,
  },
  {
    label: "Skills",
    id: HeaderEnum.skills,
  },
  {
    label: "Experiences",
    id: HeaderEnum.experience,
  },
  {
    label: "Contact",
    id: HeaderEnum.contact,
  },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState<string>(navLinks[0].id);
  const router = useRouter();

  const links = navLinks.map((link, index) => (
    <Text
      key={index}
      fz={16}
      lh="1.25"
      c={activeTab === link.id ? "#000000" : "#00000070"}
      style={{
        cursor: "pointer",
      }}
      onClick={() => {
        setActiveTab(link.id);
        if (link.id === HeaderEnum.home) {
          router.replace("/");
          return;
        }
        const ele = document.getElementById(link.id);
        ele?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {link.label}
    </Text>
  ));

  return (
    <Box
      w="100%"
      bg="white"
      py={12}
      style={{
        boxShadow: "0px 4px 12px #00000020",
      }}
    >
      <Group w="100%" maw={1600} mx="auto" justify="space-between" px={30}>
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
