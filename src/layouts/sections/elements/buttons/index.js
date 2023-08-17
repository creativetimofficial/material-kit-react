// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Buttons page components
import ButtonsGradient from "layouts/sections/elements/buttons/components/ButtonsGradient";
import ButtonsContained from "layouts/sections/elements/buttons/components/ButtonsContained";
import ButtonsOutlined from "layouts/sections/elements/buttons/components/ButtonsOutlined";
import ButtonsSizes from "layouts/sections/elements/buttons/components/ButtonsSizes";
import ButtonsIconLeft from "layouts/sections/elements/buttons/components/ButtonsIconLeft";
import ButtonsIconRight from "layouts/sections/elements/buttons/components/ButtonsIconRight";

// Buttons page components code
import buttonsGradientCode from "layouts/sections/elements/buttons/components/ButtonsGradient/code";
import buttonsContainedCode from "layouts/sections/elements/buttons/components/ButtonsContained/code";
import buttonsOutlinedCode from "layouts/sections/elements/buttons/components/ButtonsOutlined/code";
import buttonsSizesCode from "layouts/sections/elements/buttons/components/ButtonsSizes/code";
import buttonsIconLeftCode from "layouts/sections/elements/buttons/components/ButtonsIconLeft/code";
import buttonsIconRightCode from "layouts/sections/elements/buttons/components/ButtonsIconRight/code";

function Buttons() {
  return (
    <BaseLayout
      title="Buttons"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/buttons" },
        { label: "Buttons" },
      ]}
    >
      <View title="Buttons gradient" code={buttonsGradientCode}>
        <ButtonsGradient />
      </View>
      <View title="Buttons contained" code={buttonsContainedCode}>
        <ButtonsContained />
      </View>
      <View title="Buttons outlined" code={buttonsOutlinedCode}>
        <ButtonsOutlined />
      </View>
      <View title="Buttons sizes" code={buttonsSizesCode}>
        <ButtonsSizes />
      </View>
      <View title="Buttons icon left" code={buttonsIconLeftCode}>
        <ButtonsIconLeft />
      </View>
      <View title="Buttons icon right" code={buttonsIconRightCode}>
        <ButtonsIconRight />
      </View>
    </BaseLayout>
  );
}

export default Buttons;
