import React, { useState } from "react";
import { ClearButton, Heading, PrimaryBtn, Text } from "../../elements";
import { useAuth } from "../../hooks";
import {
  InputTextContainer,
  List,
  ListItem,
  OptionsContainer,
  ProductInfoContainer,
  Tab,
  TabsContainer,
  TextInput,
} from "./styles/product-info-styles";
import { useRouter } from "next/router";

const ProductInfo = ({ product }) => {
  const { session } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [askQuestion, setAskQuestion] = useState(false);
  const [writeReview, setWriteReview] = useState(false);
  const [userInputs, setUserInputs] = useState({
    question: "",
    review: "",
  });

  const entries = Object.entries(product.specs);

  const activeTabHandler = (x) => {
    setActiveTab(x);
  };

  return (
    <ProductInfoContainer>
      <TabsContainer>
        <Tab onClick={() => activeTabHandler(0)} active={activeTab === 0}>
          Specifications
        </Tab>
        <Tab onClick={() => activeTabHandler(1)} active={activeTab === 1}>
          Questions
        </Tab>
        <Tab onClick={() => activeTabHandler(2)} active={activeTab === 2}>
          Reviews
        </Tab>
      </TabsContainer>
      {activeTab === 0 && (
        <List>
          {entries.map((item) => (
            <ListItem key={item._id}>
              <Heading size="1.5rem">{item[0]}</Heading>
              <Text>{item[1]}</Text>
            </ListItem>
          ))}
        </List>
      )}
      {activeTab === 1 && (
        <>
          {askQuestion ? (
            <InputTextContainer>
              <TextInput
                placeholder="Write a question"
                onChange={({ target }) =>
                  setUserInputs((state) => ({
                    ...state,
                    question: target.value,
                  }))
                }
              />

              <OptionsContainer>
                <PrimaryBtn p="0.5rem">Ask Question</PrimaryBtn>
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
        </>
      )}
      {activeTab === 2 && (
        <>
          {writeReview ? (
            <InputTextContainer>
              <TextInput
                placeholder="Write a review"
                onChange={({ target }) =>
                  setUserInputs((state) => ({
                    ...state,
                    review: target.value,
                  }))
                }
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
              Ask Question
            </ClearButton>
          )}
        </>
      )}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
