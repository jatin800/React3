import { Container, HStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import Error from "./Error";
export default function Exchanges() {
  const APIKEY = "2dd9296e8dd9432a801bc2eaf2b4d468";
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apikey=${APIKEY}`
        );
        setExchanges(data.articles);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);

  if (error) return <Error message={"Error While Fetching"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"}>
            {exchanges.map((item) => (
              <ExchangeCard
                author={item.author}
                image={item.urlToImage}
                url={item.url}
                content={item.content}
                key={item.id}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
}
