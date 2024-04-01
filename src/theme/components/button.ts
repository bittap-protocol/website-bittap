import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({ borderRadius: "0px", outlineOffset: "0", cursor: "pointer" });

const sizes = {
  xs: defineStyle({
    h: "47px",
    fontSize: "13px",
    px: "35px",
  }),
};

const variants = {
  fill: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      gray_900_01: {
        bg: "gray.900_01",
        color: "white.A700",
      },
      blue_900: {
        bg: "blue.900",
        color: "white.A700_01",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["gray_900_01"];
  }),
  outline: defineStyle((props) => {
    const { colorScheme } = props;
    const colorCombinations = {
      black_900: {
        borderColor: "black.900",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "gray.900_01",
      },
    };
    return colorCombinations[colorScheme as keyof typeof colorCombinations] || colorCombinations["black_900"];
  }),
};

const Button = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "fill",
    size: "xs",
  },
});
export default Button;
