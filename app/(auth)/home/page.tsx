"use client";
import { PedidoCard } from "@/components/core/pedido-card"
import { Header } from "@/components/core/header"
import { getAllPrestacoesServicos } from "@/app/data/queries/prestacao-servico";


export default function Home() {
    const { loading, error, data } = getAllPrestacoesServicos();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div className="bg-gray-200">
            <Header />
            <h1>Home</h1>
            <div className="w-full grid grid-cols-3 gap-6">
                {data?.map((prestacaoServico) => (
                    <PedidoCard
                        key={prestacaoServico.id}
                        id={prestacaoServico.id}
                        title={prestacaoServico.designacao}
                        desciption={prestacaoServico.designacao}
                        image="/placeholder.jpeg"
                        category={prestacaoServico.servico.categoria}
                    />
                ))}
            </div>
        </div>
    )
}