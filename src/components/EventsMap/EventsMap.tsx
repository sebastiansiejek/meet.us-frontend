import React, { useEffect, useState } from 'react';
import useCurrentLocation from 'src/hooks/useCurrentLocation';
import { Icon, Point } from 'leaflet';
import { routes } from 'src/routes/routes';
import { useEventsOnMapQuery } from 'src/generated/gqlQueries';
import { useRouter } from 'next/router';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { eventCategoryIcons } from 'src/utils/events';
import { IEventParticipant } from 'src/types/IEvent';
// @ts-ignore
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';

const EventsMap: React.FunctionComponent = () => {
  const router = useRouter();
  const { coords } = useCurrentLocation();
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

  const eventsOnMapData = useEventsOnMapQuery({
    first: 100,
    latitude: centerCoords.lat,
    longitude: centerCoords.lng,
    distance: 99999999,
    orderField: 'distance',
    state: 'DURING',
  }).data;

  const events = eventsOnMapData?.events.page.edges;

  if (events && events.length > 0) {
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
        <MarkerClusterGroup>
          {events.map((event) => {
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
        </MarkerClusterGroup>
        ;
      </MapContainer>
    );
  }

  return <></>;
};

export default EventsMap;
