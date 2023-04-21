import Bean from "./Bean";

function BeanList(props){
  return (
    <>
      {props.list.map((listItem) =>
        <Bean 
          name = { listItem.name }
          origin = { listItem.origin }
          roast = { listItem.roast }
          price = { listItem.price }
          quantityRemaining = { listItem.quantityRemaining }
          id = { listItem.id }
          key = { listItem.id }
        />
      )}
    </>
  );
}


export default BeanList;

