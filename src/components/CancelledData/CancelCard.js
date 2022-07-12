import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CancelCard = ({data, tripData}) => {
    return (
        <div className="grid">
            <div className="g-col-6 p-2">
                <div className="card" key={data.id}>
                    <div className={data.realtimeState === 'CANCELED' ? 'card text-bg-danger mb-3' : 'card text-bg-light mb-3'}>
                        <h5 className='card-header'><i class="bi bi-exclamation-triangle"></i> {data.headsign}</h5>
                    </div>
                    <div className="card-body">
                        <p className='card-text'><strong>Vaikuttava reitti:</strong> {tripData.route.longName} <br /> <strong>Linja: </strong> {tripData.route.shortName}</p>
                        <p className='card-text'>Suunniteltu lähtöaika klo: {new Date(data.scheduledDeparture * 1000).toISOString().slice(11, 19)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelCard;