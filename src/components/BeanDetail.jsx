import PropTypes from "prop-types";

function BeanDetail(props) {
  const { bean } = props;

  return (
    <>
      <h1>{bean.name} coffee details</h1>
      <h3>{bean.origin}</h3>
      <p><em>{bean.issue}</em></p>
      <hr />
    </>
  );
}

BeanDetail.propTypes = {
  bean: PropTypes.object
}

export default BeanDetail;

