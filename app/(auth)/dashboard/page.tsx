import ProposalReview  from "@/components/dashboard/request"
import UpcomingScheduleCard from "@/components/dashboard/upcoming-schedule-card"
export default function Dashboard() {

    return (
        <div className="bg-gray-200 h-screen flex">
            <div className="w-1/4 bg-white border-r border-gray-300 shadow-sm">Sidbar</div>
            <div className="w-3/4 bg-gray-100 gap-3 pl-7">
                <h1 className="text-4xl font-bold pt-5">Dashboard</h1>
                <p className="text-gray-600">Manage your business sttings, rates and availability.</p>
                <div className="flex mt-5">
                    <div className="w-full bg-white mr-10">
                        <div className="flex flex-col  justify-between">
                            <div>Rates & Fees</div>
                            <div className="mt-5">
                                <ProposalReview />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3"><UpcomingScheduleCard /></div>
                </div>
            </div>
        </div>
    )
}
