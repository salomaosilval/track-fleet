import { Marker, InfoWindow } from "@react-google-maps/api";
import { VehicleLocation } from "./types/VehicleLocation.types";
import { useMemo } from "react";

interface VehicleMarkerProps {
  location: VehicleLocation;
  selected: boolean;
  onSelect: (id: string) => void;
  onClose: () => void;
}

function getTruckPinSVG() {
  return `data:image/svg+xml;utf8,
    <svg width='56' height='70' viewBox='0 0 56 70' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g filter='url(%23a)'>
        <path d='M28 0c13.807 0 25 11.193 25 25 0 17.5-25 45-25 45S3 42.5 3 25C3 11.193 14.193 0 28 0Z' fill='%23FFD600'/>
        <circle cx='28' cy='25' r='16' fill='%230A1A2F'/>
      </g>
      <g transform='translate(14,11)'>
        <path d='M2 14h16v6H2z' fill='white'/><rect x='14' y='16' width='4' height='4' rx='2' fill='white'/><rect x='4' y='16' width='4' height='4' rx='2' fill='white'/><rect x='6' y='12' width='8' height='4' rx='2' fill='white'/><rect x='10' y='10' width='2' height='2' rx='1' fill='white'/></g>
      <defs><filter id='a' x='0' y='0' width='56' height='70' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feDropShadow dx='0' dy='2' stdDeviation='2' flood-color='%23000' flood-opacity='0.15'/></filter></defs>
    </svg>`;
}

export const VehicleMarker: React.FC<VehicleMarkerProps> = ({
  location,
  selected,
  onSelect,
  onClose,
}) => {
  const truckPinIcon = useMemo(
    () =>
      ({
        url: getTruckPinSVG(),
        scaledSize: new window.google.maps.Size(56, 70),
        anchor: new window.google.maps.Point(28, 60),
      } as google.maps.Icon),
    []
  );

  const formatDate = (date: string) => {
    const d = new Date(date);
    return (
      d.toLocaleDateString("pt-BR") +
      " - " +
      d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  };

  const formatCoord = (n: number) => n.toFixed(6).replace(".", ",");

  return (
    <>
      <Marker
        position={{ lat: location.lat, lng: location.lng }}
        icon={truckPinIcon}
        onClick={() => onSelect(location.id + location.equipmentId)}
      />
      {selected && (
        <InfoWindow
          position={{ lat: location.lat, lng: location.lng }}
          onCloseClick={onClose}
        >
          <div
            style={{
              background: "#0A1A2F",
              color: "#fff",
              borderRadius: 16,
              padding: 18,
              minWidth: 260,
              fontFamily: "var(--font-poppins), sans-serif",
              boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
              textAlign: "center",
              position: "relative",
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: 10,
                right: 16,
                background: "none",
                border: "none",
                color: "#4EA1F7",
                fontSize: 22,
                cursor: "pointer",
                fontWeight: 700,
              }}
              aria-label="Fechar"
            >
              ×
            </button>
            <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 4 }}>
              Placa {location.plate}
            </div>
            <div style={{ fontWeight: 500, fontSize: 18, marginBottom: 4 }}>
              Frota&nbsp;&nbsp;{location.fleet ?? "-"}
            </div>
            <div style={{ fontSize: 16, marginBottom: 4 }}>
              {formatDate(location.createdAt)}
            </div>
            <div style={{ fontSize: 16, marginBottom: 8 }}>
              {formatCoord(location.lat)}, {formatCoord(location.lng)}
            </div>
            <div
              style={{
                borderBottom: "2px solid #fff",
                margin: "0 auto 8px auto",
                width: "90%",
              }}
            />
          </div>
        </InfoWindow>
      )}
    </>
  );
};
