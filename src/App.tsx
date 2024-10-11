import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import VolunteerDashboard from './pages/VolunteerDashboard'
import OrganizationDashboard from './pages/OrganizationDashboard'
import LeaderboardPage from './pages/LeaderboardPage'
import ProfilePage from './pages/ProfilePage'
import RewardsPage from './pages/RewardsPage'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/volunteer-dashboard" element={<VolunteerDashboard />} />
            <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/rewards" element={<RewardsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App