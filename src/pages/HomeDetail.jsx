import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { demoStore } from '../lib/demoData'
import { ChevronLeft, getCategoryIcon, CheckCircle, AlertCircle, ClockIcon, PlusIcon, XIcon, DollarIcon, UserIcon, CalendarIcon } from '../components/Icons'

function StatusBadge({ status }) {
  const labels = { good: 'Good', attention: 'Attention', due: 'Due' }
  return <span className={`status-badge status-${status}`}>{labels[status]}</span>
}

export default function HomeDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const home = demoStore.getHomeById(id)
  const items = demoStore.getItemsForHome(id)
  const [selected, setSelected] = useState(null)
  const [tab, setTab] = useState('all')

  if (!home) return <div className="page-container"><p>Home not found.</p></div>

  const filtered = tab === 'all' ? items : items.filter(i => i.status === tab)
  const selectedItem = items.find(i => i.id === selected)
  const selectedPro = selectedItem ? demoStore.getProById(selectedItem.pro_id) : null

  return (
    <div className="page-container">
      <button className="btn btn-ghost btn-sm mb-16" onClick={() => navigate('/homes')} style={{ marginLeft: -8 }}>
        <ChevronLeft width={16} height={16} /> Back to Homes
      </button>

      <div className="card mb-16">
        <div className="flex-row space-between items-start">
          <div>
            <div className="page-title">{home.name}</div>
            <div style={{ fontSize: 14, color: 'var(--text-2)' }}>{home.address}, {home.city} {home.state} {home.zip}</div>
          </div>
        </div>
        <div className="flex-row gap-12 mt-16" style={{ flexWrap: 'wrap' }}>
          <span className="home-card-tag">{home.type}</span>
          <span className="home-card-tag">{home.sqft} sqft</span>
          <span className="home-card-tag">{home.bedrooms} bed / {home.bathrooms} bath</span>
          {home.year_built && <span className="home-card-tag">Built {home.year_built}</span>}
        </div>
      </div>

      <div className="flex-row space-between mb-12">
        <div className="section-title" style={{ marginBottom: 0 }}>Maintenance Items</div>
        <button className="btn btn-primary btn-sm"><PlusIcon width={14} height={14} /> Add Item</button>
      </div>

      <div className="tabs">
        {[['all', 'All'], ['good', 'Good'], ['attention', 'Attention'], ['due', 'Due']].map(([key, label]) => (
          <button key={key} className={`tab ${tab === key ? 'active' : ''}`} onClick={() => setTab(key)}>
            {label} {key === 'all' ? `(${items.length})` : `(${items.filter(i => i.status === key).length})`}
          </button>
        ))}
      </div>

      <div className="flex-col gap-8 mb-24">
        {filtered.map(item => {
          const Icon = getCategoryIcon(item.category)
          const statusClass = item.status === 'good' ? 'green' : item.status === 'attention' ? 'orange' : 'red'
          const pro = demoStore.getProById(item.pro_id)
          return (
            <div className="maintenance-item" key={item.id} onClick={() => setSelected(item.id)}>
              <div className={`maintenance-icon ${statusClass}`}>
                <Icon width={20} height={20} />
              </div>
              <div className="flex-1">
                <div style={{ fontWeight: 600, fontSize: 14 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-2)' }}>
                  {item.brand && `${item.brand}`}{item.model && ` · ${item.model}`}
                </div>
                {pro && <div style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 2 }}>Pro: {pro.name}</div>}
              </div>
              <StatusBadge status={item.status} />
            </div>
          )
        })}
        {filtered.length === 0 && (
          <div className="empty-state">
            <CheckCircle width={48} height={48} />
            <div className="empty-state-title">No items in this category</div>
          </div>
        )}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">{selectedItem.title}</div>
              <button className="icon-btn" onClick={() => setSelected(null)}><XIcon /></button>
            </div>

            <StatusBadge status={selectedItem.status} />

            <div className="detail-section mt-16">
              {selectedItem.brand && (
                <div className="detail-row">
                  <span className="detail-row-label">Brand</span>
                  <span className="detail-row-value">{selectedItem.brand}</span>
                </div>
              )}
              {selectedItem.model && (
                <div className="detail-row">
                  <span className="detail-row-label">Model</span>
                  <span className="detail-row-value">{selectedItem.model}</span>
                </div>
              )}
              {selectedItem.install_date && (
                <div className="detail-row">
                  <span className="detail-row-label">Installed</span>
                  <span className="detail-row-value">{new Date(selectedItem.install_date).toLocaleDateString()}</span>
                </div>
              )}
              <div className="detail-row">
                <span className="detail-row-label">Last Serviced</span>
                <span className="detail-row-value">{new Date(selectedItem.last_service).toLocaleDateString()}</span>
              </div>
              <div className="detail-row">
                <span className="detail-row-label">Next Service</span>
                <span className="detail-row-value">{new Date(selectedItem.next_service).toLocaleDateString()}</span>
              </div>
            </div>

            {selectedItem.notes && (
              <div className="detail-section">
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6 }}>Notes</div>
                <div style={{ fontSize: 14, lineHeight: 1.5 }}>{selectedItem.notes}</div>
              </div>
            )}

            {selectedPro && (
              <div className="detail-section" style={{ cursor: 'pointer' }} onClick={() => { setSelected(null); navigate(`/pros/${selectedPro.id}`) }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 8 }}>Assigned Pro</div>
                <div className="flex-row gap-12">
                  <div className="avatar">{selectedPro.name[0]}</div>
                  <div className="flex-1">
                    <div style={{ fontWeight: 600, fontSize: 14 }}>{selectedPro.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-2)' }}>{selectedPro.company}</div>
                  </div>
                </div>
              </div>
            )}

            {selectedItem.cost_history?.length > 0 && (
              <div className="detail-section">
                <div className="flex-row gap-8 mb-8">
                  <DollarIcon width={16} height={16} style={{ color: 'var(--accent)' }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)' }}>Cost History</span>
                </div>
                {selectedItem.cost_history.map((c, i) => (
                  <div className="cost-row" key={i}>
                    <div>
                      <div style={{ fontSize: 14 }}>{c.description}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{new Date(c.date).toLocaleDateString()}</div>
                    </div>
                    <div className="cost-amount">${c.amount.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex-row gap-8 mt-16">
              <button className="btn btn-primary flex-1" onClick={() => { setSelected(null); navigate('/schedule') }}>
                <CalendarIcon width={16} height={16} /> Schedule Service
              </button>
              {selectedPro && (
                <button className="btn btn-outline flex-1" onClick={() => { setSelected(null); navigate('/messages') }}>
                  Message Pro
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
