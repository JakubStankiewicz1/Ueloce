import React from 'react';
import "./contactInfo.css";

const ContactInfo = () => {
  return (
    <div className='contactInfo'>
        <div className="contactInfoContainer">

            {/* Left Part */}
            <div className="contactInfoContainerLeft">
                <div className="contactInfoContainerLeftContainer">
                    <div className="contactInfoContainerLeftContainerTitle">
                        <h3 className="contactInfoContainerLeftContainerTitleText jaro-regular">
                            Business Hours
                        </h3>
                    </div>
                    
                    <div className="contactInfoContainerLeftContainerDetails">
                        <div className="contactInfoContainerLeftContainerDetailsItem">
                            <p className="contactInfoContainerLeftContainerDetailsItemDay geist-regular">Monday - Friday</p>
                            <p className="contactInfoContainerLeftContainerDetailsItemTime jaro-regular">9:00 AM - 6:00 PM</p>
                        </div>
                        
                        <div className="contactInfoContainerLeftContainerDetailsItem">
                            <p className="contactInfoContainerLeftContainerDetailsItemDay geist-regular">Saturday</p>
                            <p className="contactInfoContainerLeftContainerDetailsItemTime jaro-regular">10:00 AM - 4:00 PM</p>
                        </div>
                        
                        <div className="contactInfoContainerLeftContainerDetailsItem">
                            <p className="contactInfoContainerLeftContainerDetailsItemDay geist-regular">Sunday</p>
                            <p className="contactInfoContainerLeftContainerDetailsItemTime jaro-regular">Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Part */}
            <div className="contactInfoContainerRight">
                <div className="contactInfoContainerRightContainer">
                    <div className="contactInfoContainerRightContainerTitle">
                        <h3 className="contactInfoContainerRightContainerTitleText jaro-regular">
                            Follow Us
                        </h3>
                    </div>
                    
                    <div className="contactInfoContainerRightContainerSocial">
                        <div className="contactInfoContainerRightContainerSocialItem">
                            <p className="contactInfoContainerRightContainerSocialItemText jaro-regular">Instagram</p>
                        </div>
                        
                        <div className="contactInfoContainerRightContainerSocialItem">
                            <p className="contactInfoContainerRightContainerSocialItemText jaro-regular">Facebook</p>
                        </div>
                        
                        <div className="contactInfoContainerRightContainerSocialItem">
                            <p className="contactInfoContainerRightContainerSocialItemText jaro-regular">Twitter</p>
                        </div>
                        
                        <div className="contactInfoContainerRightContainerSocialItem">
                            <p className="contactInfoContainerRightContainerSocialItemText jaro-regular">LinkedIn</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ContactInfo