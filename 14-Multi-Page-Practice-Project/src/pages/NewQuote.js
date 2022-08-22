import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // enables us to access the browser history and navigate to other pages. AKA programmatic Navigation
  const history = useHistory();
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    // then we use history push to redirect the user. We can also use replace, but then the user can't go to the previous page
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
