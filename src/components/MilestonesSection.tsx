import React from 'react'
import { FaCheckCircle, FaCircle } from 'react-icons/fa'

interface Milestone {
  title: string
  date: string
  description: string
  marks: number
  completed?: boolean
}

const milestones: Milestone[] = [
  {
    title: 'Project Proposal',
    date: 'Dec 2024',
    description: 'Initial document outlining problem, objectives, and methodology.',
    marks: 10,
    completed: true,
  },
  {
    title: 'Progress Presentation 1',
    date: 'April 2025',
    description: 'Evaluate the first development phase, implementation plan, and UI mockups.',
    marks: 10,
    completed: true,
  },
  {
    title: 'Research Paper',
    date: 'Jun 2025',
    description: 'Submission of IEEE-style conference paper detailing findings and methodology.',
    marks: 15,
    completed: true,
  },
  {
    title: 'Progress Presentation 2',
    date: 'Sep 2025',
    description: 'Covers system implementation, testing results, and research updates.',
    marks: 10,
    completed: true,
  },
  {
    title: 'Final Report',
    date: 'Sep 2025',
    description: 'Comprehensive report on the entire project, including results, diagrams, and references.',
    marks: 25,
    completed: true,
  },
  {
    title: 'Final Presentation & Viva',
    date: 'Oct 2025',
    description: "Viva is held individually to assess each member's contribution to the project.",
    marks: 20,
    completed: true,
  },
  {
    title: 'Website Assessment',
    date: 'Oct 2025',
    description: "Evaluation of the project website's completeness, accuracy, and responsiveness.",
    marks: 5,
    completed: true,
  },
  {
    title: 'LogBook',
    date: 'Oct 2025',
    description: 'Weekly log entries reviewed to ensure consistent progress.',
    marks: 5,
    completed: true,
  },
  
  
]

const MilestonesSection: React.FC = () => {
  return (
    <section id="milestones" className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Project Milestones Timeline
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Track our project's progress through key milestones and achievements. Each milestone represents a significant step in our research and development journey.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center">
                  {milestone.completed ? (
                    <FaCheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <FaCircle className="w-4 h-4 text-blue-500" />
                  )}
                </div>

                {/* Content */}
                <div className={`relative ${index % 2 === 0 ? 'md:ml-auto md:mr-12' : 'md:mr-auto md:ml-12'} md:w-5/12`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold text-blue-700">{milestone.title}</h3>
                      <span className="text-sm text-gray-500 italic">{milestone.date}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{milestone.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">
                        Marks: <span className="text-blue-600">{milestone.marks}</span>
                      </span>
                      {milestone.completed && (
                        <span className="text-sm text-green-500 font-medium flex items-center">
                          <FaCheckCircle className="w-4 h-4 mr-1" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MilestonesSection
