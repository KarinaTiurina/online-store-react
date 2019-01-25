import React from 'react';
import Helmet from 'react-helmet';
import ContactForm from './ContactForm';

const About = () => (
  <div>
    <Helmet>
      <title>О нас</title>
      <meta name="description" content="Страница контактов" />
      <link rel="shortcut icon" href="https://www.brakelessaccessoriauto.it/immaginiebay/telefono.png" />
      <meta name="keywords" content="Онлайн-магазин Online Store" />
    </Helmet>
    <h3>Наши контакты:</h3>
    <p>Email: online_store@gmail.com</p>
    <hr />
    <ContactForm />
  </div>
);

export default About;
