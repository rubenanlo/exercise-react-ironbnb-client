import { useState } from "react";
import { useParams } from "react-router-dom";

function ApartmentDetails(props) {
  const { apartmentId } = useParams();
  const [details, setDetails] = useState({});

  const result = props.apartments.find((apartment) => {
    return apartment._id === apartmentId;
  });
  setDetails(result);

  return (
    <div>
      <h1>Title: {details.title}</h1>
      <p>Price: {details.price}</p>
      <p>Image: {details.img}</p>
    </div>
  );
}

export default ApartmentDetails;
