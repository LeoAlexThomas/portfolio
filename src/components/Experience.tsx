import { Box, Grid, Group, Image, Stack, Text } from "@mantine/core";
import SectionTitle from "./SectionTitle";
import { HeaderEnum } from "./utils";
import { ExperienceInterface } from "@/types";
import { Fragment } from "react";
import { useHover } from "@mantine/hooks";

const experiences: ExperienceInterface[] = [
  {
    company: "Cybermind works",
    companyImage: "/images/company_1.webp",
    position: "Frontend Developer",
    description:
      "Led a team of two to create web and mobile applications from scratch and take it to production. Successfully shipped products like Learning Platform[LMS], Customer relationship management [CRM], Testing Platform, Social Media Applications.",
    startDate: "04 OCT 2021",
    endDate: "20 AUG 2024",
    exp: "2 years & 11 months",
  },
  {
    company: "SwamEquip",
    companyImage: "/images/company_2.webp",
    position: "Mobile Application Developer",
    description:
      "Create mobile applications that lets users control and monitor their Stir Casting Machine.",
    startDate: "16 JAN 2021",
    endDate: "30 SEP 2024",
    exp: "9 months",
  },
];

const Experiences = () => {
  return (
    <Stack gap={30} id={HeaderEnum.experience}>
      <SectionTitle title="Experiences" />
      {experiences.map((exp, index) => (
        <Fragment key={index}>
          <ExperienceCard experience={exp} />
        </Fragment>
      ))}
    </Stack>
  );
};

const ExperienceCard = ({
  experience,
}: {
  experience: ExperienceInterface;
}) => {
  const { hovered: isHovered, ref: hoverRef } = useHover();

  return (
    <Box
      ref={hoverRef}
      style={{
        boxShadow: isHovered ? "0px 0px 12px #00000020" : "none",
        borderRadius: 12,
        border: "1px solid var(--mantine-color-primary-gray-3)",
      }}
    >
      <Grid>
        <Grid.Col span="content" display={{ base: "none", sm: "flex" }}>
          <Image
            src={experience.companyImage}
            alt={experience.company}
            maw={300}
            style={{
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
            }}
          />
        </Grid.Col>
        <Grid.Col span="auto">
          <Image
            src={experience.companyImage}
            alt={experience.company}
            mah={{ base: 150, xs: 250 }}
            display={{ base: "flex", sm: "none" }}
            style={{
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
            <Text fz={{ base: 12, sm: 16 }} lh="1.25" c="primary-gray.3">
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
  );
};

export default Experiences;
