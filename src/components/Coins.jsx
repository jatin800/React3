import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";

export default function Coins() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const btnArr = new Array(10).fill(1);

  const APIKEY = "2dd9296e8dd9432a801bc2eaf2b4d468";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apikey=${APIKEY}`
        );
        setData(data.articles);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
        setError(true);
      }
    };
    fetchData();
  }, []);

  if (error) return <Error message={"Error while Fetching"} />;

  return (
    <Container maxW={"container.xl"} height={"100vh"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"center"}>
            {data.map((data) => (
              <ExchangeCard
                author={data.author}
                image={data.urlToImage}
                url={data.url}
                content={data.content}
                key={data.id}
              />
            ))}
          </HStack>

          <HStack alignItems={"center"} width={"80vw"} margin={"auto"}>
            {btnArr.map((item, index) => (
              <Button variant={"ghost"} color={"black"}>
                {index}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
}
