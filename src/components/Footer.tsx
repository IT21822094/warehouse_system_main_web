import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Project Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Optimized Warehouse Management System (OWMS)
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg">
              Industry&nbsp;4.0–driven smart warehousing: <span className="whitespace-nowrap">TSP&nbsp;+&nbsp;A*</span> route optimization,
              YOLOv8 fire & shelf monitoring, predictive analytics for stock & workforce, and Best-Fit 3D space optimization—unified in a real-time dashboard.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter/X" className="text-gray-400 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#project-scope" className="text-gray-400 hover:text-blue-400 transition-colors">Project Scope</a>
              </li>
              <li>
                <a href="#milestones" className="text-gray-400 hover:text-blue-400 transition-colors">Milestones</a>
              </li>
              <li>
                <a href="#downloads" className="text-gray-400 hover:text-blue-400 transition-colors">Downloads</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 text-blue-400 mt-0.5" />
                <span>SLIIT, Malabe Campus, New Kandy Road, Sri Lanka</span>
              </li>
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:IT21194962@my.sliit.lk" className="hover:text-blue-400 transition-colors">
                  IT21822094@my.sliit.lk
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <FaPhone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+94 76 914 4869 </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 OWMS Research Team — All Rights Reserved
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
