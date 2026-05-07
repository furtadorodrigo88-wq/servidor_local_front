import Link from "next/link"


export const Header = () => {
    return (
        <div className="w-full h-full flex p-3 bg-white rounded-b-md gap-8">
            <h1 className="text-2xl font-bold text-[#13a4ec]">Azure Meridian</h1>
            <div className="flex gap-10 items-center">
                <Link href="" className="font-semibold text-gray-500 hover:text-[#13a4ec]">Find Pros</Link>
                <Link href="/home" className="font-semibold text-gray-500 hover:text-[#13a4ec]">Services</Link>
                <Link href="" className="font-semibold text-gray-500 hover:text-[#13a4ec]">Projects</Link>
                <Link href="" className="font-semibold text-gray-500 hover:text-[#13a4ec]">Suport</Link>
            </div>
        </div>
    )
}