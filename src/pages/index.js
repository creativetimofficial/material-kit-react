/**
 * Copyright 2021 Bonitasoft S.A.
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

import {
  Apps,
  ArrowForward,
  ContentCopy,
  Devices,
  Flag,
  FlipToFront,
  PriceChange,
} from '@mui/icons-material';
import { Theme } from '@mui/material';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultInfoCard from '../examples/Cards/InfoCards/DefaultInfoCard';
import { MKBadge } from '../components/MKBadge';

import {
  faPinterest,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Material Kit 2 React components
import { MKBox } from '../components/MKBox';
import { MKTypography } from '../components/MKTypography';
import { MKSocialButton } from '../components/MKSocialButton';

// Material Kit 2 React examples
import DefaultNavbar from '../examples/Navbars/DefaultNavbar';
import DefaultFooter from '../examples/Footers/DefaultFooter';
import FilledInfoCard from '../examples/Cards/InfoCards/FilledInfoCard';

// Presentation page sections

// Presentation page components

// Material Kit 2 React themes
import { theme } from '../assets/theme';

// Routes
import { paRooterRoutes } from '../PA-footer.routes';
import { paRoutes } from '../PA-routes';

// Images
import BgImg from '../assets/PA-images/bg-presentation.png';

// https://www.freepik.com/free-vector/woman-daily-routine-set-with-isolated-icons-with-doodle-style-female-characters-during-various-everyday-activities-illustration_15481388.htm#query=daily%20activities&position=38&from_view=keyword
import DayActivitiesImg from '../assets/PA-images/woman_daily_routine.jpg';

const navbar = (
  <DefaultNavbar
    brand="Process Analytics"
    routes={paRoutes}
    action={{
      type: 'external',
      route:
        'https://cdn.statically.io/gh/process-analytics/bpmn-visualization-examples/master/examples/index.html',
      label: 'Demo',
      color: 'secondary',
    }}
    sticky
  />
);

const header = (
  <MKBox
    minHeight="75vh"
    width="100%"
    sx={{
      backgroundImage: `url(${BgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top',
      display: 'grid',
      placeItems: 'center',
    }}
  >
    <Container>
      <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
        <MKTypography
          variant="h1"
          color="white"
          mt={-6}
          mb={1}
          sx={({ breakpoints, typography }) => ({
            [breakpoints.down('md')]: {
              fontSize: typography.size['3xl'],
            },
          })}
        >
          Process Analytics
        </MKTypography>
        <MKTypography
          variant="body1"
          color="white"
          textAlign="center"
          px={{ xs: 6, lg: 12 }}
          mt={1}
        >
          Open Source &amp; Customizable components based on BPMN 2.0
        </MKTypography>
      </Grid>
    </Container>
  </MKBox>
);

const processSection = (
  <MKBox component="section" my={6} py={6}>
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
      >
        <MKBadge
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          variant="contained"
          color="info"
          badgeContent="Base"
          container
          sx={{ mb: 2 }}
        />

        <MKTypography variant="h2" fontWeight="bold">
          Process
        </MKTypography>

        <MKTypography variant="body1" color="text">
          We can find process everywhere: in the real life, in the industry, in
          the software...
        </MKTypography>
      </Grid>
    </Container>
    <Container sx={{ mt: 6 }}>
      <Grid container spacing={3} sx={{ mb: 10 }}>
        <Grid item xs={12} lg={3} my="auto">
          <MKBox pb={{ xs: 2, lg: 6 }}>
            <MKTypography variant="h3" fontWeight="bold" mb={1}>
              Example
            </MKTypography>

            <MKTypography
              variant="body2"
              fontWeight="regular"
              color="secondary"
              mb={1}
              pr={2}
            >
              Day Activity
            </MKTypography>
          </MKBox>
        </Grid>
        <Grid item xs={12} lg={9}>
          <MKBox
            component="img"
            src={DayActivitiesImg}
            alt="pattern-lines"
            borderRadius="xl"
            my={2}
            /* py={6}*/
            width="100%"
          />
        </Grid>
      </Grid>
    </Container>
    <Container sx={{ mt: 6 }}>
      <MKBox pb={{ xs: 2, lg: 6 }} sx={{ textAlign: 'center' }}>
        <MKTypography
          variant="h3"
          // fontWeight="bold"
          color="spicy"
          mb={1}
          pr={2}
        >
          One way to structure a process is to use the BPMN 2.0 standard.
        </MKTypography>
      </MKBox>
    </Container>
  </MKBox>
);

