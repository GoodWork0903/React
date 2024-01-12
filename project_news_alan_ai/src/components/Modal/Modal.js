import React from 'react';
import { Typography, Divider, Chip, TextField, Button } from '@material-ui/core';
import SimpleModal from '@material-ui/core/Modal';
import emailjs from 'emailjs-com';

import useStyles from './styles';

const Modal = ({ isOpen, setIsOpen, showFeedback }) => {
  const classes = useStyles();
  let body;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'alan_ai', e.target, 'user_dhVImkgxaL27bxQ8pLPQ5')
      .then((result) => { console.log(result.text); }, (error) => { console.log(error.text); });
  };

  if (isOpen && showFeedback) {
    body = (
      <div className={classes.paper}>
        <Typography variant="h3">Something went wrong? Send us some feedback</Typography>
        <br />
        <form className={classes.form} onSubmit={sendEmail}>
          <TextField name="name" label="Your name" variant="outlined" />
          <br />
          <TextField name="email" type="email" label="Your email" variant="outlined" />
          <br />
          <TextField name="feedback" multiline rows={5} helperText="Describe the problems that you've encontered." label="Feedback" variant="outlined" />
          <br />
          <Button type="submit" variant="outlined" color="primary">Send</Button>
        </form>
      </div>
    );
  } else {
    body = (
      <div className={classes.paper}>
        <Typography variant="h3">Instructions</Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Categories</Typography>
          <div className={classes.chipContainer}>{['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'].map((category) => <Chip label={category} color="primary" className={classes.chip} />)}</div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>Try saying: &quot;Give me the latest <strong><em>Business</em></strong> news&quot;</Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Terms</Typography>
          <div className={classes.chipContainer}>{['Donald Trump', 'Bitcoin', 'PlayStation 5', 'Smartphones'].map((term) => <Chip label={term} color="primary" className={classes.chip} />)}<Chip label="...and more" className={classes.chip} /></div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>Try saying: &quot;What&apos;s up with <strong><em>PlayStation 5</em></strong>&quot;</Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant="h5">News by Sources</Typography>
          <div className={classes.chipContainer}>{['CNN', 'Wired', 'BBC News', 'Time', 'IGN', 'Buzzfeed', 'ABC News'].map((source) => <Chip label={source} color="primary" className={classes.chip} />)}<Chip label="...and more" className={classes.chip} /></div>
        </div>
        <Typography variant="body1" className={classes.trySaying}>Try saying: &quot;Give me the news from <strong><em>CNN</em></strong>&quot;</Typography>
      </div>
    );
  }

  return (
    <SimpleModal open={isOpen} onClose={() => setIsOpen(false)}>
      {body}
    </SimpleModal>
  );
};

export default Modal;
