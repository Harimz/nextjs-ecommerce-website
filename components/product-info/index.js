import React, { useState } from "react";
import { ClearButton, Heading, Text } from "../../elements";
import { useAuth } from "../../hooks";
import {
  List,
  ListItem,
  ProductInfoContainer,
  Tab,
  TabsContainer,
} from "./styles/product-info-styles";
import { useRouter } from "next/router";

const ProductInfo = ({ product }) => {
  const { session } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  const entries = Object.entries(product.specs);

  const activeTabHandler = (x) => {
    setActiveTab(x);
  };

  console.log(entries);

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
        <ClearButton onClick={() => (session ? "" : router.replace("/login"))}>
          Ask Question
        </ClearButton>
      )}
      {activeTab === 2 && (
        <ClearButton onClick={() => (session ? "" : router.replace("/login"))}>
          Write A Review
        </ClearButton>
      )}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
