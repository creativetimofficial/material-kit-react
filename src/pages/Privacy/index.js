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

function Privacy() {
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
            Privacy Policy
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            At [GetFitter], accessible from [gfitter.com], one of our main priorities is the privacy
            of our visitors. This Privacy Policy document contains types of information that is
            collected and recorded by [GetFitter] and how we use it. {"\n"}
            If you have additional questions or require more information about our Privacy Policy,
            do not hesitate to contact us. {"\n"}
            This Privacy Policy applies only to our online activities and is valid for visitors to
            our mobile app with regards to the information that they shared and/or collect in
            [GetFitter]. This policy is not applicable to any information collected offline or via
            channels other than this mobile app. Our Privacy Policy was created with the help of the
            Privacy Policy Generator.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            Consent
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            By using our mobile app, you hereby consent to our Privacy Policy and agree to its
            terms.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            Information we collect
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            The personal information that you are asked to provide, and the reasons why you are
            asked to provide it, will be made clear to you at the point we ask you to provide your
            personal information. {"\n"}
            If you contact us directly, we may receive additional information about you such as your
            name, email address, phone number, the contents of the message and/or attachments you
            may send us, and any other information you may choose to provide. {"\n"}
            When you register for an Account, we may ask for your contact information, including
            items such as name, company name, address, email address, and telephone number. {"\n"}
            Since our mobile app focuses on health data and providing key insights into your diet
            and exercise regime, we require you to provide sensitive information regarding your
            gender, weight, age, height, exercise frequency.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            How we use your information
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            We use the information we collect in various ways, including to:
            <MKTypography>Provide, operate, and maintain our mobile app</MKTypography>
            <MKTypography>Improve, personalize, and expand our mobile app</MKTypography>
            <MKTypography>Understand and analyze how you use our mobile app</MKTypography>
            <MKTypography>Develop new products, services, features, and functionality</MKTypography>
            <MKTypography>
              Communicate with you, either directly or through one of our partners, including for
              customer service, to provide you with updates and other information relating to the
              mobile app, and for marketing and promotional purposes
            </MKTypography>
            <MKTypography>Send you emails</MKTypography>
            <MKTypography>Find and prevent fraud</MKTypography>
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            Log Files
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            [GetFitter] follows a standard procedure of using log files. These files log visitors
            when they visit mobile apps. All hosting companies do this and a part of hosting
            services analytics. The information collected by log files include internet protocol
            (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are not linked to any
            information that is personally identifiable. The purpose of the information is for
            analyzing trends, administering the site, tracking users movement on the mobile app, and
            gathering demographic information.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            Cookies and Web Beacons
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            Like any other mobile app, [GetFitter] uses cookies. These cookies are used to store
            information including visitors preferences, and the pages on the mobile app that the
            visitor accessed or visited. The information is used to optimize the users experience by
            customizing our web page content based on visitors browser type and/or other
            information. {"\n"}
            For more general information on cookies, please read What Are Cookies.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            Google DoubleClick DART Cookie
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            Google is one of a third-party vendor on our site. It also uses cookies, known as DART
            cookies, to serve ads to our site visitors based upon their visit to www.mobile app.com
            and other sites on the internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy at the following
            URL – https://policies.google.com/technologies/ads
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            Third Party Privacy Policies
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            [GetFitter]s Privacy Policy does not apply to other advertisers or mobile apps. Thus, we
            are advising you to consult the respective Privacy Policies of these third-party ad
            servers for more detailed information. It may include their practices and instructions
            about how to opt-out of certain options. {"\n"}
            You can choose to disable cookies through your individual browser options. To know more
            detailed information about cookie management with specific web browsers, it can be found
            at the browsers respective mobile apps.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            Under the CCPA, among other rights, California consumers have the right to: {"\n"}{" "}
            Request that a business that collects a consumers personal data disclose the categories
            and specific pieces of personal data that a business has collected about consumers.{" "}
            {"\n"}
            Request that a business delete any personal data about the consumer that a business has
            collected. {"\n"}
            Request that a business that sells a consumers personal data, not sell the consumers
            personal data. {"\n"}
            If you make a request, we have one month to respond to you. If you would like to
            exercise any of these rights, please contact us.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            GDPR Data Protection Rights
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            We would like to make sure you are fully aware of all of your data protection rights.
            Every user is entitled to the following: {"\n"}
            <MKTypography>
              The right to access: You have the right to request copies of your personal data. We
              may charge you a small fee for this service.
            </MKTypography>
            <MKTypography>
              The right to rectification: You have the right to request that we correct any
              information you believe is inaccurate. You also have the right to request that we
              complete the information you believe is incomplete.
            </MKTypography>
            <MKTypography>
              The right to erasure: You have the right to request that we erase your personal data,
              under certain conditions.
            </MKTypography>
            <MKTypography>
              The right to restrict processing: You have the right to request that we restrict the
              processing of your personal data, under certain conditions.
            </MKTypography>
            <MKTypography>
              The right to object to processing: You have the right to object to our processing of
              your personal data, under certain conditions.
            </MKTypography>
            <MKTypography>
              The right to data portability: You have the right to request that we transfer the data
              that we have collected to another organization, or directly to you, under certain
              conditions.
            </MKTypography>
            {"\n"}
            If you make a request, we have one month to respond to you. If you would like to
            exercise any of these rights, please contact us.
          </MKTypography>

          <MKTypography mt={1} mb={3} variant="h3">
            Childrens Information
          </MKTypography>
          <MKTypography mt={1} mb={3} p>
            Another part of our priority is adding protection for children while using the internet.
            We encourage parents and guardians to observe, participate in, and/or monitor and guide
            their online activity. {"\n"}
            [GetFitter] does not knowingly collect any Personal Identifiable Information from
            children under the age of 13. If you think that your child provided this kind of
            information on our mobile app, we strongly encourage you to contact us immediately and
            we will do our best efforts to promptly remove such information from our records.
          </MKTypography>
        </Card>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Privacy;
