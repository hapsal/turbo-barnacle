import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Map from '../Map/Map';
import 'bootstrap-icons/font/bootstrap-icons.css';

const AlertCard = ({alert}) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const lat = alert.stop ? alert.stop.lat : 0;
    const lon = alert.stop ? alert.stop.lon : 0;

    return (
        <div key={alert.id} className="grid">
            <div className="g-col-6 p-2">
                    <div className="card">
                        <div className={alert.alertSeverityLevel === 'WARNING' ? 'card text-bg-warning mb-3' : alert.alertSeverityLevel === 'SEVERE' ? 'card text-bg-danger mb-3'  : 'card text-bg-light mb-3'}>
                            <h5 className="card-header"><i class="bi bi-info-circle"></i> {alert.alertDescriptionText}</h5>
                        </div>
                        <div className="card-body">
                            {alert.route ? <p><strong>Vaikutus reittiin:</strong> {alert.route.longName} <br /> <strong>Linja:</strong> {alert.route.shortName}</p> : <p>Ei vaikutusta</p>}
                            <p className="card-text">Alkaa: {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}).format(alert.effectiveStartDate * 1000)}</p>
                            <p className="card-text">Loppuu: {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}).format(alert.effectiveEndDate * 1000)}</p>
            
                            <a href={alert.alertUrl} target="_blank" rel="noreferrer" className="btn btn-outline-primary">Lisätietoa</a>
                            <button onClick={handleShow} className="btn btn-outline-secondary">Näytä kartalla</button>
                            <Modal show={showModal} onHide={handleClose} size="lg" centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Kartta</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Map lat={lat} lon={lon} />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Modal.Footer>
                                        <button className="btn btn-outline-secondary" onClick={handleClose}>Sulje</button>
                                    </Modal.Footer>
                                </Modal.Footer>
                            </Modal>
                            
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AlertCard;