import React, {useState} from 'react';
import TopCard from './TopCard/TopCard';
import BotCard from './BotCard/BotCard';

const DUMMY_DATA = [
  {
    username: "Todd",
    age: 21,
  },
  {
    username: "Ted",
    age: 45,
  },

]

const App = () => {

  const [dataObj, setData] = useState(DUMMY_DATA);

  const addUserData = data => {
    setData(prevData => {
      return [data, ...prevData];
    });
  }

  return (
    <div>
      <TopCard onSaveUserData={addUserData}/>
      <BotCard items={dataObj}/>
    </div>
  );
}

export default App;
