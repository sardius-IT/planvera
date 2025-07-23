export default function ContactPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
      <p className="text-gray-600 mb-4">Fill out the form and we'll get in touch with you soon.</p>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Your Name" className="border p-2 w-full" />
        <input type="email" placeholder="Your Email" className="border p-2 w-full" />
        <textarea placeholder="Your Message" className="border p-2 w-full h-32" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
      </form>
    </div>
  );
}
