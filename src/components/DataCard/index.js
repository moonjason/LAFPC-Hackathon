import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Year } from './style';

const useStyles = makeStyles({
  card: {
    minWidth: 240,
    minHeight: 280
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 77,
  },
  pos: {
    marginBottom: 12,
  },
  caption: {
      fontSize: 14,
  }
});

const DataCard = () => {
    const classes = useStyles();
  
    return (
      <>
        <Year>2013</Year>
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography className={classes.title} style={{textAlign: 'center'}}>
                    3,767
                </Typography>
                <Typography className={classes.caption} style={{textAlign: 'center', fontWeight: 'bold'}}>
                    STORES IN LA COUNTY
                </Typography>
            </CardContent>
        </Card>
      </>
    );
}

export default DataCard