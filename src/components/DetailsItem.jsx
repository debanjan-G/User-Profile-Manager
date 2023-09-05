import "./DetailsItem.css";

const DetailsItem = (props) => {
  // console.log(props.obj.name);
  return (
      <div className="inner-container">
        <div>{`${props.obj.name} (`}</div>
        <div>{`${props.obj.age}   years old)`}</div>
      </div>
  );
};

export default DetailsItem;
