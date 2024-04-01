const baseStyle = {
  color: "gray.900_01",
  fontFamily: "Inter",
};
const sizes = {
  s: {
    fontSize: '{"md":"38px","base":"34px","sm":"36px"}',
    fontWeight: 600,
  },
  md: {
    fontSize: '{"md":"39px","base":"35px","sm":"37px"}',
    fontWeight: 600,
  },
  xs: {
    fontSize: '{"md":"24px","base":"24px","sm":"22px"}',
    fontWeight: 600,
  },
  lg: {
    fontSize: '{"md":"54px","base":"40px","sm":"46px"}',
    fontWeight: 700,
  },
};
const defaultProps = {
  size: "md",
};

const Heading = {
  baseStyle,
  sizes,
  defaultProps,
};
export default Heading;
