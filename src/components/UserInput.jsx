import style from "./App.module.css";
import Form from "./Form";

const UserInput = (props) => {
  return (
    <div className={style.container} style={props.style}>
      <div className={style["form-container"]}>
        <Form
          sendData={props.onStateUp}
          setIsValid={props.isValid}
          // sendErrorMsg={props.sendErrorMsgToApp}
        />
      </div>
    </div>
  );
};

export default UserInput;
