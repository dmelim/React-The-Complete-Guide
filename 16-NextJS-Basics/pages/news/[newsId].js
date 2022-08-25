import { useRouter } from "next/router";

// square brackets are used to signal next that we will have a dinamic page, then we give an identifier between the square brackets to use later.

const detailsPage = () => {
  const router = useRouter();
  // this object stores the parameters that we defined between square brackets
  const newsId = router.query.newsId;

  return <h1>The Details Page</h1>;
};

export default detailsPage;
