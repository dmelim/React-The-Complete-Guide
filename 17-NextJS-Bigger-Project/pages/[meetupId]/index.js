import MeetUpDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const MeetupDetails = (props) => {
  return (
    <Fragment>
      {/* We can also input dynamic values into the Head Element */}
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="descriptions" content={props.meetupData.description} />
      </Head>
      <MeetUpDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

// This function is needed when using getStaticProps and we are using a dynamic path/pages
export async function getStaticPaths() {
  // we need to return every possible meetupId that can be generated, so all possible url's
  const client = await MongoClient.connect(
    "mongodb+srv://Melins:8hVpy33t6bbVxRWL@cluster0.ssldrgr.mongodb.net/metups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

// we cant use react hooks inside here
export async function getStaticProps(context) {
  // we can do anything inside here, but we need to return an object
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://Melins:8hVpy33t6bbVxRWL@cluster0.ssldrgr.mongodb.net/metups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const selectedMeetup = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    // we can add this property to this function return object to make it refetch the data, the number is in seconds
    revalidate: 10,
  };
}

export default MeetupDetails;
