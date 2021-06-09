import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {ItemCount} from '../ItemCount/ItemCount';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const ItemListConteiner = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://lolitacuadernos.com.ar/wp-content/uploads/2016/11/15181283_666650983509095_5432982892295517881_n.jpg"
          title="Cuaderno cocido"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cuaderno
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Cuaderno cocido a mano
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ItemCount stock="5" initial="1" /> 
      </CardActions>
    </Card>
  );
}