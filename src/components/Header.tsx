import { Avatar, Box, Burger, Drawer, Group, Stack, Text } from "@mantine/core";
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
      bg="#FFFFFF70"
      py={12}
      h={60}
      style={{
        boxShadow: "0px 4px 12px #00000020",
        backdropFilter: "blur(5px)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
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
        justify="space-between"
        px={30}
      >
        <Group visibleFrom="sm" gap={28} w="100%" justify="center">
          {links}
        </Group>
        <Burger hiddenFrom="sm" onClick={onOpen} />
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
      styles={{
        body: {
          padding: 0,
          marginTop: 10,
        },
      }}
    >
      <Stack>
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
      </Stack>
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
  const { ref: hoverRef, hovered: isHovered } = useHover();
  return (
    <Box
      ref={hoverRef}
      style={{
        cursor: "pointer",
        boxShadow: isHovered
          ? "0px 0px 4px var(--mantine-color-primary-gray-8)"
          : "none",
      }}
      onClick={onClicked}
      w="100%"
      p={16}
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
