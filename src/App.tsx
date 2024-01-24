
import CustomButton from './components/CustomButton/CustomButton';

function App() {
  const customButtonProps = {
    styles: { fontSize: "2rem", fontFamily: "Roboto" },
    onClick: () => console.log('Button clicked'),
    disabled: false,
    variant: "contained" as "contained"
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
