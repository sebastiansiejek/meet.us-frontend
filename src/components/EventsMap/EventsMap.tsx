import React, { useCallback, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Event } from 'src/generated/gqlQueries';
import { random } from 'lodash';
import useCurrentLocation from 'src/hooks/useCurrentLocation';

const containerStyle = {
  width: '100%',
  height: '400px',
};

interface EventsMapProps {
  events: [{ node: Event }];
}

const icons = {
  0: '/images/icons/sport.svg',
  1: '/images/icons/party.svg',
};

const EventsMap: React.FunctionComponent<EventsMapProps> = ({ events }) => {
  const { coords } = useCurrentLocation();
  const latitude = coords?.latitude;
  const longitude = coords?.longitude;

  const center = {
    lat: latitude || 52.409538,
    lng: longitude || 16.931992,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onDragEnd={() => {
        console.log(map);
      }}
    >
      {events.map((event) => {
        // TODO: Get event location from API
        // const { lat, lng } = event;
        const lat = random(center.lat, center.lat + 0.5);
        const lng = random(center.lng, center.lng + 0.5);
        // @ts-ignore
        const iconUrl = icons[event.node.type] || '';

        return (
          <Marker
            position={{
              lat,
              lng,
            }}
            icon={{
              url: iconUrl,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            title={event.node.title}
          />
        );
      })}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default EventsMap;
