import Quote from "./api/components/Quote";
import getRandomQuote from "./lib/getRandomQuote";

export default async function Home() {
  const randomQuote = await getRandomQuote();

  return <Quote {...randomQuote} />;
}
