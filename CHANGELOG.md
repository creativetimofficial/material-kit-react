# Change Log

## [2.0.0] 2022-01-07

### Bug fixing

### Major style changes

- Migration from Material-UI to MUI v5.
- Migration from JSS to `styled` api, emotion and `sx` prop.
- Product folders and files structured are updated: [README](https://github.com/creativetimofficial/ct-material-kit-pro-react/blob/main/README.md)
- New components are added
- New example blocks are added
- Components and Example Blocks are now totally customizable and reusable

### Deleted components

- Accordion
- Badge
- Card
- Clearfix
- CustomButtons
- CustomDropdown
- CustomFileInput
- CustomInput
- CustomLinearProgress
- CustomTabs
- CustomUpload
- Footer
- Grid
- Header
- InfoArea
- Intruction
- Media
- NavPills
- Pagination
- Parallax
- Snackbar
- Table
- Typography

### Added components

- MKAlert
- MKAvatar
- MKBadge
- MKBox
- MKButton
- MKDatePicker
- MKInput
- MKPagination
- MKProgress
- MKSnackbar
- MKSocialButton
- MKTypography
- Breadcrumbs
- Cards
  - BackgroundCards
    - ColoredBackgroundCard
    - DefaultBackgroundCard
    - InfoBackgroundCard
    - SimpleBackgroundCard
  - BlogCards
    - BackgroundBlogCard
    - CenteredBlogCard
    - DefaultBlogCard
    - RaisedBlogCard
    - SimpleBlogCard
    - TransparentBlogCard
  - BookingCards
    - DefaultBookingCard
    - SimpleBookingCard
  - CounterCards
    - DefaultCounterCard
  - InfoCards
    - DefaultInfoCard
    - FilledInfoCard
    - SimpleInfoCard
  - PricingCards
    - DefaultPricingCard
    - SimplePricingCard
  - ReviewCards
    - ComplexReviewCard
    - DefaultReviewCard
    - MiniReviewCard
    - SimpleReviewCard
  - RotatingCard
  - TeamCards
    - HorizontalTeamCard
    - TransparentTeamCard
- Footers
  - CenteredFooter
  - DefaultFooter
  - DetailedFooter
  - SimpleFooter
- Navbars
  - DefaultNavbar
- Tables
  - Table

### Deleted dependencies

```
@material-ui/core
@material-ui/icons
animate.css
classnames
moment
node-sass
nouislider
react-animate-on-scroll
react-datetime
react-image-gallery
react-slick
react-tagsinput
```

### Added dependencies

```
@mui/material
@mui/icons-material
@mui/styled-engine
@emotion/cache
@emotion/react
@emotion/styled
@testing-library/jest-dom
@testing-library/react":
@testing-library/user-event
chroma-js
flatpickr
prop-types
react-flatpickr
react-copy-to-clipboard
react-countup
react-syntax-highlighter
rellax
swiper
typed.js
uuid
web-vitals
```

### Updated dependencies

### Warning

## [1.10.0] 2021-05-12

### Bug fixing

- https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/82
- https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/78
- https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/76
- https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/69
- https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/49

### Major style changes

### Deleted components

### Added components

- `@babel/core@7.14.0` (to stop some of the console warnings)

### Deleted dependencies

- history (We'll use `BrowserRouter` instead of `Router` and `history`)
- `react-google-maps` (We'll use simple Google Maps API)
- `@types/googlemaps`
- `@types/markerclustererplus`
- `react-swipeable-views` (no longer maintained)

### Added dependencies

### Updated dependencies

```
@material-ui/core         4.10.1   →   4.11.4
@material-ui/icons         4.9.1   →   4.11.2
animate.css                4.1.0   →    4.1.1
classnames                 2.2.6   →    2.3.1
moment                    2.26.0   →   2.29.1
node-sass                 4.14.1   →    6.0.0
nouislider                14.5.0   →   15.1.0
react                    16.13.1   →   17.0.2
react-datetime            2.16.3   →    3.0.4
react-dom                16.13.1   →   17.0.2
react-image-gallery        1.0.7   →    1.0.9
react-scripts              3.4.1   →    4.0.3
react-slick               0.26.1   →   0.28.1
gulp-append-prepend        1.0.8   →    1.0.9
eslint-config-prettier    6.11.0   →    8.3.0
eslint-plugin-prettier     3.1.3   →    3.4.0
eslint-plugin-react       7.20.0   →   7.23.2
prettier                   2.0.5   →    2.3.0
typescript                 3.9.3   →    4.2.4
```

### Warning

_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

```
npm WARN react-animate-on-scroll@2.1.5 requires a peer of react@>= 15.4.1 < 17.0.0-0 but none is installed. You must install peer dependencies yourself.
npm WARN react-datetime@3.0.4 requires a peer of react@^16.5.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-tagsinput@3.19.0 requires a peer of react@^16.0.0 || ^15.0.0 || ^0.14.0 but none is installed. You must install peer dependencies yourself.
npm WARN react-swipeable@5.5.1 requires a peer of react@^16.0.0-0 but none is installed. You must install peer dependencies yourself.
```

_You will also have the following message: found 80 vulnerabilities (1 low, 79 moderate). This comes from react-scripts, and will be fixed in the next version. NOTE: the product works as expected with these vulnerabilities._

## [1.9.0] 2020-06-05

### Bug fixing

- Changed the usage of `react-image-gallery` to new API, check `src/views/ProductPage/ProductPage.js`
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/37 and https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/64 by adding for the `src/components/CustomFileInput/CustomFileInput.js` and `src/components/CustomUpload/ImageUpload.js` an `onChange` function that returns the uploaded files so people can send these to their back-end, API etc.
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/41
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/46
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/51
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/60

### Major style changes

- Move the keyframes from `src/assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js` into scss file `src/assets/scss/core/_keyframes.scss`
- `src/assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js` add primary color on hover for these 3 components
- `src/assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js` delete the hover effect for checkboxes
- `src/assets/scss/plugins/_plugin-react-image-gallery.scss` due to new `react-image-gallery` API
- `src/assets/jss/material-kit-pro-react/views/productStyle.js` due to new `react-image-gallery` API
- `src/assets/css/material-kit-pro-react.css` due to above changes
- `src/assets/css/material-kit-pro-react.css.map` due to above changes
- `src/assets/css/material-kit-pro-react.min.css` due to above changes

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

### Updated dependencies

```
@material-ui/core         4.3.2   →    4.10.1
@material-ui/icons        4.2.1   →     4.9.1
animate.css               3.7.2   →     4.1.0
history                   4.9.0   →    4.10.1
moment                   2.24.0   →    2.26.0
node-sass                4.12.0   →    4.14.1
nouislider               14.0.2   →    14.5.0
react                    16.9.0   →   16.13.1
react-dom                16.9.0   →   16.13.1
react-image-gallery      0.8.18   →     1.0.7
react-router-dom          5.0.1   →     5.2.0
react-scripts             3.1.0   →     3.4.1
react-slick              0.25.2   →    0.26.1
react-swipeable-views    0.13.3   →    0.13.9
@types/googlemaps        3.37.3   →    3.39.6
eslint-config-prettier    6.0.0   →    6.11.0
eslint-plugin-prettier    3.1.0   →     3.1.3
eslint-plugin-react      7.14.3   →    7.20.0
prettier                 1.18.2   →     2.0.5
typescript                3.5.3   →     3.9.3
```

### Warning

_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

## [1.8.0] 2019-08-26

### Bug fixing

- Rewrote the ISSUE_TEMPLATE
- Deleted the copyright comments from all files, we only need to keep them inside our index.js and index.html
- Added script that adds copyrights to the built app
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/41
- Renamed all the files from `.jsx` to `.js`
- Changed the `withStyles` function from Material-UI with the `makeStyles` function (integration with other frameworks should now be easy)
- React Hooks is now supported

### Major style changes

- `src/assets/jss/material-kit-pro-react/components/cardBodyStyle.jsx`
- `src/assets/scss/plugins/_plugin-nouislider.scss`

### Deleted components

### Added components

### Deleted dependencies

### Added dependencies

- gulp@4.0.2
- gulp-append-prepend@1.0.8

### Updated dependencies

```
@material-ui/core         4.1.0   →    4.3.2
@material-ui/icons        4.1.0   →    4.2.1
nouislider               13.1.5   →   14.0.2
react-image-gallery      0.8.17   →   0.8.18
@types/googlemaps        3.36.4   →   3.37.0
eslint-config-prettier    4.3.0   →    6.0.0
eslint-plugin-react      7.13.0   →   7.14.3
typescript                3.5.1   →    3.5.3
react                    16.8.6   →   16.9.0
react-dom                16.8.6   →   16.9.0
react-scripts             3.0.1   →    3.1.0
react-slick              0.24.0   →   0.25.2
@types/googlemaps        3.37.0   →   3.37.3
```

## [1.7.0] 2019-06-19

### Warning

- **We've skipped versions 1.4.0, 1.5.0, 1.6.0 so that all React Material products would be on the same version.**
- **All linting errors are solved now, but due to google analytics stuff, we've needed to add target="\_blank" to our links, so this lint error still exists.**

### Bug fixing

- Bugs from updated dependencies
- Removed `.env` file, and replaced it with the `jsconfig.json` file
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for _.jsx_, _.js_, _.html_ and _.css_ files
- Changed all string refs to `React.createRef()`
- Added types validation in each component
- Solved linting issues
- Solved https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/34

### Major style changes

### Deleted components

- `src/routes/index.jsx`

### Added components

### Deleted dependencies

### Added dependencies

- typescript@3.5.1 (To stop console warnings)

### Updated dependencies

```
@material-ui/core          3.9.2   →    4.1.0
@material-ui/icons         3.0.2   →    4.1.0
@types/googlemaps        3.30.16   →   3.36.4
ajv                        6.9.1   →   6.10.0
animate.css                3.7.0   →    3.7.2
history                    4.7.2   →    4.9.0
node-sass                 4.11.0   →   4.12.0
nouislider                13.1.0   →   13.1.5
prop-types                15.7.1   →   15.7.2
react                     16.8.1   →   16.8.6
react-dom                 16.8.1   →   16.8.6
react-image-gallery       0.8.12   →   0.8.17
react-router-dom           4.3.1   →    5.0.1
react-scripts              2.1.5   →    3.0.1
react-slick               0.23.2   →   0.24.0
react-swipeable-views     0.13.1   →   0.13.3
eslint-config-prettier     4.0.0   →    4.3.0
eslint-plugin-prettier     3.0.1   →    3.1.0
eslint-plugin-react       7.12.4   →   7.13.0
prettier                  1.16.4   →   1.18.2
```

## [1.3.0] 2019-02-15

### Bug fixing

- Dropped dynamic routing
- Deleted two of the Card inside `src/views/LoginPage/LoginPage.jsx`
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for _.jsx_, _.js_, _.html_ and _.css_ files

### Major styling changes

- Changes caused by the fact that all colors are now variables and the prettier command

### Deleted dependencies

- `node-sass-chokidar`
- `npm-run-all`
- `babel-eslint`
- `eslint`

### Added dependencies

- `node-sass` version: **4.11.0**

### Updated dependencies

- `@material-ui/core` _3.1.1_ → **3.9.2**
- `@material-ui/icons` _3.0.1_ → **3.0.2**
- `@types/googlemaps` _3.30.13_ → **3.30.16**
- `ajv` _5.0.0_ → **6.8.1**
- `moment` _2.22.2_ → **2.24.0**
- `nouislider` _12.0.0_ → **13.1.0**
- `prop-types` _15.6.2_ → **15.7.1**
- `react` _16.5.2_ → **16.8.1**
- `react-datetime` _2.15.0_ → **2.16.3**
- `react-dom` _16.5.2_ → **16.8.1**
- `react-image-gallery` _0.8.11_ → **0.8.12**
- `react-scripts` _1.1.5_ → **2.1.5**
- `react-slick` _0.23.1_ → **0.23.2**
- `react-swipeable-views` _0.13.0_ → **0.13.1**
- `eslint-config-prettier` _3.0.1_ → **4.0.0**
- `eslint-plugin-prettier` _2.6.2_ → **3.0.1**
- `eslint-plugin-react` _7.11.1_ → **7.12.4**
- `prettier` _1.14.3_ → **1.16.4**

## [1.2.0] 2018-08-29

### Bug fixing

- Github own repo
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/5](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/5)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/12](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/12)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/13](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/13)
- Github other repos
  - [https://github.com/creativetimofficial/material-kit-react/issues/36](https://github.com/creativetimofficial/material-kit-react/issues/36)
  - [https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/68](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/68)
  - [https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/70)
  - [https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/79](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/79)

### Major styling changes

- `src/assets/jss/material-kit-pro-react/components/snackbarContentStyle.jsx`
- `src/assets/jss/material-kit-pro-react/components/headerStyle.jsx`
- `src/assets/jss/material-kit-pro-react/views/loginPageStyle.jsx`
- `src/assets/jss/material-kit-pro-react/views/signupPageStyle.jsx`
- `src/assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.jsx`
- `src/assets/scss/plugins/_plugin-nouislider.scss`

### Deleted dependencies

- `react-nouislider` (since it was not well maintained)

### Added dependencies

- `nouislider` `12.0.0` (instead of `react-nouislider`)

### Updated dependencies

- `@material-ui/core` `1.5.0` → `3.1.1`
- `@material-ui/icons` `2.0.2` → `3.0.1`
- `@types/googlemaps` `3.30.11` → `3.30.13`
- `ajv` `6.5.2` → `5.0.0`
- `react` `16.4.2` → `16.5.2`
- `react-dom` `16.4.2` → `16.5.2`
- `react-image-gallery` `0.8.10` → `0.8.11`
- `react-scripts` `1.1.4` → `1.1.5`
- `react-swipeable-views` `0.12.16` → `0.13.0`
- `eslint-config-prettier` `^2.9.0` → `3.1.0`
- `eslint-plugin-react` `^7.10.0` → `7.11.1`
- `prettier` `^1.13.7` → ` 1.14.3`

## [1.1.0] 2018-08-14

### Bug fixing

- No more use of `react-popper`, no it's beeing used `@material-ui/core/Popper` instead (see `CustomDropdown`)
- Github issues
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/1](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/1)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/2](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/2)
  - [https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/3](https://github.com/creativetimofficial/ct-material-kit-pro-react/issues/3)

### Major styling changes

- Added styles for `svg`'s, **font-awesome** classes and `.material-icons` class inside
  - `src/assets/jss/material-kit-pro-react/components/buttonStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/components/cardStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/components/customInputStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/components/infoStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx`
  - `src/assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.jsx`
  - `src/assets/jss/material-kit-pro-react/views/presentationSections/overviewStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/views/sectionsSections/pricingStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx`
  - `src/assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx`
- Others
  - `src/assets/jss/material-kit-pro-react/views/productStyle.jsx`

### Deleted dependencies

- `react-parallax v1.7.0`

### Updated dependencies

- `@material-ui/core v1.3.1` to `@material-ui/core v1.5.0`
- `@material-ui/icons v1.1.0` to `@material-ui/icons v2.0.2`
- `@types/googlemaps v3.30.8` to `@types/googlemaps v3.30.11`
- `animate.css v3.6.1` to `animate.css v3.7.0`
- `moment v2.22.1` to `moment v2.22.2`
- `node-sass-chokidar v1.3.0` to `node-sass-chokidar v1.3.3`
- `npm-run-all v4.1.2` to `npm-run-all v4.1.3`
- `react v16.3.1` to `react v16.4.2`
- `react-animate-on-scroll v2.1.4` to `react-animate-on-scroll v2.1.5`
- `react-datetime v2.14.0` to `react-datetime v2.15.0`
- `react-dom v16.3.1` to `react-dom v16.4.2`
- `react-image-gallery v0.8.7` to `react-image-gallery v0.8.10`
- `react-router-dom v4.2.2` to `react-router-dom v4.3.1`
- `react-swipeable-views v0.12.13` to `react-swipeable-views v0.12.16`

## [1.0.0] 2018-07-20

### Original Release

- Added Material-UI as base framework
- Added design from Material Dashboard by Creative Tim
