import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '45vw',
    height: '5vh',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    borderRadius: 30,
    fontFamily: 'Poppins',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export const useStylesForSuggestions = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
    paddingBottom:'0',
  },
  suggestionItem: {
    '&:hover': {
      background: "#e1dcdc",
   },
   color: 'black',
   display: 'flex',
   alignItems: 'center'
  },
  position : {
    position:'absolute',
    left: '5%',
    zIndex: '1',
  },
  suggestionText:{
    padding: '0 1rem',
  },
  iconStyle: {
    transform: "scale(0.8)" 
  },
}));