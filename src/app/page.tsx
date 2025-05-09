"use client";

import { useGetVehicles } from "@/api/vehicles";
import { Header } from "@/components";

export default function Home() {
  const { data, isLoading, error } = useGetVehicles({
    type: "tracked",
    page: 1,
    perPage: 10,
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao buscar veículos</div>;

  console.log(data);

  return <Header />;
}
