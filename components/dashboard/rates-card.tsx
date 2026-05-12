
import { HourlyRateIcon } from "@/assets/icons/hourly-rate";
import { Button } from "../ui/button";
import StatCard from "./stat-card";
import { UrgencyFeeIcon } from "@/assets/icons/urgency-fee";
import { VolumeDiscountIcon } from "@/assets/icons/volume-discount";

interface RatesCardProps {
   precohora: string;
    taxaurgency: string;
    minDiscount: string;
}

export async function data (id: string, token:string): Promise<RatesCardProps[]>{
    // fetch api 
    const response = await fetch(`http://localhost:8080/prestador/get-preco-hora/${id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            }
        })
    if (response.ok) {
        const payload: {data: RatesCardProps[]} = await response.json();
        return payload.data
    }

    return [];
}

export default async function RatesCard() {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
            {/* Header */}

            <div className="border-b pb-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-gray-900">
                        Rates & Fees
                    </h2>

                    <Button className="text-sm bg-white font-medium text-sky-500 hover:text-sky-600">
                        Edit
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <StatCard
                    icon={<HourlyRateIcon />}
                    title="HOURLY RATE"
                    value="$50/hr"
                />

                <StatCard
                    icon={<UrgencyFeeIcon />}
                    title="URGENCY FEE"
                    value="+15%"
                />

                <StatCard
                    icon={<VolumeDiscountIcon />}
                    title="VOLUME DISCOUNT"
                    value="-10%"
                />
            </div>
        </div>
    )
}