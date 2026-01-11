function Experience() {
  const experiences = [
    {
      title: 'Tech Lead',
      company: 'Nagarro Software',
      period: 'August 2022 - Present',
      description: 'Leading development of Aptis, an innovative English language assessment tool. Implementing payment gateways, multifactor authentication, and managing full development lifecycle using .NET Core, Azure, and Angular 9.'
    },
    {
      title: 'Developer',
      company: 'Ernst & Young (EY)',
      period: '2020 - 2022',
      description: 'Developed EY Atom, a Software Asset Management tool. Built Web APIs and Python bots for license analysis and reporting. Handled client-side execution and implementation.'
    },
    {
      title: 'Developer',
      company: 'EXL Services',
      period: '2017 - 2020',
      description: 'Worked on LifePRO insurance product, developing APIs and business logic. Earned Extra Miler award for exceeding client expectations and improving existing projects.'
    },
    {
      title: 'Developer',
      company: 'Infosys',
      period: '2015 - 2017',
      description: 'Developed Claims mobile app using Xamarin Forms for iOS and Android. Earned multiple awards including Customer Delight, Technical Champ, and Insta awards.'
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
              <p className="text-blue-600 mb-2">{exp.company} | {exp.period}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
