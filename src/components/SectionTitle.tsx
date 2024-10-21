import { Text } from "@mantine/core";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Text
      fz={{ base: 20, sm: 44 }}
      fw={700}
      lh="1.25"
      ta="center"
      c="primary-gray.8"
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
