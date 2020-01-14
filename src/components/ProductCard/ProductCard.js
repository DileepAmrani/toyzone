import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HoverImage from "react-hover-image"


const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin : "2vh",
    display : "flex",
    textAlign : "center"
  },
  media: {
    height: 300,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 18
  },
 

});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
      <HoverImage
      style={{width : '100%'}}
          src={props.imageURL}
          hoverSrc="https://cdn.shopify.com/s/files/1/0272/0409/1949/products/Kitchen-008-931A-4_275x.jpg?v=1578058727"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.productName}
          </Typography>
          <Typography variant="body2" component="p" className={classes.cardText}>
           Rs: {props.price}
          </Typography>
          <Button variant="contained" color="primary" style={{backgroundColor : '#51BA72',width : 150}}>
        Add to Cart
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
      </Button>
        </CardContent>
      </CardActionArea>

    </Card>
  );
}