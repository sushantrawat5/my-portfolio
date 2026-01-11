function Projects() {
  const projects = [
    {
      title: 'Aptis - English Assessment Platform',
      description: 'Innovative assessment tool for testing English language skills (reading, writing, listening, speaking). Recognized by universities worldwide for admissions and recruitments.',
      tags: ['C#', '.NET Core', 'Azure', 'Angular 9', 'Web API'],
      link: '#'
    },
    {
      title: 'EY Atom - Software Asset Management',
      description: 'Enterprise tool for analyzing license violations and generating compliance reports. Runs licensing scripts on client networks for comprehensive asset management.',
      tags: ['C#', 'Web API', 'Python', 'SQL'],
      link: '#'
    },
    {
      title: 'LifePRO - Insurance Platform',
      description: 'Comprehensive insurance management product handling calculations and business logic for various insurance services through RESTful APIs.',
      tags: ['C#', 'ASP.NET', 'Web API', 'SQL'],
      link: '#'
    },
    {
      title: 'Claims Mobile App',
      description: 'Cross-platform mobile application for employee reimbursement claims. Features camera integration and image upload capabilities for iOS and Android.',
      tags: ['Xamarin Forms', 'C#', 'Web API'],
      link: '#'
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
