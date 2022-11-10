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

import React, { useState, useEffect } from 'react';

// react-copy-to-clipboard components
import { CopyToClipboard } from 'react-copy-to-clipboard';

// react-syntax-highlighter components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

// @mui material components
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Slide from '@mui/material/Slide';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { theme } from '../../../assets/theme';

// Material Kit 2 React components
import { MKBox } from '../../../components/MKBox';
import { MKAlert } from '../../../components/MKAlert';
import { MKButton } from '../../../components/MKButton';
import { MKTypography } from '../../../components/MKTypography';

// Material Kit 2 React base styles
import { palette } from '../../../assets/theme/base/colors';

function View({
  children,
  code,
  title,
  height,
  ...rest
}: React.PropsWithChildren<ViewProps>): JSX.Element {
  const { grey } = palette;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);

  const handleTabType = (event: Event, newValue: number): void =>
    setActiveTab(newValue);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MKBox
        width="100%"
        position="relative"
        borderRadius="xl"
        shadow="lg"
        mb={12}
        sx={{ overflow: 'hidden' }}
        {...rest}
      >
        <MKBox
          px={3}
          sx={{
            borderBottom: ({ borders: { borderWidth, borderColor } }) =>
              `${borderWidth[1]} solid ${borderColor}`,
          }}
        >
          <Grid container spacing={2} justifyContent="space-between" py={1}>
            <Grid item xs={12} lg={3}>
              <MKTypography variant="body1" pt={0.5}>
                {title}
              </MKTypography>
            </Grid>

            <Grid item xs={12} lg={3}>
              <AppBar position="static">
                <Tabs value={activeTab} onChange={handleTabType}>
                  <Tab
                    icon={
                      <MKBox
                        component="i"
                        color="dark"
                        mr={1.25}
                        sx={{
                          fontSize: ({ typography: { size } }) => size.sm,
                        }}
                        className="fas fa-desktop"
                      />
                    }
                    label="Preview"
                  />

                  <Tab
                    icon={
                      <MKBox
                        component="i"
                        color="dark"
                        mr={1.25}
                        sx={{
                          fontSize: ({ typography: { size } }) => size.sm,
                        }}
                        className="fas fa-code"
                      />
                    }
                    label="Code"
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
        </MKBox>

        <MKBox display={activeTab === 0 ? 'block' : 'none'}>
          <MKBox width="100%" p={3}>
            <MKBox
              bgColor="grey-100"
              width="100%"
              height={height}
              maxHeight="40rem"
              borderRadius="xl"
              sx={{ overflowX: 'hidden', overflowY: 'scroll' }}
            >
              {children}
            </MKBox>
          </MKBox>
        </MKBox>

        <MKBox display={activeTab === 1 ? 'block' : 'none'} p={3}>
          <MKBox
            bgColor="grey-100"
            position="relative"
            width="100%"
            borderRadius="xl"
            sx={{ overflow: 'hidden' }}
          >
            <CopyToClipboard text={code}>
              <MKButton
                variant="gradient"
                color="dark"
                size="small"
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                onClick={() => setSuccess(true)}
              >
                <MKBox color="white" mr={0.5} className="fas fa-copy" /> Copy
              </MKButton>
            </CopyToClipboard>

            <Slide direction="down" in={success} unmountOnExit>
              <MKBox position="absolute" top="0.5rem" left={0} width="100%">
                <MKAlert
                  width="25%"
                  mx="auto"
                  color="success"
                  sx={{
                    minHeight: '2.5rem !important',
                    py: 1,
                    justifyContent: 'center',
                  }}
                >
                  <MKTypography
                    variant="body2"
                    color="white"
                    fontWeight="regular"
                  >
                    Code successfully copied!
                  </MKTypography>
                </MKAlert>
              </MKBox>
            </Slide>

            <SyntaxHighlighter
              language="jsx"
              style={prism}
              showLineNumbers
              customStyle={{
                height,
                maxHeight: '40rem',
                fontSize: '1rem',
                backgroundColor: grey ? grey[100] : undefined,
                padding: '1rem 1rem 1rem 0.25rem',
                overflowY: 'scroll',
                margin: 0,
              }}
            >
              {code}
            </SyntaxHighlighter>
          </MKBox>
        </MKBox>
      </MKBox>
    </ThemeProvider>
  );
}

// Setting default props for the View
View.defaultProps = {
  height: 'auto',
};

// Typechecking props for the View
interface ViewProps {
  code: string;
  title: string;
  height?: string;
}

export default View;
