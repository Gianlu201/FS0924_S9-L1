const BtnFunctionalComponent = function (props) {
  return (
    <button
      type='button'
      onClick={() => {
        console.log('click');
      }}
    >
      {props.btnText}
    </button>
  );
};

export default BtnFunctionalComponent;
