import { Box, Grid, Group, Stack, Text } from "@mantine/core";
import SectionTitle from "./SectionTitle";
import { HeaderEnum } from "./utils";
import { ExperienceInterface } from "@/types";
import { Fragment } from "react";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const experiences: ExperienceInterface[] = [
  {
    company: "Cybermind works",
    companyImage: "https://www.cybermindworks.com/images/cmwlogo.svg",
    position: "Frontend Developer",
    description:
      "Led a team of two to create web and mobile applications from scratch and take it to production. Successfully shipped products like Learning Platform[LMS], Customer relationship management [CRM], Testing Platform, Social Media Applications.",
    startDate: "04 OCTOBER 2021",
    endDate: "20 AUGEST 2024",
    exp: "2 years & 11 months",
  },
  {
    company: "SwamEquip",
    companyImage: "/images/swamEquip.webp",
    position: "Mobile Application Developer",
    description:
      "Create mobile applications that lets users control and monitor their Stir Casting Machine.",
    startDate: "16 JANUARY 2021",
    endDate: "30 SEPTEMBER 2024",
    exp: "9 months",
  },
];

const leftFadeAnimationVariants = {
  initial: {
    opacity: 0,
    x: -200,
  },
  leftAnimate: {
    opacity: 1,
    x: 0,
  },
};

const rightFadeAnimationVariants = {
  initial: {
    opacity: 0,
    x: 200,
  },
  rightAnimate: {
    opacity: 1,
    x: 0,
  },
};

const Experiences = () => {
  return (
    <Stack gap={30} id={HeaderEnum.experience}>
      <SectionTitle title="Experiences" />
      {experiences.map((exp, index) => {
        const showLeftAnimation = index % 2 === 0;
        return (
          <motion.div
            key={index}
            variants={
              showLeftAnimation
                ? leftFadeAnimationVariants
                : rightFadeAnimationVariants
            }
            initial="initial"
            whileInView={showLeftAnimation ? "leftAnimate" : "rightAnimate"}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            style={{
              position: "relative",
            }}
          >
            <Fragment key={index}>
              <ExperienceCard experience={exp} />
            </Fragment>
          </motion.div>
        );
      })}
    </Stack>
  );
};

const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceInterface;
}) => {
  const { hovered: isHovered, ref: hoverRef } = useHover();
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      ref={hoverRef}
      style={{
        boxShadow: isHovered
          ? "0px 0px 12px var(--mantine-color-primary-blue-2)"
          : "none",
        borderRadius: 14,
        backgroundImage:
          "linear-gradient(0, var(--mantine-color-primary-blue-7), var(--mantine-color-primary-blue-3))",
      }}
      p={1}
    >
      <Box
        bg="white"
        style={{
          borderRadius: 12,
          border: "1px solid var(--mantine-color-primary-gray-3)",
        }}
      >
        <Grid>
          <Grid.Col span="content" display={{ base: "none", sm: "flex" }}>
            <Image
              src={experience.companyImage}
              alt={experience.company}
              width={200}
              height={200}
              priority
              style={{
                padding: "16px",
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
              }}
            />
          </Grid.Col>
          <Grid.Col span="auto">
            <Image
              src={experience.companyImage}
              alt={experience.company}
              height={150}
              width={150}
              priority
              objectFit="contain"
              style={{
                padding: "16px",
                display: isTablet ? "flex" : "none",
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
              }}
            />
            <Stack gap={8} py={{ base: 12, sm: 20 }} px={{ base: 12, sm: 8 }}>
              <Text fz={{ base: 16, sm: 24 }} fw={500} lh="1.25">
                {experience.company}{" "}
                <Text span fz={12} c="primary-gray.5" fs="italic">
                  ( {experience.exp} )
                </Text>
              </Text>
              <Text fz={{ base: 12, sm: 16 }} lh="1.25" c="primary-gray.4">
                {experience.description}
              </Text>
              <Text
                fz={{ base: 12, sm: 16 }}
                fw={500}
                lh="1.25"
                c="primary-gray.7"
              >
                {experience.position}
              </Text>
              <Group gap={8} lh="1.12" c="primary-gray.4">
                <Text fz={12} fw={500} fs="italic">
                  {experience.startDate}
                </Text>
                <Text>-</Text>
                <Text fz={12} fw={500} fs="italic">
                  {experience.endDate}
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </Box>
    </Box>
  );
};

export default Experiences;
