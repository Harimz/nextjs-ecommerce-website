import React, { useState } from "react";
import { Heading, Text } from "../../elements";
import {
  List,
  ListItem,
  ProductInfoContainer,
  Tab,
  TabsContainer,
} from "./styles/product-info-styles";
import Review from "./review";
import Question from "./question";
import { useRouter } from "next/router";

const ProductInfo = ({ product }) => {
  const [activeTab, setActiveTab] = useState(0);
  const router = useRouter();
  const { pid } = router.query;

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
      {activeTab === 1 && <Question product={pid} />}
      {activeTab === 2 && <Review product={pid} />}
    </ProductInfoContainer>
  );
};

export default ProductInfo;
