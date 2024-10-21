import { SkillInterface } from "@/types";
import { Stack, Grid, Image, Space } from "@mantine/core";
import { HeaderEnum } from "./utils";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";

const skills: SkillInterface[] = [
  {
    label: "React JS",
    url: "/images/react_logo.webp",
  },
  {
    label: "TypeScript",
    url: "/images/typeScript.webp",
  },
  {
    label: "JavaScript",
    url: "/images/javascript_logo.webp",
  },
  {
    label: "Flutter",
    url: "/images/flutter.webp",
  },
  {
    label: "GitHub",
    url: "/images/github_logo.webp",
  },
  {
    label: "Git",
    url: "/images/git_logo.webp",
  },
  {
    label: "CSS3",
    url: "/images/css_logo.webp",
  },
  {
    label: "HTML5",
    url: "/images/html_logo.webp",
  },
  {
    label: "NodeJS",
    url: "/images/nodejs_logo.webp",
  },
];

const fadeInScaleAnimation = {
  initial: {
    opacity: 0,
    scale: 0.2,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const SkillContent = () => {
  return (
    <Stack gap={30} id={HeaderEnum.skills}>
      <SectionTitle title="Skills" />
      <Space h={0} display={{ base: "none", sm: "flex" }} />
      <Grid gutter="md" justify="space-evenly">
        {skills.map((skill, index) => (
          <Grid.Col key={index} span="content">
            <motion.div
              variants={fadeInScaleAnimation}
              initial="initial"
              whileInView="animate"
              transition={{
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              style={{
                position: "relative",
              }}
            >
              <Stack align="center">
                <Image
                  src={skill.url}
                  alt=""
                  h="100%"
                  fit="contain"
                  mih={50}
                  mah={50}
                />
                {/* <Text fz={{ base: 12, sm: 18 }} lh="1.25">
                  {skill.label}
                </Text> */}
              </Stack>
            </motion.div>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};

export default SkillContent;
