import React, { useEffect, useState } from "react";
import moment from "moment";

import { getNASAPictures } from "./NasaAPI";
import PictureCard from "./components/PictureCard";
import SelectComponent from "./components/SelectorComponent";

import "./App.css";
function App() {
  const defaultFilterInDays = 60;
  const [pictures, updatePictures] = useState(null);
  const [sortBy, setSortBy] = useState(defaultFilterInDays);

  useEffect(() => {
    if (!pictures) {
      const startDate = new Date("2020-07-01T08:28:41.917Z");
      const endDate = new Date();
      getNASAPictures(startDate, endDate).then((res) => {
        updatePictures(
          res.filter((picture) => {
            return picture.media_type === "image";
          })
        );
      });
    }
  }, [pictures]);

  function selectFilter(event) {
    setSortBy(event.target.value);
  }

  const filterMomentSelectedByUser = moment().subtract(sortBy, "days");

  const filteredPictures = pictures
    ? pictures.filter((picture) =>
        moment(picture.date).isAfter(filterMomentSelectedByUser)
      )
    : null;

  console.log(`whats filteredPictures`, filteredPictures);
  return (
    <main>
      <div className="selector-box">
        <SelectComponent selectFilter={selectFilter} />
      </div>
      <div className="picture-card-container">
        {pictures &&
          filteredPictures.map((picture) => (
            <div key={picture.date}>
              <PictureCard
                title={picture.title}
                picture={picture.url}
                date={picture.date}
                photographer={picture.copyright}
              />
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
