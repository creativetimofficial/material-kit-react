// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Typography page components
import TypographyComponent from "layouts/sections/elements/typography/components/TypographyComponent";

// Typography page components code
import typography from "layouts/sections/elements/typography/components/TypographyComponent/code";

function Typography() {
  return (
    <BaseLayout
      title="Typography"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Typography" },
        { label: "Typography" },
      ]}
    >
      <View title="Typography - Font Family" code={typography}>
        <TypographyComponent />
      </View>
    </BaseLayout>
  );
}

export default Typography;
