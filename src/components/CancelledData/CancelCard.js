import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const CancelCard = ({data, tripData}) => {
    return (
        <div key={data.scheduledDeparture} className="grid">
            <div className="g-col-6 p-2">
                <div className="card">
                    <div className={data.realtimeState === 'CANCELED' ? 'card text-bg-danger mb-3' : 'card text-bg-light mb-3'}>
                        <h5 className='card-header'>{data.headsign}</h5>
                    </div>
                    <div className="card-body">
                        <p className='card-text'><strong>Vaikuttava reitti:</strong> {tripData.route.longName} <br /> <strong>Linja: </strong> {tripData.route.shortName}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancelCard;