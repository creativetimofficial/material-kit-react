# Change Log

## [1.9.0] 2020-05-28
### Bug fixing
- https://github.com/creativetimofficial/material-kit-react/issues/67
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
### Updated dependencies
```
@material-ui/core                          4.3.2   →    4.10.0
@material-ui/icons                         4.2.1   →     4.9.1
history                                    4.9.0   →    4.10.1
moment                                    2.24.0   →    2.26.0
node-sass                                 4.12.0   →    4.14.1
nouislider                                14.0.2   →    14.5.0
react                                     16.9.0   →   16.13.1
react-dom                                 16.9.0   →   16.13.1
react-router-dom                           5.0.1   →     5.2.0
react-scripts                              3.1.0   →     3.4.1
react-slick                               0.25.2   →    0.26.1
react-swipeable-views                     0.13.3   →    0.13.9
@babel/cli                                 7.5.5   →    7.10.1
@babel/plugin-proposal-class-properties    7.5.5   →    7.10.1
@babel/preset-env                          7.5.5   →    7.10.1
@babel/preset-react                        7.0.0   →    7.10.1
eslint-config-prettier                     6.0.0   →    6.11.0
eslint-plugin-prettier                     3.1.0   →     3.1.3
eslint-plugin-react                       7.14.3   →    7.20.0
prettier                                  1.18.2   →     2.0.5
typescript                                 3.5.3   →     3.9.3
```
### Warning
_While in development some of the plugins that were used for this product will throw some warnings - note, this only happens in development, the UI or the functionality of the product is not affected, also, if the issues will persist in React 17, we'll drop usage of those plugins, and replace them with other ones._
_Warnings might appear while doing an npm install - they do not affect the UI or the functionality of the product, and they appear because of NodeJS and not from the product itself._

## [1.8.0] 2019.08.26
### Bug fixing
- Rewrote the ISSUE_TEMPLATE
- Deleted the copyright comments from all files, we only need to keep them inside our index.js and index.html
- Added script that adds copyrights to the built app
- Renamed all the files from `.jsx` to `.js`
- Changed the `withStyles` function from Material-UI with the `makeStyles` function (integration with other frameworks should now be easy)
- React Hooks is now supported
### Major style changes
- `src/assets/scss/plugins/_plugin-nouislider.scss`
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
+ gulp@4.0.2
+ gulp-append-prepend@1.0.8
### Updated dependencies
```
@material-ui/core                          4.1.0   →    4.3.2
@material-ui/icons                         4.1.0   →    4.2.1
nouislider                                13.1.5   →   14.0.2
react                                     16.8.6   →   16.9.0
react-dom                                 16.8.6   →   16.9.0
react-scripts                              3.0.1   →    3.1.0
react-slick                               0.24.0   →   0.25.2
@babel/cli                                 7.4.4   →    7.5.5
@babel/plugin-proposal-class-properties    7.4.4   →    7.5.5
@babel/preset-env                          7.4.5   →    7.5.5
eslint-config-prettier                     4.3.0   →    6.0.0
eslint-plugin-react                       7.13.0   →   7.14.3
typescript                                 3.5.1   →    3.5.3
```

## [1.7.0] 2019-06-19
### Warning
**We've skipped versions 1.5.0, 1.6.0 so that all React Material products would be on the same version.**
### Bug fixing
- Bugs from updated dependencies
- Removed `.env` file, and replaced it with the `jsconfig.json` file
- Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for *.jsx*, *.js*, *.html* and *.css* files
- Changed all string refs to `React.createRef()`
- Added types validation in each component
- Solved linting issues
- Solved https://github.com/creativetimofficial/material-kit-react/issues/52
- Solved https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/149
### Major style changes
### Deleted components
### Added components
### Deleted dependencies
### Added dependencies
- eslint-plugin-react@7.13.0
- prettier@1.18.2 (To stop console warnings on install)
- typescript@3.5.1 (To stop console warnings on install)
### Updated dependencies
```
@material-ui/core                          3.9.2   →    4.1.0
@material-ui/icons                         3.0.2   →    4.1.0
history                                    4.7.2   →    4.9.0
node-sass                                 4.11.0   →   4.12.0
nouislider                                13.1.0   →   13.1.5
prop-types                                15.7.1   →   15.7.2
react                                     16.8.1   →   16.8.6
react-dom                                 16.8.1   →   16.8.6
react-router-dom                           4.3.1   →    5.0.1
react-scripts                              2.1.5   →    3.0.1
react-slick                               0.23.2   →   0.24.0
react-swipeable-views                     0.13.1   →   0.13.3
@babel/cli                                 7.2.3   →    7.4.4
@babel/plugin-proposal-class-properties    7.3.0   →    7.4.4
@babel/preset-env                          7.3.1   →    7.4.5
eslint-config-prettier                     4.0.0   →    4.3.0
eslint-plugin-prettier                     3.0.1   →    3.1.0
```

