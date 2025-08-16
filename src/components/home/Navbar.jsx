import React from 'react'

const Navbar = () => {
  return (
    <div>
          <header className="flex flex-wrap justify-between items-center px-4 md:px-8 py-4 border-b border-gray-300">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide text-yellow-600">
          BeastMode
        </h1>
        <nav className="mt-2 md:mt-0 space-x-4 md:space-x-6 text-sm md:text-base">
          {["Home", "Programs", "Trainers", "Pricing", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-600 transition-colors duration-300 block md:inline-block"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
