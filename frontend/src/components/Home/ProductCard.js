import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import useStyles from "./CartStyle";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
} from "@material-ui/core";


const ProductCard = ({ product }) => {

    const classes = useStyles();

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 19 : 23,
        value: product.ratings,
        isHalf: true,
    };

    return (
        <Link className={classes.linkBtn} to={`/product/${product._id}`}>

            <Card className={classes.root}>

                <CardMedia
                    className={classes.media}
                    image={product.images[0].url}
                    title={product.name}
                />

                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="h6">
                        <div className={classes.cardName}>
                            {product.name}
                        </div>
                    </Typography>

                    <Typography gutterBottom variant="subtitle1" component="h6">
                        <div className={classes.cardPrice}>
                            Rs: {product.price}
                        </div>
                    </Typography>
                </CardContent>

                <CardActions className={classes.cardActions}>
                    <Typography gutterBottom variant="body2" component="h6">
                        <div className={classes.ratingView}>
                            <ReactStars {...options} />&nbsp;
                            ({product.numOfReviews})
                        </div>
                    </Typography>
                </CardActions>
            </Card>
        </Link>
    );
};

export default ProductCard;




