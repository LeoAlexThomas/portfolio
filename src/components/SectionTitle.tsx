import { Text } from "@mantine/core";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Text
      fz={{ base: 20, sm: 44 }}
      fw={500}
      lh="1.25"
      ta="center"
      c="primary-gray.1"
    >
      {title}
    </Text>
  );
};

export default SectionTitle;
