import { usersApi } from "./api/api";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [isLoad, setIsLoad] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [currentPictureLinePos, setCurrentPictureLinePos] = useState(0);
  const [loadStatus, setLoadStatus] = useState("Загрузка...");
  const pictureLine = useRef();

  function changePicture(value) {
    if (
      currentPictureLinePos + value <= 0 &&
      currentPictureLinePos + value > usersList.length * -150
    ) {
      setCurrentPictureLinePos(currentPictureLinePos + value);
    } else if (currentPictureLinePos + value >= 0) {
      setCurrentPictureLinePos(usersList.length * -150 + 150);
    } else if (currentPictureLinePos + value >= usersList.length * -150) {
      setCurrentPictureLinePos(0);
    }
  }

  useEffect(() => {
    const slideSwitchDelay = setTimeout(() => {
      if (currentPictureLinePos - 150 <= usersList.length * -150) {
        setCurrentPictureLinePos(0);
      } else {
        setCurrentPictureLinePos(currentPictureLinePos - 150);
      }
    }, 4000);

    return () => clearTimeout(slideSwitchDelay);
  }, [currentPictureLinePos]);

  useEffect(() => {
    usersApi.getUsers().then((result) => {
      console.log(result.results);
      setUsersList(result.results);
      setIsLoad(false);

      const slideSwitchDelay = setTimeout(() => {
        setCurrentPictureLinePos(currentPictureLinePos - 150);
      }, 4000);

      return () => clearTimeout(slideSwitchDelay);
    }).catch(err => {
      console.log("Ошибка загрузки");
      
    });
  }, []);

  return (
    <div className="App">
      <h1 style={{margin: "10px auto"}}>Слайдер</h1>
      {isLoad ? (
        <>
          <div className="load-icon"></div>
          <h2>{loadStatus}</h2>
        </>
      ) : (
        <>
          <div className="slider">
            <button
              className="slider__button-left"
              onClick={() => changePicture(150)}
            ></button>
            <div className="slider__window">
              <ul
                ref={pictureLine}
                style={{ transform: `translateX(${currentPictureLinePos}px)` }}
                className="slider__line"
              >
                {usersList.map((user) => {
                  return (
                    <li className="slider__slide">
                      <img
                        className="slider__slide-img"
                        src={user.picture.large}
                        alt="аватар"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              className="slider__button-right"
              onClick={() => changePicture(-150)}
            ></button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
