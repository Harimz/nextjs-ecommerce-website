import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClearButton, GreenSpinner, PrimaryBtn } from "../../elements";
import { useAuth } from "../../hooks";
import {
  InputTextContainer,
  OptionsContainer,
  TextInput,
} from "./styles/product-info-styles";
import UserCard from "./user-card";
import { useRouter } from "next/router";

const Question = ({ product }) => {
  const [askQuestion, setAskQuestion] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { session } = useAuth();
  const router = useRouter();

  const setQuestionHandler = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);

    const { data } = await axios.post(
      "/api/product/questions",
      { userQuestion, product },
      config
    );

    if (data) {
      setIsLoading(false);
      setAskQuestion(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const getQuestionList = async () => {
      const { data } = await axios.get(`/api/product/questions/${product}`, {
        signal: controller.signal,
      });

      setQuestionList(data);
    };

    getQuestionList();

    return () => controller.abort();
  }, [isLoading]);

  return (
    <>
      {askQuestion ? (
        <InputTextContainer>
          <TextInput
            placeholder="Write a question"
            onChange={({ target }) => setUserQuestion(target.value)}
          />

          <OptionsContainer>
            <PrimaryBtn p="0.5rem" onClick={setQuestionHandler}>
              Ask Question
            </PrimaryBtn>
            <ClearButton onClick={() => setAskQuestion(false)}>
              Cancel
            </ClearButton>
          </OptionsContainer>
        </InputTextContainer>
      ) : (
        <ClearButton
          onClick={() =>
            session ? setAskQuestion(true) : router.replace("/login")
          }
        >
          Ask Question
        </ClearButton>
      )}

      {isLoading ? (
        <GreenSpinner />
      ) : (
        questionList.map((question) => (
          <UserCard
            key={question._id}
            username={question.username}
            text={question.userQuestion}
            user={question.user}
          />
        ))
      )}
    </>
  );
};

export default Question;
