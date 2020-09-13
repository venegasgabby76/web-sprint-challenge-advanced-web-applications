import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../util/axiosWithAuth";
import {fetchBubbles} from "../api/fetchBubbles";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  // useEffect(() => {
  //   const grabColors = () => {
  //     axiosWithAuth()
  //     .get('http://localhost:5000/api/colors')
  //     .then(response => {
  //       setColorList(response.data);
  //     })
  //     .catch(error => console.log(error))
  //   }
  //   grabColors();
  // }, []);

  useEffect(() => {
    fetchBubbles()
    .then(response => {
      console.log(response);
      setColorList(response.data);
    })
    .catch(error => {
      setColorList(error.message)
    })
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
