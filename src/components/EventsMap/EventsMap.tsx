import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'src/hooks/useCurrentLocation';
import { Icon, Map, Point } from 'leaflet';
import { routes } from 'src/routes/routes';
import { useEventsOnMapQuery } from 'src/generated/gqlQueries';
import { useRouter } from 'next/router';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
  const [totalEvents, setTotalEvents] = useState<number>(0);
  const [currentEvents, setCurrentEvents] = useState<Array<IEventType>>([]);
  const [centerCoords, setCenterCoords] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 52.40953,
    lng: 16.931992,
  });

  useEffect(() => {
    if (coords) {
      setCenterCoords({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    }
  }, [coords]);

  const eventsOnMapData = useEventsOnMapQuery(
    {
      // TODO: Exclude set events
      first: 15,
      latitude: centerCoords.lat,
      longitude: centerCoords.lng,
      distance: 99999999,
      // state: 'DURING',
    },
    {
      enabled: currentEvents.length === 0 || currentEvents.length < totalEvents,
    },
  ).data;

  const events = eventsOnMapData?.events.page.edges;

  const setCoorsOnMapChange = (map: Map) => {
    const { lat, lng } = map.locate().getCenter();
    setCenterCoords({
      lat,
      lng,
    });
  };

  useEffect(() => {
    if (events && !totalEvents) {
      setTotalEvents(eventsOnMapData.events.pageData?.count || 0);
    }

    if (events && eventsOnMapData && totalEvents) {
      const newEvents = events.filter((event) =>
        currentEvents.every(
          (currentEvent) => currentEvent.node?.lat !== event.node?.lat,
        ),
      );

      if (newEvents && newEvents.length > 0) {
        setCurrentEvents([...currentEvents, ...newEvents]);
      }
    }
  }, [centerCoords, events, eventsOnMapData, totalEvents]);

  const MapContext = () => {
    const map = useMapEvents({
      dragend() {
        setCoorsOnMapChange(map);
      },
      zoomend() {
        setCoorsOnMapChange(map);
      },
    });
    map.setView(centerCoords);
    return <></>;
  };

  return (
    <MapContainer
      center={[centerCoords.lat, centerCoords.lng]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: '50vh', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentEvents.map((event) => {
        // @ts-ignore
        const { lat, lng, title, id, type } = event.node;
        // @ts-ignore
        const iconUrl = icons[type] || '';

        const icon = new Icon({
          iconUrl,
          iconSize: new Point(40, 40),
        });

        return (
          <Marker
            key={JSON.stringify({ lat, lng, title: title })}
            position={[lat, lng]}
            icon={icon}
            title={title}
            eventHandlers={{
              click: () => {
                router.push(`${routes.events.href}/${id}`);
              },
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
        );
      })}
      <MapContext />
    </MapContainer>
  );
};

export default EventsMap;
