import React, { useEffect, useMemo, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = ({lat, lon}) => {
    const [show, setShow] = useState(false);
    const position = useMemo(() => [lat, lon], [lat, lon]);

    useEffect(() => {
        if (lat > 0 && lon > 0) {
            setShow(true);
        }
    }, [lat, lon])

    return (
        <div>
            {show ? (
            <MapContainer center={position} zoom={13} style={{height: '400px', width: '760px'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                />
                <Marker position={position} />
            </MapContainer>
            ) : (
                <div>Karttaa ei saatavilla</div>
            )}
        </div>
    )
}


export default Map;