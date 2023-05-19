import { useState } from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Current_campsite from './Current_campsite/Current_campsite.jsx'
import Available_sites from './Available_sites/Available_sites.jsx'
import Header from "./Header/Header.jsx";
import Ratings from "./Ratings/Ratings";
import Camping_spots from "./Camping_spots/Camping_spots";
import Photo_gallery from './Photo_gallery/Photo_gallery';
import Tent_site from './Tent_site/Tent_site';
import Camping_Location from './Camping_Location/Camping_Location.jsx';
import Host from './Host/Host';
import Camp_safety from './Camp_safety/Camp_safety';
import Campsite_info from './Campsite_info/Campsite_info';

function App() {
  const handleClick=(event)=>{
    const popUpCalender = document.getElementById('categoryList');
    if (popUpCalender && !popUpCalender.contains(event.target))
      if (popUpCalender.classList.contains('show'))
        popUpCalender.classList.toggle('show')
  }


  return (
    <>
      <div>
        <Header />
      </div>
      <div id='contentWrapper' onClick={handleClick}>
      <Current_campsite />
      <h1> ^ Current Campsite^ (Genglin)</h1>
      <h1>Photo Gallery (Dennis) </h1>
      <Photo_gallery />
      <h1>Camp Info (Chris)</h1>
      <Campsite_info />
      <Available_sites />
      <Tent_site />
      <h1>Camping Location (Dan)</h1>
      <Camping_Location />
      <Host/>
      <div>
        <Ratings />
      </div>
      <h1>Things to do (Dan)</h1>
      <div>
        <Camping_spots />
      </div>
      <Camp_safety/>
      <h1>Safety & Partners (Dan)</h1>
      <h1>Footer (Chris)</h1>
    </div></>
  )
}

export default App
