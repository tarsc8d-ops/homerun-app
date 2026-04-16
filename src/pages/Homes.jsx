import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { demoStore } from '../lib/demoData'
import { HomeIcon, PlusIcon, XIcon } from '../components/Icons'

export default function Homes() {
  const navigate = useNavigate()
  const [homes, setHomes] = useState(demoStore.homes)
  const [showAdd, setShowAdd] = useState(false)
  const [form, setForm] = useState({ name: '', address: '', city: '', state: '', zip: '', type: 'Single Family', sqft: '', bedrooms: '', bathrooms: '', year_built: '' })

  const handleAdd = () => {
    const newHome = { ...form, id: 'h' + Date.now(), user_id: 'demo-user', sqft: Number(form.sqft), bedrooms: Number(form.bedrooms), bathrooms: Number(form.bathrooms), year_built: Number(form.year_built) }
    setHomes([...homes, newHome])
    setShowAdd(false)
    setForm({ name: '', address: '', city: '', state: '', zip: '', type: 'Single Family', sqft: '', bedrooms: '', bathrooms: '', year_built: '' })
  }

  return (
    <div className="page-container">
      <div className="flex-row space-between mb-20">
        <div>
          <div className="page-title">Your Homes</div>
          <div className="page-subtitle">{homes.length} {homes.length === 1 ? 'property' : 'properties'}</div>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => setShowAdd(true)}>
          <PlusIcon width={16} height={16} /> Add Home
        </button>
      </div>

      <div className="grid-2">
        {homes.map(h => {
          const items = demoStore.getItemsForHome(h.id)
          const attCount = items.filter(i => i.status !== 'good').length
          return (
            <div className="home-card" key={h.id} onClick={() => navigate(`/homes/${h.id}`)}>
              <div className="home-card-image">
                <HomeIcon width={40} height={40} />
              </div>
              <div className="home-card-body">
                <div className="home-card-name">{h.name}</div>
                <div className="home-card-address">{h.address}, {h.city} {h.state}</div>
                <div className="home-card-tags">
                  <span className="home-card-tag">{h.type}</span>
                  <span className="home-card-tag">{items.length} items tracked</span>
                  {attCount > 0 && <span className="home-card-tag" style={{ background: 'var(--orange-light)', color: 'var(--orange)' }}>{attCount} needs attention</span>}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {showAdd && (
        <div className="modal-overlay" onClick={() => setShowAdd(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add a Home</div>
              <button className="icon-btn" onClick={() => setShowAdd(false)}><XIcon /></button>
            </div>
            <div className="flex-col gap-12">
              <div className="input-group">
                <label className="input-label">Home Name</label>
                <input className="input" placeholder="e.g. Main Residence" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="input-group">
                <label className="input-label">Address</label>
                <input className="input" placeholder="Street address" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} />
              </div>
              <div className="flex-row gap-8">
                <div className="input-group flex-1">
                  <label className="input-label">City</label>
                  <input className="input" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                </div>
                <div className="input-group" style={{ width: 80 }}>
                  <label className="input-label">State</label>
                  <input className="input" value={form.state} onChange={e => setForm({ ...form, state: e.target.value })} />
                </div>
              </div>
              <div className="flex-row gap-8">
                <div className="input-group flex-1">
                  <label className="input-label">Type</label>
                  <select className="input" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                    <option>Single Family</option>
                    <option>Townhouse</option>
                    <option>Condo</option>
                    <option>Duplex</option>
                    <option>Multi-Family</option>
                  </select>
                </div>
                <div className="input-group flex-1">
                  <label className="input-label">Sq Ft</label>
                  <input className="input" type="number" value={form.sqft} onChange={e => setForm({ ...form, sqft: e.target.value })} />
                </div>
              </div>
              <div className="flex-row gap-8">
                <div className="input-group flex-1">
                  <label className="input-label">Beds</label>
                  <input className="input" type="number" value={form.bedrooms} onChange={e => setForm({ ...form, bedrooms: e.target.value })} />
                </div>
                <div className="input-group flex-1">
                  <label className="input-label">Baths</label>
                  <input className="input" type="number" value={form.bathrooms} onChange={e => setForm({ ...form, bathrooms: e.target.value })} />
                </div>
                <div className="input-group flex-1">
                  <label className="input-label">Year Built</label>
                  <input className="input" type="number" value={form.year_built} onChange={e => setForm({ ...form, year_built: e.target.value })} />
                </div>
              </div>
              <button className="btn btn-primary btn-full mt-8" onClick={handleAdd} disabled={!form.name || !form.address}>
                Add Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
