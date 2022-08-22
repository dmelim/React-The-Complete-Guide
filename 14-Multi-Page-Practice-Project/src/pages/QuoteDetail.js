import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "The best quote, maybe ever." },
  { id: "q2", author: "Ted", text: "Literaly, is not literal sometimes." },
];

const QuoteDetails = () => {
  // what is being used as an argument in the route is what is gonna be used in "params.quoteId" so "params.argument"
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>Your quote wasn't Found</p>;
  }

  return (
    <Fragment>
      <h1>Quote Details</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
