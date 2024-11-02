import { Box } from "@mantine/core";
import { useHover } from "@mantine/hooks";

const GradientBorderBox = ({ children }: { children: React.ReactNode }) => {
  const { hovered: isHovered, ref: hoverRef } = useHover();
  return (
    <Box
      ref={hoverRef}
      style={{
        boxShadow: isHovered
          ? "0px 0px 10px var(--mantine-color-primary-blue-2)"
          : "0px 0px 4px var(--mantine-color-primary-blue-2)",
        borderRadius: 14,
        backgroundImage:
          "linear-gradient(40deg, var(--mantine-color-primary-blue-2), var(--mantine-color-primary-blue-9), var(--mantine-color-primary-blue-2))",
      }}
      p={1}
    >
      <Box
        style={{
          borderRadius: 12,
          background: "white",
        }}
        p={4}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GradientBorderBox;
