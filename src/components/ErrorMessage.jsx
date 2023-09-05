import "./ErrorMessage.css";

const ErrorMessage = (props) => {
  const handleClick = () => {
    props.setMessage(null);
  };
  return (
    <div>
      <div className="backdrop" onClick={handleClick}>
        <div className="msg-container">
          <div className="header"> {props.about}</div>
          <div className="body">
            {props.msg}
            <footer>
              <button className="btn" onClick={handleClick}>
                Okay
              </button>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
