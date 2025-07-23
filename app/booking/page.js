export default function BookingPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Book a Free Consultation</h2>
      <p className="text-gray-600 mb-4">Choose your date and time to speak with our consultant.</p>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Full Name" className="border p-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 w-full" />
        <input type="date" className="border p-2 w-full" />
        <input type="time" className="border p-2 w-full" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Book Now</button>
      </form>
    </div>
  );
}
