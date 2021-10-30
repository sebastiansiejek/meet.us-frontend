import React, { useCallback, useState } from 'react';
import useCurrentLocation from 'src/hooks/useCurrentLocation';
import { Event } from 'src/generated/gqlQueries';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { random } from 'lodash';
import { routes } from 'src/routes/routes';
import { useRouter } from 'next/router';

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
  const router = useRouter();
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

  const [map, setMap] = useState<google.maps.Map | null>();

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
            onClick={() => {
              router.push(`${routes.events.href}/${event.node.id}`);
            }}
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
