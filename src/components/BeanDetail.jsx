import PropTypes from "prop-types";

function BeanDetail(props) {
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

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func
}

export default BeanDetail;

