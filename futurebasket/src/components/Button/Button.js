import Button from '@material-ui/core/Button';

const ButtonPrimary = ({ btnClr, textClr, children }) => {
  return (
    <Button
      variant='contained'
      style={{
        backgroundColor: btnClr,
        color: textClr,
        marginTop: '10%',
        alignSelf: 'center',
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
