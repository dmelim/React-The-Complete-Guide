// In next if we create a folder inside the pages folder it acts as a route. Then the index file inside it will be the rendered page inside it.
import Link from "next/link";
import { Fragment } from "react";

const News = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/Nextjs-good">NextJs is really good.</Link>
        </li>
        <li>NextJs is not only really good, it's awesome</li>
      </ul>
    </Fragment>
  );
};

export default News;
