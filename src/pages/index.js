import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="NextJS Landing Page" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          <WorkFlow />
          <Package />
          <TeamSection />
        </Layout>
    </ThemeProvider>
  );
}

/*TODO:
  - How Q-Sign work? -> a seperate page
  - blogs -> can be added to the end of homepage
  - pricing plan
  - get started -> link with Q-sign products
  - SEO section
*/
