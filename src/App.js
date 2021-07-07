import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Alert from '@material-ui/lab/Alert';
import theme from './theme/theme';
import img from './assets/img/dog.svg'
import Footer from './components/footer';
import Header from './components/header';
import InlineItem from './components/inlineItem';
import './App.css';


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
      <Header theme={theme} />
      <div>
        <Alert severity="success"
          color='success'
          style={{ display: show_copy_success }}
          onClose={closeModal}>
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
            style={{
              display: 'inline-block',
              margin: '0 .7rem',
              color: 'white'
            }}>
            COPY
          </Button>
          <Button color='primary'
            variant="contained"
            onClick={handleReset}
            style={{ display: 'inline-block', margin: '0 .7rem', color: 'white' }}>
            RESET
          </Button>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <InlineItem
            left={'文字数'}
            right={value.length}
          />
          <InlineItem
            left={'文字数（スペース無視）'}
            right={value.replace(/\s+/g, "").length}
          />
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;
