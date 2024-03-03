import { useState } from "react";

function ListGroup() {
    const cities = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];
    const [selectedItem, setSelectedItem] = useState(-1)
    const citiesDOM = cities.map((city, index) => 
    <li key={index} onClick={()=> setSelectedItem(index)} className={selectedItem === index? "list-group-item active":"list-group-item"}
    >{city}</li>)
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
