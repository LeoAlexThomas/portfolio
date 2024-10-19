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
      bg="#FFFFFF20"
      py={12}
      h={60}
      style={{
        boxShadow: "0px 4px 12px #ffffff80",
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
        <Burger hiddenFrom="sm" onClick={onOpen} color="white" />
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
      withCloseButton={false}
      styles={{
        body: {
          padding: 0,
          marginTop: 10,
          height: "100%",
          backgroundImage:
            "linear-gradient(0,  var(--mantine-color-primary-gray-7), black)",
        },
      }}
    >
      <Stack>
        <Flex
          w={45}
          h={45}
          mt={14}
          style={{
            alignSelf: "flex-end",
          }}
        >
          <CloseButton onClick={onClose} c="primary-gray.3" />
        </Flex>
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
          ? "0px 0px 4px var(--mantine-color-primary-gray-4)"
          : "none",
      }}
      onClick={onClicked}
      w="100%"
      p={16}
      c="primary-gray.1"
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
