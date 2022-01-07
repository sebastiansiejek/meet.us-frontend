import React from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { eventCategoryIcons } from 'src/utils/events';
import { Icon, Point } from 'leaflet';

export interface SingleEventMapProps {
  type: number;
  title: string;
  lat: number;
  lng: number;
}

const SingleEventMap: React.FunctionComponent<SingleEventMapProps> = ({
  type,
  title,
  lat,
  lng,
}) => {
  const iconUrl = eventCategoryIcons[type as 0 | 1] || '';
  const icon = new Icon({
    iconUrl,
    iconSize: new Point(40, 40),
  });

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={12}
      style={{ height: '40vh', minHeight: '300px', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        key={JSON.stringify({ lat, lng, title: title })}
        position={[lat, lng]}
        icon={icon}
        title={title}
        eventHandlers={{
          mouseover: (e) => {
            e.target.openPopup();
          },
          mouseout: (e) => {
            e.target.closePopup();
          },
        }}
      >
        <Popup>{title}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default SingleEventMap;
