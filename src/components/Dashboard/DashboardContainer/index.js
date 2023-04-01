import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Grid } from '@mui/material';
import Container from '@mui/material/Container';
import Card from '../../common_components/Cards';
import Cards from '../../common_components/Cards';

function DashboardContainer() {
  const details = [{
    name: 'Shivam Batra',
    src: "https://avatars.githubusercontent.com/u/41620112?v=4",
    detail: "A data science enthusiast who likes to share knowledge through git projects and blogs."
  }, {
    name: 'Shivam Batra',
    src: "https://avatars.githubusercontent.com/u/41620112?v=4",
    detail: "A data science enthusiast who likes to share knowledge through git projects and blogs."
  }, {
    name: 'Shivam Batra',
    src: "https://avatars.githubusercontent.com/u/41620112?v=4",
    detail: "A data science enthusiast who likes to share knowledge through git projects and blogs."
  }, {
    name: 'Shivam Batra',
    src: "https://avatars.githubusercontent.com/u/41620112?v=4",
    detail: "A data science enthusiast who likes to share knowledge through git projects and blogs."
  }, {
    name: 'Shivam Batra',
    src: "https://avatars.githubusercontent.com/u/41620112?v=4",
    detail: "A data science enthusiast who likes to share knowledge through git projects and blogs."
  }, {
    name: 'Shivam Batra',
    src: "https://avatars.githubusercontent.com/u/41620112?v=4",
    detail: "A data science enthusiast who likes to share knowledge through git projects and blogs."
  }
  ]
  return (
    <div className='container'>
      <Container >
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            details.map((value, index) => {
              return (<Card key={index} src={value.src} name={value.name} detail={value.detail}>

              </Card>)
            })
          }
        </Grid>

      </Container>
    </div>
  );
}

export default DashboardContainer;