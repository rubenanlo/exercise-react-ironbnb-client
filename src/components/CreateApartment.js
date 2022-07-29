import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApartment() {
  const [apartments, setApartments] = useState({});
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setApartments((prevApartments) => {
      const newApartment = {
        img: image,
        title: title,
        pricePerDay: price,
      };
      return newApartment;
    });
    setTitle("");
    setPrice("");
    setImage("");
  };

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/apartments", apartments)
      .then(() => {
        navigate("/apartments", { replace: true });
      })
      .catch((error) => error);
  }, [apartments, navigate]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Price</label>
        <input
          className="price"
          required
          type="number"
          name="price"
          value={price}
          placeholder="What's the price for the day?"
          onChange={(e) => {
            setPrice(e.target.value); //using useState to show the text being typed
          }}
        />

        <label>Title</label>

        <input
          className="title"
          required
          type="text"
          name="title"
          value={title}
          placeholder="Name the place"
          onChange={(e) => {
            setTitle(e.target.value); //using useState to show the text being typed
          }}
        />

        <label>Image</label>

        <input
          className="image"
          type="text"
          name="image"
          value={image}
          placeholder="Paste the url of the image"
          onChange={(e) => {
            setImage(e.target.value); //using useState to show the text being typed
          }}
        />

        <button>Create</button>
      </form>
    </>
  );
}

export default CreateApartment;
