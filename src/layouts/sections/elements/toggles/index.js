// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Toggles page components
import Toggle from "layouts/sections/elements/toggles/components/Toggle";
import ToggleContext from "layouts/sections/elements/toggles/components/ToggleContext";

// Toggles page components code
import toggleCode from "layouts/sections/elements/toggles/components/Toggle/code";
import toggleContextCode from "layouts/sections/elements/toggles/components/ToggleContext/code";

function Toggles() {
  return (
    <BaseLayout
      title="Toggles"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/toggles" },
        { label: "Toggles" },
      ]}
    >
      <View title="Toggle" code={toggleCode}>
        <Toggle />
      </View>
      <View title="Toggle context" code={toggleContextCode}>
        <ToggleContext />
      </View>
    </BaseLayout>
  );
}

export default Toggles;
