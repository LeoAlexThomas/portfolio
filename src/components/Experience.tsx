import { Grid, Group, Space, Stack, Text } from "@mantine/core";
import SectionTitle from "./SectionTitle";
import { HeaderEnum } from "./utils";
import { ExperienceInterface } from "@/types";
import { Fragment } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import GradientBorderBox from "@/components/GradientBorderBox";

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
    link: "https://www.cybermindworks.com/",
  },
  {
    company: "SwamEquip",
    companyImage: "/images/swamEquip.webp",
    position: "Mobile Application Developer",
    description:
      "Create mobile applications that lets users control and monitor their Casting Machine by using wifi / bluetooth connection.",
    startDate: "16 JANUARY 2021",
    endDate: "30 SEPTEMBER 2021",
    exp: "9 months",
    link: "http://www.swamequip.in/",
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
      <Space h={0} display={{ base: "none", sm: "flex" }} />
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
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <a href={experience.link} target="_blank">
      <GradientBorderBox>
        <Grid>
          <Grid.Col span="content" display={{ base: "none", sm: "flex" }}>
            <Image
              src={experience.companyImage}
              alt={experience.company}
              width={200}
              height={200}
              priority
              style={{
                margin: "16px",
                borderRadius: 12,
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
                margin: "16px",
                display: isTablet ? "flex" : "none",
                borderRadius: 12,
              }}
            />
            <Stack gap={8} py={{ base: 12, sm: 20 }} px={{ base: 12, sm: 8 }}>
              <Text
                ff="Noto Serif"
                fz={{ base: 20, sm: 24 }}
                fw={700}
                lh="1.25"
                c="primary-gray.9"
                lineClamp={2}
              >
                {experience.company}{" "}
                <Text
                  span
                  ff="Roboto"
                  fz={14}
                  c="primary-gray.6"
                  fs="italic"
                  style={{
                    whiteSpace: "nowrap",
                  }}
                >
                  ( {experience.exp} )
                </Text>
              </Text>
              <Text
                fz={{ base: 16, sm: 20 }}
                fw={400}
                lh="1.25"
                c="primary-gray.6"
              >
                <Text span ff="Noto Serif" fw={800} c="primary-gray.8">
                  Job Description:
                </Text>{" "}
                {experience.description}
              </Text>
              <Text
                fz={{ base: 16, sm: 20 }}
                fw={500}
                lh="1.25"
                c="primary-gray.8"
              >
                {experience.position}
              </Text>
              <Group gap={8} lh="1.12" c="primary-gray.8">
                <Text fz={14} fw={500} fs="italic">
                  {experience.startDate}
                </Text>
                <Text>-</Text>
                <Text fz={14} fw={500} fs="italic">
                  {experience.endDate}
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>
      </GradientBorderBox>
    </a>
  );
};

export default Experiences;
