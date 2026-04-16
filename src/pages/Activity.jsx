import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { demoStore } from '../lib/demoData'
import { CheckCircle, AlertCircle, CalendarIcon, ChatIcon, BellIcon } from '../components/Icons'

const iconMap = {
  booking_confirmed: { icon: CalendarIcon, color: 'green' },
  maintenance_due: { icon: AlertCircle, color: 'orange' },
  new_message: { icon: ChatIcon, color: 'blue' },
  maintenance_attention: { icon: AlertCircle, color: 'red' },
}

export default function Activity() {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState(demoStore.notifications)

  const markAllRead = () => setNotifications(notifications.map(n => ({ ...n, read: true })))
  const unreadCount = notifications.filter(n => !n.read).length

  const formatTime = (ts) => {
    const d = new Date(ts)
    const now = new Date()
    const diff = Math.floor((now - d) / 1000)
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' })
  }

  return (
    <div className="page-container">
      <div className="flex-row space-between mb-20">
        <div>
          <div className="page-title">Activity</div>
          <div className="page-subtitle">{unreadCount > 0 ? `${unreadCount} unread` : 'All caught up'}</div>
        </div>
        {unreadCount > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={markAllRead}>Mark all read</button>
        )}
      </div>

      <div className="flex-col gap-4">
        {notifications.map(n => {
          const config = iconMap[n.type] || { icon: BellIcon, color: 'blue' }
          const Icon = config.icon
          return (
            <div
              key={n.id}
              className={`notif-item ${!n.read ? 'unread' : ''}`}
              onClick={() => {
                setNotifications(notifications.map(x => x.id === n.id ? { ...x, read: true } : x))
                if (n.link) navigate(n.link)
              }}
            >
              <div className={`notif-icon ${config.color}`}>
                <Icon width={18} height={18} />
              </div>
              <div className="notif-content">
                <div className="notif-title">{n.title}</div>
                <div className="notif-message">{n.message}</div>
                <div className="notif-time">{formatTime(n.timestamp)}</div>
              </div>
              {!n.read && (
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: 4 }} />
              )}
            </div>
          )
        })}
        {notifications.length === 0 && (
          <div className="empty-state">
            <BellIcon width={48} height={48} />
            <div className="empty-state-title">No notifications</div>
            <div className="empty-state-text">You are all caught up</div>
          </div>
        )}
      </div>
    </div>
  )
}
