import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Rating, TextArea, Button } from "semantic-ui-react";
import { rateRide } from "../../actions/rideActions";
import "./ratingCommentForm.css";

const RatingCommentForm = () => {
  const dispatch = useDispatch();
  const { currentRide } = useSelector((state) => state.ride);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  console.log("currentRide", currentRide);

  const handleRatingChange = (e, { rating }) => {
    setRating(rating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Rating:", rating);
    console.log("Comment:", comment);

    setRating(0);
    setComment("");
    dispatch(
      rateRide({
        value: rating,
        comment: comment,
        driverId: currentRide.driver.id,
      })
    );
  };

  return (
    <div className="rating-comment-form-container">
      <h1>Rate Your Driver</h1>
      <Form onSubmit={handleSubmit} className="form">
        <Form.Field className="rating-section">
          <label>Rating:</label>
          <Rating
            icon="star"
            size="massive"
            rating={rating}
            onRate={handleRatingChange}
            maxRating={5}
          />
        </Form.Field>

        <Form.Field className="comment-section">
          <label>Comment:</label>
          <TextArea
            rows="4"
            placeholder="Write your comment here..."
            value={comment}
            onChange={handleCommentChange}
          />
        </Form.Field>

        <Button type="submit" primary>
          Submit Rating
        </Button>
      </Form>
    </div>
  );
};

export default RatingCommentForm;
