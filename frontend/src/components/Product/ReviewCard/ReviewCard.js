import React from 'react';
import ReactStars from 'react-rating-stars-component';
import reviewUserPic from "../../../images/Profile.png";
import {
    Card,
} from "react-bootstrap";
import "./ReviewCard.css";



const ReviewCard = ({ review }) => {

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: review.rating,
        isHalf: true,
    };

    return (
        <Card className="reviewCard justify-content-center align-items-center text-center">
            <Card.Img className='cardImg' variant="top" src={reviewUserPic} alt={review.name} />
            <Card.Body >
                <Card.Title className='cardName'>{review.name}</Card.Title>
                <Card.Title className='cardRating'>
                    <ReactStars {...options} />
                </Card.Title>
                <Card.Text className='cardComment'>{review.comment}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ReviewCard;