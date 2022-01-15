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
import { eventCategoryIcons } from 'src/utils/events';
import { IEventParticipant } from 'src/types/IEvent';

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
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [endCursor, setEndCursor] = useState('');
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
      first: 15,
      latitude: centerCoords.lat,
      longitude: centerCoords.lng,
      distance: 99999999,
      after: endCursor,
      orderField: 'distance',
      // TODO: Set during and future events
      // state: 'DURING',
    },
    {
      enabled: hasNextPage,
    },
  ).data;

  const events = eventsOnMapData?.events.page.edges;
  const eventsEndCursor = eventsOnMapData?.events.page.pageInfo?.endCursor;

  useEffect(() => {
    if (events && !totalEvents) {
      setTotalEvents(eventsOnMapData.events.pageData?.count || 0);
    }

    if (events && totalEvents && eventsEndCursor && hasNextPage) {
      setHasNextPage(
        eventsOnMapData?.events.page.pageInfo?.hasNextPage || false,
      );
      setEndCursor(eventsEndCursor);
      setCurrentEvents([...currentEvents, ...events]);
    }
  }, [centerCoords]);

  const setCoorsOnMapChange = (map: Map) => {
    const { lat, lng } = map.locate().getCenter();
    setCenterCoords({
      lat,
      lng,
    });
  };

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
      style={{ height: '50vh', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {coords && (
        <Marker
          position={[coords.latitude, coords.longitude]}
          icon={
            new Icon({
              iconUrl: '/images/icons/me-map-point.png',
              iconSize: new Point(40, 40),
            })
          }
        />
      )}
      {currentEvents.map((event) => {
        // @ts-ignore
        const { lat, lng, title, id, type } = event.node;
        const iconUrl = eventCategoryIcons[type as IEventParticipant] || '';

        return (
          <Marker
            key={JSON.stringify({ lat, lng, title: title })}
            position={[lat, lng]}
            {...(iconUrl && {
              icon: new Icon({
                iconUrl,
                iconSize: new Point(40, 40),
              }),
            })}
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
