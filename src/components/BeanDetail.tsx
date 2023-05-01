import React from "react";
import { BeanType } from "../interfaces/interfaces";

interface BeanDetailProps {
  bean: BeanType;
  onClickingDelete: (id: string) => void;
  onClickingEdit: () => void;
  onClickingSell: (id: string) => void;
}

function BeanDetail(props: BeanDetailProps) {
  const componentStyle = {
    justifyContent: 'center',
    alignItems: 'center'
  }

  const { 
    bean, 
    onClickingDelete, 
    onClickingEdit,
    onClickingSell
  } = props;

  console.log(bean);
  return (
    <>
      <div className="flexed-down" style={componentStyle}>
        <h3>{bean.name} details</h3>
        <p>{bean.origin}</p>
        <p>{bean.roast} roast</p>
        <p>${bean.price}/lbs</p>
        <p>{bean.quantityRemaining} lbs. remaining</p>
      </div>
      <span><button onClick={() => onClickingSell(bean.id)}>sell coffee</button></span>
      <span><button onClick={onClickingEdit}>update coffee</button></span>
      <span><button onClick={() => onClickingDelete(bean.id)}>remove coffee from list</button></span>
    </>
  );
}

export default BeanDetail;

