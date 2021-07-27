/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link, Container, Box, Heading, Text, Image, Button, Grid, Input } from 'theme-ui';
import { FaAngleRight, FaPlay } from 'react-icons/fa';
import videoImg from 'assets/video.png'
import React, {useState} from 'react';
import ModalVideo from 'react-modal-video';

import img1 from 'assets/framework/partner-1-1.png';
import img2 from 'assets/framework/partner-1-2.png';
import img3 from 'assets/framework/partner-1-3.png';
import waveLine from 'assets/waveLine.svg'

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <Box sx={styles.banner} id="home" >
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h3">
            Your future signature is here
            </Heading>
            <Text as="p">
            At Q-Sign we offer new way to sign document securely, and lift of tedious paperwork for your team.

            </Text>
            <Box as="form" sx={styles.form}>
              <Box as="label" htmlFor="subscribe" variant="styles.srOnly">
                subscribe
              </Box>
              <Input
                name="subscribe"
                id="subscribe"
                placeholder="Send me Q-Sign demo"
                sx={styles.form.input}
              />
              <Button type="submit" sx={styles.form.button}>
                Interested
              </Button>
            </Box>
          </Box>

          <Box sx={styles.videoBox}>
            <Image src={videoImg} alt="" />
            <Link
              path="/"
              aria-label="video btn"
              onClick={handleClick}
              sx={styles.videoBtn}>
              <FaPlay />
            </Link>
          </Box>

          <Box sx={styles.partner}>
              <Text as="span">Built on:</Text>
              <Box as="div">
                <Image src={img1} alt="" />
              </Box>
              <Box as="div">
                <Image src={img2} alt="" />
              </Box>
              <Box as="div">
                <Image src={img3} alt="" />
              </Box>
            </Box>
        </Grid>
      </Container>
      <ModalVideo channel='youtube' autoplay isOpen={videoOpen} videoId='KpIu7vAIWHg' onClose={()=> setVideoOpen(false)}/>
    </Box>
  );
}

const styles = {
  banner: {
    pt: ['110px', null, null, null, '150px', '200px'],
    pb: ['100px', null, null, null, '60px', null, '80px'],
    backgroundImage: `url(${waveLine})`,
    backgroundRepeat: 'no-repeat',
    overflow: 'hidden',

  },
  container: {
    width: [null, null, null, null, null, null, '1390px'],
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    gridGap: '0',
  },
  content: {
    h3: {
      color: 'black',
      fontWeight: 'bold',
      lineHeight: [1.39],
      letterSpacing: ['-.7px', '-1.5px'],
      mb: ['15px', null, null, null, '20px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, '90%', '100%', '540px'],
      fontSize: [6, null, null, '36px', null, '55px', 45],
    },
    p: {
      fontSize: [1, null, null, 2, null, 3],
      lineHeight: ['26px', null, null, null, 2.33],
      color: 'text_secondary',
      mb: ['20px', null, null, null, null, '30px'],
      width: ['100%'],
      maxWidth: ['100%', null, null, null, null, '410px'],
      br: {
        display: ['none', null, null, null, 'inherit'],
      },
    },
  },
  form: {
    mb: ['30px', null, null, null, null, '60px'],
    display: ['flex'],
    width: ['500px'],
    input: {
      borderRadius: ['4px'],
      backgroundColor: '#fff',
      width: ['240px', null, null, null, '315px', null, '500px'],
      height: ['45px', null, null, '55px', null, null, '55px'],
      padding: ['0 15px', null, null, '0 25px'],
      fontSize: [1, null, null, 2],
      border: 'none',
      outline: 'none',
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',

      '&:focus': {
        borderColor: 'none',
        boxShadow: t => `0 0 0 2px #1B9CFC `,
        outline: 'none',
      }
    },
    button: {
      fontSize: [1, null, null, null, 2, '20px'],
      borderRadius: ['4px'],
      padding: ['0 15px'],
      ml: ['10px'],
      width: ['100px', null, null, null, '180px'],
      backgroundColor: '#1B9CFC',
      '&:hover': {
        boxShadow: 'none',
        transform: 'scale(1.02)',
      }
    },
  },
  videoBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '>img': {
      borderRadius: '10px',
      display: 'flex',
      width: ['100%', null, null, null, '80%', null, '100%'],
    },
  },
  video: {
    pt: [80, null, null, null, null, null, 110],
    textAlign: 'center',
    h3: {
      margin: 0,
      color: 'black',
      fontSize: [5, null, null, '21px', '36px', '32px', 8],
      letterSpacing: ['-0.5px', null, null, null, null, '-1.5px'],
      fontWeight: 'bold',
      lineHeight: [1.6, null, null, 1.25],
    },
    p: {
      fontSize: ['15px', null, null, '17px'],
      lineHeight: ['26px', null, null, 2],
      mt: ['10px', null, null, null, '25px'],
      mb: ['0px', null, null, null, '20px'],
    },
    br: {
      display: ['none', null, null, 'inherit'],
    },
  },
  videoBtn: {
    width: [50, null, 50, 66, 80],
    height: [50, null, 50, 66, 80],
    borderRadius: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    transition: '500ms ease',
    svg: {
      fontSize: ['20px', null, '15px', null, '20px', '25px'],
      color: ['primary'],
    },
    '&:hover': {
      backgroundColor: 'primary',
      svg: {
        color: '#fff',
      },
    },
  },
  partner: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    mb: ['40px'],
    '> div + div': {
      ml: ['10px', null, null, '20px', null, '30px'],
    },
    img: {
      display: 'flex',
      height: '40px',
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: '#566272',
      lineHeight: [1],
      opacity: 0.6,
      display: 'block',
      mb: ['20px', null, null, null, '0px'],
      mr: [null, null, null, null, '20px'],
      flex: ['0 0 100%', null, null, null, '0 0 auto'],
    },
  },
};
