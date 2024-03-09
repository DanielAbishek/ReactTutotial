// {list: [], heading: 'string'}
import { useState } from "react";

interface ListGroupProps {
  list: string[] | number[];
  heading: string;
  onSelectedItem: (item: string | number)=>void;
}
function ListGroup(props: ListGroupProps) {

    const valueSelected = (index: number,item:string | number)=> {
      setSelectedItem(index);
      props.onSelectedItem(item)
    };
    
    const [selectedItem, setSelectedItem] = useState(-1)
    const listElements = props.list.map((element, index) => 
    <li key={index} onClick={()=> valueSelected(index, element)} className={selectedItem === index? "list-group-item active":"list-group-item"}
    >{element}</li>)
  return (
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {listElements}
      </ul>
    </>
  );
}

export default ListGroup;
