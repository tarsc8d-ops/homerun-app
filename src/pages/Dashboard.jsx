import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { demoStore } from '../lib/demoData'
import { HomeIcon, AlertCircle, CheckCircle, ClockIcon, CalendarIcon, ChevronRight, getCategoryIcon } from '../components/Icons'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const name = user?.user_metadata?.full_name?.split(' ')[0] || 'there'
  const homes = demoStore.homes
  const allItems = demoStore.maintenanceItems
  const upcoming = demoStore.bookings.filter(b => b.status === 'confirmed' || b.status === 'pending')

  const goodCount = allItems.filter(i => i.status === 'good').length
  const attentionCount = allItems.filter(i => i.status === 'attention').length
  const dueCount = allItems.filter(i => i.status === 'due').length
  const totalSpent = allItems.reduce((sum, item) => sum + (item.cost_history?.[0]?.amount || 0), 0)

  return (
    <div className="page-container">
      <div className="mb-24">
        <div className="page-title">Hey {name}</div>
        <div className="page-subtitle">Here is how your homes are doing</div>
      </div>

      <div className="grid-3 mb-24" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
        <div className="stat-card">
          <div className="flex-row gap-8 mb-8">
            <CheckCircle width={18} height={18} style={{ color: 'var(--green)' }} />
          </div>
          <div className="stat-value">{goodCount}</div>
          <div className="stat-label">All Good</div>
        </div>
        <div className="stat-card">
          <div className="flex-row gap-8 mb-8">
            <AlertCircle width={18} height={18} style={{ color: 'var(--orange)' }} />
          </div>
          <div className="stat-value">{attentionCount}</div>
          <div className="stat-label">Needs Attention</div>
        </div>
        <div className="stat-card">
          <div className="flex-row gap-8 mb-8">
            <ClockIcon width={18} height={18} style={{ color: 'var(--red)' }} />
          </div>
          <div className="stat-value">{dueCount}</div>
          <div className="stat-label">Service Due</div>
        </div>
      </div>

      <div className="section-header">
        <div className="section-title">Your Homes</div>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/homes')}>
          View All <ChevronRight width={14} height={14} />
        </button>
      </div>
      <div className="grid-2 mb-24">
        {homes.map(h => (
          <div className="home-card" key={h.id} onClick={() => navigate(`/homes/${h.id}`)}>
            <div className="home-card-image">
              <HomeIcon width={40} height={40} />
            </div>
            <div className="home-card-body">
              <div className="home-card-name">{h.name}</div>
              <div className="home-card-address">{h.address}, {h.city}</div>
              <div className="home-card-tags">
                <span className="home-card-tag">{h.type}</span>
                <span className="home-card-tag">{h.bedrooms} bed / {h.bathrooms} bath</span>
                <span className="home-card-tag">{h.sqft} sqft</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header">
        <div className="section-title">Items Needing Attention</div>
      </div>
      <div className="flex-col gap-8 mb-24">
        {allItems.filter(i => i.status !== 'good').map(item => {
          const Icon = getCategoryIcon(item.category)
          const home = demoStore.getHomeById(item.home_id)
          const statusClass = item.status === 'attention' ? 'orange' : 'red'
          return (
            <div className="maintenance-item" key={item.id} onClick={() => navigate(`/homes/${item.home_id}`)}>
              <div className={`maintenance-icon ${statusClass}`}>
                <Icon width={20} height={20} />
              </div>
              <div className="flex-1">
                <div style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{home?.name}</div>
              </div>
              <div className={`status-badge status-${item.status}`}>
                {item.status === 'attention' ? 'Attention' : 'Due'}
              </div>
            </div>
          )
        })}
      </div>

      <div className="section-header">
        <div className="section-title">Upcoming Appointments</div>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('/schedule')}>
          View All <ChevronRight width={14} height={14} />
        </button>
      </div>
      <div className="flex-col gap-8">
        {upcoming.slice(0, 3).map(b => {
          const pro = demoStore.getProById(b.pro_id)
          const d = new Date(b.date)
          const month = d.toLocaleString('default', { month: 'short' }).toUpperCase()
          const day = d.getDate()
          return (
            <div className="booking-card" key={b.id} onClick={() => navigate('/schedule')}>
              <div className="booking-date-badge">
                <span className="month">{month}</span>
                <span className="day">{day}</span>
              </div>
              <div className="flex-1">
                <div style={{ fontWeight: 600, fontSize: 14 }}>{b.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{pro?.name} · {b.time}</div>
              </div>
              <div className={`status-badge status-${b.status}`}>
                {b.status}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
