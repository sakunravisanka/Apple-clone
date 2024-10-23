import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 pt-8 pb-20 p-44">
      {/* Information Section */}
      <div className="container mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="space-y-4">
            <p>
              1. Apple Intelligence will be available in beta on all iPhone 16
              models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and
              iPad and Mac models with M1 and later, with Siri and device
              language set to U.S. English, as part of an iOS 18, iPadOS 18, and
              macOS Sequoia update this fall. English (Australia, Canada, New
              Zealand, South Africa, UK) language support available this
              December. Some features, additional platforms, and support for
              additional languages will be coming over the course of the next
              year.
            </p>
            <p>
              2. Available in two models: AirPods 4 and AirPods 4 with Active
              Noise Cancellation.
            </p>
            <p>
              3. Hearing Test and Hearing Aid features expected fall 2024. They
              will be supported on AirPods Pro 2 with the latest firmware paired
              with a compatible iPhone or iPad with iOS 18 or iPadOS 18 and
              later, and are intended for people 18 years old or older. The
              Hearing Aid feature will be intended for people with perceived
              mild to moderate hearing loss and is pending FDA review.
            </p>
            <p>
              4. Trade-in values will vary based on the condition, year, and
              configuration of your eligible trade-in device. Not all devices
              are eligible for credit. You must be at least 18 years old to be
              eligible to trade in for credit or for an Apple Gift Card.
              Trade-in value may be applied toward qualifying new device
              purchase or added to an Apple Gift Card. Sales tax may be assessed
              on full value of a new device purchase.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              5. To access and use all Apple Card features and products
              available only to Apple Card users, you must add Apple Card to
              Wallet on an iPhone or iPad that supports and has the latest
              version of iOS or iPadOS. Apple Card is subject to credit
              approval, available only for qualifying applicants in the United
              States, and issued by Goldman Sachs Bank USA, Salt Lake City
              Branch.
            </p>
            <p>
              6. If you reside in the U.S. territories, please call Goldman
              Sachs at 877-255-5923 with questions about Apple Card.
            </p>
            <p>
              7. Learn more about how Apple Card applications are evaluated at
              <b>
                <u>
                  <a href="">support.apple.com/kb/HT209218.</a>
                </u>
              </b>
            </p>
            <p>A subscription is required for Apple TV+.</p>
            <p>
              A subscription is required for Apple Arcade, Apple Fitness+, and
              Apple Music.
            </p>
            <p>
              8. Features are subject to change. Some features, applications,
              and services may not be available in all regions or all languages.
            </p>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Shop and Learn */}
          <div>
            <h5 className="font-bold text-gray-800 mb-4">Shop and Learn</h5>
            <ul>
              {[
                "Store",
                "Mac",
                "iPad",
                "iPhone",
                "Watch",
                "Vision",
                "AirPods",
                "TV & Home",
                "AirTag",
                "Accessories",
                "Gift Cards",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h5 className="font-bold text-gray-800 mb-4">Account</h5>
            <ul>
              {[
                "Manage Your Apple Account",
                "Apple Store Account",
                "iCloud.com",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className="font-bold text-gray-800 mt-4 mb-4">Entertainment</h5>
            <ul>
              {[
                "Apple One",
                "Apple TV+",
                "Apple Music",
                "Apple Arcade",
                "Apple Fitness+",
                "Apple News+",
                "Apple Podcasts",
                "Apple Books",
                "App Store",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Apple Store */}
          <div>
            <h5 className="font-bold text-gray-800 mb-4">Apple Store</h5>
            <ul>
              {[
                "Find a Store",
                "Genius Bar",
                "Today at Apple",
                "Group Reservations",
                "Apple Camp",
                "Apple Store App",
                "Certified Refurbished",
                "Apple Trade In",
                "Financing",
                "Carrier Deals at Apple",
                "Order Status",
                "Shopping Help",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Business, Education, Healthcare, Government */}
          <div>
            <h5 className="font-bold text-gray-800 mb-4">For Business</h5>
            <ul>
              {["Apple and Business", "Shop for Business"].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className="font-bold text-gray-800 mt-4 mb-4">For Education</h5>
            <ul>
              {["Apple and Education", "Shop for K-12", "Shop for College"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
            <h5 className="font-bold text-gray-800 mt-4 mb-4">
              For Healthcare
            </h5>
            <ul>
              {[
                "Apple in Healthcare",
                "Mac in Healthcare",
                "Health on Apple Watch",
                "Health Records on iPhone and iPad",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className="font-bold text-gray-800 mt-4 mb-4">
              For Government
            </h5>
            <ul>
              {["Shop for Government", "Shop for Veterans and Military"].map(
                (item) => (
                  <li key={item} className="mb-2">
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Apple Values and About Apple */}
          <div>
            <h5 className="font-bold text-gray-800 mb-4">Apple Values</h5>
            <ul>
              {[
                "Accessibility",
                "Education",
                "Environment",
                "Inclusion and Diversity",
                "Privacy",
                "Racial Equity and Justice",
                "Supply Chain",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h5 className="font-bold text-gray-800 mt-4 mb-4">About Apple</h5>
            <ul>
              {[
                "Newsroom",
                "Apple Leadership",
                "Career Opportunities",
                "Investors",
                "Ethics & Compliance",
                "Events",
                "Contact Apple",
              ].map((item) => (
                <li key={item} className="mb-2">
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p>
        More ways to shop:{" "}
        <b>
          <u>
            {" "}
            <a href="" className="text-blue-700">
              Find an Apple Store
            </a>
          </u>
        </b>{" "}
        or{" "}
        <b>
          <u>
            <a href="" className="text-blue-700">
              other retailer
            </a>
          </u>
        </b>{" "}
        near you. Or call 1-800-MY-APPLE.
      </p>
      <hr className="mt-5 border" />
      {/* Footer Bottom Section */}
      <div className="py-6 mt-4">
        <div className="container mx-auto flex space-x-20">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Terms of Use
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Sales and Refunds
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Legal
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Site Map
            </a>
          </p>
          <p>
            {" "}
            <a href="#" className="hover:underline">
              United States
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
