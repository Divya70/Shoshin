import { useState } from "react";
import "./App.css";

function App() {
  const [getData, setGetData] = useState([]);
  console.log(getData)
  const data = fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3"
  )
    .then((res) => res.json())
    .then((data) => setGetData([data]));
  return (
    <>
      <div>
        {getData.map((val, index) => {
          return (
            <div key={index}>
              <div className="container" >
                <span>Current Tempreture:</span>
                <span>{val.current.temperature_2m}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
