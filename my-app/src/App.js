import {makeStyles} from "@material-ui/core"

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar/>
    </div>
  );
}

const useStyles = makeStyles((theme) => {
  root:{
    
  }
})

export default App;
