import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-blue-100">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center bg-blue-300 p-4">
        <div className="flex items-center">
          <img src="src/components/klu.jpg" alt="kllogo" className="w-20 mr-10" />
        </div>

        <h1 className="text-2xl font-bold text-black flex-1 text-center">
          Product Management System
        </h1>

        <div className="flex gap-4">
          <Link to="/signin" className="hover:underline">Sign-In</Link>
          <Link to="/signup" className="hover:underline">Sign-Up</Link>
          <Link to="/aboutus" className="hover:underline">About-Us</Link>
        </div>
      </nav>


      {/* MAIN CONTENT */}
      <div className="p-6 text-lg leading-8">

        <h2 className="text-2xl font-bold mt-6">Mega Mart Online Store</h2>
        <p>Best quality products at affordable prices.</p>

        <h3 className="text-xl font-semibold mt-4">Tagline</h3>
        <p>Shop smart. Shop quality.</p>

        <h3 className="text-xl font-semibold mt-4">Top Categories</h3>
        <ul className="list-disc ml-6">
          <li>Home & Living</li>
          <li>Electronics</li>
          <li>Fashion</li>
          <li>Beauty</li>
          <li>Gifts</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Offer Banner</h3>
        <p>Free Shipping on ₹999+ orders • 30 Days Easy Returns</p>

        <h3 className="text-xl font-semibold mt-4">About Us</h3>
        <p>We bring you curated quality products at the best prices. Fast delivery, secure payments, easy returns.</p>

        <h3 className="text-xl font-semibold mt-4">Shipping & Returns</h3>
        <p>Delivery: 3–7 days.<br/>Returns accepted within 30 days.</p>

        <h3 className="text-xl font-semibold mt-4">Buttons / CTA</h3>
        <p>Buy Now • Add to Cart • Shop Now</p>

      </div>


      {/* FOOTER */}
      <footer className="bg-blue-300 text-center p-4 mt-10">
        <p>&copy; 2025 Mega Mart Online Store. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default HomePage;
