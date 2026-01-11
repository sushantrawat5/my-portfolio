function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <img 
            src="/profile.jpg" 
            alt="Sushant Rawat" 
            className="w-48 h-48 rounded-full border-4 border-white shadow-2xl object-cover"
            onError={(e) => {
              e.target.src = 'https://ui-avatars.com/api/?name=Sushant+Rawat&size=200&background=4F46E5&color=fff&bold=true'
            }}
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hello, I'm Sushant Rawat</h1>
        <p className="text-xl md:text-2xl mb-8">Tech Lead | .NET & Azure Specialist | 10+ Years Experience</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          View My Work
        </button>
      </div>
    </section>
  )
}

export default Hero
