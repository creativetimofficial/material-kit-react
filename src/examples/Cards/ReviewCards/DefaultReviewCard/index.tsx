/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { StarOutline, Star, StarHalf, Schedule } from "@mui/icons-material";

// Material Kit 2 React components
import { MKBox, MKAvatar, MKTypography } from "../../../../components";

import React from "react";

function DefaultReviewCard({
  color,
  image,
  name,
  date,
  review,
  rating,
}: DefaultReviewCardProps): JSX.Element {
  const ratings = {
    0.5: [
      <StarOutline key={1} />,
      <StarOutline key={2} />,
      <StarOutline key={3} />,
      <StarOutline key={4} />,
      <StarOutline key={5} />,
    ],
    1: [
      <Star key={1} />,
      <StarOutline key={2} />,
      <StarOutline key={3} />,
      <StarOutline key={4} />,
      <StarOutline key={5} />,
    ],
    1.5: [
      <Star key={1} />,
      <StarHalf key={2} />,
      <StarOutline key={3} />,
      <StarOutline key={4} />,
      <StarOutline key={5} />,
    ],
    2: [
      <Star key={1} />,
      <Star key={2} />,
      <StarOutline key={3} />,
      <StarOutline key={4} />,
      <StarOutline key={5} />,
    ],
    2.5: [
      <Star key={1} />,
      <Star key={2} />,
      <StarHalf key={3} />,
      <StarOutline key={4} />,
      <StarOutline key={5} />,
    ],
    3: [
      <Star key={1} />,
      <Star key={2} />,
      <Star key={3} />,
      <StarOutline key={4} />,
      <StarOutline key={5} />,
    ],
    3.5: [
      <Star key={1} />,
      <Star key={2} />,
      <Star key={3} />,
      <StarHalf key={4} />,
      <StarOutline key={5} />,
    ],
    4: [
      <Star key={1} />,
      <Star key={2} />,
      <Star key={3} />,
      <Star key={4} />,
      <StarOutline key={5} />,
    ],
    4.5: [
      <Star key={1} />,
      <Star key={2} />,
      <Star key={3} />,
      <Star key={4} />,
      <StarHalf key={5} />,
    ],
    5: [<Star key={1} />, <Star key={2} />, <Star key={3} />, <Star key={4} />, <Star key={5} />],
  };

  return (
    <MKBox
      variant={color === "transparent" ? "contained" : "gradient"}
      bgColor={color}
      borderRadius="xl"
      shadow={color === "transparent" ? undefined : "md"}
      p={3}
    >
      {image && (
        <MKAvatar
          src={image}
          alt={name}
          variant="rounded"
          size="lg"
          shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}

      <MKBox lineHeight={1}>
        <MKTypography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={color === "transparent" || color === "light" ? "dark" : "white"}
          mb={0.5}
        >
          {name}
        </MKTypography>
        <MKTypography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          color={color === "transparent" || color === "light" ? "text" : "white"}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Schedule />
          &nbsp;
          {date}
        </MKTypography>
      </MKBox>
      <MKTypography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </MKTypography>
      <MKTypography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,
          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        {ratings[rating]}
      </MKTypography>
    </MKBox>
  );
}

// Setting default values for the props of DefaultReviewCard
DefaultReviewCard.defaultProps = {
  color: "transparent",
  image: "",
};

// Typechecking props for the DefaultReviewCard
interface DefaultReviewCardProps {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "transparent";
  image?: string;
  name: string;
  date: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export default DefaultReviewCard;
