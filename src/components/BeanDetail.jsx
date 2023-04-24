import PropTypes from "prop-types";

function BeanDetail(props) {
  const componentStyle = {
    justifyContent: 'center',
    alignItems: 'center'
  }

  const { bean, onClickingDelete } = props;

  return (
    <>
      <div className="flexed-down" style={componentStyle}>
        <h3>{bean.name} details</h3>
        <p>{bean.origin}</p>
        <p>{bean.roast} roast</p>
        <p>${bean.price}/lbs</p>
        <p>{bean.quantityRemaining} lbs. remaining</p>
      </div>
      <span><button onClick={() => onClickingDelete(bean.id)}>remove bean from list</button></span>
    </>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default BeanDetail;

