export type VehicleType = "tracked" | "others";

export interface GetVehiclesParams {
  type: VehicleType;
  page: number;
  perPage: number;
}

export interface GetVehiclesApiResponse {
  statusCode: number;
  message: string;
  content: VehiclesPaginatedData;
}

export interface VehiclesPaginatedData {
  vehicles: Vehicle[];
  locationVehicles: LocationVehicle[];
  totalPages: number;
  page: number;
  perPage: string;
}

export interface Vehicle {
  id: string;
  plate: string;
  fleet?: string;
  type: string;
  model: string;
  nameOwner: string;
  status: string;
  createdAt: string;
}

export interface LocationVehicle {
  id: string;
  fleet: string;
  equipmentId: string;
  name: string;
  plate: string;
  ignition: string;
  lat: number;
  lng: number;
  createdAt: string;
}
