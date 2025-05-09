import { useQuery, UseQueryResult } from "@tanstack/react-query";

import api from "../index";
import { GetVehiclesParams, GetVehiclesApiResponse } from "./types";

const getVehicles = async (
  params: GetVehiclesParams
): Promise<GetVehiclesApiResponse> => {
  try {
    const response = await api.get<GetVehiclesApiResponse>(
      "/recruitment/vehicles/list-with-paginate",
      { params }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const useGetVehicles = (
  params: GetVehiclesParams
): UseQueryResult<GetVehiclesApiResponse, Error> => {
  return useQuery<GetVehiclesApiResponse, Error>({
    queryKey: ["vehicles", params],
    queryFn: () => getVehicles(params),
  });
};

export default useGetVehicles;
