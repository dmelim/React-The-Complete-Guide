import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";
// if something is imported only to be used in server side functions nextjs will detect it and not show it to the client side
import { MongoClient } from "mongodb";
import { Fragment } from "react";

// The Head component makes it possible to add title and meta information. Very good for search engines.
const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="descriptions"
          content="Browse a hige list of higly active React meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// GetStaticProps vs getServerSideProps, static props is faster, only use getServerSideProps if you need the req object and if the data changes multiple times per second

/*// Only runs on the server, runs for every incoming request
export async function getServerSideProps(context) {
  const req = context.req;
  const res = context.res;

  // fetch data from an API

  return {
    props: DUMMY_MEETUPS,
  };
}*/
// the name of this function is reserved in nextJS, it looks for this function first before rendering the component, this function can be async.
export async function getStaticProps() {
  // we can do anything inside here, but we need to return an object. The code in here is not exposed to the client.
  const client = await MongoClient.connect(
    "mongodb+srv://Melins:8hVpy33t6bbVxRWL@cluster0.ssldrgr.mongodb.net/metups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // we can add this property to this function return object to make it refetch the data, the number is in seconds
    revalidate: 10,
  };
}

export default HomePage;
