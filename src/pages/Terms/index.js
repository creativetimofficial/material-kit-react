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

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function Terms() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/app-store-url",
          label: "free download",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <MKTypography
            variant="h1"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Terms & Conditions
          </MKTypography>
          <MKTypography mt={1} mb={3}>
            By downloading or using the app, these terms will automatically apply to you - you
            should make sure therefore that you read them carefully before using the app. you are
            not allowed to copy, or modify the app, any part of the app, or our trademarks in any
            way. you are not allowed to attempt to extract the source code of the app, and you also
            shouldnt try to translate the app into other languages, or make derivative versions. The
            app itself, and all the trade marks, copyright, database rights and other intellectual
            property rights related to it, still belong to COGNOTECH OÜ. COGNOTECH OÜ is committed
            to ensuring that the app is as useful and efficient as possible. For that reason, we
            reserve the right to make changes to the app or to charge for its services, at any time
            and for any reason. We will never charge you for the app or its services without making
            it very clear to you exactly what you are paying for. The GetFitter app stores and
            processes personal data that you have provided to us, in order to provide my Service.
            Its your responsibility to keep your phone and access to the app secure. We therefore
            recommend that you do not jailbreak or root your phone, which is the process of removing
            software restrictions and limitations imposed by the official operating system of your
            device. It could make your phone vulnerable to malware/viruses/malicious programs,
            compromise your phones security features and it could mean that the GetFitter app wont
            work properly or at all. The app does use third party services that declare their own
            Terms and Conditions. Link to Terms and Conditions of third party service providers used
            by the app
          </MKTypography>
          <MKTypography p align="justify">
            <MKTypography p>
              {"\u2022"} Google Play Services{"\n"}
            </MKTypography>
            <MKTypography p>
              {"\u2022"} Google Analytics for Firebase{"\n"}
            </MKTypography>
            <MKTypography p>
              {"\u2022"} Firebase{"\n"}
            </MKTypography>
            <MKTypography p>
              {"\u2022"} Amazon Web Services{"\n"}
            </MKTypography>
          </MKTypography>
          <MKTypography mt={1} mb={3}>
            Medical Disclaimer: You are responsible for your own health. GetFitter is offered for
            educational and entertainment purposes only, and in no way intends to diagnose, cure, or
            treat any medical or other condition. Always seek the advice of your physician or other
            qualified health provider prior to changing your diet or exercise plan and ask your
            physician any questions you may have regarding a medical condition. Although we do out
            absolute best to verify the accuracy of information contained herein, we cannot
            guarantee its accuracy. You should be aware that there are certain things that COGNOTECH
            OÜ will not take responsibility for. Certain functions of the app will require the app
            to have an active internet connection. The connection can be Wi-Fi, or provided by your
            mobile network provider, but COGNOTECH OÜ cannot take responsibility for the app not
            working at full functionality if you dont have access to Wi-Fi, and you dont have any of
            your data allowance left. If you are using the app outside of an area with Wi-Fi, you
            should remember that your terms of the agreement with your mobile network provider will
            still apply. As a result, you may be charged by your mobile provider for the cost of
            data for the duration of the connection while accessing the app, or other third party
            charges. In using the app, you are accepting responsibility for any such charges,
            including roaming data charges if you use the app outside of your home territory (i.e.
            region or country) without turning off data roaming. If you are not the bill payer for
            the device on which you are using the app, please be aware that we assume that you have
            received permission from the bill payer for using the app. Along the same lines,
            COGNOTECH OÜ cannot always take responsibility for the way you use the app i.e. You need
            to make sure that your device stays charged - if it runs out of battery and you cant
            turn it on to avail the Service, COGNOTECH OÜ cannot accept responsibility. With respect
            to COGNOTECH OÜs responsibility for your use of the app, when you are using the app, its
            important to bear in mind that although we endeavour to ensure that it is updated and
            correct at all times, we do rely on third parties to provide information to us so that
            we can make it available to you. COGNOTECH OÜ accepts no liability for any loss, direct
            or indirect, you experience as a result of relying wholly on this functionality of the
            app. At some point, we may wish to update the app. The app is currently available on
            Android & iOS - the requirements for both systems(and for any additional systems we
            decide to extend the availability of the app to) may change, and you will need to
            download the updates if you want to keep using the app. COGNOTECH OÜ does not promise
            that it will always update the app so that it is relevant to you and/or works with the
            Android & iOS version that you have installed on your device. However, you promise to
            always accept updates to the application when offered to you, We may also wish to stop
            providing the app, and may terminate use of it at any time without giving notice of
            termination to you. Unless we tell you otherwise, upon any termination, (a) the rights
            and licenses granted to you in these terms will end; (b) you must stop using the app,
            and (if needed) delete it from your device.
          </MKTypography>
          <MKTypography mt={1} mb={3}>
            Changes to This Terms and Conditions: We may update our Terms and Conditions from time
            to time. Thus, you are advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Terms and Conditions on this page. These
            terms and conditions are effective as of 2023-11-11.
          </MKTypography>
          <MKTypography mt={1} mb={3}>
            Contact Us: If you have any questions or suggestions about my Terms and Conditions, do
            not hesitate to contact us at hello@gfitter.com
          </MKTypography>
        </Card>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Terms;
