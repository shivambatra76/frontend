import * as React from 'react';
import Card from '@mui/material/Card';
import { CardMedia, CardContent, Typography, Button, CardActionArea, CardActions, Paper, Grid } from '@mui/material';

function Cards(props) {

    return (
        <Grid item xs={4} sm={4} md={4} >

            <Paper elevation={8} className="cardContainer" >
                <Card >
                    <CardActionArea className='cardAction'>
                        <CardMedia
                            className='CardMedia'
                            component="img"
                            alt="batra"
                            src={props.src}
                        />
                        <Typography className='candidate_name' gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>

                    </CardActionArea>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {props.detail}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            View profile
                        </Button>
                    </CardActions>



                </Card>
            </Paper>
        </Grid>

    );
}
export default Cards;