import React from 'react'
import { FaBook, FaSearch, FaLightbulb, FaBullseye, FaCode, FaTools } from 'react-icons/fa'

const sections = [
  {
    id: 'literature',
    title: 'Literature Survey',
    icon: FaBook,
    description:
      'The evolution of smart warehouses under Industry 4.0 emphasizes efficiency, safety, prediction, and space utilization as key performance pillars. Studies show that traditional systems remain reactive—limited by inefficient picking routes, delayed fire detection, and poor cubic meter (CBM) utilization. Order picking research leveraging Travelling Salesman Problem (TSP) and A* pathfinding algorithms has demonstrated reductions in travel distance and improved adaptability to dynamic environments with moving obstacles. Fire detection studies highlight the superiority of YOLO-based computer vision over heat or smoke sensors for early-stage identification, spatial localization, and spread prediction. Predictive analytics using ARIMA, Prophet, and LSTM models have enhanced stock forecasting accuracy and enabled early anomaly detection, while worker performance classification through machine learning fosters transparent human evaluation. Best-Fit bin-packing algorithms combined with 3D visualization have improved space planning and layout visibility. However, literature reveals that these domains are mostly treated in isolation, lacking unified, real-time intelligence that integrates efficiency, safety, and predictivity within a single Industry 4.0–aligned warehouse ecosystem.'
  },

  {
    id: 'gap',
    title: 'Research Gap',
    icon: FaSearch,
    description: '',
  },
  {
    id: 'problem',
    title: 'Research Problem & Solution',
    icon: FaLightbulb,
    description:
      'Traditional warehouses operate through disconnected systems that independently address routing, safety, forecasting, and space utilization. This isolation results in long and inefficient picking paths, delayed fire detection, limited predictive insight, and poor cubic meter (CBM) utilization. The lack of interconnectivity restricts adaptability and proactive decision-making within dynamic supply chains. To overcome these gaps, this research proposes an integrated Warehouse Intelligence Framework that combines TSP and A*–based route optimization, YOLOv8-powered fire detection with size, proximity, and spread analysis, ARIMA/Prophet/LSTM-driven predictive analytics for stock and worker performance, and Best-Fit bin-packing with 3D visualization for real-time spatial optimization. Implemented through a MERN + Flask ecosystem, the framework transforms conventional operations into an adaptive, intelligent, and Industry 4.0–compliant warehouse environment.'
  },
  {
    id: 'objectives',
    title: 'Research Objectives',
    icon: FaBullseye,
    description: '',
  },
  {
    id: 'methodology',
    title: 'Methodology',
    icon: FaCode,
    description:
      'We followed a design-and-implementation approach. Each module was built and validated independently—then integrated: (1) Route Optimization: TSP sequencing + A* pathfinding with dynamic re-routing for blocked aisles/fire alerts; (2) Fire & Shelf Detection: YOLOv8m models trained on annotated datasets (Roboflow) with preprocessing/augmentations to detect fire, classify size, estimate shelf proximity, and predict spread; (3) Predictive Analytics: ARIMA/Prophet/LSTM for stock forecasting + Gradient Boosting for worker performance bands; (4) Space Optimization: Best-Fit bin-packing with interactive 3D visualization for CBM efficiency. The stack uses React (SPA), Node/Express APIs, Flask ML services, MongoDB, and Socket.IO for live updates. Evaluation covered accuracy (mAP, Precision/Recall, MAPE/RMSE), responsiveness (latency/FPS), and integration flows (e.g., fire → re-route).',
  },
  {
    id: 'technologies',
    title: 'Technologies',
    icon: FaTools,
    description: '',
  },
]

const ProjectScopeSection: React.FC = () => {
  return (
    <section id="project-scope" className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Project Scope
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our Industry 4.0–driven framework that unifies routing, safety, forecasting, and space optimization—turning warehouses into adaptive, data-driven, real-time ecosystems.
        </p>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="space-y-4">
              <div className="flex items-center mb-6">
                <section.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h3>
              </div>

              {section.id === 'gap' ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Route Optimization in Isolation</h4>
                    <p className="text-gray-600">
                      TSP/A* routing often runs in simulators and rarely interacts with live warehouse subsystems like safety, worker status, or space constraints—limiting real-world adaptability.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Standalone Fire Detection</h4>
                    <p className="text-gray-600">
                      Vision-based fire detection is typically detached from WMS dashboards and route planners, providing alerts without actionable, system-wide responses (e.g., auto re-routing).
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Fragmented Predictive Analytics</h4>
                    <p className="text-gray-600">
                      Stock forecasting and workforce analytics are implemented separately; insights do not loop back into routing or slotting decisions for timely operational impact.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Static Space Utilization</h4>
                    <p className="text-gray-600">
                      Bin-packing/3D tools are often used at design time only, not for continuous optimization under changing demand, hazards, or aisle congestion.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Lack of Integrated Intelligence</h4>
                    <p className="text-gray-600">
                      Most solutions optimize a single function. Few unify efficiency, safety, adaptability, and prediction into one cohesive, Industry 4.0–aligned framework.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <h4 className="text-lg font-semibold mb-3 text-blue-700">Operational Feedback Loops</h4>
                    <p className="text-gray-600">
                      Cross-module triggers (e.g., fire proximity → re-route; anomaly → re-slot) are missing, preventing real-time, closed-loop, data-driven decisions.
                    </p>
                  </div>
                </div>
              ) : section.id === 'objectives' ? (
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <ol className="list-decimal pl-5 text-gray-600 space-y-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">1.</span>
                      <span>Develop a Route Optimization module using <strong>TSP sequencing</strong> and <strong>A*</strong> pathfinding with dynamic re-routing for obstacles and hazards.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">2.</span>
                      <span>Design a <strong>vision-based fire detection</strong> system (YOLOv8) with <strong>size classification</strong>, <strong>shelf proximity</strong>, and <strong>spread prediction</strong>.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">3.</span>
                      <span>Implement <strong>predictive analytics</strong> for stock (ARIMA/Prophet/LSTM) and <strong>worker performance</strong> classification (e.g., Gradient Boosting), surfacing actionable insights.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">4.</span>
                      <span>Develop a <strong>space optimization</strong> module using Best-Fit bin-packing with <strong>3D visualization</strong> for improved CBM utilization.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">5.</span>
                      <span>Integrate all modules into a <strong>unified, real-time dashboard</strong> with cross-module triggers and <strong>Socket.IO</strong> updates.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-blue-700 mr-2">6.</span>
                      <span>Evaluate system accuracy and performance (mAP, Precision/Recall, MAPE/RMSE, latency/FPS, CBM %, route distance saved) under realistic conditions.</span>
                    </li>
                  </ol>
                </div>
              ) : section.id === 'technologies' ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {[
                    { name: 'React', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
                    { name: 'Node.js (Express)', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { name: 'MongoDB', url: 'https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg' },
                    { name: 'Python (Flask)', url: 'https://icon.icepanel.io/Technology/png-shadow-512/Flask.png' },
                    { name: 'PyTorch', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
                    { name: 'TensorFlow', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                    { name: 'OpenCV', url: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },
                    { name: 'YOLOv8', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoyHKKkzGdORDSZOgV8mx6OSYuY3ItkzSuA&s' },
                    { name: 'Socket.IO', url: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg' },
                    
                  ].map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center group">
                      <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                        <img src={tech.url} alt={tech.name} className="h-16 w-16 object-contain" />
                      </div>
                      <span className="mt-3 text-sm text-gray-700 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <p className="text-gray-600 text-justify leading-relaxed">{section.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectScopeSection
