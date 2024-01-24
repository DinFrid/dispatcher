import CustomButton from './components/CustomButton/CustomButton';
import RightArrowIcon from './images/Arrow - Right.svg'

function App() {
  const customButtonProps = {
    styles: { fontSize: "2rem", fontFamily: "Roboto" },
    onClick: () => console.log('Button clicked'),
    disabled: false,
    variant: "contained" as "contained",
    endIcon: <img src={RightArrowIcon} alt="Right Arrow" />
  };

  return (
    <div>
      <CustomButton {...customButtonProps}>
        Click me
      </CustomButton>
    </div>
  );
}

export default App;