const dataSection = (
  <MKBox component="section" my={6} py={6}>
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
      >
        <MKBadge
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          variant="contained"
          color="info"
          badgeContent="Data"
          container
          sx={{ mb: 2 }}
        />

        <MKTypography variant="h2" fontWeight="bold">
          How generate Execution Data ?
        </MKTypography>

        <MKTypography variant="body1" color="text">
          On observe ce qui se passe et on enregistre les données. On peut en
          extraire des données communes à chaque activité/processus.
        </MKTypography>
      </Grid>
    </Container>
    {/*    <Container sx={{ mt: 6 }}>
      <Grid container spacing={3} sx={{ mb: 10 }}>
        <Grid item xs={12} lg={3}>
          <MKBox my={2} py={6} pb={{ xs: 2, lg: 6 }}>
            <MKTypography
              variant="body2"
              fontWeight="regular"
              color="primary"
              mb={1}
              pr={2}
            >
              <List>
                <ListItem sx={{ display: 'list-item', listStyle: 'disc' }}>
                  un identifiant: un activité unique qu’on peut désigner
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyle: 'disc' }}>
                  une date d'exécution: la date et l’heure de l’exécution
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyle: 'disc' }}>
                  un nom d’activité: levé, passer un appel, faire du sport
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyle: 'disc' }}>
                  des ressources: lit, bureau, café et aussi des personnes
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyle: 'disc' }}>
                  des données d'entrée: appel téléphonique, question d’un client
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyle: 'disc' }}>
                  des données de sortie: appel téléphonique, réponse à un client
                </ListItem>
              </List>
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Container>*/}

    <Container>
      <Grid
        container
        item
        xs={11}
        spacing={3}
        alignItems="center"
        sx={{ mx: 'auto' }}
      >
        <Grid item xs={12} lg={11} sx={{ ml: 'auto' }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon={<ContentCopy />}
                title="1 identifier"
                description="une activité unique qu’on peut désigner"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon={<ContentCopy />}
                title="1 execution date"
                description="la date et l’heure de l’exécution"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon={<FlipToFront />}
                title="1 activity name"
                description="levé, passer un appel, faire du sport"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon={<PriceChange />}
                title="des ressources"
                description="lit, bureau, café et aussi des personnes"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon={<PriceChange />}
                title="des données d'entrée"
                description="appel téléphonique, question d’un client"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <DefaultInfoCard
                icon={<Devices />}
                title="des données de sortie"
                description="appel téléphonique, réponse à un client"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </MKBox>
);

const paSection = (
  <MKBox component="section" my={6} py={6}>
    <Container>
      <Grid
        container
        item
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
      >
        <MKBadge
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          variant="contained"
          color="info"
          badgeContent="Process Analytics"
          container
          sx={{ mb: 2 }}
        />

        <MKTypography variant="h2" fontWeight="bold">
          Collisition entre 2 mondes
        </MKTypography>

        <MKTypography variant="body1" color="text">
          dans le monde du BPM: on est dans le cadre de processus structuré,
          cadré
        </MKTypography>
        <MKTypography variant="body1" color="text">
          dans le cadre de l’exemple précédent, processus implicite, non
          structuré, la donnée est brute
        </MKTypography>
        <MKTypography variant="body1" color="text">
          data mining: extraction et structuration de la donnée
        </MKTypography>
        <MKTypography variant="body1" color="text">
          process mining: faire parler les données pour faire émergé des
          processus et de nouvelles informations
        </MKTypography>
      </Grid>
    </Container>
  </MKBox>
);

const componentsSection = (
  <MKBox component="section">
    <MKBox py={3}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: 'center', my: 6, mx: 'auto', px: 0.75 }}
        >
          <MKBadge
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            variant="contained"
            color="info"
            badgeContent="Components"
            container
            sx={{ mb: 2 }}
          />

          <MKTypography variant="h2" fontWeight="bold">
            Let's talk about the components!
          </MKTypography>
        </Grid>

        <Grid container item xs={12} lg={9} sx={{ mx: 'auto' }}>
          <Grid item xs={12} md={4}>
            <MKBox p={2} textAlign="center" lineHeight={1} bgColor="primary">
              <MKTypography variant="h5" mt={2} mb={1} color="light">
                Open Source
              </MKTypography>
            </MKBox>
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="space-between"
          >
            <Divider
              orientation="vertical"
              sx={{ display: { xs: 'none', md: 'block' }, mx: 0 }}
            />
            <MKBox p={2} textAlign="center" lineHeight={1}>
              <MKTypography variant="h5" mt={2} mb={1} color="secondary">
                Customizable
              </MKTypography>
            </MKBox>
            <Divider
              orientation="vertical"
              sx={{ display: { xs: 'none', md: 'block' }, ml: 0 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <MKBox p={2} textAlign="center" lineHeight={1} bgColor="secondary">
              <MKTypography variant="h5" mt={2} mb={1} color="light">
                Easy to use
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
    <MKBox py={{ xs: 0, sm: 12 }}>
      Example monitoring fréquence Style par défaut neutre, pour ne pas
      surcharger le rendu et facilite l’affichage des données spécifiques
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: 'hidden' }}
      >
        <MKBox
          borderRadius="xl"
          padding={1}
          component="img"
          src="https://process-analytics.dev/static/what_diagram-fa973be68f79774cdca19ac09815e3c4.png"
          alt="pattern-lines"
          width="100%"
        />
      </MKBox>
      <Container>
        <Grid container item xs={6} mx="auto">
          <MKBox textAlign="center">
            <MKTypography variant="h3" mt={6} mb={3}>
              Available on these technologies
            </MKTypography>

            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="JavaScript">
                  <MKBox
                    component={Link}
                    href="https://github.com/process-analytics/bpmn-visualization-js"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Javascript_Logo.png/640px-Javascript_Logo.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="TypeScript">
                  <MKBox
                    component={Link}
                    href="https://github.com/process-analytics/bpmn-visualization-js"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20210506173343"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Java">
                  <MKBox
                    component={Link}
                    href="https://github.com/process-analytics/bpmn-layout-generators"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="R">
                  <MKBox
                    component={Link}
                    href="https://github.com/process-analytics/bpmn-visualization-R"
                    target="_blank"
                  >
                    <MKBox
                      component="img"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1448px-R_logo.svg.png"
                      width="100%"
                    />
                  </MKBox>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="BPMN 2.0">
                  <MKBox
                    component="img"
                    src="https://www.omg.org/images/logos/BPMN-logo.svg"
                    width="100%"
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  </MKBox>
);

