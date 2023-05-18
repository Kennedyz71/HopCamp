import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './Tent_site.css'
import Individual_Tent_site from './Individual_Tent_site';
import Individual_Lodging_site from './Individual_Lodging_site';

// import site1_campground from '/HopCamp/HopCamp/client/assets/site1 campground.webp'
const Tent_site = () => {
    
    const tentSiteData = {
        id: 1,
        name: 'Site 1- Redwood Camp',
        availability: '5 available',
        demand: 'High demand',
        instantBook: 'Instant book',
        rating: '99%',
        reviews: '(361)',
        type: 'RV/tent site',
        capacity: '· Sleeps 8',
        description: 'NOTE REGARDING ACCESS: 4WD or AWD WITH GOOD GROUND CLEARANCE IS REQUIRED due to steep, rutted farm road with loose gravel in summer and mud in winter.  Tesla model Y and similar vehicles that may be called "SUVs" but are very low to the ground are not allowed.  If you need to be towed back up in your non-4WD/AWD vehicle, we will charge you $100 for our time and expertise.  AAA and other roadside assistant services will not be able to help you. Regular RVs not allowed, but 4WD camper vans are OK. Small pop-up and teardrop trailers with 4WD tow vehicles by negotiation. Check with us first. ',
        dealPrice: '96',
        regularPrice: '120'
    }
    
    const lodgingData = {
        id: 1,
        name: "Eagle's Nest Treehouse Farmstay",
        availability: "0 available",
        demand: "High demand",
        instantBook: "Instant book",
        rating: "99%",
        reviews: "(339)",
        type: "Treehouse ·",
        capacity: "Sleeps 2",
        description: "The Eagle's Nest Treehouse Farm Stay offers ..."
    }
    const arr = Array(10).fill(tentSiteData);
  return (
    <div className='tent-sites'>
        <div className='tent-sites-title'> 
            <div id="tentsite-title">Tent sites</div>
            <div id="tentsite-availability"> 5 available</div>
        </div>
        {arr.map((element, index) => (
            <Individual_Tent_site key={index} data={element}/>

        ))}
    </div>
  
  )
}

export default Tent_site