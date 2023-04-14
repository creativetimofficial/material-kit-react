/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";

// ALerts page components
import SimpleAlerts from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts";

// ALerts page components code
import simpleAlertsCode from "layouts/sections/attention-catchers/alerts/components/SimpleAlerts/code";

function Alerts() {
  return (
    <BaseLayout
      title="Alerts"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/attention-catchers/alerts" },
        { label: "Alerts" },
      ]}
    >
      <View title="Simple alerts" code={simpleAlertsCode}>
        <SimpleAlerts />
      </View>
    </BaseLayout>
  );
}

export default Alerts;
