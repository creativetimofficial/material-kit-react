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
