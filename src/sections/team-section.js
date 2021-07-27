/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Michael Le',
    title: 'Michael Le',
    designation: 'Founder and Coder',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
]

export default function TeamSection() {
  return (
    <section id="company">
      <Container>
        <SectionHeader slogan="our team" title='The secret of getting ahead is getting started - Mark Twain'/>

        <Grid sx={styles.grid}>
          {data.map((person) =>(
            <TeamCard 
            key={person.id} 
            src={person.imgSrc}
            name={person.title} 
            altText={person.altText}
            title={person.title}
            designation={person.designation}
            social={person.socialProfile}/>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'center',
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
