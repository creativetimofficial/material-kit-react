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

// Forms page components
import FormSimple from "layouts/sections/input-areas/forms/components/FormSimple";

// Forms page components code
import formSimpleCode from "layouts/sections/input-areas/forms/components/FormSimple/code";

function Forms() {
  return (
    <BaseLayout
      title="Forms"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/input-areas/forms" },
        { label: "Forms" },
      ]}
    >
      <View title="Form Simple" code={formSimpleCode}>
        <FormSimple />
      </View>
    </BaseLayout>
  );
}

export default Forms;
