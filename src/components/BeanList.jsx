import Bean from "./Bean";

function BeanList(){
  return (
    <>
      {BeanList.map(() =>
        <Bean />
      )}
    </>
  );
}


export default BeanList;

