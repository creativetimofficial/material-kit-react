// @mui material components
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default styled(Button)(({ theme, ownerState }) => {
  const { palette, functions } = theme;
  const { color, size, iconOnly, circular } = ownerState;

  const { white, socialMediaColors } = palette;
  const { pxToRem } = functions;

  // backgroundColor value
  const backgroundColorValue = socialMediaColors[color]
    ? socialMediaColors[color].main
    : socialMediaColors.facebook.main;

  const focusedBackgroundColorValue = socialMediaColors[color]
    ? socialMediaColors[color].dark
    : socialMediaColors.facebook.dark;

  // styles for the button with circular={true}
  const circularStyles = () => ({
    borderRadius: "50%",
  });

  // styles for the button with iconOnly={true}
  const iconOnlyStyles = () => {
    // width, height, minWidth and minHeight values
    let sizeValue = pxToRem(38);

    if (size === "small") {
      sizeValue = pxToRem(25.4);
    } else if (size === "large") {
      sizeValue = pxToRem(52);
    }

    // padding value
    let paddingValue = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;

    if (size === "small") {
      paddingValue = pxToRem(4.5);
    } else if (size === "large") {
      paddingValue = pxToRem(16);
    }

    return {
      width: sizeValue,
      minWidth: sizeValue,
      height: sizeValue,
      minHeight: sizeValue,
      padding: paddingValue,
    };
  };

  return {
    backgroundColor: backgroundColorValue,
    color: white.main,
    boxShadow: "none",

    "&:hover": {
      backgroundColor: focusedBackgroundColorValue,
      boxShadow: "none",
    },

    "&:focus:not(:hover)": {
      backgroundColor: socialMediaColors[color]
        ? socialMediaColors[color].dark
        : socialMediaColors.facebook.dark,
      boxShadow: "none",
    },

    "&:disabled": {
      backgroundColor: backgroundColorValue,
      color: white.main,
    },

    ...(circular && circularStyles()),
    ...(iconOnly && iconOnlyStyles()),
  };
});
