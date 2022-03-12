import React, { useState, useEffect } from "react";
import axios from "axios";
import { ClearButton, PrimaryBtn } from "../../elements";
import { useAuth } from "../../hooks";
import {
  InputTextContainer,
  OptionsContainer,
  TextInput,
} from "./styles/product-info-styles";

const Question = ({ product }) => {
  const [askQuestion, setAskQuestion] = useState(false);
  const [userQuestion, setUserQuestion] = useState("");
  const [questionList, setQuestionList] = useState([]);
  const [questionLoading, setQuestionLoading] = useState();
  const { session } = useAuth();

  const setQuestionHandler = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/product/questions",
      { userQuestion, product },
      config
    );
  };

  useEffect(() => {
    const getQuestionList = async () => {
      const { data } = await axios.get(`/api/product/questions/${product}`);

      setQuestionList(data);
    };

    getQuestionList();

    return () => {};
  }, [setQuestionHandler]);

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

      {questionList.map((question) => (
        <p>{question.userQuestion}</p>
      ))}
    </>
  );
};

export default Question;
