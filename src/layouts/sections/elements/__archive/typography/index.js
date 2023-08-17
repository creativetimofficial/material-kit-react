// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Typography page components
import TypographyComponent from "layouts/sections/elements/typography/components/TypographyRoboto";

// Typography page components code
import typography from "layouts/sections/elements/typography/components/TypographyRoboto/code";

function Typography() {
  return (
    <BaseLayout
      title="Typography"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Typography" },
        { label: "Typography" },
      ]}
    >
      <View title="Typography - Font Family Roboto" code={typography}>
        <TypographyComponent />
      </View>
    </BaseLayout>
  );
}

export default Typography;
