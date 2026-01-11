function Skills() {
  const skills = [
    { name: 'C# & .NET Core', level: 95 },
    { name: 'Azure Cloud', level: 90 },
    { name: 'Web API & Microservices', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
