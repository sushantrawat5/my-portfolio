function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
        <div className="text-center mb-8">
          <p className="text-lg mb-2">📞 +91-8888888888</p>
          <p className="text-lg mb-2">✉️ sushant.rawat@gmail.com</p>
          <p className="text-lg">
            <a href="https://linkedin.com/in/sushantrawat511" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
              🔗 LinkedIn: sushantrawat511
            </a>
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea 
                rows="5"
                className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
