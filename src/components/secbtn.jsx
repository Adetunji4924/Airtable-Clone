const SecondaryButton = (props) => {
  return (
    <>
      <button className="border rounded-md px-4 py-2 text-text-0 font-Roboto font-medium hover:border-primary-0 transition-all ease-in-out">
        {props.text}
      </button>
    </>
  );
};

export default SecondaryButton;
