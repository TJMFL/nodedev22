import EventsList from "../components/EventsList"

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      <EventsList />
    </div>
  )
}
