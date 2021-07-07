import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import theme from './theme/theme';
import './App.css';
import img from './assets/img/dog.svg'


function App(props) {
  const [value, setValue] = React.useState('');
  const [show_copy_success, setCopySuccess] = React.useState('none');
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue('')
  }

  const handleCopy = () => {
    setCopySuccess('')
    navigator.clipboard.writeText(value)
  }

  const closeModal = () => {
    setCopySuccess('none')
  }

  return (
    <div className="App">
      <header className="App-header">
        <Paper elevation={1} style={{
          backgroundColor: theme.palette.primary.main,
          width: '100vw',
          height: '60px',
          margin: 0,
          padding: 0,
          verticalAlign: 'middle',
          display: 'table-cell'
        }}
        >
          <h3 style={{ margin: 0, fontFamily: 'Ubuntu' }}>CHARACTER COUNTER</h3>
        </Paper>
      </header>
      <body>
        <Alert severity="success" color='success' style={{ display: show_copy_success }} onClose={closeModal}>
          Copied successfully!
        </Alert>
        <img src={img} style={{ marginTop: '2rem', width: '200px' }} />
        <form className='text-form' noValidate autoComplete="off">
          <TextField
            className="text-field"
            style={{ maxWidth: '40rem', width: '80%', margin: '0', padding: 0 }}
            label="Type your text"
            multiline
            rows={10}
            variant="outlined"
            value={value}
            onChange={handleChange}
          />
        </form>
        <div>
          <Button color='primary'
            variant="contained"
            onClick={handleCopy}
            style={{ display: 'inline-block', margin: '0 1.4rem', color: 'white' }}>
            COPY
          </Button>
          <Button color='primary'
            variant="contained"
            onClick={handleReset}
            style={{ display: 'inline-block', color: 'white' }}>
            RESET
          </Button>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div>
            <p style={{ display: 'inline-block', margin: '0 2rem', textAlign: 'left', width: '180px' }}>文字数</p>
            <p style={{ display: 'inline-block', textAlign: 'left', width: '100' }}>{value.length}</p>
          </div>
          <div>
            <p style={{ display: 'inline-block', margin: '0 2rem', textAlign: 'left', width: '180px' }}>文字数（スペース無視）</p>
            <p style={{ display: 'inline-block', textAlign: 'left', width: '100' }}>{value.replace(/\s+/g, "").length}</p>
          </div>
        </div>
        <div>
          <Paper elevation={1} style={{
            background: '#282c34',
            width: '100vw',
            height: '60px',
            margin: 0,
            marginTop: '2rem',
            padding: 0,
            verticalAlign: 'middle',
            display: 'table-cell'
          }}
          >
            <p style={{ margin: 0, fontFamily: 'Ubuntu' }}>© All rights are reserved | 2021 | Made with by <a className='App-link' href='https://github.com/ozora-ogino'>Ozora Ogino</a>
            </p>
          </Paper>
        </div>
      </body>
    </div >
  );
}

export default App;
