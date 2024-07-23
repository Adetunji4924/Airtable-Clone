const PrimaryButton = (props) => {
  return (
    <>
      <button className="bg-primary-0 px-4 rounded-md py-2 text-white font-Roboto hover:bg-Headtext-0 font-medium transition-all ease-in-out">
        {props.text}
      </button>
    </>
  );
};

export default PrimaryButton;
