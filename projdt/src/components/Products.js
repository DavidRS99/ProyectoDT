import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {AddShoppingCart} from '@material-ui/icons';
import accounting from "accounting";

//   action:{
//     marginTop: "1rem",
//   },
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },

  }));

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
          <Typography
            className={classes.action}
            variant='h5'
            color='textSecondary'
          >

            {accounting.formatMoney(50)}
         {/* {accounting.formatMoney(price,"$")}  */}
          </Typography>
        }
        title="Nike Shoes"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Nike shoes"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            Running shoes  
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(4)
            .fill()
            .map((_,i)=>(
                <p>&#11088;</p>
            ))
        }
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            "Zapatillas deportivas para correr"
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
