import { useQuery, UseQueryResult } from "@tanstack/react-query";

import api from "../index";
import {
  GetVehiclesParams,
  VehiclesPaginatedData,
  GetVehiclesApiResponse,
} from "./types";

const getVehicles = async (
  params: GetVehiclesParams
): Promise<VehiclesPaginatedData> => {
  try {
    const response = await api.get<GetVehiclesApiResponse>(
      "/recruitment/vehicles/list-with-paginate",
      { params }
    );

    return response.data.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const useGetVehicles = (
  params: GetVehiclesParams
): UseQueryResult<VehiclesPaginatedData, Error> => {
  return useQuery<VehiclesPaginatedData, Error>({
    queryKey: ["vehicles", params],
    queryFn: () => getVehicles(params),
  });
};

export default useGetVehicles;
