import { useJsApiLoader } from "@react-google-maps/api";

export function useGoogleMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  return { isLoaded, loadError };
}
