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

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// Inputs page components
import InputDynamic from "layouts/sections/input-areas/inputs/components/InputDynamic";
import InputStatic from "layouts/sections/input-areas/inputs/components/InputStatic";
import InputOutlined from "layouts/sections/input-areas/inputs/components/InputOutlined";
import InputIcon from "layouts/sections/input-areas/inputs/components/InputIcon";
import InputSuccess from "layouts/sections/input-areas/inputs/components/InputSuccess";
import InputError from "layouts/sections/input-areas/inputs/components/InputError";
import InputDisabled from "layouts/sections/input-areas/inputs/components/InputDisabled";

// Inputs page components code
import inputDynamicCode from "layouts/sections/input-areas/inputs/components/InputDynamic/code";
import inputStaticCode from "layouts/sections/input-areas/inputs/components/InputStatic/code";
import inputOutlinedCode from "layouts/sections/input-areas/inputs/components/InputOutlined/code";
import inputIconCode from "layouts/sections/input-areas/inputs/components/InputIcon/code";
import inputSuccessCode from "layouts/sections/input-areas/inputs/components/InputSuccess/code";
import inputErrorCode from "layouts/sections/input-areas/inputs/components/InputError/code";
import inputDisabledCode from "layouts/sections/input-areas/inputs/components/InputDisabled/code";

function Inputs() {
  return (
    <BaseLayout
      title="Inputs"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/inputs" },
        { label: "Inputs" },
      ]}
    >
      <View title="Input dynamic" code={inputDynamicCode}>
        <InputDynamic />
      </View>
      <View title="Input static" code={inputStaticCode}>
        <InputStatic />
      </View>
      <View title="Input outlined" code={inputOutlinedCode}>
        <InputOutlined />
      </View>
      <View title="Input icon" code={inputIconCode}>
        <InputIcon />
      </View>
      <View title="Input success" code={inputSuccessCode}>
        <InputSuccess />
      </View>
      <View title="Input error" code={inputErrorCode}>
        <InputError />
      </View>
      <View title="Input disabled" code={inputDisabledCode}>
        <InputDisabled />
      </View>
    </BaseLayout>
  );
}

export default Inputs;
