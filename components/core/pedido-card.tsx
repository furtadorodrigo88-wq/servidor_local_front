import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"

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
        <Card className="w-full h-[400px]  m-0 p-0">
            <CardHeader className="h-[200px] m-0 p-0">
                <div className="flex flex-col relative h-full">
                    <div className="w-full flex items-center justify-center relative h-[200px] m-0 p-0">
                        <Image className="w-full object-cover" src={pedidoCardProps.image} fill alt="" />
                    </div>
                    <div className="absolute  left-1/2 top-1/2 w-12 h-12 bg-white rouded-full shadow-md items-center justify-center border border-gray-100 rounded-full">
                        <Image src={pedidoCardProps.category.icone} width={40} height={40} alt="" />
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div>
                    <div className="text-left mb-6 left-1/2">
                        <h1 className="font-bold text-2xl ">{pedidoCardProps.title}</h1>
                        <p className="text-muted-foreground text-sm">{pedidoCardProps.description}</p>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="bg-white rounded-b-md">
                <div className="w-full flex">
                    <div className="flex flex-col w-1/2">
                        <span>STARTING AT</span>
                        <span>$00.00</span>
                    </div>
                    <div className="w-full flex items-center justify-end">
                        <button className="bg-[#13a4ec] text-white rounded-md font-bold p-3 py-3 drop-shadow-lg drop-shadow-gray-200 w-1/2">Browse Providers</button>
                    </div>
                </div>
            </CardFooter>
        </Card>


    )
}