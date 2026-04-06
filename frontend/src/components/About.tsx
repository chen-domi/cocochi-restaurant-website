const family = [
  {
    name: 'Kai',
    role: 'Co-Owner & Head Chef',
    bio: 'With nearly two decades of culinary expertise, Kai brings passion and precision to every dish. From hand-crafted sushi to sizzling hibachi, he has dedicated his career to delivering authentic Asian cuisine that keeps guests coming back.',
    image: '/Dad.JPG',
  },
  {
    name: 'Duan',
    role: 'Co-Owner',
    bio: 'The backbone of Cocochi, Duan keeps everything running with warmth and care. Her commitment to hospitality ensures every guest feels like family the moment they walk through the door.',
    image: '/Mom.JPG',
  },
  {
    name: 'Karina, Dominic & Heng',
    role: 'The Next Generation',
    bio: "Growing up in the restaurant, all three have developed a deep love for the family business. They are committed to preserving their family's culinary traditions while bringing fresh energy and a dedication to community.",
    image: '/Siblings.jpg',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cocochi tracking-[0.25em] uppercase text-sm font-medium mb-3">Our Story</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Meet the Family
          </h2>
          <div className="mt-4 w-16 h-1 bg-cocochi mx-auto rounded" />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            Cocochi is a family restaurant in every sense of the word — built on love, hard work, and a commitment to great food.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {family.map((member) => (
            <div
              key={member.name}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-100"
            >
              {/* Photo */}
              <div className="h-72 overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                  style={{ imageOrientation: 'from-image' }}
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-gray-900 mb-1"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {member.name}
                </h3>
                <p className="text-cocochi text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
