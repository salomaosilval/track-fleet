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
      {isLoading && <div className="text-white mt-8">Carregando...</div>}
      {error && (
        <div className="text-red-500 mt-8">Erro ao buscar veículos</div>
      )}
      {data && <VehicleTable vehicles={data.vehicles} />}
    </>
  );
};

export default Home;
