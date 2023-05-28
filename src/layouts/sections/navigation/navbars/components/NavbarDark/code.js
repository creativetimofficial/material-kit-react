import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";

const navbarDarkCode = () => {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",

          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
};

export default navbarDarkCode;
