import DetailsItem from "./DetailsItem";
import "./InfoList.css";
const InfoList = (props) => {
  //   console.log(props.dataList);
  return (
    <div className="list-item">
      {props.dataList.map((itemObj) => (
        <DetailsItem obj={itemObj} key={Math.random()} />
      ))}
    </div>
  );
};

export default InfoList;
