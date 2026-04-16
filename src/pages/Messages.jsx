import { useState } from 'react'
import { demoStore } from '../lib/demoData'
import { ChevronLeft, SendIcon, ChatIcon } from '../components/Icons'

export default function Messages() {
  const [activeConv, setActiveConv] = useState(null)
  const [newMsg, setNewMsg] = useState('')
  const [messages, setMessages] = useState(demoStore.messages)

  const conversations = demoStore.conversations.map(c => {
    const pro = demoStore.getProById(c.pro_id)
    const convMessages = messages.filter(m => m.conversation_id === c.id)
    const unread = convMessages.filter(m => !m.read && m.sender_id !== 'demo-user').length
    const last = convMessages[convMessages.length - 1]
    return { ...c, pro, unread, lastMessage: last?.text || '', lastTime: last?.timestamp }
  })

  const activeMessages = activeConv ? messages.filter(m => m.conversation_id === activeConv) : []
  const activePro = activeConv ? conversations.find(c => c.id === activeConv)?.pro : null

  const handleSend = () => {
    if (!newMsg.trim() || !activeConv) return
    const msg = {
      id: 'msg' + Date.now(),
      conversation_id: activeConv,
      sender_id: 'demo-user',
      receiver_id: activePro?.id,
      text: newMsg.trim(),
      timestamp: new Date().toISOString(),
      read: true,
    }
    setMessages([...messages, msg])
    setNewMsg('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() }
  }

  const formatTime = (ts) => {
    if (!ts) return ''
    const d = new Date(ts)
    const now = new Date()
    if (d.toDateString() === now.toDateString()) return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' })
  }

  if (activeConv) {
    return (
      <div className="chat-container" style={{ height: 'calc(100vh - var(--nav-height) - var(--safe-bottom) - 60px)' }}>
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-light)', background: 'var(--surface)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="icon-btn" onClick={() => setActiveConv(null)}><ChevronLeft /></button>
          <div className="avatar avatar-sm">{activePro?.name?.[0]}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>{activePro?.name}</div>
            <div style={{ fontSize: 12, color: 'var(--text-3)' }}>{activePro?.company}</div>
          </div>
        </div>
        <div className="chat-messages">
          {activeMessages.map(m => (
            <div key={m.id} className={`chat-bubble ${m.sender_id === 'demo-user' ? 'sent' : 'received'}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="chat-input-bar">
          <input className="input" placeholder="Type a message..." value={newMsg} onChange={e => setNewMsg(e.target.value)} onKeyDown={handleKeyDown} />
          <button className="btn btn-primary" onClick={handleSend} disabled={!newMsg.trim()}>
            <SendIcon width={18} height={18} />
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="page-title">Messages</div>
      <div className="page-subtitle">Chat with your pros</div>

      <div className="message-list">
        {conversations.map(c => (
          <div key={c.id} className={`message-row ${c.unread > 0 ? 'unread' : ''}`} onClick={() => setActiveConv(c.id)}>
            <div className="avatar">{c.pro?.name?.[0]}</div>
            <div className="flex-1" style={{ minWidth: 0 }}>
              <div className="flex-row space-between">
                <span style={{ fontWeight: 600, fontSize: 14 }}>{c.pro?.name}</span>
                <span className="message-time">{formatTime(c.lastTime)}</span>
              </div>
              <div className="message-preview">{c.lastMessage}</div>
            </div>
            {c.unread > 0 && (
              <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--accent)', color: 'var(--text-inv)', fontSize: 11, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {c.unread}
              </div>
            )}
          </div>
        ))}
        {conversations.length === 0 && (
          <div className="empty-state">
            <ChatIcon width={48} height={48} />
            <div className="empty-state-title">No messages yet</div>
            <div className="empty-state-text">Start a conversation with a pro</div>
          </div>
        )}
      </div>
    </div>
  )
}
