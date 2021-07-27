import React from 'react';
import { Box, Heading, Text } from 'theme-ui';

const BlockTitle = (props) => {
  return (
    <Box variant="blockTitle"  sx={styles.blockTitle}>
      <Text as="p" sx={styles.blockTitle.p}>{props.slogan}</Text>
      <Heading as="h3" sx={styles.blockTitle.p}>{props.title}</Heading>
    </Box>
  );
};

export default BlockTitle;

const styles ={
  blockTitle: {
    textAlign: 'center',
    pb: '40px',
    p:{
      fontSize: '18px',
      color: '#1B9CFC',
    },
    h3:{
      fontSize: '30px',
      color: '#000'
    }
},
}