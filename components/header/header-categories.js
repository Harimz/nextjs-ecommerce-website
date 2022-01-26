import React, { useState } from "react";
import { CATEGORIES } from "../../constants";
import { Heading, SubHeading } from "../../elements/headings";
import {
  BrowseContainer,
  BrowseMenu,
  BrowseMenuItem,
  BrowseMenuItemBox,
} from "./styles/categories-styles";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const HeaderCategories = () => {
  const [isHovering, setIsHovering] = useState(-1);

  return (
    <BrowseContainer>
      <Heading size="1.75rem">Browse Categories</Heading>

      <BrowseMenu>
        {CATEGORIES.map((category, i) => (
          <BrowseMenuItem
            key={i}
            onMouseOver={() => setIsHovering(i)}
            onMouseOut={() => setIsHovering(-1)}
          >
            <MdCheckBoxOutlineBlank className="square" />

            <Link passHref href={`/categories/${category.name.toLowerCase()}`}>
              <SubHeading>{category.name}</SubHeading>
            </Link>

            <BrowseMenuItemBox isVisible={isHovering === i}>
              {category.subCategories.map((item, i) => (
                <Link
                  key={i + 2}
                  passHref
                  href={`/categories/${category.name.toLowerCase()}/${item.toLowerCase()}`}
                >
                  <li>
                    <FaLongArrowAltRight />
                    {item}
                  </li>
                </Link>
              ))}
            </BrowseMenuItemBox>
          </BrowseMenuItem>
        ))}
      </BrowseMenu>
    </BrowseContainer>
  );
};

export default HeaderCategories;
