import React, { useState, useEffect } from "react";
import { ClearButton, GreenSpinner, PrimaryBtn } from "../../elements";
import {
  InputTextContainer,
  OptionsContainer,
  TextInput,
} from "./styles/product-info-styles";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks";
import UserCard from "./user-card";
import axios from "axios";

const Review = ({ product }) => {
  const router = useRouter();
  const [writeReview, setWriteReview] = useState(false);
  const [userReview, setUserReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reviewList, setReviewList] = useState([]);
  const { session } = useAuth();

  const setReviewHandler = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);

    console.log(userReview);

    const { data } = await axios.post(
      "/api/product/reviews",
      { userReview, product },
      config
    );

    if (data) {
      setIsLoading(false);
      setWriteReview(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const getReviewList = async () => {
      const { data } = await axios.get(`/api/product/reviews/${product}`, {
        signal: controller.signal,
      });

      setReviewList(data);
    };

    getReviewList();

    return () => controller.abort();
  }, [isLoading]);

  return (
    <>
      {writeReview ? (
        <InputTextContainer>
          <TextInput
            placeholder="Write a review"
            onChange={({ target }) => setUserReview(target.value)}
          />

          <OptionsContainer>
            <PrimaryBtn p="0.5rem" onClick={setReviewHandler}>
              Write a review
            </PrimaryBtn>
            <ClearButton onClick={() => setWriteReview(false)}>
              Cancel
            </ClearButton>
          </OptionsContainer>
        </InputTextContainer>
      ) : (
        <ClearButton
          onClick={() =>
            session ? setWriteReview(true) : router.replace("/login")
          }
        >
          Write A Review
        </ClearButton>
      )}

      {isLoading ? (
        <GreenSpinner />
      ) : (
        reviewList.map((review) => (
          <UserCard
            key={review._id}
            username={review.username}
            text={review.userReview}
            user={review.user}
          />
        ))
      )}
    </>
  );
};

export default Review;
