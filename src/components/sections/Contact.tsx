'use client';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--background)] text-[var(--foreground)]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span>📍</span>
                <span>Location, Country</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>📧</span>
                <span>your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span>💼</span>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
