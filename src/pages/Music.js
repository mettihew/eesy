import { useEffect, useState } from "react";
import axios from "axios";
import { IoIosReturnRight } from "react-icons/io";

export default function Music() {
  const [dataAll, setDataAll] = useState();

  useEffect(() => {
    axios
      .get("https://api.artic.edu/api/v1/artworks")
      .then((ev) => setDataAll(ev.data))
      .catch((err) => console.log(err));
  }, []);

  const pagination = dataAll?.pagination;
  const data = dataAll?.data;
  console.log(pagination, data);

  const map = data?.map((ev) => (
    <div key={ev.id} style={{width:'400px', padding:"10px", borderBottom:'1px solid grey',marginBottom:'10px' }}>
      <img
        src={`https://www.artic.edu/iiif/2/${ev.image_id}/full/843,/0/default.jpg`}
        style={{borderRadius:"10px", width:"100%"}}
      />
      <div>
        <div className="between" style={{padding:"10px"}}>
          <a href={ev.api_link} target="blank" style={{fontSize:'large'}}>
            Link
          </a>
          <IoIosReturnRight size={"30px"} />
        </div>
        <p>{ev.artwork_type_title}</p>
        <p>{ev.title}</p>
        <p>{ev.artist_title}</p>
        <p>{ev.artist_display}</p>
      </div>
    </div>
  ));

  if (!dataAll)
    return (
      <h1 id="j-c" className="text-danger">
        ...
      </h1>
    );

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
    <div style={{ display:"flex", alignItems:'center', justifyContent:'center', flexWrap:"wrap"}}>
      {map}
    </div>
      {pagination?.current_page}
      <a href={pagination?.next_url}>Next page</a>
    </div>
  );
}