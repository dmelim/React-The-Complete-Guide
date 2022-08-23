import { Fragment } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "The best quote, maybe ever." },
  { id: "q2", author: "Ted", text: "Literaly, is not literal sometimes." },
];

const QuoteDetails = () => {
  // what is being used as an argument in the route is what is gonna be used in "params.quoteId" so "params.argument"
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>Your quote wasn't Found</p>;
  }

  return (
    <Fragment>
      <h1>Quote Details</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      {/* It dynamically updates the path, using the useRouteMatch hook. 
      If we change the absolute path, the hook automatically updates it, 
      making it easier to work with nested routes */}
      <Route path={`${match.path}/comments`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
