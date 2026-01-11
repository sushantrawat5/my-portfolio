function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sushant Rawat</h1>
        <ul className="flex gap-6">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
