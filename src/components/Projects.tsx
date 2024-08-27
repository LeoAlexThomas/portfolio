import { Box, Button, Stack, Text } from "@mantine/core";
import { HeaderEnum } from "./utils";
import SectionTitle from "./SectionTitle";
import { ProjectInterface } from "@/types";
import { Fragment } from "react";
import { useHover } from "@mantine/hooks";

const projects: ProjectInterface[] = [
  {
    title: "Grow",
    highlight: "100,000+ Users",
    description:
      "Created the LMS platform from scratch using TypeScript with Chakra-UI for components and NextJS for features like SSR, dynamic routing, NextImage, NextLink, and code-splitting. Improved performance metrics such as Largest Contentful Paint (LCP), First Contentful Paint (FCP) and initial page load times. Implemented analytics to track website and user activity.",
    tools: ["Chakra-UI", "Mantine-UI", "NextJS", "TypeScript", "PostHog"],
    organization: "Cybermind works",
    link: "https://grow.skill-lync.com/",
  },
  {
    title: "Sales CRM",
    highlight: "5Million+ leads",
    description:
      "Built a CRM platform from scratch to show leads based on lead priority and manage events using React-Big-Calendar. Advanced graphs to show reports using Chart-JS. Deployed the website using AWS S3 Bucket and AWS CloudFront (CDN) for enhanced performance.",
    organization: "Cybermind works",
    tools: [
      "Chakra-UI",
      "NextJS",
      "TypeScript",
      "Chart-JS",
      "React-Big-Calendar",
    ],
    link: "https://www.cybermindworks.com/portfolio/crm/",
  },
  {
    title: "Farmyng Club",
    highlight: "10000+ Downloads",
    description:
      "Developed a Flutter mobile application connecting farmers, industries, agents, and the public, achieving a 4.1 rating on the Google Play Store. Added multi-language support, user profile management, news feeds, WhatsApp share functionality, and combined image, video, and text feeds. Integrated Firebase analytics and crash reporting.",
    organization: "Cybermind works",
    tools: [
      "Flutter widgets",
      "Flutter hooks",
      "Flutter riverpods",
      "Flutter firebase",
      "Dynamic link",
    ],
    link: "https://play.google.com/store/apps/details?id=club.farmyng.socialfarming.agriculture.community&pcampaignid=web_share",
  },
  {
    title: "Unitecol",
    description:
      "Created a Flutter mobile application similar to Instagram, LinkedIn, and Facebook. Implemented features such as video playback, chat, custom notifications, user profile management, image cropping, image preview, and social sign-ins (Google, Facebook, LinkedIn) and OTP verification.",
    organization: "Cybermind works",
    tools: [
      "Flutter widgets",
      "Flutter hooks",
      "Flutter riverpods",
      "Flutter firebase",
      "Dynamic link",
      "OAuth",
      "Socket Connection",
      "Flutter Local Notification [Custom notification style]",
    ],
  },
  {
    title: "Stir Casting Machine HMI",
    description:
      "Create mobile applications that lets users control and monitor their Stir Casting Machine. Users can connect to the machine through an app which uses WIFI and Bluetooth for connection. For data safety, data is encrypted while sending and receiving data. Recorded machine data is exported in excel file and stored into the device storage.",
    organization: "SwamEquip",
    tools: ["Flutter widgets", "Socket Connection"],
  },
];

const Projects = () => {
  return (
    <Stack gap={30} id={HeaderEnum.project}>
      <SectionTitle title="Projects" />
      {projects.map((project, index) => {
        return (
          <Fragment key={index}>
            <ProjectCard project={project} />
          </Fragment>
        );
      })}
    </Stack>
  );
};

const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  const { hovered: isHovered, ref: hoverRef } = useHover();
  return (
    <Box
      ref={hoverRef}
      style={{
        boxShadow: isHovered
          ? "0px 0px 12px var(--mantine-color-primary-blue-2)"
          : "none",
        borderRadius: 12,
        backgroundImage:
          "linear-gradient(0, var(--mantine-color-primary-blue-7), var(--mantine-color-primary-blue-3))",
      }}
      p={1}
    >
      <Stack
        bg="white"
        style={{
          borderRadius: 12,
        }}
        p={20}
      >
        <Text fz={{ base: 16, sm: 24 }} fw={500} lh="1.25">
          {project.title}{" "}
          {project.highlight && (
            <Text span fz={14} c="primary-gray.5" fs="italic">
              ( {project.highlight} )
            </Text>
          )}
        </Text>
        <Text fz={{ base: 12, sm: 16 }} lh="1.4" c="primary-gray.4">
          {project.description}
        </Text>
        <TitleWithText title="Organization" text={project.organization} />
        <TitleWithText title="Tools" text={project.tools.join(", ")} />
        <Button
          component="a"
          href={project.link}
          disabled={!project.link}
          radius={12}
          target="_blank"
          w={{ base: "100%", sm: "fit-content" }}
        >
          {project.link ? "View my work" : "Link not available"}
        </Button>
      </Stack>
    </Box>
  );
};

const TitleWithText = ({ title, text }: { title: string; text: string }) => {
  return (
    <Text fz={{ base: 12, sm: 16 }} fs="italic" c="primary-gray.5">
      <Text span fw={500} fs="normal" c="black">
        {title}:{" "}
      </Text>{" "}
      {text}
    </Text>
  );
};

export default Projects;
