import { Card, CardContent } from "../ui/card"

interface CategoryType {
    id: string,
    nome: string,
    icone: string
}

interface PedidoCardProps {
    title: string,
    description: string,
    image: string,
    category: CategoryType    
}

export const PedidoCard = (pedidoCardProps: PedidoCardProps) => {
    return (
        <Card>
            <CardContent>
                <div className="relative w-[350px] bg-white rounded-2xl px-6 pb-6 pt-10 mt-8 font-sans border border-gray-100">
                    <div className = "absolute top-6 left-1/2 translate-x-1/2 w-12 h-12 bg-white rouded-full shadow-md flex items-center justify-center border border-gray-100">
                        <img src={pedidoCardProps.category.icone} alt="" />
                    </div>
                    <div className="text-center mb-6">
                        <h1 className="font-bold text-2xl">{pedidoCardProps.title}</h1>
                        <p className="text-muted-foreground text-sm">{pedidoCardProps.description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}