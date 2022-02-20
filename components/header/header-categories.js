import React, { useState } from "react";
import { CATEGORIES } from "../../constants";
import {
  BrowseMenu,
  BrowseMenuItem,
  BrowseMenuItemBox,
} from "./styles/categories-styles";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BrowseContainer, MainHeading, ThinHeading } from "../../elements";

const HeaderCategories = () => {
  const [isHovering, setIsHovering] = useState(-1);

  return (
    <BrowseContainer>
      <MainHeading>Browse Categories</MainHeading>

      <BrowseMenu>
        {CATEGORIES.map((category, i) => (
          <BrowseMenuItem
            key={i}
            onMouseOver={() => setIsHovering(i)}
            onMouseOut={() => setIsHovering(-1)}
          >
            <MdCheckBoxOutlineBlank className="square" />

            <Link passHref href={`/categories/${category.name.toLowerCase()}`}>
              <ThinHeading>{category.name}</ThinHeading>
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
