/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';    //contain path and label for nav menu

export default function Header({ className }) {
  //sx is styles from theme-ui
  return (
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={'https://q-sign.tech/wp-content/uploads/2021/02/Q-signlogo.svg'}/>
          <Flex sx={styles.nav} as="nav">
            {menuItems.map((el,index) => (
              <Link
                activeClass="active" 
                to={el.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}>
                {el.label}
                </Link>
            ))}
          </Flex>
            <Button 
            className="donate__btn" 
            variant="buttons.secondary" 
            sx={styles.headerBtn} 
            aria-label="Get started">
            Get started
            </Button>
          
          <MobileDrawer menuItems={menuItems} ></MobileDrawer>
          
        </Container>
      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  headerBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    border: '2px solid',
    borderColor: '#1B9CFC',
    color: '#1B9CFC',
    padding: '8px 24px',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
      color: '#1B9CFC',
      backgroundColor: "#fff",
      borderColor: '#1B9CFC',
      
    },
  },
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },
};
