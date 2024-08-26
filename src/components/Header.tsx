import { Avatar, Box, Group, Text } from "@mantine/core";
import { HeaderEnum } from "./utils";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { useHover } from "@mantine/hooks";

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
  const router = useRouter();

  const handleLinkPress = (link: NavLink) => {
    if (link.id === HeaderEnum.home) {
      router.replace("/");
      return;
    }
    const ele = document.getElementById(link.id);
    ele?.scrollIntoView({ behavior: "smooth" });
  };

  const links = navLinks.map((link, index) => (
    <Fragment key={index}>
      <HeaderLink text={link.label} onClicked={() => handleLinkPress(link)} />
    </Fragment>
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
      <Group w="100%" maw={1200} mx="auto" justify="space-between" px={30}>
        <Box
          p={4}
          style={{
            border: "1px solid",
            borderColor: "#00000050",
            borderRadius: "100%",
            boxShadow: "0px 0px 8px #00000040",
          }}
        >
          <Avatar name="Leo Alex Thomas" alt="profilePic" size="md" />
        </Box>
        <Group visibleFrom="sm" gap={12}>
          {links}
        </Group>
      </Group>
    </Box>
  );
};

const HeaderLink = ({
  text,
  onClicked,
}: {
  text: string;
  onClicked: () => void;
}) => {
  const { ref: hoverRef, hovered: isHovered } = useHover();

  return (
    <Text
      ref={hoverRef}
      fz={16}
      lh="1.25"
      td={isHovered ? "underline" : "none"}
      c="#000000"
      style={{
        cursor: "pointer",
      }}
      onClick={onClicked}
    >
      {text}
    </Text>
  );
};

export default Header;
