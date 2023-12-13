import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import LocationIcon from '../../assets/svg/LocationIcon';

const HouseMap = () => {
    const [selectedHouse, setSelectedHouse] = useState(null);

    const sampleHouses = [
        {
            id: 1,
            latitude: 34.7754,
            longitude: 10.7295,
            name: 'Cozy House',
            price: 500,
            area: 'Area 1',
            composition: 's+1',
        },
        {
            id: 2,
            latitude: 35.8252,
            longitude: 10.6084,
            name: 'Modern Apartment',
            price: 1200,
            area: 'Area 2',
            composition: 's+2',
        },
    ];

    return (
        <MapContainer
            center={[34.8334421, 9.5357442]}
            zoom={5}
            style={{ width: '400px', height: '400px', margin: "50px auto" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {sampleHouses.map((house) => (
                <Marker
                    key={house.id}
                    position={[house.latitude, house.longitude]}
                    icon={L.icon({
                        iconUrl: { LocationIcon },
                        iconSize: [32, 32],
                        iconAnchor: [16, 32],
                        popupAnchor: [0, -32],
                    })}
                    onClick={() => setSelectedHouse(house)}
                />
            ))}

            {selectedHouse && (
                <Popup
                    position={[selectedHouse.latitude, selectedHouse.longitude]}
                    onClose={() => setSelectedHouse(null)}
                >
                    <div>
                        <h3>{selectedHouse.name}</h3>
                        <p>Price: {selectedHouse.price}dnt</p>
                        <p>Area: {selectedHouse.area}</p>
                        <p>Composition: {selectedHouse.composition}</p>
                    </div>
                </Popup>
            )}
        </MapContainer>
    );
};

export default HouseMap;
