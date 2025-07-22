// Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Zomato Logo */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">zomato</h2>
        </div>

        {/* Footer Links */}
        <div>
          <h3 className="font-semibold mb-2">Eternal</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>District</li>
            <li>Hyperpure</li>
            <li>Feeding India</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">For Restaurants</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">For Delivery Partners</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Learn More</h3>
          <ul className="space-y-1 text-gray-300">
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms of Service</li>
            <li>Help & Support</li>
            <li>Report a Fraud</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Social Links and Store Buttons */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h3 className="font-semibold mb-2">Social Links</h3>
          <div className="flex gap-4 text-white text-lg">
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-x-twitter"></i>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <img
            alt="Download on App Store"
            className="h-12 "
            src="https://b.zmtcdn.com/data/o2_assets/df6464de32f4a09262cee301f65aaa661739351256.png"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Play Store"
            className="h-12"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-xs text-gray-400 mt-8 border-t border-gray-700 pt-4 text-center">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies.
        <br />© 2008-2025 © Zomato™ Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
