import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL } from "../utils/URL";

export function History(props) {
  const [history, setHistory] = useState();
  
  useEffect(() => {
const history = JSON.parse(localStorage.getItem('history'))
    if(history){
      axios
      .post(`${URL}/get-history`, { history })
      .then((res) => setHistory(res.data))
      .catch((err) => console.log(err.request.response))
    }
    }, [])

  return (
    <>
      {history && (
        <>
          {props.text}
        <div className="d-flex flex-wrap">
            {history?.map((ev) => (
              <div key={ev._id} className="home-products">
                <a href={`/product/${ev._id}`}>
                  <img src={ev.images.title} alt="title" />
                </a>
               {!props.nameOff && <p>{ev.name}</p> }
              </div>
            ))}
          </div>
      </>
      )}
    </>
  );
}

export function Similar(props) {
  const [similar, setSimilar] = useState();

  useEffect(() => {
  axios
    .post(`${URL}/home-cat`, { category: props.data.category })
    .then((res) => setSimilar(res.data));
}, [])

  return (
    <>
      {similar && (
         <>
          {props.text}
          <div className="d-flex flex-wrap">
            {similar?.map((ev) => (
              <div key={ev._id} className="home-products">
                <a href={`/product/${ev._id}`}>
                  <img src={ev.images.title} alt="title" />
                </a>
                <p>{ev.name}</p>
              </div>
            ))}
        </div>
      </>
      )}
    </>
  );
}
