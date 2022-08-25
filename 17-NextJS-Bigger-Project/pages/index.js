import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://miro.medium.com/max/17530/1*w6zDOvoXi6LMDe4n2N0UwQ.jpeg",
    address: "Le address un",
    description: "This is the first meetp",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://enjoy.church/au/wp-content/uploads/2019/12/shutterstock_652935847.jpg",
    address: "Le address dois",
    description: "This is the second meetp",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// the name of this function is reserved in nextJS, it looks for this function first before rendering the component, this function can be async.

export async function getStaticProps() {
  // we can do anything inside here, but we need to return an object
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // we can add this property to this function return object to make it refetch the data, the number is in seconds
    revalidate: 10,
  };
}

export default HomePage;
