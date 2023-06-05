import React from 'react'
'./Campsite_info.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Campsite_info = () => {
    const land = {
        acres: "400",
        totalSites: "7",
        tentSites: "6",
        lodgingSites: "1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid",
        activities: ['Biking', 'Boating', 'Fishing', 'Hiking', 'Horseback riding', 'Paddling', 'Wind sports','Climbing','Surfing','Swimming','Wildlife watching'],
        naturalFeatures: ['Beach', 'Forest', 'Redwoods', 'River, stream, or creek', 'Swimming hole', 'Costal', 'Farm', 'Ranch']

    }

  return (
    <div>
        <div className={`container | d-flex flex-row mb-3`}>
            <div className={`left-side | row alighn-items-center `}>
                <div className={`left-side-header | d-flex flex-row mb-3`}>
                    <div className={`land-size | d-flex flex-column mb-3`}>
                        <span className={`fs-2`}> {land.acres} acres</span>
                        <span className={``}>{land.totalSites} sites</span>
                    </div>
                    <div className={`land-sites | d-flex flex-row p-2`}>
                        <div className={`lodging | p-2`}>
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.364 8H11.09v3a2 2 0 01-2 2H6.222a2 2 0 01-2-2V6.111a1.111 1.111 0 10-2.222 0v11.98a.91.91 0 101.818 0V16h16.364v2.09a.91.91 0 101.818 0V12c0-2.21-1.627-4-3.636-4z" fill="currentColor"></path><path d="M10 9.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" fill="currentColor"></path></svg>
                            <span>1 lodging</span>
                        </div>
                        <div className='tent'>
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.958 18.647L12.17 5.115a.251.251 0 00-.421 0c-1.215 1.904-7.45 11.557-8.714 13.532-.1.153.025.353.21.353h5.492a.258.258 0 00.21-.118c.57-.894 2.194-3.927 2.777-4.844.111-.176.31-.176.421 0l2.888 4.856c.05.07.124.106.21.106h5.504c.198.011.323-.189.21-.353zm-9.618-5.303L8.39 18.33c-.013.012-.025.024-.038.012-.148-.082-.917-.564-1.76-2.857-.012-.023.013-.035.025-.035.285-.012 1.983-.153 4.685-2.14.025-.023.062 0 .038.035z" fill="currentColor"></path></svg>                            <span>6 Tent</span>
                        </div>
                    </div>

                </div>
                <div>
                    <span> Located within 45 minutes of the wine country... </span>
                    <button>{`Show more >`}</button>
                </div>
            </div>
            <div className={`right-side | container grid row `}>
                <div className={`Activities | row align-items-center`}>
                    <div>
                        <span className={`fs-2 fw-semibold row`}>Activities</span>
                        {/* img tag */}
                        <span className={`fs-4 col`}>{land.activities.splice(0,4)}</span>
                    </div>
                </div>
                <div className='Natural-features'>
                    <div>
                        <span className={`fs-2 fw-semibold row`}>Natural Features</span>
                        {/* img tag */}
                        <span>{land.naturalFeatures.splice(0,4)}</span>
                    </div>

                </div>

    
            </div>
        </div>
    </div>
  )
}

export default Campsite_info