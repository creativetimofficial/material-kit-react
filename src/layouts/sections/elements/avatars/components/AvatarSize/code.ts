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
const avatarSizeCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import { MKBox }  from "../../../../../../components/MKBox";
import { MKAvatar }  from "../../../../../../components/MKAvatar";

// Images
import team4 from "../../../../../../assets/images/team-4.jpg";

function AvatarSize() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <Stack direction="row" alignItems="flex-end" spacing={1}>
            <MKAvatar src={team4} alt="xs" size="xs" />
            <MKAvatar src={team4} alt="sm" size="sm" />
            <MKAvatar src={team4} alt="md" size="md" />
            <MKAvatar src={team4} alt="lg" size="lg" />
            <MKAvatar src={team4} alt="xl" size="xl" />
            <MKAvatar src={team4} alt="xxl" size="xxl" />
          </Stack>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarSize;`;

export default avatarSizeCode;
