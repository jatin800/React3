import { Box, Container, HStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

export default function CoinDetails() {
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const [Coin, setCoin] = useState({});
  const { id } = useParams();
  const APIKEY = "2dd9296e8dd9432a801bc2eaf2b4d468";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?${id}=1&CMC_PRO_API_KEY=${APIKEY}`
        );
        console.log(response);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container maxW={"container.xl"} padding={"2rem"}>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Box borderWidth={"2"} width={"full"}></Box>
        </>
      )}
    </Container>
  );
}
