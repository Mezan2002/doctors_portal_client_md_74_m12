import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import BgImage from "../../../assets/images/bg.png";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
      className="md:mt-52 md:mb-20"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <img
              src={chair}
              className="rounded-lg shadow-2xl"
              alt="dentist chair"
            />
          </div>
          <div className="lg:w-1/2">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
