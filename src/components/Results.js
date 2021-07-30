import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {
  makeStyles,
  Typography,
  Grid,
  CardActions,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    page: {
      background: '#f9f9f9',
    },
  };
});

const Results = () => {
  const results = useLocation();
  const classes = useStyles();

  return (
    <Container className={classes.page}>
      <Grid container spacing={2}>
        {results.state.totalItems !== 0
          ? results.state.items.map((r) => (
              <Grid item={true} xs={12} md={6}>
                <Card key={r.id}>
                  <CardHeader
                    title={
                      <Typography variant='subtitle2'>
                        {`Title: ${r.volumeInfo.title}`}
                      </Typography>
                    }
                    subheader={`Published date: ${
                      r.volumeInfo.publishedDate !== undefined
                        ? r.volumeInfo.publishedDate
                        : 'n/a'
                    }`}
                  />

                  <CardMedia
                    style={{
                      height: '260px',
                      width: '150px',
                      marginLeft: '205px',
                    }}
                    title='leo'
                    image={r.volumeInfo.imageLinks.thumbnail}
                  />

                  <CardContent style={{ height: '100px' }}>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                      marginBottom='2022px'
                    >
                      {r.volumeInfo.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : null}
      </Grid>
    </Container>
  );
};

export default Results;
