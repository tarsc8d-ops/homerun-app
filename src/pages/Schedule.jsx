import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { demoStore } from '../lib/demoData'
import { PlusIcon, XIcon, CalendarIcon } from '../components/Icons'

export default function Schedule() {
  const navigate = useNavigate()
  const [bookings, setBookings] = useState(demoStore.bookings)
  const [showNew, setShowNew] = useState(false)
  const [tab, setTab] = useState('upcoming')
  const [form, setForm] = useState({ pro_id: '', home_id: '', title: '', date: '', time: '09:00', notes: '' })

  const now = new Date().toISOString().split('T')[0]
  const upcoming = bookings.filter(b => b.date >= now)
  const past = bookings.filter(b => b.date < now)
  const displayed = tab === 'upcoming' ? upcoming : past

  const handleBook = () => {
    const newB = { ...form, id: 'b' + Date.now(), user_id: 'demo-user', status: 'pending', category: 'general', duration: 60, cost: 0 }
    setBookings([...bookings, newB])
    setShowNew(false)
    setForm({ pro_id: '', home_id: '', title: '', date: '', time: '09:00', notes: '' })
  }

  return (
    <div className="page-container">
      <div className="flex-row space-between mb-20">
        <div>
          <div className="page-title">Schedule</div>
          <div className="page-subtitle">Your upcoming and past appointments</div>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowNew(true)}>
          <PlusIcon width={16} height={16} /> New Booking
        </button>
      </div>

      <div className="tabs">
        <button className={`tab ${tab === 'upcoming' ? 'active' : ''}`} onClick={() => setTab('upcoming')}>
          Upcoming ({upcoming.length})
        </button>
        <button className={`tab ${tab === 'past' ? 'active' : ''}`} onClick={() => setTab('past')}>
          Past ({past.length})
        </button>
      </div>

      <div className="flex-col gap-12">
        {displayed.map(b => {
          const pro = demoStore.getProById(b.pro_id)
          const home = demoStore.getHomeById(b.home_id)
          const d = new Date(b.date)
          const month = d.toLocaleString('default', { month: 'short' }).toUpperCase()
          const day = d.getDate()
          const weekday = d.toLocaleString('default', { weekday: 'long' })
          return (
            <div className="booking-card" key={b.id}>
              <div className="booking-date-badge">
                <span className="month">{month}</span>
                <span className="day">{day}</span>
              </div>
              <div className="flex-1">
                <div style={{ fontWeight: 600, fontSize: 15 }}>{b.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{weekday} at {b.time}</div>
                {pro && <div style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 2 }}>{pro.name} · {pro.company}</div>}
                {home && <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>{home.name}</div>}
                {b.cost > 0 && <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--accent)', marginTop: 4 }}>${b.cost}</div>}
              </div>
              <div className={`status-badge status-${b.status}`}>{b.status}</div>
            </div>
          )
        })}
        {displayed.length === 0 && (
          <div className="empty-state">
            <CalendarIcon width={48} height={48} />
            <div className="empty-state-title">No {tab} bookings</div>
            <div className="empty-state-text">Book a pro to get started</div>
            <button className="btn btn-primary btn-sm" onClick={() => navigate('/discover')}>Find a Pro</button>
          </div>
        )}
      </div>

      {showNew && (
        <div className="modal-overlay" onClick={() => setShowNew(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">New Booking</div>
              <button className="icon-btn" onClick={() => setShowNew(false)}><XIcon /></button>
            </div>
            <div className="flex-col gap-12">
              <div className="input-group">
                <label className="input-label">Service Title</label>
                <input className="input" placeholder="e.g. AC Maintenance" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
              </div>
              <div className="input-group">
                <label className="input-label">Pro</label>
                <select className="input" value={form.pro_id} onChange={e => setForm({ ...form, pro_id: e.target.value })}>
                  <option value="">Select a pro...</option>
                  {demoStore.pros.map(p => <option key={p.id} value={p.id}>{p.name} — {p.company}</option>)}
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">Home</label>
                <select className="input" value={form.home_id} onChange={e => setForm({ ...form, home_id: e.target.value })}>
                  <option value="">Select a home...</option>
                  {demoStore.homes.map(h => <option key={h.id} value={h.id}>{h.name}</option>)}
                </select>
              </div>
              <div className="flex-row gap-8">
                <div className="input-group flex-1">
                  <label className="input-label">Date</label>
                  <input className="input" type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                </div>
                <div className="input-group flex-1">
                  <label className="input-label">Time</label>
                  <input className="input" type="time" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} />
                </div>
              </div>
              <div className="input-group">
                <label className="input-label">Notes (optional)</label>
                <textarea className="input" rows={3} value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} />
              </div>
              <button className="btn btn-primary btn-full mt-8" onClick={handleBook} disabled={!form.title || !form.date}>
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
