import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { UserIcon, LogOutIcon, HomeIcon, ChevronRight, BellIcon, ShieldIcon, InfoIcon, HeartIcon, SettingsIcon } from '../components/Icons'

export default function Account() {
  const { user, signOut, isDemo, userRole, switchRole } = useAuth()
  const navigate = useNavigate()
  const name = user?.user_metadata?.full_name || 'Demo User'
  const email = user?.email || 'demo@homerun.app'

  const handleSignOut = () => { signOut(); navigate('/') }

  const menuItems = [
    { icon: UserIcon, label: 'Edit Profile', action: () => {} },
    { icon: HomeIcon, label: 'My Homes', action: () => navigate('/homes') },
    { icon: BellIcon, label: 'Notification Settings', action: () => {} },
    { icon: ShieldIcon, label: 'Privacy & Security', action: () => {} },
    { icon: InfoIcon, label: 'About HomeRun', action: () => navigate('/about') },
    { icon: HeartIcon, label: 'Rate the App', action: () => {} },
  ]

  return (
    <div className="page-container">
      <div className="page-title mb-20">Account</div>

      <div className="card mb-20">
        <div className="flex-row gap-16">
          <div className="avatar avatar-xl">{name[0]}</div>
          <div className="flex-1">
            <div style={{ fontSize: 18, fontWeight: 700 }}>{name}</div>
            <div style={{ fontSize: 14, color: 'var(--text-2)' }}>{email}</div>
            {isDemo && <div style={{ fontSize: 12, color: 'var(--accent)', marginTop: 4, fontWeight: 600 }}>Demo Mode</div>}
          </div>
        </div>
      </div>

      <div className="section-title">Switch Role</div>
      <div className="role-toggle mb-24">
        <button className={`role-toggle-btn ${userRole === 'homeowner' ? 'active' : ''}`} onClick={() => { switchRole('homeowner'); navigate('/dashboard') }}>
          Homeowner
        </button>
        <button className={`role-toggle-btn ${userRole === 'pro' ? 'active' : ''}`} onClick={() => { switchRole('pro'); navigate('/pro/dashboard') }}>
          Pro
        </button>
      </div>

      <div className="section-title">Settings</div>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={item.action}
            className="flex-row gap-12"
            style={{
              width: '100%',
              padding: '14px 16px',
              borderBottom: i < menuItems.length - 1 ? '1px solid var(--border-light)' : 'none',
              textAlign: 'left',
            }}
          >
            <item.icon width={20} height={20} style={{ color: 'var(--text-2)' }} />
            <span className="flex-1" style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</span>
            <ChevronRight width={16} height={16} style={{ color: 'var(--text-3)' }} />
          </button>
        ))}
      </div>

      <button className="btn btn-outline btn-full mt-20" style={{ color: 'var(--red)', borderColor: 'var(--red)' }} onClick={handleSignOut}>
        <LogOutIcon width={16} height={16} /> Sign Out
      </button>
    </div>
  )
}
