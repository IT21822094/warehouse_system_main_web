import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scopeOpen, setScopeOpen] = useState(false)        // mobile only
  const [downloadOpen, setDownloadOpen] = useState(false)  // mobile only
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-950/90 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-gray-800/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
        >
          SmartWarehouse
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none text-white hover:text-blue-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm items-center">
          <li>
            <a href="#home" className="text-white hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>

          {/* Project Scope Dropdown (desktop) */}
          <li className="relative group">
            <button
              type="button"
              className="text-white hover:text-blue-400 transition-colors focus:outline-none"
            >
              Project Scope ▾
            </button>

            {/* No margin gap: top-full keeps it attached to the trigger */}
            <ul
              className="
                absolute top-full left-0 w-60 z-10
                bg-white text-black rounded-lg shadow-lg
                invisible opacity-0 translate-y-2
                transition-all duration-150 ease-out
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                focus-within:visible focus-within:opacity-100 focus-within:translate-y-0
              "
            >
              <li><a href="#literature"   className="block px-4 py-2 hover:bg-blue-50 transition-colors">Literature Survey</a></li>
              <li><a href="#gap"          className="block px-4 py-2 hover:bg-blue-50 transition-colors">Research Gap</a></li>
              <li><a href="#problem"      className="block px-4 py-2 hover:bg-blue-50 transition-colors">Research Problem &amp; Solution</a></li>
              <li><a href="#objectives"   className="block px-4 py-2 hover:bg-blue-50 transition-colors">Research Objectives</a></li>
              <li><a href="#methodology"  className="block px-4 py-2 hover:bg-blue-50 transition-colors">Methodology</a></li>
              <li><a href="#technologies" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Technologies</a></li>
            </ul>
          </li>

          <li>
            <a href="#milestones" className="text-white hover:text-blue-400 transition-colors">
              Milestones
            </a>
          </li>

          {/* Downloads Dropdown (desktop) */}
          <li className="relative group">
            <button
              type="button"
              className="text-white hover:text-blue-400 transition-colors focus:outline-none"
            >
              Downloads ▾
            </button>
            <ul
              className="
                absolute top-full left-0 w-48 z-10
                bg-white text-black rounded-lg shadow-lg
                invisible opacity-0 translate-y-2
                transition-all duration-150 ease-out
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                focus-within:visible focus-within:opacity-100 focus-within:translate-y-0
              "
            >
              <li><a href="#documents"     className="block px-4 py-2 hover:bg-blue-50 transition-colors">Documents</a></li>
              <li><a href="#presentations" className="block px-4 py-2 hover:bg-blue-50 transition-colors">Presentations</a></li>
            </ul>
          </li>

          <li><a href="#about"       className="text-white hover:text-blue-400 transition-colors">About Us</a></li>
          {/* <li><a href="#achievements" className="text-white hover:text-blue-400 transition-colors">Achievements</a></li> */}
          <li><a href="#contact"     className="text-white hover:text-blue-400 transition-colors">Contact Us</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md text-white px-4 pb-4 space-y-2 text-sm animate-slide-up">
          <a href="#home" className="block py-2 border-b border-white/10 hover:text-blue-400 transition-colors">
            Home
          </a>

          <button
            onClick={() => setScopeOpen(!scopeOpen)}
            className="w-full text-left py-2 border-b border-white/10 hover:text-blue-400 transition-colors"
          >
            Project Scope ▾
          </button>
          {scopeOpen && (
            <ul className="pl-4 text-gray-200 space-y-1 animate-fade-in">
              <li><a href="#literature"  className="block py-1 hover:text-blue-400 transition-colors">Literature Survey</a></li>
              <li><a href="#gap"         className="block py-1 hover:text-blue-400 transition-colors">Research Gap</a></li>
              <li><a href="#problem"     className="block py-1 hover:text-blue-400 transition-colors">Research Problem &amp; Solution</a></li>
              <li><a href="#objectives"  className="block py-1 hover:text-blue-400 transition-colors">Research Objectives</a></li>
              <li><a href="#methodology" className="block py-1 hover:text-blue-400 transition-colors">Methodology</a></li>
              <li><a href="#technologies"className="block py-1 hover:text-blue-400 transition-colors">Technologies</a></li>
            </ul>
          )}

          <a href="#milestones" className="block py-2 border-b border-white/10 hover:text-blue-400 transition-colors">
            Milestones
          </a>

          <button
            onClick={() => setDownloadOpen(!downloadOpen)}
            className="w-full text-left py-2 border-b border-white/10 hover:text-blue-400 transition-colors"
          >
            Downloads ▾
          </button>
          {downloadOpen && (
            <ul className="pl-4 text-gray-200 space-y-1 animate-fade-in">
              <li><a href="#documents"     className="block py-1 hover:text-blue-400 transition-colors">Documents</a></li>
              <li><a href="#presentations" className="block py-1 hover:text-blue-400 transition-colors">Presentations</a></li>
            </ul>
          )}

          <a href="#about" className="block py-2 border-b border-white/10 hover:text-blue-400 transition-colors">
            About Us
          </a>
          <a href="#contact" className="block py-2 hover:text-blue-400 transition-colors">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
