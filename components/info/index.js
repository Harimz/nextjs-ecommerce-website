import React from "react";
import { InfoContainer } from "./styles/info-styles";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Heading, InfoCard, SubHeading, Text } from "../../elements";

const Info = () => {
  return (
    <InfoContainer>
      <InfoCard>
        <MdOutlineLocalShipping className="icon" />
        <Heading size="1.75rem" m="2rem 0">
          Shipping is Free
        </Heading>
        <Text>All orders over $100 will recieve free shipping</Text>
      </InfoCard>
      <InfoCard>
        <MdOutlineLocalShipping className="icon" />
        <Heading size="1.75rem" m="2rem 0">
          Money Back Guarantee
        </Heading>
        <Text>Recieve a full refund within a week of purchase</Text>
      </InfoCard>
      <InfoCard>
        <MdOutlineLocalShipping className="icon" />
        <Heading size="1.75rem" m="2rem 0">
          Secure Payment
        </Heading>
        <Text>Pay securely using PayPal</Text>
      </InfoCard>
      <InfoCard>
        <MdOutlineLocalShipping className="icon" />
        <Heading size="1.75rem" m="2rem 0">
          Support
        </Heading>
        <Text>We are here 24/7 to answer any questions or concerns</Text>
      </InfoCard>
    </InfoContainer>
  );
};

export default Info;
