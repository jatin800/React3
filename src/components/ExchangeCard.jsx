import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ExchangeCard({ author, image, url, content }) {
  // Check if any data is available
  const hasData = image && author && content && url;
  console.log(hasData);

  return hasData ? (
    <Link to={url}>
      <VStack
        w={52}
        shadow={"lg"}
        p={2}
        borderRadius={"lg"}
        transition={"all 0.5s ease-out"}
        m={4}
        css={{ "&:hover": { transform: "scale(1.1)" } }}>
        {image ? (
          <Image
            src={image}
            w={20}
            h={20}
            objectFit={"contain"}
            alt='Image not Found'
          />
        ) : null}
        {author ? (
          <Heading size={"md"} noOfLines={1}>
            {author}
          </Heading>
        ) : null}
        {content ? <Text noOfLines={1}>{content}</Text> : null}
      </VStack>
    </Link>
  ) : null;
}
