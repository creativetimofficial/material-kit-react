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
const popoversCode = `import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";

// Material Kit 2 React components
import { MKBox }  from "../../../../../../components/MKBox";
import { MKButton }  from "../../../../../../components/MKButton";
import { MKTypography }  from "../../../../../../components/MKTypography";

function Popovers() : JSX.Element{
  const [popover, setPopover] = useState(null);
  const [popoverOrigin, setPopoverOrigin] = useState({
    anchorOrigin: {
      vertical: "top",
      horizontal: "center",
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  });

  const togglePopover = ({ currentTarget }) => setPopover(currentTarget);
  const closePopover = () => setPopover(null);

  const popoverTemplate = (
    <Popover open={Boolean(popover)} anchorEl={popover} onClose={closePopover} {...popoverOrigin}>
      <MKBox bgColor="white" py={1.5} px={2} lineHeight={0.8}>
        <MKTypography variant="caption" color="text">
          That&apos;s the main thing people are controlled
          <br /> by! Thoughts- their perception of themselves!
        </MKTypography>
      </MKBox>
    </Popover>
  );

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" spacing={1}>
            <MKButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                });
              }}
            >
              popover on top
            </MKButton>
            <MKButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "right",
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "left",
                  },
                });
              }}
            >
              popover on right
            </MKButton>
            <MKButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "center",
                    horizontal: "left",
                  },
                  transformOrigin: {
                    vertical: "center",
                    horizontal: "right",
                  },
                });
              }}
            >
              popover on left
            </MKButton>
            <MKButton
              variant="gradient"
              color="info"
              onClick={(event) => {
                togglePopover(event);
                setPopoverOrigin({
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "center",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "center",
                  },
                });
              }}
            >
              popover on bottom
            </MKButton>
          </Stack>
        </Grid>
        {popoverTemplate}
      </Container>
    </MKBox>
  );
}

export default Popovers;`;

export default popoversCode;
