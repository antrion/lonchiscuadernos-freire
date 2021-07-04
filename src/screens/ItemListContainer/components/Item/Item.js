import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const id= 'id';

const useStyles = makeStyles(() => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: '25em',
    },
  }));

export const Item = props => {

    const classes = useStyles();

    const { id, title, category, price, pictureUrl } = props;

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
<Button>
  <Link to={'/item/'+id}>Comprar</Link>
</Button>
</CardActions>
</Card>
}