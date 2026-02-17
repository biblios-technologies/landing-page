import React, { useState } from "react";

const TellUsYourStorySection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("https://formsubmit.co/ajax/hello@bibliostechnologies.com", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section id="story" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Tell Us Your Story
        </h2>
        <p className="text-center text-gray-600 mb-10">
          How is your church doing? What are your spiritual needs? How is your relationship with the Scriptures? How has your faith journey been? Share your story with us and let us know how we can support you.
        </p>

        <form
          onSubmit={handleSubmit} 
          action="https://formsubmit.co/hello@bibliostechnologies.com"
          method="POST"
          className="space-y-6"
        >
          {/* prevent spam */}
          <input type="hidden" name="_captcha" value="false" />

          {/* redirect after submit */}
          <input
            type="hidden"
            name="_next"
            value="https://bibliostechnologies.com/thank_you"
          />

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border rounded-lg p-3"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded-lg p-3"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Story</label>
            <textarea
              name="message"
              rows={6}
              required
              className="w-full border rounded-lg p-3"
              placeholder="Share your story..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Submit Your Story
          </button>

          {submitted && (
            <div className="mb-6 p-4 bg-[#6CC75B]/50 text-green-800 rounded-lg text-center">
                ✅ Thank you for sharing your story!
            </div>
            )}
        </form>
      </div>
    </section>
  );
};

export default TellUsYourStorySection;