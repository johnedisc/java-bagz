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
        <p>{bean.origin}, {bean.roast}</p>
        <p>{bean.price}</p>
        <p>{bean.quantityRemaining}</p>
        <button onClick={() => onClickingDelete(bean.id)}>remove bean from list</button>
      </div>
    </>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.object
}

export default BeanDetail;

