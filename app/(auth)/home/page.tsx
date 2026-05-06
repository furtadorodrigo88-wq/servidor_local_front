import { PedidoCard } from "@/components/core/pedido-card"


export default function Home() {
    return (
        <div>
            <h1>Home</h1>
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
    )
}