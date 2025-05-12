"use client";

import { Header, VehicleTable } from "@/components";
import useGetVehicles from "@/api/vehicles/useGetVehicles";

const Home = () => {
  const { data, isLoading, error } = useGetVehicles({
    type: "tracked",
    page: 1,
    perPage: 40,
  });

  console.log(data);

  return (
    <>
      <Header />
      {data && (
        <VehicleTable
          vehicles={data.vehicles}
          isLoading={isLoading}
          error={error}
        />
      )}
    </>
  );
};

export default Home;
