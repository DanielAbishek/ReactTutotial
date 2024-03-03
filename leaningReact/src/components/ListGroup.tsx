import { MouseEvent } from "react";

function ListGroup() {
    const cities = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    const handleClick = (event: MouseEvent) => console.log(event);
    const citiesDOM = cities.map((city,index) => <li key={index} onClick={handleClick} className="list-group-item">{city}</li>)
  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {citiesDOM}
      </ul>
    </>
  );
}

export default ListGroup;
