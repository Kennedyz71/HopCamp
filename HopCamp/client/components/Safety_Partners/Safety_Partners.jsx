import React, { useState, useEffect } from "react";
import "./Safety_Partners.css"

function Safety_Partners () {

    return (
        <div className="safety-partners-component-container">
            <h1 className="safety-partners-heading">Safety Partners</h1>
            <div className="safety-partners-card-container">
                <div className="safety-partner-card">
                    <div className="safety-partner-card-content">
                        <img 
                        src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto/internal/recreate_responsibly_text.png"
                        className="safety-partner-card-image"
                        ></img>
                    </div>
                    {/* <div className="card_button"> */}
                        <a
                        className="safety-partner-card-button"
                        href="https://www.recreateresponsibly.org/"
                        >Learn More</a>
                    {/* </div> */}
                </div>
                <div className="safety-partner-card">
                    <div className="safety-partner-card-content">
                        <img
                        src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto/internal/leave_no_trace_text.png"
                        className="safety-partner-card-image"
                        ></img>
                    </div>
                    <a
                    className="safety-partner-card-button"
                    href="https://lnt.org/why/7-principles/"
                    >Learn More</a>
                </div>
                <div className="safety-partner-card">
                    <div className="safety-partner-card-content">
                        <img
                        src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto/internal/national_weather_service_text.png"
                        className="safety-partner-card-image"
                        ></img>
                    </div>
                    <a
                    className="safety-partner-card-button"
                    href="https://www.hipcamp.com/journal/company-news/fire-safety-introducing-national-weather-service-integration"
                    >Learn More</a>
                </div>
            </div>
        </div>
    )

}

export default Safety_Partners;