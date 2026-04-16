import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { demoStore } from '../lib/demoData'
import { SearchIcon, StarIcon, VerifiedIcon, getCategoryIcon, DollarIcon } from '../components/Icons'

export default function Discover() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  let pros = demoStore.pros
  if (activeCategory !== 'all') pros = pros.filter(p => p.category === activeCategory)
  if (search) {
    const q = search.toLowerCase()
    pros = pros.filter(p => p.name.toLowerCase().includes(q) || p.company.toLowerCase().includes(q) || p.bio.toLowerCase().includes(q))
  }

  return (
    <div className="page-container page-wide">
      <div className="page-title">Discover Pros</div>
      <div className="page-subtitle">Find trusted professionals for any home project</div>

      <div className="search-wrap mb-16">
        <SearchIcon width={18} height={18} />
        <input className="input input-search" style={{ width: '100%' }} placeholder="Search pros by name, company, or specialty..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>

      <div className="chip-row mb-20">
        <button className={`chip ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All</button>
        {demoStore.categories.map(c => {
          const Icon = getCategoryIcon(c.id)
          return (
            <button key={c.id} className={`chip ${activeCategory === c.id ? 'active' : ''}`} onClick={() => setActiveCategory(c.id)}>
              <Icon width={15} height={15} /> {c.name}
            </button>
          )
        })}
      </div>

      <div className="flex-col gap-12">
        {pros.map(pro => {
          const cat = demoStore.categories.find(c => c.id === pro.category)
          return (
            <div className="pro-card" key={pro.id} onClick={() => navigate(`/pros/${pro.id}`)}>
              <div className="avatar avatar-lg">{pro.name[0]}</div>
              <div className="pro-card-info">
                <div className="pro-card-name">
                  {pro.name}
                  {pro.verified && <VerifiedIcon width={16} height={16} style={{ color: 'var(--accent)' }} />}
                </div>
                <div className="pro-card-company">{pro.company}</div>
                <div className="pro-card-meta">
                  <span className="pro-card-rating">
                    <StarIcon width={14} height={14} /> {pro.rating}
                  </span>
                  <span>{pro.reviews} reviews</span>
                  <span>{cat?.name}</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 6, lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {pro.bio}
                </div>
              </div>
              <div className="text-right" style={{ flexShrink: 0 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--accent)' }}>${pro.hourly_rate}</div>
                <div style={{ fontSize: 11, color: 'var(--text-3)' }}>/hr</div>
              </div>
            </div>
          )
        })}
        {pros.length === 0 && (
          <div className="empty-state">
            <SearchIcon width={48} height={48} />
            <div className="empty-state-title">No pros found</div>
            <div className="empty-state-text">Try a different search or category</div>
          </div>
        )}
      </div>
    </div>
  )
}
