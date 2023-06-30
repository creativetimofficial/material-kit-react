// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import Breadcrumbs from "examples/Breadcrumbs";

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Breadcrumbs page components code
import breadcrumbsCode from "layouts/sections/elements/breadcrumbs/code";

function BreadcrumbsEl() {
  return (
    <BaseLayout
      title="Breadcrumbs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/breadcrumbs" },
        { label: "Breadcrumbs" },
      ]}
    >
      <View title="Breadcrumbs" code={breadcrumbsCode}>
        <MKBox component="section" bgColor="white" py={8}>
          <Container>
            <Grid container spacing={2} item xs={12} lg={10} mx="auto">
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[{ label: "Home", route: "/sections/elements/breadcrumbs" }]}
                />
              </Grid>
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: "Home", route: "/sections/elements/breadcrumbs" },
                    { label: "Library" },
                  ]}
                />
              </Grid>
              <Grid item xs={12}>
                <Breadcrumbs
                  routes={[
                    { label: "Home", route: "/sections/elements/breadcrumbs" },
                    { label: "Library", route: "/sections/elements/breadcrumbs" },
                    { label: "Data" },
                  ]}
                />
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </View>
    </BaseLayout>
  );
}

export default BreadcrumbsEl;
