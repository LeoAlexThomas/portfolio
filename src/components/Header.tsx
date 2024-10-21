import {
  Box,
  Burger,
  CloseButton,
  Drawer,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { HeaderEnum } from "./utils";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { useDisclosure, useHover, useMediaQuery } from "@mantine/hooks";

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
    label: "Skills",
    id: HeaderEnum.skills,
  },
  {
    label: "Experiences",
    id: HeaderEnum.experience,
  },
  {
    label: "Projects",
    id: HeaderEnum.project,
  },
];

const Header = () => {
  const router = useRouter();
  const [opened, { open: onOpen, close: onClose }] = useDisclosure();
  const isTablet = useMediaQuery("(max-width: 768px)");

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
      bg="#00000050"
      py={12}
      h={60}
      style={{
        boxShadow: "0px 4px 12px #afafaf",
        backdropFilter: "blur(5px)",
      }}
    >
      <MobileDrawer
        isOpen={opened}
        onClose={onClose}
        links={navLinks}
        onLinkPressed={handleLinkPress}
      />
      <Group
        w="100%"
        h="100%"
        maw={1200}
        mx="auto"
        justify={isTablet ? "flex-start" : "space-between"}
        px={30}
      >
        <Group visibleFrom="sm" gap={28} w="100%" justify="center">
          {links}
        </Group>
        <Burger hiddenFrom="sm" onClick={onOpen} color="white" />
        {/* <Text hiddenFrom="sm" fz={24} fw={700} lh="1.25" c="white">
          Leo Alex
        </Text> */}
      </Group>
    </Box>
  );
};

const MobileDrawer = ({
  isOpen,
  onClose,
  links,
  onLinkPressed,
}: {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  onLinkPressed: (link: NavLink) => void;
}) => {
  return (
    <Drawer
      opened={isOpen}
      onClose={onClose}
      bg="white"
      styles={{
        body: {
          padding: 0,
          marginTop: 10,
          height: "100%",
        },
      }}
    >
      {links.map((link, index) => (
        <Fragment key={index}>
          <MobileHeaderLink
            text={link.label}
            onClicked={() => {
              onClose();
              onLinkPressed(link);
            }}
          />
        </Fragment>
      ))}
    </Drawer>
  );
};

const MobileHeaderLink = ({
  text,
  onClicked,
}: {
  text: string;
  onClicked: () => void;
}) => {
  return (
    <Box
      style={{
        cursor: "pointer",
        boxShadow: "0px 2px var(--mantine-color-primary-gray-4)",
      }}
      onClick={onClicked}
      w="100%"
      p={16}
      c="primary-gray.8"
    >
      {text}
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
      fz={20}
      lh="1.25"
      td={isHovered ? "underline" : "none"}
      c="#ffffff"
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
