import { useEffect, useState } from 'react';

const useCurrentLocation = () => {
  const [coords, setCoords] = useState<GeolocationCoordinates>();
  const [error, setError] = useState<GeolocationPositionError>();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setCoords(position.coords),
      (error) => setError(error),
    );
  }, []);

  return { coords, error };
};

export default useCurrentLocation;
