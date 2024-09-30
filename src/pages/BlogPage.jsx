import React from 'react';

const BlogPage = () => {
  return (
    <div className="bg-white mt-6">
      <div className="max-w-7xl mx-auto p-6">
        {/* Blog Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Blog Section */}
          <div className="lg:col-span-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                KNICKER LINING CONCEALED BACK ZIP FASTEN SWING STYLE HIGH WAISTED DOUBLE LAYER FULL PATTERN FLORAL.
              </h1>
              <p className="text-gray-600 leading-7 mb-4">
                Structured gripped tape invisible moulded cups for support firm hold strong power mesh front panel...
              </p>
              {/* Placeholder for quote */}
              <blockquote className="font-bold italic text-gray-800 border-l-4 border-yellow-500 pl-4 mb-4">
                “KNICKER LINING CONCEALED BACK ZIP FASTEN SWING STYLE HIGH WAISTED DOUBLE LAYER FULL PATTERN FLORAL.”
              </blockquote>
              <p className="text-gray-600 leading-7 mb-4">
                Foam padding in the insoles leather finest quality... 
              </p>

              {/* Blog Details Section */}
              <div className="text-gray-600">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  EU RIDICULUS FRINGILLA AENEAN
                </h2>
                <p className="mb-4">
                  Sacris consque adipiscing sit curabitur...
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>Crisp fresh iconic elegant timeless denim flare</li>
                  <li>Neck straight sharp silhouette and door detail</li>
                  <li>Machine wash cold slim fit premium stretch selvedge denim</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Social Stats */}
            <div className="mb-8">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-gray-600">👁️ Views:</span>
                  <span className="ml-2 font-bold">1.0k</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">💬 Shares:</span>
                  <span className="ml-2 font-bold">990</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">💻 Comments:</span>
                  <span className="ml-2 font-bold">123</span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-600">👍 Likes:</span>
                  <span className="ml-2 font-bold">425</span>
                </li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="font-semibold text-gray-800">Subscribe</h3>
              <p className="text-gray-600 text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-md border border-gray-300 mb-4"
                />
                <button className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>

        {/* Related Blogs Section */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Blog"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">Bill Walsh Leadership Lessons</h3>
                <p className="text-sm text-gray-500">Alec Whitten | 1 Jan 2023</p>
                <p className="text-sm text-gray-600 mt-2">Learn the secret of transforming a team into a Super Bowl Dynasty...</p>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Blog"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">PM Mental Models</h3>
                <p className="text-sm text-gray-500">Demi Wilkinson | 1 Jan 2023</p>
                <p className="text-sm text-gray-600 mt-2">Mental models are simple expressions of complex processes or relationships...</p>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Blog"
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">What is Wireframing?</h3>
                <p className="text-sm text-gray-500">Candice Wu | 1 Jan 2023</p>
                <p className="text-sm text-gray-600 mt-2">Introduction to Wireframing and its principles. Learn from the best in the industry...</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
