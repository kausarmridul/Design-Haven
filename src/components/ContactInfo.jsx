import { contactInfo, socialLinks } from "@/util/assets";

const ContactInfo = () => {
  return (
    <div className="fade-in">
      <h2 className="text-3xl md:text-4xl text-gray-800 font-bold font-heading mb-6">
        Contact <span className="text-accent">Information</span>
      </h2>

      <div className="space-y-8 mb-12">
        {contactInfo.map((info) => (
          <div key={info.id} className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-accent-light rounded-full">
              <info.icon />
            </div>
            <div>
              <h4 className="text-gray-800 font-bold font-heading mb-1">
                {info.title}
              </h4>
              <p className="text-gray-600 max-w-sm">{info.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-2xl text-gray-800 font-bold font-heading mb-4">
          Follow <span className="text-accent">Us</span>
        </h4>
        <div className="flex items-center gap-4">
          {socialLinks.map((link, idx) => (
            <a
              href="#"
              key={idx}
              className="w-12 h-12 bg-accent-light hover:bg-accent transition-all duration-300 rounded-full flex items-center justify-center"
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
