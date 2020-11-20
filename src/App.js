import logo from './logo.svg';
import React, {useEffect} from 'react'
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


function App() {

  const classes = useStyles();

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">

    <div className="resp_div">
      <div className="label" cols="40" rows="5">
      Enter your Response XML here
      
      </div>
      <div className="div_respXML">
      <TextField
          id="XML_Text"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
        />
      
      </div>
    </div>
      
    {/* <div className="div_userDet">
      <input id = "Cache_item_id" placeholder = "Enter Cache Item id"/>
      <input id = "DB_id" placeholder = "Enter DB id here"/>

    </div>
      
      <button id="upload_button">Upload Data</button> */}

    </div>
  );
}

export default App;
