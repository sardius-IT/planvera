export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-700 px-4 sm:px-6 md:px-16 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm">
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
            <li><a href="/countries/uk">Study in UK</a></li>
            <li><a href="/countries/usa">Study in USA</a></li>
            <li><a href="/countries/canada">Study in Canada</a></li>
            <li><a href="/countries/australia">Study in Australia</a></li>
           
          </ul>
        </div>

        {/* Legal & Help */}
        <div >
        <div>
          <h4 className="font-semibold text-blue-900 mb-3">Legal & Help</h4>
          <ul className="space-y-2">
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/PrivacyPolicy">Privacy Policy</a></li>
          </ul>
          </div>
          <div className="py-5">
          <h4 className="font-semibold text-blue-900 mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
          </div> 
        </div>

    

        {/* Map Section */}
        <div className="md:col-span-2 col-span-1">
          <h4 className="font-semibold text-blue-900 mb-3">Our Location</h4>
          <div className="rounded-md overflow-hidden shadow-md border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9688200141524!2d80.4490869!3d16.3281484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a358b001881e1c1%3A0x579cfbd91c3d7566!2sInner%20Stop!5e0!3m2!1sen!2sin!4v1699176871709!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Inner Stop Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {currentYear} Planvera Consultancy. All rights reserved.
      </div>
    </footer>
  );
}
