import React, { useState } from "react";
import "./Host.css";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Host() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    console.log("click");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleOnClick = () => {
    const textarea = document.querySelector("textarea");
    console.log(textarea.value);
    setShowModal(false);
  };

  return (
    <div className="host-info-container">
      <div style={{paddingTop: '40px',
    paddingBottom: '40px',
    }}>
        <div className="container-container">
        <div className="host-pic">
          <img
            alt="Avatar"
            src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,h_80,w_80/v1475217800/profile/pdmfuoeafxiturx4dgrz.jpg"
            className="img-circle"
          />
        </div>
        <div className="host-info">
          <div className="hosted-by">Hosted by John & Lesley B.</div>
          <div className="since">Joined in October 2015</div>
          
        </div>
        </div>
        <button className="contact-button btn btn-outline-dark" onClick={handleButtonClick}>
            Contact host
        </button>
      </div>
      

      {/*modal*/}
      {/* <div className="modal-container" style={{ overflow: "hidden" }}> */}
        <Modal show={showModal} onHide={closeModal} className={`host-modal`} style={{zIndex:1050}}>
          <Button
            variant="secondary" onClick={closeModal} className="host-modal-close-button">
            X
          </Button>
          <Modal.Body className="host-modal-body-contact">
            <div className="ask">Ask John & Lesley B. a question</div>
            <div className="message-body">
              <div>Message the host</div>
              <textarea rows="4" cols="50"></textarea>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary" onClick={handleOnClick} className="host-modal-send-button">
              Send message
            </Button>
          </Modal.Footer>
        </Modal>
      {/* </div> */}
    </div>
  );
}

export default Host;
