import { services } from "@/util/assets";

const ContactForm = () => {
  return (
    <div className="bg-secondary fade-in shadow-lg rounded-2xl p-8">
      <h3 className="text-2xl text-gray-800 font-bold font-heading mb-6">
        Send Us a Message
      </h3>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-gray-600">Name</label>
            <input
              type="text"
              className="w-full px-6 py-2 rounded outline-none border-2 border-accent/40"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-6 py-2 rounded outline-none border-2 border-accent/40"
              placeholder="Enter your email address"
            />
          </div>
          <div></div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-6 py-2 rounded outline-none border-2 border-accent/40"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Services</label>

          <select className="w-full px-6 py-2 border-2 border-accent/40 outline-none">
            <option value="" className="text-gray-600">
              Select a Service
            </option>
            {services.map((service, idx) => (
              <option value="" key={idx} className="text-gray-600">
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Message</label>
          <textarea
            placeholder="Enter your message"
            className="w-full px-6 py-2 rounded outline-none border-2 border-accent/40 resize-none"
            rows={4}
          ></textarea>
        </div>
        <button className="px-4 py-2 bg-accent text-white rounded-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
