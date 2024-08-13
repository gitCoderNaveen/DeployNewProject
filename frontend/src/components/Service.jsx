import React from 'react';
import './Css/Service.css'; // Import a separate CSS file for styling
import image from '../assets/Images/gal1.png'
import car from '../assets/Images/gal5.png'
import bike from '../assets/Images/gal6.png'
import travel from '../assets/Images/gal14.png'
import movie from '../assets/Images/gal7.png'
import caters from '../assets/Images/gal11.png'
import payment from '../assets/Images/gal16.png'

const services = [
  {
    name: 'Beauty Parlour',
    imgSrc: image, // Replace with your image path
    description: 'We Make your looks beautiful.'
  },
  {
    name: 'Car Services',
    imgSrc:car, // Replace with your image path
    description: 'Professional car services including repairs, maintenance, and detailing.'
  },
  {
    name: 'Bike Services',
    imgSrc: bike, // Replace with your image path
    description: 'Expert bike servicing for smooth and reliable performance.'
  },
  {
    name: 'Movies',
    imgSrc: movie, // Replace with your image path
    description: 'A range of products and services to meet your everyday needs.'
  },
  {
    name: 'Caters',
    imgSrc: caters, // Replace with your image path
    description: 'Quality catering services for events, parties, and special occasions.'
  },
  {
    name: 'Travels',
    imgSrc: travel, // Replace with your image path
    description: 'Travel services including bookings, itineraries, and tours.'
  },
  {
    name: 'Payments',
    imgSrc: payment, // Replace with your image path
    description: 'Secure and convenient payment solutions for various transactions.'
  },
];

const ServiceList = () => {
  return (
    <div className="service-container">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <img src={service.imgSrc} alt={service.name} className="service-image" />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;

