import React, { useEffect } from "react";
import "./ProductDetails.css";
import {
    Container,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button,
    Image,
} from "react-bootstrap";
import { Grid } from "@material-ui/core";
import ReactStars from 'react-rating-stars-component';
import Carousel from "react-material-ui-carousel";
import ReviewCard from "../ReviewCard/ReviewCard";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from "../../../actions/productAction";
import { useParams } from "react-router-dom";
import Loader from "../../layout/Loader/Loader";
import { useAlert } from "react-alert";

const ProductDetails = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const { id } = useParams();
    const { product, loading, error } = useSelector((state) => state.productDetails);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        dispatch(getProductDetails(id));
    }, [dispatch, id]);


    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: product.ratings,
        isHalf: true,
    };

    return (
        <>

            {loading ? (
                <Loader />
            ) : (
                <>
                    <Container className="productContainer align-items-center">
                        <Row>
                            <Col className="mt-5" md={4}>
                                <Carousel>
                                    {product.images && product.images.map((item, i) => (
                                        <Image
                                            className="CarouselImage"
                                            key={i}
                                            src={item.url}
                                            alt={`${i} Slide`}
                                        />
                                    ))}
                                </Carousel>
                            </Col>

                            <Col className="productRight mt-5 justify-content-center align-items-center" md={{ span: 4, offset: 2 }}>
                                <ListGroup variant="flush">

                                    <ListGroupItem>
                                        Name {product.name}
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        Product # {product._id}
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        <div className="productRating">
                                            <span><ReactStars {...options} /></span>
                                            <span style={{ fontSize: "16px" }}>({product.numOfReviews} Reviews)</span>
                                        </div>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        Price : {product.price}
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        <div className="productCount">
                                            <Button className="btn btn-dark countBtn">-</Button>
                                            <input className="countInput" type="number" placeholder="0" />
                                            <Button className="btn btn-dark countBtn">+</Button>
                                        </div>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        Status :  in stock
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        {product.description}
                                    </ListGroupItem>

                                    <ListGroupItem>
                                        <Button className="btn btn-dark">
                                            Add to cart&nbsp;&nbsp;
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Button>
                                    </ListGroupItem>

                                </ListGroup>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="reviewContainer">

                        <Row className="justify-content-center text-center align-items-center">
                            <Col md={12} className="mb-5">
                                <h3>Reviews</h3>
                            </Col>
                        </Row>


                        <Grid container justifyContent="center" spacing={2}>

                            {product.reviews && product.reviews[0] ? (
                                <>
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        lg={3}>

                                        {product.reviews &&
                                            product.reviews.map((review) => (
                                                <ReviewCard key={review._id} review={review} />

                                            ))}
                                    </Grid>
                                </>


                            ) : (
                                <p className="noReviews">No Reviews Yet</p>
                            )}

                        </Grid>
                    </Container>

                </>
            )}
        </>
    );
};

export default ProductDetails;
