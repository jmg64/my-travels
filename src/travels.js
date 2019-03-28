import React, {Component} from 'react';
import Travel from './travel'

const travels = [
    {
      destination: 'Saturn',
      country: 'Milky Way',
      distance:
        '746 Millions Miles ',
      photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1200px-Saturn_during_Equinox.jpg'
    },
    {
      destination: 'Mars',
      country: 'Milky Way',
      distance:
        '33.9 Millions Miles',
      photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg'
    },
    {
      destination: 'Venus',
      country: 'Milky Way',
      distance:
        '162 Millions Miles',
      photo:'https://s22380.pcdn.co/wp-content/uploads/Gibbous-Venus-from-Akatsuki.jpg'
    },
    {
      destination: 'Uranus',
      country: 'Milky Way',
      distance:
        '1.6 Billions Miles',
      photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/255px-Uranus2.jpg'  
    },
    {
        destination: 'Mercury',
        country: 'Milky Way',
        distance:
          '48 Millions Miles',
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg' 
    }
  ];

  const Travels = () => (
      <div>
          {travels.map(x => (
              <Travel destination={x.destination} photo={x.photo} country={x.country} distance={x.distance} />
          ))}
      </div>
  );




  export default Travels;