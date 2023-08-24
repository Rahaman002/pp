import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(2),
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[2],
  },
  textField: {
    marginBottom: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2, 0),
  },
}));

function Contact() {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_uouany4', 'template_x5vzmsc', formData, '_M-8VgbrEe6KhNsYM')
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast.success('Email sent successfully'); 
      })
      .catch((error) => {
        console.error('Email sent failed:', error);
        toast.error('Email sent failed'); 
      });

    // Clear form data
    setFormData({
      from_name: '',
      from_email: '',
      message: '',
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Your Name"
            name="from_name"
            value={formData.from_name}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <TextField
            required
            label="Your Email"
            name="from_email"
            value={formData.from_email}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <TextField
            required
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth
          >
            Send
          </Button>
        </form>
      </div>
     
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
}

export default Contact;
