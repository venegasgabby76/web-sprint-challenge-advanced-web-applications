import axiosWithAuth from "../util/axiosWithAuth";


// useEffect(() => {
//     const grabColors = () => {
//       axiosWithAuth()
//       .get('http://localhost:5000/api/colors')
//       .then(response => {
//         setColorList(response.data);
//       })
//       .catch(error => console.log(error))
//     }
//     grabColors();
//   }, []);

export const fetchBubbles = () => {
    return axiosWithAuth()
      .get("http://localhost:5000/api/colors")
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(err => {
        console.error("error fetching data from api, err: ", err.message);
        return err;
      });
  };