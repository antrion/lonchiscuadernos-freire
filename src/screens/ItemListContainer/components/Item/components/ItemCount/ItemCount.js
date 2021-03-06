import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .MuiBadge-root': {
      marginRight: theme.spacing(4),
    },
  },
}));

   

export const ItemCount = props => {

  const { stock, initial } = props;
  const classes = useStyles();
  const [count, setCount] = useState(initial);

  return <div className={classes.root}>
      <div>
      <input tipe="text" value={count}/>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count < stock ? count + 1 : stock);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        {stock === 0 ? 
        <h4>Sin Stock</h4> : 
        <Button disabled={count < 1} onClick={() => props.changeQuantity(count)} >Agregar al carrito</Button>}
      </div>
    </div>
}