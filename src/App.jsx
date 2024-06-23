// src/App.js
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-">
      <header className="border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="text-2xl font-bold">W.</div>
          <nav className="space-x-4">
            <a href="/" className="hover:text-gray-600">
              Home
            </a>
            <a href="/" className="hover:text-gray-600">
              New
            </a>
            <a href="/" className="hover:text-gray-600">
              Popular
            </a>
            <a href="/" className="hover:text-gray-600">
              Trending
            </a>
            <a href="/" className="hover:text-gray-600">
              Categories
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <img
              src="path_to_image.jpg"
              alt="Web 3.0"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h1 className="mt-4 text-3xl font-bold">
              The Bright Future of Web 3.0?
            </h1>
            <p className="mt-2 text-gray-700">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg">
              READ MORE
            </button>
          </div>
          <div className="lg:w-1/3 bg-black text-white">
            <h2 className="text-xl font-bold text-yellow-500">New</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="block hover:text-gray-600">
                  <h3 className="text-lg font-semibold ">
                    Hydrogen VS Electric Cars
                  </h3>
                  <p className="text-gray-600 border-b">
                    Will hydrogen-fueled cars ever catch up to EVs?
                  </p>
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-600">
                  <h3 className="text-lg font-semibold">
                    The Downsides of AI Artistry
                  </h3>
                  <p className="text-gray-600 border-b">
                    What are the possible adverse effects of on-demand AI image
                    generation?
                  </p>
                </a>
              </li>
              <li>
                <a href="/" className="block hover:text-gray-600">
                  <h3 className="text-lg font-semibold">
                    Is VC Funding Drying Up?
                  </h3>
                  <p className="text-gray-600">
                    Private funding by VC firms is down 50% YOY. We take a look
                    at what that means.
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="border rounded-lg p-4">
            <img
              src="path_toimage.jpg"
              alt="Retro PCs"
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold">Reviving Retro PCs</h3>
            <p className="mt-2 text-gray-600">
              What happens when old PCs are given modern upgrades?
            </p>
          </article>
          <article className="border rounded-lg p-4">
            <img
              src="Screenshot 2024-06-22 223437.jpg"
              alt="Laptops"
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold">Top 10 Laptops of 2022</h3>
            <p className="mt-2 text-gray-600">
              Our best picks for various needs and budgets.
            </p>
          </article>
          <article className="border rounded-lg p-4">
            <img
              src="Screenshot 2024-06-22 223608.jpg"
              alt="Gaming"
              className="w-full h-32 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold">The Growth of Gaming</h3>
            <p className="mt-2 text-gray-600">
              How the pandemic has sparked fresh opportunities.
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
