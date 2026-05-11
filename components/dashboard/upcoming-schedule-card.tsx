"use client"
import AppointmentItem from "./appointment-item"
import { Calendar } from "../ui/calendar"
import { useState } from "react"

export default function UpcomingScheduleCard() {
    const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="w-[320px] rounded-2xl border bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">
        Upcoming Schedule
      </h2>

      <div className="w-full">
        <Calendar className="w-full "selected={date} onSelect={setDate} mode="single" />
      </div>

      <div className="mt-6">
        <p className="mb-4 font-medium text-gray-700">
          Today, Oct 7
        </p>

        <div className="space-y-3">
          <AppointmentItem
            time="09:00 AM"
            title="Door Repair"
            address="124 Main St."
          />

          <AppointmentItem
            time="01:30 PM"
            title="Quote: Painting"
            address="55 Oak Dr."
          />
        </div>
      </div>

      <button className="mt-6 w-full rounded-lg bg-sky-500 py-3 text-sm font-medium text-white">
        Manage Calendar
      </button>
    </div>
  )
}