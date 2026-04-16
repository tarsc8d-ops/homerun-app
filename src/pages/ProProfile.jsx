import { useParams, useNavigate } from 'react-router-dom'
import { demoStore } from '../lib/demoData'
import { ChevronLeft, StarIcon, VerifiedIcon, PhoneIcon, CalendarIcon, ChatIcon, DollarIcon, BriefcaseIcon, getCategoryIcon } from '../components/Icons'

export default function ProProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pro = demoStore.getProById(id)

  if (!pro) return <div className="page-container"><p>Pro not found.</p></div>

  const cat = demoStore.categories.find(c => c.id === pro.category)
  const CatIcon = getCategoryIcon(pro.category)

  return (
    <div className="page-container">
      <button className="btn btn-ghost btn-sm mb-16" onClick={() => navigate(-1)} style={{ marginLeft: -8 }}>
        <ChevronLeft width={16} height={16} /> Back
      </button>

      <div className="card mb-16">
        <div className="pro-detail-header">
          <div className="avatar avatar-xl" style={{ margin: '0 auto 12px' }}>{pro.name[0]}</div>
          <div style={{ fontSize: 22, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
            {pro.name}
            {pro.verified && <VerifiedIcon width={20} height={20} style={{ color: 'var(--accent)' }} />}
          </div>
          <div style={{ fontSize: 14, color: 'var(--text-2)' }}>{pro.company}</div>
          <div style={{ marginTop: 8 }}>
            <span className="chip" style={{ cursor: 'default' }}>
              <CatIcon width={14} height={14} /> {cat?.name}
            </span>
          </div>

          <div className="pro-detail-stats">
            <div className="pro-detail-stat">
              <div className="pro-detail-stat-value" style={{ color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                <StarIcon width={18} height={18} /> {pro.rating}
              </div>
              <div className="pro-detail-stat-label">Rating</div>
            </div>
            <div className="pro-detail-stat">
              <div className="pro-detail-stat-value">{pro.reviews}</div>
              <div className="pro-detail-stat-label">Reviews</div>
            </div>
            <div className="pro-detail-stat">
              <div className="pro-detail-stat-value">{pro.jobs_completed}</div>
              <div className="pro-detail-stat-label">Jobs Done</div>
            </div>
            <div className="pro-detail-stat">
              <div className="pro-detail-stat-value" style={{ color: 'var(--accent)' }}>${pro.hourly_rate}</div>
              <div className="pro-detail-stat-label">Per Hour</div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-section mb-16">
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 8 }}>About</div>
        <p style={{ fontSize: 14, lineHeight: 1.6 }}>{pro.bio}</p>
      </div>

      <div className="detail-section mb-16">
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 8 }}>Contact</div>
        <div className="flex-row gap-8" style={{ fontSize: 14 }}>
          <PhoneIcon width={16} height={16} style={{ color: 'var(--text-3)' }} />
          {pro.phone}
        </div>
      </div>

      <div className="flex-col gap-8">
        <button className="btn btn-primary btn-full" onClick={() => navigate('/schedule')}>
          <CalendarIcon width={16} height={16} /> Book Appointment
        </button>
        <button className="btn btn-outline btn-full" onClick={() => navigate('/messages')}>
          <ChatIcon width={16} height={16} /> Send Message
        </button>
      </div>
    </div>
  )
}
