import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import {ItemCount} from './components/ItemCount/ItemCount';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export const Item = props => {

    const classes = useStyles();

    const { id, title, price, pictureUrl } = props;

return <Card>
<CardActionArea className={classes.root}>
<CardMedia
  className={classes.media}
  image={pictureUrl}
  title={id}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="h2">
    {title}
  </Typography>
  <Typography variant="body2" color="textSecondary" component="p">
    ${price}
  </Typography>
</CardContent>
</CardActionArea>
<CardActions>
<ItemCount stock={5} initial={1} /> 
</CardActions>
</Card>

}