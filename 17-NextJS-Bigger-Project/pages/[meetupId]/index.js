import MeetUpDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetUpDetail
      image="https://miro.medium.com/max/17530/1*w6zDOvoXi6LMDe4n2N0UwQ.jpeg"
      title="A first Meetup"
      address="The place"
      description="This is the fisrt Meeting"
    />
  );
};

// This function is needed when using getStaticProps and we are using a dynamic path/pages
export async function getStaticPaths() {
  // we need to return every possible meetupId that can be generated, so all possible url's
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

// we cant use react hooks inside here
export async function getStaticProps(context) {
  // we can do anything inside here, but we need to return an object
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: "m1",
        image:
          "https://miro.medium.com/max/17530/1*w6zDOvoXi6LMDe4n2N0UwQ.jpeg",
        title: "A first Meetup",
        address: "The place",
        description: "This is the fisrt Meeting",
      },
    },
    // we can add this property to this function return object to make it refetch the data, the number is in seconds
    revalidate: 10,
  };
}

export default MeetupDetails;
