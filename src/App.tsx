import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectScopeSection from './components/ProjectScopeSection'
import MilestonesSection from './components/MilestonesSection'
import DownloadsSection from './components/DownloadsSection'
import AboutUsSection from './components/AboutUsSection'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <ProjectScopeSection />
        <MilestonesSection />
        <DownloadsSection />
        <AboutUsSection />

        <Footer />
        {/* Add Milestones, Downloads, etc. below */}
      </main>
    </>
  )
}

export default App
