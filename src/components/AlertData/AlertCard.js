import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AlertCard = ({alert}) => {
    return (
        <div key={alert.effectiveStartDate} className="grid">
            <div className="g-col-6 p-2">
                    <div className="card">
                        <div className={alert.alertSeverityLevel === 'WARNING' ? 'card text-bg-warning mb-3' : alert.alertSeverityLevel === 'SEVERE' ? 'card text-bg-danger mb-3'  : 'card text-bg-light mb-3'}>
                            <h5 className="card-header">{alert.alertDescriptionText}</h5>
                        </div>
                        <div className="card-body">
                            {alert.route ? <p><strong>Vaikutus reittiin:</strong> {alert.route.longName} <br /> <strong>Linja:</strong> {alert.route.shortName}</p> : <p>Ei vaikutusta</p>}
                            <p className="card-text">Alkaa klo: {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}).format(alert.effectiveStartDate * 1000)}</p>
                            <p className="card-text">Loppuu klo: {new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}).format(alert.effectiveEndDate * 1000)}</p>
            
                            <a href={alert.alertUrl} target="_blank" rel="noreferrer" className="btn btn-outline-primary">Lisätietoa</a>
                            <a href={alert.alertUrl} target="_blank" rel="noreferrer" className="btn btn-outline-secondary">Näytä kartalla</a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AlertCard;