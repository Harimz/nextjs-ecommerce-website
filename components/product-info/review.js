import React, { useState } from "react";
import { ClearButton, PrimaryBtn } from "../../elements";
import {
  InputTextContainer,
  OptionsContainer,
  TextInput,
} from "./styles/product-info-styles";
import { useRouter } from "next/router";
import { useAuth } from "../../hooks";

const Review = () => {
  const router = useRouter();
  const [writeReview, setWriteReview] = useState(false);
  const [userReview, setUserReview] = useState("");
  const { session } = useAuth();

  return (
    <>
      {writeReview ? (
        <InputTextContainer>
          <TextInput
            placeholder="Write a review"
            onChange={({ target }) => setUserReview(target.value)}
          />

          <OptionsContainer>
            <PrimaryBtn p="0.5rem">Write a review</PrimaryBtn>
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
    </>
  );
};

export default Review;
