import { PedidoCard } from "@/components/core/pedido-card"
import { Header } from "@/components/core/header"


export default function Home() {
    return (
        <div className="bg-gray-200">
            <Header />
            <h1>Home</h1>
            <div className="w-full grid grid-cols-3 gap-6">
                <PedidoCard
                    title="instalar porta de entrada"
                    description="Preciso instalar uma porta de entrada na minha casa, tamanho 2,10m x 80cm."
                    image="/placeholder.png"
                    category={
                        {
                            id: "1",
                            nome: "Construção",
                            icone: "/icone-placeholder.png"
                        }
                    }

                />
            </div>
        </div>
    )
}