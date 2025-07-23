export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 px-6 md:px-16 py-12 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {/* Test Preparation */}
        <div>
          <h4 className="font-semibold text-blue-900 mb-3">Test Prep</h4>
          <ul className="space-y-2">
            <li><a href="#">IELTS</a></li>
            <li><a href="#">TOEFL</a></li>
            <li><a href="#">PTE</a></li>
            <li><a href="#">GRE</a></li>
            <li><a href="#">GMAT</a></li>
            <li><a href="#">SAT</a></li>
            <li><a href="#">Duolingo</a></li>
          </ul>
        </div>

        {/* Study Abroad Destinations */}
        <div>
          <h4 className="font-semibold text-blue-900 mb-3">Study Destinations</h4>
          <ul className="space-y-2">
            <li><a href="#">Study in UK</a></li>
            <li><a href="#">Study in USA</a></li>
            <li><a href="#">Study in Canada</a></li>
            <li><a href="#">Study in Australia</a></li>
            <li><a href="#">Study in Germany</a></li>
            
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-blue-900 mb-3">Student Services</h4>
          <ul className="space-y-2">
            <li><a href="#">Visa Guidance</a></li>
            <li><a href="#">Admission Guidance</a></li>
            <li><a href="#">Career Counseling</a></li>
            <li><a href="#">Finance Assistance</a></li>
            <li><a href="#">Travel Assistance</a></li>
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">Forex Support</a></li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="md:col-span-2">
          <h4 className="font-semibold text-blue-900 mb-3">Our Location</h4>
          <div className="rounded-md overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8100339518233!2d72.82315761481906!3d19.07997628708785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce2e7379fc65%3A0xb4ed2ed0dbeb1e97!2sMarine%20Lines%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1629810408085!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Planvera Map Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {currentYear} Planvera Consultancy. All rights reserved.
      </div>
    </footer>
  );
}
