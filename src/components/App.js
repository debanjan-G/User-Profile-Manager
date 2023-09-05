import UserInput from "./UserInput";
import InfoList from "./InfoList";
import { useState } from "react";

const App = () => {
  const [detailsArray, setDetailsArray] = useState([]);

  const dataToApp = (data) => {
    setDetailsArray((prev) => [...prev, data]);
  
  };

  return (
    <div>
      <UserInput onStateUp={dataToApp} />
      <InfoList dataList={detailsArray} />
    </div>
  );
};

export default App;
