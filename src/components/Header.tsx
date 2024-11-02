import {
  Box,
  Burger,
  Center,
  Group,
  Menu,
  MenuDropdown,
  MenuItem,
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

  const mobileLinks = navLinks.map((link, index) => (
    <MenuItem key={index}>
      <MobileHeaderLink
        text={link.label}
        onClicked={() => {
          handleLinkPress(link);
        }}
      />
    </MenuItem>
  ));

  return (
    <>
      <Box
        w="100%"
        bg="#0275b4"
        py={12}
        h={60}
        style={{
          boxShadow: "0px 4px 12px #afafaf",
        }}
      >
        <Group
          w="100%"
          h="100%"
          maw={1200}
          mx="auto"
          justify="space-between"
          px={{ base: 16, sm: 30 }}
          wrap="nowrap"
        >
          <Center
            style={{
              border: "2px solid white",
              borderRadius: "50%",
            }}
            p={8}
            pt={12}
          >
            <Text ff="chomsky" fz={30} lh="0.65" c="white">
              L
            </Text>
          </Center>
          <Group visibleFrom="sm" gap={28} justify="center">
            {links}
          </Group>
          <Menu
            width={300}
            radius={12}
            shadow="xl"
            transitionProps={{
              duration: 200,
              transition: "pop",
            }}
          >
            <Menu.Target>
              <Burger hiddenFrom="sm" color="white" />
            </Menu.Target>
            <MenuDropdown>{mobileLinks}</MenuDropdown>
          </Menu>
        </Group>
      </Box>
    </>
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
      fz={18}
      fw={600}
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
