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
          : "none",
        borderRadius: 14,
        backgroundImage:
          "linear-gradient(40deg, var(--mantine-color-primary-blue-3), var(--mantine-color-primary-blue-8), var(--mantine-color-primary-blue-3))",
      }}
      p={2}
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
