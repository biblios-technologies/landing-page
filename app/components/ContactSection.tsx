import ContactCardActions from "./ContactCard";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#30b7f9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#30b7f9]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-black/60 uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-[#30b7f9] text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Let's Get Your Time Back
            </h2>
          </div>

          {/* Contact actions */}
          <ContactCardActions />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
