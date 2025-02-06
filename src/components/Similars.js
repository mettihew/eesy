import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL } from "../utils/URL";

export function History(props) {
  const [history, setHistory] = useState();

  
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if(user){
      axios
      .post(`${URL}/get-history`, { history: user.history })
      .then((res) => setHistory(res.data));
    }
    }, [])
  return (
    <>
      {history && (
          <div className="d-flex flex-wrap">
            {history?.map((ev) => (
              <div key={ev._id} className="home-products">
                <a href={`/product/${ev._id}`}>
                  <img src={ev.images.title} alt="title" />
                </a>
                <p>{ev.name}</p>
              </div>
            ))}
          </div>
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
      )}
    </>
  );
}
