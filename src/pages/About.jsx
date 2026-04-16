import { useNavigate } from 'react-router-dom'
import { ChevronLeft, HomeIcon, SearchIcon, CalendarIcon, ChatIcon, ShieldIcon, BarChartIcon, HeartIcon } from '../components/Icons'

export default function About() {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <button className="btn btn-ghost btn-sm mb-16" onClick={() => navigate(-1)} style={{ marginLeft: -8 }}>
        <ChevronLeft width={16} height={16} /> Back
      </button>

      <div className="about-hero">
        <div className="flex-row gap-8" style={{ justifyContent: 'center', marginBottom: 12 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" width="40" height="40">
            <rect width="32" height="32" rx="8" fill="#0F7A4D" />
            <path d="M16 6L5 15h3v10h6v-6h4v6h6V15h3L16 6z" fill="#fff" />
            <path d="M12 16l3 3 5-5" stroke="#0F7A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1>HomeRun</h1>
        <p>Keep your home running smoothly. Track maintenance, discover pros, and never miss a service date again.</p>
      </div>

      <div className="section-title mb-16">What HomeRun Does</div>

      <div className="flex-col gap-12 mb-32">
        {[
          { icon: HomeIcon, title: 'Multi-Home Management', desc: 'Create profiles for every property you own. Track appliances, systems, and fixtures in one place.' },
          { icon: BarChartIcon, title: 'Complete Maintenance History', desc: 'Every repair, every install, every cost — logged with dates, pros, and dollar amounts.' },
          { icon: SearchIcon, title: 'Pro Discovery', desc: 'Browse verified professionals across 12+ categories. See ratings, reviews, and hourly rates upfront.' },
          { icon: CalendarIcon, title: 'Scheduling', desc: 'Book appointments with pros directly. Both homeowners and pros see the same schedule.' },
          { icon: ChatIcon, title: 'In-App Messaging', desc: 'Coordinate with pros through built-in chat. No more phone tag or lost emails.' },
          { icon: ShieldIcon, title: 'Pro Portal', desc: 'Professionals get their own dashboard to manage clients, bookings, and service history.' },
        ].map((item, i) => (
          <div className="card" key={i}>
            <div className="flex-row gap-12">
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--accent-light)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon width={20} height={20} />
              </div>
              <div className="flex-1">
                <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-title mb-12">Built With</div>
      <div className="card mb-32">
        <div className="flex-col gap-8" style={{ fontSize: 14 }}>
          {['React + Vite', 'Supabase (Postgres + Auth)', 'Google OAuth', 'Netlify Hosting', 'Plain CSS with CSS Variables', 'SVG Icons (Heroicons style)', 'Mobile-first responsive design'].map((t, i) => (
            <div key={i} className="flex-row gap-8">
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 7 }} />
              {t}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center" style={{ color: 'var(--text-3)', fontSize: 13, paddingBottom: 24 }}>
        <div className="flex-row gap-4" style={{ justifyContent: 'center', marginBottom: 4 }}>
          Made with <HeartIcon width={14} height={14} style={{ color: 'var(--red)' }} /> for homeowners everywhere
        </div>
        HomeRun &copy; {new Date().getFullYear()}
      </div>
    </div>
  )
}
