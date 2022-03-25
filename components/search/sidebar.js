import React, { useState } from "react";
import { Heading, Input, PrimaryBtn } from "../../elements";
import { Range, RangeInput, SliderValue } from "./styles/range-styles";
import {
  CategoryList,
  CategoryWrapper,
  Icon,
  ListItem,
  RangeWrapper,
  SidebarContainer,
} from "./styles/sidebar-styles";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [displaySlider, setDisplaySlider] = useState(false);
  const [displayList, setDisplayList] = useState(true);
  const router = useRouter();
  const { query } = router;

  const categories = [
    "Console",
    "Laptop",
    "Storage",
    "Headphones",
    "Accessories",
    "Monitor",
  ];

  let perc = sliderValue / 50 + "%";

  const updateSearchQuery = (category) => {
    if (category.toLowerCase() === query.category) {
      router.push({
        query: {},
      });
    } else {
      router.push({
        query: { category: category.toLowerCase() },
      });
    }
  };

  return (
    <SidebarContainer>
      <Heading size="1.25rem" m="0 0 1rem 0">
        Maximum Price
      </Heading>

      <Range>
        <SliderValue style={{ left: perc }} displayValue={displaySlider}>
          <span>{sliderValue}</span>
        </SliderValue>

        <RangeInput
          type="range"
          min="0"
          max="5000"
          step="1"
          onChange={({ target }) => {
            setSliderValue(target.value);
            setDisplaySlider(true);
          }}
          onMouseOut={() => setDisplaySlider(false)}
          defaultValue="5000"
        />
      </Range>

      <RangeWrapper>
        <Input
          type="number"
          onChange={({ target }) => setSliderValue(target.value)}
          value={sliderValue}
        />
        <PrimaryBtn
          onClick={() => {
            router.replace({
              query: { ...router.query, maxPrice: sliderValue },
            });
          }}
        >
          Apply
        </PrimaryBtn>
      </RangeWrapper>

      <CategoryWrapper>
        <Heading size="1.25rem">Category</Heading>

        <Icon onClick={() => setDisplayList((state) => !state)}>
          {displayList ? <FaMinus /> : <FaPlus />}
        </Icon>
      </CategoryWrapper>

      <CategoryList displayList={displayList}>
        {categories.map((category, i) => (
          <ListItem
            key={i}
            onClick={() => {
              updateSearchQuery(category);
            }}
            selected={category.toLowerCase() === query.category}
          >
            {category}
          </ListItem>
        ))}
      </CategoryList>
    </SidebarContainer>
  );
};

export default Sidebar;
