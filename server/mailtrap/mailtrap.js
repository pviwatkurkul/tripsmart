import dotenv from 'dotenv';

import {MailtrapClient} from "mailtrap";

dotenv.config();

const TOKEN = "344b8f6ae1122be9e715d5b2218072eb";
const client = new MailtrapClient({
  token: TOKEN,
});


const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "purichv123@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "Welcome to tripsmart!",
    html: "Please verify your account to sign up for tripsmart",
    category: "Integration Test",
  })
  .then(console.log, console.error);


  