## [1.4.0] 2019-02-13
### Bug fixing
- https://github.com/creativetimofficial/material-kit-react/issues/46
- https://github.com/creativetimofficial/material-kit-react/issues/44
- Updated available scripts
- Changed the *.babelrc* file
### Major style changes
- **src/assets/jss/material-kit-react/components/headerStyle.jsx**
- **src/assets/jss/material-kit-react/components/customDropdownStyle.jsx**
### Major components changes
- - Changes caused by running [the prettier command](https://prettier.io/docs/en/install.html) for *.jsx*, *.js*, *.html* and *.css* files
- **src/components/CustomDropdown/CustomDropdown.jsx**
### Deleted dependencies
- `babel-eslint`
- `eslint`
- `eslint-plugin-react`
- `prettier`
- `npm-run-all`
- `babel-cli`
- `babel-plugin-module-resolver`
- `babel-plugin-import-rename`
- `babel-plugin-transform-object-rest-spread`
- `babel-plugin-transform-react-jsx`
- `babel-preset-es2015`
- `node-sass-chokidar`
### Added dependencies
- `@babel/cli` version: **7.2.3**
- `@babel/plugin-proposal-class-properties` version: **7.3.0**
- `@babel/preset-env` version: **7.3.1**
- `@babel/preset-react` version: **7.0.0**
- `node-sass` version: **4.11.0**
### Updated dependencies
-  `@material-ui/core`               *3.1.1*   →    **3.9.2**
-  `@material-ui/icons`              *3.0.1*   →    **3.0.2**
-  `moment`                         *2.22.2*   →   **2.24.0**
-  `node-sass-chokidar`              *1.3.3*   →    **1.3.4**
-  `nouislider`                     *12.0.0*   →   **13.1.0**
-  `npm-run-all`                     *4.1.3*   →    **4.1.5**
-  `prop-types`                     *15.6.2*   →   **15.7.1**
-  `react`                          *16.5.2*   →   **16.8.1**
-  `react-datetime`                 *2.15.0*   →   **2.16.3**
-  `react-dom`                      *16.5.2*   →   **16.8.1**
-  `react-scripts`                   *1.1.4*   →    **2.1.5**
-  `react-slick`                    *0.23.1*   →   **0.23.2**
-  `react-swipeable-views`          *0.13.0*   →   **0.13.1**
-  `babel-plugin-module-resolver`    *3.1.1*   →    **3.1.3**
-  `eslint-config-prettier`          *3.1.0*   →    **4.0.0**
-  `eslint-plugin-prettier`          *2.6.2*   →    **3.0.1**

## [1.3.0] 2018-08-16
### Bug fixing
- Github own repo
  - [https://github.com/creativetimofficial/material-kit-react/issues/36](https://github.com/creativetimofficial/material-kit-react/issues/36)
- Github othe repos
  - [https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/79](https://github.com/creativetimofficial/ct-material-dashboard-pro-react/issues/79)
### Major styling changes
- `src/assets/jss/material-kit-react/components/headerStyle.jsx`
- `src/assets/jss/material-kit-react/components/snackbarContentStyle.jsx`
- `src/assets/jss/material-kit-react/views/loginPage.jsx`
- `src/assets/jss/material-kit-react/customCheckboxRadioSwitch.jsx`
- `src/assets/scss/plugins/_plugin-nouislider.scss`
### Deleted dependencies
- `react-nouislider`
### Added dependencies
- `nouislider`                `12.0.0`
### Updated dependencies
- `@material-ui/core`          `1.5.0`   →    `3.1.1`
- `@material-ui/icons`         `2.0.2`   →    `3.0.1`
- `react`                     `16.4.2`   →   `16.5.2`
- `react-dom`                 `16.4.2`   →   `16.5.2`
- `react-scripts`              `1.1.4`   →    `1.1.5`
- `react-swipeable-views`    `0.12.16`   →   `0.13.0`
- `eslint-config-prettier`     `2.9.0`   →    `3.1.0`
- `eslint-plugin-react`       `7.10.0`   →   `7.11.1`
- `prettier`                  `1.13.7`   →   `1.14.3`


## [1.2.0] 2018-08-16
### Bug fixing
- Added new script command for clean install of node_modules (just run in terminal `npm run install:clean`, this will also start your server)
- Added lint commands
- Minor changes in components due to the upgrade of `@material-ui/icons`
- Github
  - [https://github.com/creativetimofficial/material-kit-react/issues/16](https://github.com/creativetimofficial/material-kit-react/issues/16)
  - [https://github.com/creativetimofficial/material-kit-react/issues/25](https://github.com/creativetimofficial/material-kit-react/issues/25)
  - [https://github.com/creativetimofficial/material-kit-react/issues/26](https://github.com/creativetimofficial/material-kit-react/issues/26)
  - [https://github.com/creativetimofficial/material-kit-react/issues/28](https://github.com/creativetimofficial/material-kit-react/issues/28)
### Major styling changes
- Added styles for `svg`'s, **font-awesome** classes and `.material-icons` class inside
  - `src/assets/jss/material-kit-react/components/buttonStyle.jsx`
  - `src/assets/jss/material-kit-react/components/customInputStyle.jsx`
  - `src/assets/jss/material-kit-react/components/customDropdownStyle.jsx`
  - `src/assets/jss/material-kit-react/components/headerLinksStyle.jsx`
  - `src/assets/jss/material-kit-react/components/headerStyle.jsx`
  - `src/assets/jss/material-kit-react/views/loginPage.jsx`
### Dropped components
- No more use of `react-popper`, no it's beeing used `@material-ui/core/Popper` instead (see `CustomDropdown`)
### Deleted dependencies
### Added dependencies
- `prop-types v15.6.2`
- `classnames v2.2.6`
### Updated dependencies
- `@material-ui/core v1.2.1` to `@material-ui/core v1.5.0`
- `@material-ui/icons v1.1.0` to `@material-ui/icons v2.0.2`
- `ajv v6.0.0` to `ajv v6.5.2`
- `node-sass-chokidar v1.3.0` to `node-sass-chokidar v1.3.3`
- `react v16.4.0` to `react v16.4.2`
- `react-datetime v2.14.0` to `react-datetime v2.15.0`
- `react-dom v16.4.0` to `react-dom v16.4.2`
- `react-swipeable-views v0.12.13` to `react-swipeable-views v0.12.16`


## [1.1.0] 2018-06-13
### Major styling changes
- `src/assets/jss/material-kit-react/components/buttonStyle.jsx`, due to the fact that we've droped `src/components/CustomButtons/IconButton.jsx`
- `src/assets/jss/material-kit-react/components/customInputStyle.jsx`
- `src/assets/jss/material-kit-react/components/customTabsStyle.jsx`
- `src/assets/jss/material-kit-react/components/headerLinksStyle.jsx`
### Dropped components
- `src/components/CustomButtons/IconButton.jsx` instead use `src/components/CustomButtons/Button.jsx` (with the prop `justIcon` on them)
### Deleted dependencies
- `material-ui@1.0.0-beta.45`
### Added dependencies
- `material-ui/core@1.2.1` (instead of `material-ui@1.0.0-beta.45`)
- `ajv@6.0.0` (to stop the warning: **npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.**)
### Updated dependencies
- `@material-ui/icons@1.0.0-beta.43` to `@material-ui/icons@1.1.0`
- `moment@2.22.1` to `moment@2.22.2`
- `node-sass-chokidar@1.2.2` to `node-sass-chokidar@1.3.0`
- `npm-run-all@4.1.2` to `npm-run-all@4.1.3`
- `react@16.3.1` to `react@16.4.0`
- `react-dom@16.3.1` to `react-dom@16.4.0`
- `react-router-dom@4.2.2` to `react-router-dom@4.3.1`
### Bug fixing
- Added `maxHeight` in styling sheets for those components that had `height`  set in `vh` (these changes were made because on an iframe the product would scroll forever)
- Changed the imports from Material-UI (now they are with `@material-ui/core` instead of `material-ui`)
- Dropped some styling on some pages/section of pages due to the change of the buttons styling

## [1.0.0] 2018-05-08
### Original Release
- Added Material-UI as base framework
- Added design from Material Dashboard by Creative Tim
