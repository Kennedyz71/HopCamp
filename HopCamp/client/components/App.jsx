import { useState,useRef } from 'react'
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
import Safety_Partners from './Safety_Partners/Safety_Partners.jsx';
import ThingsNearby from './Things_Nearby/ThingsNearby.jsx';
import Tent_Site_Map from './Tent_site/Tent_site_map';

function App() {
    const popupCalenderEl = useRef(null);
    const handleClick = (event) => {
        const popUpCalender = popupCalenderEl.current;
        console.log(popUpCalender);
        if (popUpCalender && !popUpCalender.contains(event.target))
            if (popUpCalender.classList.contains("show"))
                popUpCalender.classList.toggle("show");
    };

    // window.addEventListener('scroll',function(){
    //     const contentCurrentCampEl = document.getElementById('currentCampSites');
    //     const mapEl = this.document.getElementById('stickyMap');
    //     if (contentCurrentCampEl) {
    //         let contentHeight = contentCurrentCampEl.getBoundingClientRect();
    //         console.log(contentHeight)
    //         if (this.window.scrollY >= contentHeight)
    //         mapEl.classList.add('sticky');
    //     else
    //         mapEl.classList.remove('sticky');
    //     }
      
        
    // })
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
      {/* <h1>Camp Info (Chris)</h1> */}
      <Campsite_info />
      <Available_sites />
      <div className={`tentsites-map-container | container text-center`}>
        <div className='row align-items-start'>
          <div className={`tentsites-left| col`}>
            <Tent_site />
          </div>
          <div className={`map-right | col `}>
            <Tent_Site_Map className= {``}/>  
          </div>
        </div>
      </div>
      <Camping_Location />
      <Host/>
      <div>
        <Ratings />
      </div>
      <h1>Things To Do Nearby (Dan)</h1>
        <Camping_spots />
        <Camp_safety/>
        <Safety_Partners />
      
      <h1>Footer (Chris)</h1>
    </div></>
  )
}

export default App
