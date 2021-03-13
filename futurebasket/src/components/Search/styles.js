import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '45vw',
    height: '5vh',
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
    maxWidth: 'inherit',
    backgroundColor: theme.palette.background.paper,
    paddingBottom:'0',
    marginTop: "1px",
  },
  suggestionItem: {
    '&:hover': {
      background: "#F6F2F2",
   },
   color: 'black',
   display: 'flex',
   alignItems: 'center'
  },
  position : {
    position:'absolute',
    zIndex: '1',
  },
  suggestionText:{
    padding: '0 1rem',
  },
  iconStyle: {
    transform: "scale(0.8)" 
  },
}));