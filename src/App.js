import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './travel'

class App extends Component {
  render() {
    return (
      <div>
        <Travel 
        destination='Neptune'
         country='Milky Way'
         photo='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/1200px-Neptune_Full.jpg' 
         distance='2.9 Billions Miles'/>

         <Travel 
         destination='Jupiter'
         country='Milky Way'
         photo='http://cdn.sci-news.com/images/enlarge3/image_4461e-Jupiter.jpg'
         distance='365 Millions Miles'
         />
      </div>
    );
  }
}

export default App;
