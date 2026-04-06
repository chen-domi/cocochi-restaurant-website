import { useState } from 'react';
import { menuData, type MenuCategory } from '../data/menu';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>(menuData[0]);

  return (
    <section id="menu" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cocochi tracking-[0.25em] uppercase text-sm font-medium mb-3">What We Serve</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our Menu
          </h2>
          <div className="mt-4 w-16 h-1 bg-cocochi mx-auto rounded" />
        </div>

        {/* Category tabs — horizontally scrollable on mobile */}
        <div className="overflow-x-auto pb-2 mb-10">
          <div className="flex gap-2 min-w-max mx-auto justify-start md:justify-center flex-wrap md:flex-nowrap">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeCategory.id === cat.id
                    ? 'bg-cocochi text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-cocochi hover:text-cocochi'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCategory.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-gray-900 leading-snug">{item.name}</h3>
                <span className="text-cocochi font-bold whitespace-nowrap">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              {item.description && (
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
