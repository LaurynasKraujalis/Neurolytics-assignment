import React, { useEffect } from "react";

import { getNASAPictures } from "./NasaAPI";
import PictureCard from "./components/PictureCard";

import "./App.css";
function App() {
  const [pictures, updatePictures] = React.useState(null);

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

  console.log("response from API", pictures);

  return (
    <div className="picture-card-container">
      {pictures &&
        pictures.map((picture) => (
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
  );
}

export default App;
