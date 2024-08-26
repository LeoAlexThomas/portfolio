import { Text } from "@mantine/core";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Text fz={{ base: 20, sm: 36 }} fw={500} lh="1.25" ta="center">
      {title}
    </Text>
  );
};

export default SectionTitle;
