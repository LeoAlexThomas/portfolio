import { Box } from "@mantine/core";
import { useHover } from "@mantine/hooks";

const GradientBorderBox = ({ children }: { children: React.ReactNode }) => {
  const { hovered: isHovered, ref: hoverRef } = useHover();
  return (
    <Box
      ref={hoverRef}
      style={{
        boxShadow: isHovered
          ? "0px 0px 12px var(--mantine-color-primary-gray-4)"
          : "none",
        borderRadius: 14,
        backgroundImage: "linear-gradient(140deg, #afafaf, white, #afafaf)",
      }}
      p={1}
    >
      <Box
        style={{
          borderRadius: 12,
          border: "1px solid var(--mantine-color-primary-gray-3)",
          backgroundImage: "linear-gradient(220deg, #ffffff, #afafaf)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default GradientBorderBox;
