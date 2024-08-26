import { SkillInterface } from "@/types";
import { Stack, Text, Grid, Image } from "@mantine/core";
import { HeaderEnum } from "./utils";

const skills: SkillInterface[] = [
  {
    label: "React JS",
    url: "/images/react_logo.png",
  },
  {
    label: "TypeScript",
    url: "/images/typescript_logo.png",
  },
  {
    label: "JavaScript",
    url: "/images/javascript_logo.png",
  },
  {
    label: "Flutter",
    url: "/images/flutter_logo.png",
  },
  {
    label: "GitHub",
    url: "/images/github_logo.png",
  },
  {
    label: "Git",
    url: "/images/git_logo.png",
  },
  {
    label: "CSS3",
    url: "/images/css_logo.png",
  },
  {
    label: "HTML5",
    url: "/images/html_logo.png",
  },
];

const SkillContent = () => {
  return (
    <Stack gap={30} id={HeaderEnum.skills}>
      <Text fz={{ base: 20, sm: 36 }} fw={500} lh="1.25" ta="center">
        Skills
      </Text>
      <Grid gutter="md" justify="space-evenly">
        {skills.map((skill) => (
          <Grid.Col span="content">
            <Stack align="center">
              <Image src={skill.url} alt="" w={48} h={48} fit="contain" />
              <Text fz={{ base: 12, sm: 18 }} lh="1.25">
                {skill.label}
              </Text>
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};

export default SkillContent;
