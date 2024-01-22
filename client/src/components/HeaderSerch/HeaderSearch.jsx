import { FaPerson } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import OptionItem from "../optionItem/OptionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderSearch.css";
//mongodb+srv://omor3710:<password>@cluster0.vh7ivt5.mongodb.net/ password

const HeaderSearch = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };
  const [openDate, setOpenDate] = useState(false);

  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "d" ? options[name] - 1 : options[name] + 1,
      };
    });
  };

  return (
    <div className="headerSearch">
      <div className="headerSearchItem">
        <FaLocationArrow className="headerIcon" />
        <input
          onChange={(e) => setDestination(e.target.value)}
          type="text"
          placeholder="Where are you going?"
          className="headerSearchInput"
        />
      </div>

      <div className="headerSearchItem">
        <span
          onClick={() => setOpenDate(!openDate)}
          className="headerSearchText"
        >
          <FaCalendarAlt className="headerIcon" />

          {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
            date[0].endDate,
            "MM/dd/yyyy"
          )}`}
        </span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
          />
        )}
      </div>

      <div className="headerSearchItem">
        <FaPerson className="headerIcon" />

        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="headerSearchText"
        >
          {`${options.adult} adults · ${options.children} children · ${options.room} room`}
        </span>
        {openOptions && (
          <div className="options">
            <OptionItem
              person="adult"
              count={1}
              handleOption={handleOption}
              options={options}
            />

            <OptionItem
              person="children"
              count={0}
              handleOption={handleOption}
              options={options}
            />

            <OptionItem
              person="room"
              count={1}
              handleOption={handleOption}
              options={options}
            />
          </div>
        )}
      </div>

      <div className="headerSearchItem">
        <button onClick={handleSearch} className="searchBtn">
          Search
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
