import React, { useEffect } from 'react';
import "./Home.css";
import ProductCard from './ProductCard.js';
import { Container } from "react-bootstrap";
import { Grid } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {

    const alert = useAlert();

    const dispatch = useDispatch();
    const { products, productsCount, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProduct());
    }, [dispatch, error, alert]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <MetaData title="MA Shop" />

                    <Container fluid className="mainContainer">
                        <Grid container justifyContent="center"
                            spacing={2}>

                            {products && products.map(product => (

                                <Grid
                                    key={
                                        product._id
                                    }
                                    item
                                    xs={6}
                                    sm={6}
                                    md={3}
                                    lg={2}>
                                    <ProductCard product={product} />
                                </Grid>
                            ))}

                        </Grid>
                    </Container>
                </>
            )}
        </>
    )
};

export default Home;