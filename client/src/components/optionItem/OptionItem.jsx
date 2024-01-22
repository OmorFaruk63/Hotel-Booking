import "./optionItem.css";
const OptionItem = ({ person, handleOption, options }) => {
  return (
    <div className="optionItem">
      <span className="optionText">{person}</span>
      <div className="optionCounter">
        <button
          onClick={() => handleOption(person, "d")}
          disabled={options[person] <= 1}
          className="optionCounterButton"
        >
          -
        </button>
        <span className="optionCounterNumber">{options[person]}</span>
        <button
          onClick={() => handleOption(person, "i")}
          className="optionCounterButton"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default OptionItem;
