import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { HomeIcon, SearchIcon, CalendarIcon, ChatIcon, BellIcon, UserIcon, BarChartIcon, UsersIcon, InfoIcon, LogOutIcon, SettingsIcon } from './Icons'

function Logo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#0F7A4D" />
      <path d="M16 6L5 15h3v10h6v-6h4v6h6V15h3L16 6z" fill="#fff" />
      <path d="M12 16l3 3 5-5" stroke="#0F7A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const homeownerLinks = [
  { to: '/dashboard', icon: HomeIcon, label: 'Dashboard' },
  { to: '/homes', icon: HomeIcon, label: 'My Homes' },
  { to: '/discover', icon: SearchIcon, label: 'Discover Pros' },
  { to: '/schedule', icon: CalendarIcon, label: 'Schedule' },
  { to: '/messages', icon: ChatIcon, label: 'Messages' },
  { to: '/activity', icon: BellIcon, label: 'Activity' },
]

const proLinks = [
  { to: '/pro/dashboard', icon: BarChartIcon, label: 'Dashboard' },
  { to: '/schedule', icon: CalendarIcon, label: 'Schedule' },
  { to: '/messages', icon: ChatIcon, label: 'Messages' },
  { to: '/activity', icon: BellIcon, label: 'Activity' },
]

const mobileHomeownerTabs = [
  { to: '/dashboard', icon: HomeIcon, label: 'Home' },
  { to: '/discover', icon: SearchIcon, label: 'Discover' },
  { to: '/schedule', icon: CalendarIcon, label: 'Schedule' },
  { to: '/messages', icon: ChatIcon, label: 'Messages' },
  { to: '/account', icon: UserIcon, label: 'Account' },
]

const mobileProTabs = [
  { to: '/pro/dashboard', icon: BarChartIcon, label: 'Dashboard' },
  { to: '/schedule', icon: CalendarIcon, label: 'Schedule' },
  { to: '/messages', icon: ChatIcon, label: 'Messages' },
  { to: '/activity', icon: BellIcon, label: 'Activity' },
  { to: '/account', icon: UserIcon, label: 'Account' },
]

export default function Layout({ children }) {
  const { user, signOut, userRole } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const name = user?.user_metadata?.full_name || 'Demo User'
  const email = user?.email || 'demo@homerun.app'
  const links = userRole === 'pro' ? proLinks : homeownerLinks
  const tabs = userRole === 'pro' ? mobileProTabs : mobileHomeownerTabs
  const unreadCount = 2 // demo

  return (
    <div className="app-shell">
      {/* Desktop Sidebar */}
      <div className="desktop-sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
            <Logo /> HomeRun
          </div>

          <div className="sidebar-section-label">{userRole === 'pro' ? 'Pro Portal' : 'Navigation'}</div>
          <div className="sidebar-nav">
            {links.map(link => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <link.icon width={20} height={20} /> {link.label}
              </NavLink>
            ))}
          </div>

          <div className="sidebar-divider" />
          <NavLink to="/about" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <InfoIcon width={20} height={20} /> About
          </NavLink>
          <NavLink to="/account" className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}>
            <SettingsIcon width={20} height={20} /> Settings
          </NavLink>

          <div className="sidebar-footer">
            <div className="sidebar-user" onClick={() => navigate('/account')}>
              <div className="sidebar-user-avatar">{name[0]}</div>
              <div className="sidebar-user-info">
                <div className="sidebar-user-name">{name}</div>
                <div className="sidebar-user-email">{email}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="app-content">
        {/* Top header (mobile) */}
        <div className="top-header">
          <div className="top-header-logo" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
            <Logo /> HomeRun
          </div>
          <div className="top-header-actions">
            <button className="icon-btn" onClick={() => navigate('/activity')}>
              <BellIcon width={20} height={20} />
              {unreadCount > 0 && <span className="badge" />}
            </button>
          </div>
        </div>

        <div className="app-main">
          {children}
        </div>
      </div>

      {/* Mobile bottom nav */}
      <nav className="bottom-nav">
        {tabs.map(tab => {
          const isActive = location.pathname === tab.to || (tab.to !== '/' && location.pathname.startsWith(tab.to))
          return (
            <button key={tab.to} className={`nav-item ${isActive ? 'active' : ''}`} onClick={() => navigate(tab.to)}>
              <tab.icon width={22} height={22} />
              {tab.label}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
