function ApartmentList(props) {
  const renderApartments = () => {
    const result = props.apartments.map((element) => {
      return (
        <div key={element._id} className="apartment">
          <img src={element.img} alt="no pic"></img>
          <p>{element.pricePerDay}</p>
          <h1>{element.title}</h1>
        </div>
      );
    });
    return result;
  };
  return (
    <div>
      {props.apartments === null ? <p>Wait a second...</p> : renderApartments()}
    </div>
  );
}

export default ApartmentList;