const documentationSection = (
  <Container sx={{ mt: 6 }}>
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({
          functions: { linearGradient, rgba },
          palette: { dark, grey },
        }: Theme) =>
          `${linearGradient(
            rgba(grey?.A700, 0.8),
            rgba(dark.dark, 0.8),
          )}, url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by developers
          </MKTypography>

          <MKTypography variant="h1" color="white" mb={1}>
            User Documentation
          </MKTypography>

          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            From BPMN support, theme customization, diagram navigation, custom
            behavior, overlays, style, and more, you will find the full
            documentation. Play with the style API and you will create unlimited
            combinations for our components.
          </MKTypography>
          <MKTypography
            component={Link}
            href="https://process-analytics.github.io/bpmn-visualization-js/"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& .material-icons-round': {
                fontSize: '1.125rem',
                transform: `translateX(3px)`,
                transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
              },
              '&:hover .material-icons-round, &:focus .material-icons-round': {
                transform: `translateX(6px)`,
              },
            }}
          >
            Read docs <ArrowForward sx={{ fontWeight: 'bold' }} />
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  </Container>
);

const moreSection = (
  <Container>
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <FilledInfoCard
          variant="gradient"
          color="info"
          icon={<Flag />}
          title="Getting Started"
          description="Check the possible ways of working with our product and the necessary files for building your own project."
          action={{
            type: 'external',
            route:
              'https://github.com/process-analytics/bpmn-visualization-js#%EF%B8%8F-usage',
            label: "Let's start",
          }}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <FilledInfoCard
          color="info"
          icon={<Apps />}
          title="Components"
          description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
          action={{
            type: 'internal',
            route: '/components',
            label: 'Read more',
          }}
        />
      </Grid>
    </Grid>
  </Container>
);

const conclusionSection = (
  <MKBox pt={18} pb={6}>
    <Container>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          lg={5}
          ml="auto"
          sx={{ textAlign: { xs: 'center', lg: 'left' } }}
        >
          <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
            Venez participer à notre communauté !
          </MKTypography>

          <MKTypography variant="body1" color="text">
            We deliver the best web products
          </MKTypography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={5}
          my={{ xs: 5, lg: 'auto' }}
          mr={{ xs: 0, lg: 'auto' }}
          sx={{ textAlign: { xs: 'center', lg: 'right' } }}
        >
          <MKSocialButton
            component={Link}
            href="https://twitter.com/intent/tweet?text=Discover%20Process%20Analytics%20components&amp;url=https%3A%2F%2Fprocess-analytics.dev"
            target="_blank"
            color="twitter"
            sx={{ mr: 1 }}
          >
            <FontAwesomeIcon icon={faTwitter} />
            &nbsp;Tweet
          </MKSocialButton>
          <MKSocialButton
            component={Link}
            href="https://www.facebook.com/sharer/sharer.php?u=https://process-analytics.dev/"
            target="_blank"
            color="facebook"
            sx={{ mr: 1 }}
          >
            <FontAwesomeIcon icon={faFacebook} />
            &nbsp;Share
          </MKSocialButton>
          <MKSocialButton
            component={Link}
            href="https://www.pinterest.com/pin/create/button/?url=https://process-analytics.dev/"
            target="_blank"
            color="pinterest"
          >
            <FontAwesomeIcon icon={faPinterest} />
            &nbsp;Pin it
          </MKSocialButton>
        </Grid>
      </Grid>
    </Container>
  </MKBox>
);

const footer = (
  <MKBox pt={6} px={1} mt={6}>
    <DefaultFooter content={paRooterRoutes} />
  </MKBox>
);

const HomePage = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {navbar}
    {header}
    <Card
      sx={{
        p: 2,
        mx: { xs: 2, lg: 3 },
        mt: -8,
        mb: 4,
        backgroundColor: ({ functions: { rgba } }: Theme) => rgba('white', 0.8),
        backdropFilter: 'saturate(200%) blur(30px)',
        boxShadow: ({ boxShadows: { xxl } }: Theme) => xxl,
      }}
    >
      {processSection}
      {dataSection}
      {paSection}
      {componentsSection}
      {documentationSection}
      {moreSection}
      {conclusionSection}
    </Card>
    {footer}
  </ThemeProvider>
);

export default HomePage;
