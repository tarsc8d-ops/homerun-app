import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { demoStore } from '../lib/demoData'
import { UsersIcon, CalendarIcon, DollarIcon, BarChartIcon, CheckCircle, ClockIcon, HomeIcon, ChatIcon, StarIcon } from '../components/Icons'

const PRO_CLIENTS = [
  { id: 'c1', name: 'Alex Johnson', homes: ['Main Residence', 'Beach House'], lastJob: '2026-03-15', totalSpent: 1850, nextBooking: '2026-04-18' },
  { id: 'c2', name: 'Jamie Williams', homes: ['Downtown Loft'], lastJob: '2026-02-20', totalSpent: 950, nextBooking: null },
  { id: 'c3', name: 'Morgan Lee', homes: ['Suburban House'], lastJob: '2026-04-01', totalSpent: 2400, nextBooking: '2026-05-05' },
  { id: 'c4', name: 'Taylor Brown', homes: ['Country Estate', 'City Apartment'], lastJob: '2026-03-28', totalSpent: 3200, nextBooking: '2026-04-22' },
]

const PRO_BOOKINGS = [
  { id: 'pb1', client: 'Alex Johnson', home: 'Main Residence', title: 'Monthly Lawn Service', date: '2026-04-18', time: '09:00', status: 'confirmed' },
  { id: 'pb2', client: 'Taylor Brown', home: 'Country Estate', title: 'Spring Landscaping', date: '2026-04-22', time: '08:00', status: 'confirmed' },
  { id: 'pb3', client: 'Morgan Lee', home: 'Suburban House', title: 'Garden Redesign', date: '2026-05-05', time: '10:00', status: 'pending' },
]

export default function ProDashboard() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('overview')

  return (
    <div className="page-container">
      <div className="mb-24">
        <div className="page-title">Pro Dashboard</div>
        <div className="page-subtitle">Welcome back, Tom Whitfield</div>
      </div>

      <div className="tabs">
        {[['overview', 'Overview'], ['clients', 'Clients'], ['bookings', 'Bookings']].map(([key, label]) => (
          <button key={key} className={`tab ${tab === key ? 'active' : ''}`} onClick={() => setTab(key)}>{label}</button>
        ))}
      </div>

      {tab === 'overview' && (
        <>
          <div className="grid-2 mb-24" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
            <div className="stat-card">
              <div className="flex-row gap-8 mb-8"><UsersIcon width={18} height={18} style={{ color: 'var(--accent)' }} /></div>
              <div className="stat-value">{PRO_CLIENTS.length}</div>
              <div className="stat-label">Active Clients</div>
            </div>
            <div className="stat-card">
              <div className="flex-row gap-8 mb-8"><CalendarIcon width={18} height={18} style={{ color: 'var(--blue)' }} /></div>
              <div className="stat-value">{PRO_BOOKINGS.filter(b => b.status === 'confirmed').length}</div>
              <div className="stat-label">Upcoming Jobs</div>
            </div>
            <div className="stat-card">
              <div className="flex-row gap-8 mb-8"><DollarIcon width={18} height={18} style={{ color: 'var(--green)' }} /></div>
              <div className="stat-value">$8.4k</div>
              <div className="stat-label">This Month</div>
            </div>
            <div className="stat-card">
              <div className="flex-row gap-8 mb-8"><StarIcon width={18} height={18} style={{ color: 'var(--orange)' }} /></div>
              <div className="stat-value">4.6</div>
              <div className="stat-label">Avg Rating</div>
            </div>
          </div>

          <div className="section-title">Upcoming Jobs</div>
          <div className="flex-col gap-8 mb-24">
            {PRO_BOOKINGS.filter(b => b.status === 'confirmed').map(b => {
              const d = new Date(b.date)
              return (
                <div className="booking-card" key={b.id}>
                  <div className="booking-date-badge">
                    <span className="month">{d.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                    <span className="day">{d.getDate()}</span>
                  </div>
                  <div className="flex-1">
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{b.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{b.client} · {b.home}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{b.time}</div>
                  </div>
                  <div className={`status-badge status-${b.status}`}>{b.status}</div>
                </div>
              )
            })}
          </div>

          <div className="section-title">Recent Clients</div>
          <div className="flex-col gap-8">
            {PRO_CLIENTS.slice(0, 3).map(c => (
              <div className="card card-clickable flex-row gap-12" key={c.id}>
                <div className="avatar">{c.name[0]}</div>
                <div className="flex-1">
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{c.homes.join(', ')}</div>
                </div>
                <div className="text-right">
                  <div style={{ fontWeight: 700, color: 'var(--accent)', fontSize: 14 }}>${c.totalSpent.toLocaleString()}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-3)' }}>total</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === 'clients' && (
        <div className="flex-col gap-8">
          {PRO_CLIENTS.map(c => (
            <div className="card card-clickable" key={c.id}>
              <div className="flex-row gap-12 mb-12">
                <div className="avatar">{c.name[0]}</div>
                <div className="flex-1">
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{c.name}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{c.homes.length} {c.homes.length === 1 ? 'home' : 'homes'}</div>
                </div>
              </div>
              <div className="flex-row gap-16" style={{ fontSize: 13, color: 'var(--text-2)' }}>
                <span className="flex-row gap-4"><HomeIcon width={14} height={14} /> {c.homes.join(', ')}</span>
              </div>
              <div className="flex-row space-between mt-8" style={{ fontSize: 13 }}>
                <span style={{ color: 'var(--text-3)' }}>Last job: {new Date(c.lastJob).toLocaleDateString()}</span>
                <span style={{ fontWeight: 700, color: 'var(--accent)' }}>${c.totalSpent.toLocaleString()} total</span>
              </div>
              {c.nextBooking && (
                <div className="flex-row gap-4 mt-8" style={{ fontSize: 12, color: 'var(--blue)' }}>
                  <CalendarIcon width={12} height={12} /> Next: {new Date(c.nextBooking).toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'bookings' && (
        <div className="flex-col gap-8">
          {PRO_BOOKINGS.map(b => {
            const d = new Date(b.date)
            return (
              <div className="booking-card" key={b.id}>
                <div className="booking-date-badge">
                  <span className="month">{d.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                  <span className="day">{d.getDate()}</span>
                </div>
                <div className="flex-1">
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{b.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{b.client}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{b.home} · {b.time}</div>
                </div>
                <div className={`status-badge status-${b.status}`}>{b.status}</div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
