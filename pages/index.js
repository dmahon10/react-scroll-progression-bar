import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import React from 'react';
import AppBar from '../components/AppBar';

export default function Index() {
  return (
    <React.Fragment>
      <AppBar/>
      <Container maxWidth={"md"} style={{marginTop: "120px", textAlign: 'center'}}>
        <h1>Scroll Me</h1>
      </Container>
      <Container maxWidth={"md"} style={{marginTop: "100px"}}>
        <Box my={2}>
          {[...new Array(70)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
              Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      </Container>
    </React.Fragment>
  );
}
