import { Fragment } from "react";
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

export default MeetupDetails;
