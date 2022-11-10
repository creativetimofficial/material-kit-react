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
const avatarGroupCode = `// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MuiAvatarGroup from "@mui/material/AvatarGroup";

// Material Kit 2 React components
import { MKBox }  from "../../../../../../components/MKBox";
import { MKAvatar }  from "../../../../../../components/MKAvatar";

// Images
import team1 from "../../../../../../assets/images/team-1.jpg";
import team2 from "../../../../../../assets/images/team-2.jpg";
import team3 from "../../../../../../assets/images/team-3.jpg";
import team4 from "../../../../../../assets/images/team-4.jpg";

function AvatarGroup() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container justifyContent="center">
          <MuiAvatarGroup spacing={12}>
            <MKAvatar src={team1} alt="team 1" size="lg" />
            <MKAvatar src={team2} alt="team 2" size="lg" />
            <MKAvatar src={team3} alt="team 3" size="lg" />
            <MKAvatar src={team4} alt="team 4" size="lg" />
          </MuiAvatarGroup>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AvatarGroup;`;

export default avatarGroupCode;
