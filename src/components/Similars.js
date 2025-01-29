import axios from "axios";
import React, { useState, useEffect } from "react";
import { URL } from "../utils/URL";

export function History(props) {
  const [history, setHistory] = useState();

  useEffect(() => {
      axios
      .post(`${URL}/get-history`, { history: props.user.history })
      .then((res) => setHistory(res.data));
    }, [])
  return (
    <>
      {history && (
        <div className="py-4">
          <h3>History</h3>
          <div className="similar">
            {history?.map((ev) => (
              <div key={ev._id} className="p-c2">
                <a href={`/product/${ev._id}`}>
                  <img src={ev.images.title} alt="title" />
                </a>
                <p>{ev.name}</p>
              </div>
            ))}
          </div>
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
        <div className="py-4">
          <h3>Similar</h3>
          <div className="similar">
            {similar?.map((ev) => (
              <div key={ev._id} className="p-c2">
                <a href={`/product/${ev._id}`}>
                  <img src={ev.images.title} alt="title" />
                </a>
                <p>{ev.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
