const BtnFunctionalComponent = function (props) {
  function handleClick() {
    alert('You clickd me!');
  }

  return (
    <button type='button' onClick={handleClick}>
      {props.btnText}
    </button>
  );
};

export default BtnFunctionalComponent;
