import { Button, Group, Image, Space, Stack, Text } from "@mantine/core";
import { HeaderEnum } from "./utils";
import SectionTitle from "./SectionTitle";
import { ProjectInterface } from "@/types";
import { Fragment } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import GradientBorderBox from "./GradientBorderBox";
import buttonStyle from "../styles/button.module.css";

const projects: ProjectInterface[] = [
  {
    title: "Smart Task Manager",
    description:
      "Created this website from scratch using TypeScript with Chakra-UI for components and NextJS for Frontend and NodeJS and Express JS for backend. This used to create task and through this user can maintain task using Chart in Dashboard. Used netlify to deploy website frontend & backend of this website.",
    tools: [
      "Chakra-UI",
      "NextJS",
      "TypeScript",
      "NodeJS",
      "ExpressJS",
      "JWT",
      "Chart JS",
      "Netlify",
    ],
    organization: "My Self",
    link: "https://smart-tasks-manager.netlify.app/",
    image: "/images/task-manager.webp",
  },
  {
    title: "Grow",
    highlight: "100,000+ Users",
    description:
      "Created the LMS platform from scratch using TypeScript with Chakra-UI for components and NextJS for features like SSR, dynamic routing, NextImage, NextLink, and code-splitting. Improved performance metrics such as Largest Contentful Paint (LCP), First Contentful Paint (FCP) and initial page load times. Implemented analytics to track website and user activity.",
    tools: ["Chakra-UI", "Mantine-UI", "NextJS", "TypeScript", "PostHog"],
    organization: "Cybermind works",
    link: "https://grow.skill-lync.com/",
    image: "/images/grow.webp",
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
    image: "/images/crm.webp",
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
    image: "/images/farmyng.webp",
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
    image: "/images/unitecol.webp",
  },
  {
    title: "Stir Casting Machine HMI",
    description:
      "Create mobile applications that lets users control and monitor their Stir Casting Machine. Users can connect to the machine through an app which uses WIFI and Bluetooth for connection. For data safety, data is encrypted while sending and receiving data. Recorded machine data is exported in excel file and stored into the device storage.",
    organization: "SwamEquip",
    tools: ["Flutter widgets", "Socket Connection"],
    image: "/images/sch_hmi.webp",
  },
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 }, // Start from bottom and transparent
  animate: { opacity: 1, y: 0 }, // End at normal position and fully opaque
};

const Projects = () => {
  return (
    <Stack gap={30} id={HeaderEnum.project}>
      <SectionTitle title="Projects" />
      <Space h={0} />
      {projects.map((project, index) => {
        return (
          <motion.div
            key={index}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{
              once: true,
            }}
            style={{
              position: "relative",
            }}
          >
            <Fragment key={index}>
              <ProjectCard project={project} />
            </Fragment>
          </motion.div>
        );
      })}
    </Stack>
  );
};

const ProjectCard = ({ project }: { project: ProjectInterface }) => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  return (
    <GradientBorderBox>
      <Group wrap="nowrap" p={20} align="center">
        <Image
          src={project.image}
          alt={project.title}
          style={{
            aspectRatio: 16 / 9,
            borderRadius: 8,
            maxWidth: 350,
            display: isTablet ? "none" : "block",
          }}
        />
        <Stack>
          <Image
            src={project.image}
            alt={project.title}
            style={{
              borderRadius: 8,
              maxWidth: 350,
              display: isTablet ? "flex" : "none",
            }}
          />
          <Text fz={{ base: 16, sm: 24 }} fw={500} lh="1.25" c="primary-gray.1">
            {project.title}{" "}
            {project.highlight && (
              <Text span fz={14} c="primary-gray.3" fs="italic">
                ( {project.highlight} )
              </Text>
            )}
          </Text>
          <Text fz={{ base: 12, sm: 16 }} lh="1.4" c="primary-gray.2">
            {project.description}
          </Text>
          <TitleWithText title="Organization" text={project.organization} />
          <TitleWithText title="Tools" text={project.tools.join(", ")} />
          <Button
            className={buttonStyle.gradientButton}
            component={project.link ? "a" : "button"}
            href={project.link}
            disabled={!project.link}
            target="_blank"
            w={{ base: "100%", sm: "fit-content" }}
            px={30}
            py={0}
          >
            {project.link ? "View my work" : "Link not available"}
          </Button>
        </Stack>
      </Group>
    </GradientBorderBox>
  );
};

const TitleWithText = ({ title, text }: { title: string; text: string }) => {
  return (
    <Text fz={{ base: 12, sm: 16 }} fs="italic" c="primary-gray.3">
      <Text span fw={500} fs="normal" c="primary-gray.1">
        {title}:{" "}
      </Text>{" "}
      {text}
    </Text>
  );
};

export default Projects;
