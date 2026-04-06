const hours = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday – Thursday', time: '11 AM – 9 PM' },
  { day: 'Friday – Saturday', time: '11 AM – 10 PM' },
  { day: 'Sunday', time: '11 AM – 9 PM' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cocochi tracking-[0.25em] uppercase text-sm font-medium mb-3">Find Us</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contact & Hours
          </h2>
          <div className="mt-4 w-16 h-1 bg-cocochi mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Hours & Phone */}
          <div>
            <div className="mb-8">
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Call to Order
              </h3>
              <a
                href="tel:4137862777"
                className="text-2xl font-bold text-cocochi hover:underline"
              >
                (413) 786-2777
              </a>
            </div>

            <div>
              <h3
                className="text-xl font-bold text-gray-900 mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Hours
              </h3>
              <table className="w-full">
                <tbody>
                  {hours.map(({ day, time }) => (
                    <tr key={day} className="border-b border-gray-200 last:border-0">
                      <td className="py-3 text-gray-700 font-medium">{day}</td>
                      <td className={`py-3 text-right font-semibold ${time === 'Closed' ? 'text-gray-400' : 'text-gray-900'}`}>
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3
              className="text-xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Location
            </h3>
            <p className="text-gray-700 mb-1">760 Springfield St</p>
            <p className="text-gray-700 mb-6">Feeding Hills, MA 01030</p>

            <div className="rounded-xl overflow-hidden shadow-sm">
              <iframe
                title="Cocochi Asian Cuisine location"
                src="https://maps.google.com/maps?q=760+Springfield+St+Feeding+Hills+MA+01030&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
