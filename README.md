# npm package wrapper around [material-kit-react](https://github.com/creativetimofficial/material-kit-react)

install:
````
npm install material-kit-react-package --save
````

use:
````
import 'material-kit-react-package/dist/material-kit-react.css';
import CustomInput from 'material-kit-react-package/dist/components/CustomInput/CustomInput';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme, getThemeColors } from "assets/jss/material-kit-react.jsx";
...
const muiTheme = createMuiTheme(theme);
...
  render() {
    ...
      <MuiThemeProvider theme={muiTheme}>
        ...
      </MuiThemeProvider>
    ...
  }
````
chamge primary color:
````
const theme1 = createMuiTheme({
  palette: {
    primary: getThemeColors('#3f51b5')
  }
});

````
