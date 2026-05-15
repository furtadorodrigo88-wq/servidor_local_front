"use client";
import { PedidoCard } from "@/components/core/pedido-card"
import { Header } from "@/components/core/header"
import { useAllPrestacoesServicos } from "@/app/data/queries/prestacao-servico";


export default function Home() {
    const { loading, error, data } = useAllPrestacoesServicos();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    return (
        <div className="bg-gray-200">
            <Header />
            <h1>Home</h1>
            <div className="w-full grid grid-cols-3 gap-6">
                {data?.getAllServiceProv?.map((prestacaoServico) => (
                    <PedidoCard
                        key={prestacaoServico.id}
                        id={prestacaoServico.id}
                        title={prestacaoServico.disign}
                        desciption={prestacaoServico.disign}
                        image="/placeholder.jpeg"
                        category={{
                            id: prestacaoServico.id,
                            nome: "Categoria",
                            icone: "/file.svg",
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
