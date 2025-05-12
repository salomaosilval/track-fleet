"use client";

import { Header, VehicleTable } from "@/components";
import useGetVehicles from "@/api/vehicles/useGetVehicles";
import { VehicleMap } from "@/components/VehicleMap";

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
        <>
          <VehicleMap locations={data.locationVehicles} />
          <VehicleTable
            vehicles={data.vehicles}
            isLoading={isLoading}
            error={error}
          />
        </>
      )}
    </>
  );
};

export default Home;
