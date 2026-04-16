import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { HomeIcon, SearchIcon, CalendarIcon, ChatIcon, ShieldIcon, BarChartIcon, GoogleIcon } from '../components/Icons'

const features = [
  { icon: HomeIcon, title: 'Multi-Home Tracking', desc: 'Manage maintenance across every property you own from a single dashboard.' },
  { icon: BarChartIcon, title: 'Full Cost History', desc: 'Track every dollar spent on maintenance — what was done, when, and by whom.' },
  { icon: SearchIcon, title: 'Discover Pros', desc: 'Find verified professionals for plumbing, electrical, HVAC, roofing, and more.' },
  { icon: CalendarIcon, title: 'Easy Scheduling', desc: 'Book appointments with pros directly and keep your maintenance on track.' },
  { icon: ChatIcon, title: 'Built-in Messaging', desc: 'Chat with your pros in-app to coordinate work without the phone tag.' },
  { icon: ShieldIcon, title: 'Pro Portal', desc: 'Professionals get their own dashboard to manage clients and bookings.' },
]

export default function Landing() {
  const { signInWithGoogle, signInDemo } = useAuth()
  const navigate = useNavigate()

  const handleDemo = (role) => {
    signInDemo(role)
    navigate(role === 'pro' ? '/pro/dashboard' : '/dashboard')
  }

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="landing-logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" width="32" height="32">
            <rect width="32" height="32" rx="8" fill="#0F7A4D" />
            <path d="M16 6L5 15h3v10h6v-6h4v6h6V15h3L16 6z" fill="#fff" />
            <path d="M12 16l3 3 5-5" stroke="#0F7A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          HomeRun
        </div>
        <div className="flex-row gap-8">
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/about')}>About</button>
          <button className="btn btn-primary btn-sm" onClick={() => handleDemo('homeowner')}>Get Started</button>
        </div>
      </nav>

      <div className="landing-hero">
        <h1>Keep Your Home <span>Running</span></h1>
        <p>
          Track every appliance, every repair, every pro. HomeRun gives homeowners complete visibility into their home maintenance — and connects them with trusted professionals.
        </p>
        <div className="landing-cta-row">
          <button className="btn btn-google" onClick={signInWithGoogle}>
            <GoogleIcon width={20} height={20} />
            Sign in with Google
          </button>
          <button className="btn btn-primary" onClick={() => handleDemo('homeowner')}>
            Try Demo as Homeowner
          </button>
          <button className="btn btn-outline" onClick={() => handleDemo('pro')}>
            Try Demo as Pro
          </button>
        </div>
      </div>

      <div className="landing-features">
        <h2>Everything your home needs in one app</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card-icon">
                <f.icon width={22} height={22} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="landing-footer">
        HomeRun &copy; {new Date().getFullYear()}. Keep your home running smoothly.
      </div>
    </div>
  )
}
