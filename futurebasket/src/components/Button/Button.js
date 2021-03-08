import Button from '@material-ui/core/Button';

const ButtonPrimary = ({ btnClr, textClr, children }) => {
  return (
    <Button
      fullWidth
      variant='contained'
      style={{
        backgroundColor: btnClr,
        color: textClr,
        marginBottom: '10%',
        alignSelf: 'center',
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonPrimary;
