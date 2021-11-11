import React, { useCallback, useEffect, useState } from 'react';
import useCurrentLocation from 'src/hooks/useCurrentLocation';
import { useEventsOnMapQuery } from 'src/generated/gqlQueries';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { routes } from 'src/routes/routes';
import { useRouter } from 'next/router';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const icons = {
  0: '/images/icons/sport.svg',
  1: '/images/icons/party.svg',
};

type IEventType = {
  node?:
    | {
        __typename?: 'Event' | undefined;
        id: string;
        title: string;
        type: number;
        state?: string | null | undefined;
        lat: number;
        lng: number;
      }
    | null
    | undefined;
};

const EventsMap: React.FunctionComponent = () => {
  const router = useRouter();
  const { coords } = useCurrentLocation();
  const userLat = coords?.latitude || 52.409538;
  const userLng = coords?.longitude || 16.931992;
  const [totalEvents, setTotalEvents] = useState<number>(0);
  const [currentEvents, setCurrentEvents] = useState<Array<IEventType>>([]);
  const [centerCoords, setCenterCoords] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: userLat,
    lng: userLng,
  });

  const eventsOnMapData = useEventsOnMapQuery(
    {
      first: 15,
      latitude: centerCoords.lat,
      longitude: centerCoords.lng,
      distance: 100000,
      // state: 'DURING',
    },
    {
      enabled: currentEvents.length === 0 || currentEvents.length < totalEvents,
    },
  ).data;

  const events = eventsOnMapData?.events.page.edges;

  useEffect(() => {
    if (events && eventsOnMapData) {
      if (!totalEvents) {
        setTotalEvents(eventsOnMapData.events.pageData?.count || 0);
      }

      if (totalEvents) {
        const newEvents = events.filter((event) =>
          currentEvents.every((currentEvent) => currentEvent !== event),
        );
        setCurrentEvents([...currentEvents, ...newEvents]);
      }
    }
  }, [eventsOnMapData, totalEvents]);

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

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={centerCoords}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onDragEnd={() => {
        if (map) {
          const center = map.getCenter();
          const lat = center?.lat()!;
          const lng = center?.lng()!;
          setCenterCoords({
            lat,
            lng,
          });
        }
      }}
    >
      {currentEvents.map((event) => {
        // @ts-ignore
        const { lat, lng, title, id, type } = event.node;
        // @ts-ignore
        const iconUrl = icons[type] || '';

        return (
          <Marker
            key={JSON.stringify({ lat, lng, title: title })}
            position={{
              lat,
              lng,
            }}
            icon={{
              url: iconUrl,
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            title={title}
            onClick={() => {
              router.push(`${routes.events.href}/${id}`);
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
