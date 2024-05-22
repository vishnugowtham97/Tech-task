import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Reducer/userSlice";
import axios from "axios";

const Userdetail = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(URL).then((res) => setData(res.data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <button
          style={{ marginTop: "2rem", padding: "25px", borderRadius: "25px" }}
          onClick={() => dispatch(fetchData(data))}
        >
          Click here to get data using Redux State management librat=ry
        </button>
      </div>
    </div>
  );
};

export default Userdetail;
