import './ResetButton.css';


function ResetButton(props) {

  return (
    <div className="ResetButton">
      <button className="ResetButton-pushable" onClick={() => {
        console.log('reset');
        props.onClick()
      }}>
        <span className="ResetButton-front">Reset</span>
      </button>
    </div>
  );
}


export default ResetButton;
