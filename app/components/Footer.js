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
              src="https://www.google.com/maps/@16.3280546,80.4494927,3a,75y,205.57h,90t/data=!3m7!1e1!3m5!1sNOBC1T35SQveDfHpDN9pww!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DNOBC1T35SQveDfHpDN9pww%26yaw%3D205.57079!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
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
