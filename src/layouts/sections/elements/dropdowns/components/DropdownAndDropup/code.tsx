/**
 * Copyright 2022 Bonitasoft S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dropdownAndDropupCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Kit 2 React components
import { MKBox }  from "../../../../../../components/MKBox";
import { MKButton }  from "../../../../../../components/MKButton";

function DropdownAndDropup() {
  const [dropdown, setDropdown] = useState(null);
  const [dropup, setDropup] = useState(null);

  const openDropdown = ({ currentTarget }) => setDropdown(currentTarget);
  const closeDropdown = () => setDropdown(null);

  const openDropup = ({ currentTarget }) => setDropup(currentTarget);
  const closeDropup = () => setDropup(null);

  // Styles
  const iconStyles = {
    ml: 1,
    fontWeight: "bold",
    transition: "transform 200ms ease-in-out",
  };

  const dropdownIconStyles = {
    transform: dropdown ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  const dropupIconStyles = {
    transform: dropup ? "rotate(180deg)" : "rotate(0)",
    ...iconStyles,
  };

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} textAlign="center">
            <MKButton variant="gradient" color="info" onClick={openDropdown}>
              Dropdown <Icon sx={dropdownIconStyles}>expand_more</Icon>
            </MKButton>
            <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
              <MenuItem onClick={closeDropdown}>Action</MenuItem>
              <MenuItem onClick={closeDropdown}>Another action</MenuItem>
              <MenuItem onClick={closeDropdown}>Something else here</MenuItem>
            </Menu>
          </Grid>
          <Grid item xs={12} lg={6} textAlign="center">
            <MKButton variant="gradient" color="info" onClick={openDropup}>
              Dropup <Icon sx={dropupIconStyles}>expand_more</Icon>
            </MKButton>
            <Menu
              anchorEl={dropup}
              open={Boolean(dropup)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              onClose={closeDropup}
            >
              <MenuItem onClick={closeDropup}>Action</MenuItem>
              <MenuItem onClick={closeDropup}>Another action</MenuItem>
              <MenuItem onClick={closeDropup}>Something else here</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default DropdownAndDropup;`;

export default dropdownAndDropupCode;
