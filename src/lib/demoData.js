// Demo data used when Supabase is not configured
// This allows the full app to be explored without a backend

const CATEGORIES = [
  { id: 'plumbing', name: 'Plumbing', icon: 'wrench' },
  { id: 'electrical', name: 'Electrical', icon: 'bolt' },
  { id: 'hvac', name: 'HVAC', icon: 'thermometer' },
  { id: 'roofing', name: 'Roofing', icon: 'home' },
  { id: 'landscaping', name: 'Landscaping', icon: 'tree' },
  { id: 'appliance', name: 'Appliances', icon: 'cog' },
  { id: 'painting', name: 'Painting', icon: 'paintbrush' },
  { id: 'flooring', name: 'Flooring', icon: 'grid' },
  { id: 'pest', name: 'Pest Control', icon: 'shield' },
  { id: 'cleaning', name: 'Cleaning', icon: 'sparkle' },
  { id: 'security', name: 'Security', icon: 'lock' },
  { id: 'general', name: 'General Handyman', icon: 'hammer' },
]

const PROS = [
  { id: 'p1', name: 'Mike Reynolds', company: 'Reynolds Plumbing Co.', category: 'plumbing', rating: 4.9, reviews: 127, hourly_rate: 85, avatar: null, bio: 'Licensed master plumber with 15 years experience.', phone: '(555) 234-5678', verified: true, jobs_completed: 342 },
  { id: 'p2', name: 'Sarah Chen', company: 'BrightSpark Electric', category: 'electrical', rating: 4.8, reviews: 93, hourly_rate: 95, avatar: null, bio: 'Certified electrician handling panel upgrades, rewiring, and smart home installation.', phone: '(555) 345-6789', verified: true, jobs_completed: 218 },
  { id: 'p3', name: 'James Okafor', company: 'Cool Breeze HVAC', category: 'hvac', rating: 4.7, reviews: 156, hourly_rate: 90, avatar: null, bio: 'HVAC specialist for installation, maintenance, and repair of all systems.', phone: '(555) 456-7890', verified: true, jobs_completed: 410 },
  { id: 'p4', name: 'Diana Morales', company: 'TopShield Roofing', category: 'roofing', rating: 4.9, reviews: 78, hourly_rate: 110, avatar: null, bio: 'Full-service roofing contractor. Shingle, tile, and metal installation.', phone: '(555) 567-8901', verified: true, jobs_completed: 189 },
  { id: 'p5', name: 'Tom Whitfield', company: 'GreenThumb Landscapes', category: 'landscaping', rating: 4.6, reviews: 204, hourly_rate: 65, avatar: null, bio: 'Complete landscaping services including lawn care and garden design.', phone: '(555) 678-9012', verified: true, jobs_completed: 520 },
  { id: 'p6', name: 'Lisa Park', company: 'AppliancePro', category: 'appliance', rating: 4.8, reviews: 112, hourly_rate: 80, avatar: null, bio: 'Certified technician for all major appliance brands.', phone: '(555) 789-0123', verified: true, jobs_completed: 295 },
  { id: 'p7', name: 'Carlos Rivera', company: 'Rivera Painting', category: 'painting', rating: 4.7, reviews: 89, hourly_rate: 70, avatar: null, bio: 'Interior and exterior painting with premium finishes.', phone: '(555) 890-1234', verified: true, jobs_completed: 175 },
  { id: 'p8', name: 'Amanda Foster', company: 'CleanSweep Services', category: 'cleaning', rating: 4.9, reviews: 310, hourly_rate: 55, avatar: null, bio: 'Deep cleaning, move-in/out cleaning, and recurring maintenance cleaning.', phone: '(555) 901-2345', verified: true, jobs_completed: 780 },
]

const DEMO_USER = { id: 'demo-user', email: 'demo@homerun.app', name: 'Alex Johnson', avatar: null, role: 'homeowner', created_at: '2024-06-15' }

const HOMES = [
  { id: 'h1', user_id: 'demo-user', name: 'Main Residence', address: '742 Evergreen Terrace', city: 'Springfield', state: 'QLD', zip: '4000', type: 'Single Family', sqft: 2200, year_built: 1998, bedrooms: 4, bathrooms: 2.5, image: null },
  { id: 'h2', user_id: 'demo-user', name: 'Beach House', address: '15 Coastal Drive', city: 'Gold Coast', state: 'QLD', zip: '4217', type: 'Townhouse', sqft: 1400, year_built: 2015, bedrooms: 3, bathrooms: 2, image: null },
]

const MAINTENANCE_ITEMS = [
  { id: 'm1', home_id: 'h1', category: 'hvac', title: 'HVAC System', brand: 'Carrier', model: 'Infinity 24ANB1', install_date: '2021-03-15', last_service: '2025-11-20', next_service: '2026-05-20', status: 'good', pro_id: 'p3', notes: 'Annual filter change and inspection completed.', cost_history: [{ date: '2025-11-20', amount: 185, description: 'Annual maintenance' }, { date: '2024-11-15', amount: 175, description: 'Annual maintenance' }] },
  { id: 'm2', home_id: 'h1', category: 'plumbing', title: 'Water Heater', brand: 'Rheem', model: 'Performance Plus 50gal', install_date: '2020-08-10', last_service: '2025-08-10', next_service: '2026-08-10', status: 'good', pro_id: 'p1', notes: 'Tankless upgrade recommended within 2 years.', cost_history: [{ date: '2025-08-10', amount: 150, description: 'Flush and inspect' }, { date: '2020-08-10', amount: 1800, description: 'Installation' }] },
  { id: 'm3', home_id: 'h1', category: 'roofing', title: 'Roof - Asphalt Shingles', brand: 'GAF', model: 'Timberline HDZ', install_date: '2018-04-20', last_service: '2025-04-01', next_service: '2026-04-01', status: 'attention', pro_id: 'p4', notes: 'Minor wear on south side. Recommends recoating in 1-2 years.', cost_history: [{ date: '2025-04-01', amount: 250, description: 'Annual inspection' }, { date: '2018-04-20', amount: 12500, description: 'Full replacement' }] },
  { id: 'm4', home_id: 'h1', category: 'appliance', title: 'Dishwasher', brand: 'Bosch', model: '500 Series', install_date: '2023-01-10', last_service: '2025-07-15', next_service: '2026-01-15', status: 'good', pro_id: 'p6', notes: 'Running great. Filter cleaned.', cost_history: [{ date: '2025-07-15', amount: 95, description: 'Service call' }, { date: '2023-01-10', amount: 950, description: 'Purchase + install' }] },
  { id: 'm5', home_id: 'h1', category: 'electrical', title: 'Electrical Panel', brand: 'Square D', model: 'QO 200A', install_date: '2019-06-05', last_service: '2025-06-05', next_service: '2027-06-05', status: 'good', pro_id: 'p2', notes: '200 amp panel, upgraded from 100 amp.', cost_history: [{ date: '2019-06-05', amount: 2800, description: 'Panel upgrade' }] },
  { id: 'm6', home_id: 'h1', category: 'landscaping', title: 'Lawn & Garden', brand: null, model: null, install_date: null, last_service: '2026-03-01', next_service: '2026-04-15', status: 'due', pro_id: 'p5', notes: 'Monthly mowing, quarterly fertilization.', cost_history: [{ date: '2026-03-01', amount: 120, description: 'March mow + edge' }] },
  { id: 'm7', home_id: 'h2', category: 'plumbing', title: 'Water Heater', brand: 'Rinnai', model: 'RU199iN', install_date: '2015-09-01', last_service: '2025-09-01', next_service: '2026-09-01', status: 'good', pro_id: 'p1', notes: 'Tankless unit in great shape.', cost_history: [{ date: '2025-09-01', amount: 200, description: 'Annual flush' }] },
  { id: 'm8', home_id: 'h2', category: 'cleaning', title: 'Deep Clean Service', brand: null, model: null, install_date: null, last_service: '2026-03-15', next_service: '2026-06-15', status: 'good', pro_id: 'p8', notes: 'Quarterly deep clean.', cost_history: [{ date: '2026-03-15', amount: 280, description: 'Q1 deep clean' }] },
]

const BOOKINGS = [
  { id: 'b1', user_id: 'demo-user', pro_id: 'p5', home_id: 'h1', category: 'landscaping', title: 'Monthly Lawn Service', date: '2026-04-18', time: '09:00', duration: 120, status: 'confirmed', cost: 120 },
  { id: 'b2', user_id: 'demo-user', pro_id: 'p3', home_id: 'h1', category: 'hvac', title: 'AC Pre-Summer Inspection', date: '2026-04-25', time: '10:00', duration: 90, status: 'pending', cost: 185 },
  { id: 'b3', user_id: 'demo-user', pro_id: 'p1', home_id: 'h2', category: 'plumbing', title: 'Water Heater Flush', date: '2026-05-10', time: '14:00', duration: 60, status: 'confirmed', cost: 200 },
]

const MESSAGES = [
  { id: 'msg1', conversation_id: 'c1', sender_id: 'demo-user', receiver_id: 'p5', text: 'Hi Tom, can we schedule the April lawn service for a Friday this month?', timestamp: '2026-04-14T10:30:00', read: true },
  { id: 'msg2', conversation_id: 'c1', sender_id: 'p5', receiver_id: 'demo-user', text: 'Absolutely! I have Friday the 18th open at 9am. Does that work for you?', timestamp: '2026-04-14T11:15:00', read: true },
  { id: 'msg3', conversation_id: 'c1', sender_id: 'demo-user', receiver_id: 'p5', text: "Perfect, let's lock that in. Thanks Tom!", timestamp: '2026-04-14T11:20:00', read: true },
  { id: 'msg4', conversation_id: 'c2', sender_id: 'p3', receiver_id: 'demo-user', text: "Hey Alex, just confirming your AC inspection is on the books for April 25 at 10am.", timestamp: '2026-04-15T09:00:00', read: false },
]

const CONVERSATIONS = [
  { id: 'c1', pro_id: 'p5', user_id: 'demo-user', last_message: "Perfect, let's lock that in. Thanks Tom!", last_timestamp: '2026-04-14T11:20:00', unread: 0 },
  { id: 'c2', pro_id: 'p3', user_id: 'demo-user', last_message: 'Hey Alex, just confirming your AC inspection...', last_timestamp: '2026-04-15T09:00:00', unread: 1 },
]

const NOTIFICATIONS = [
  { id: 'n1', user_id: 'demo-user', type: 'booking_confirmed', title: 'Booking Confirmed', message: 'Tom Whitfield confirmed your lawn service for April 18 at 9:00 AM.', timestamp: '2026-04-14T12:00:00', read: false, link: '/schedule' },
  { id: 'n2', user_id: 'demo-user', type: 'maintenance_due', title: 'Maintenance Due Soon', message: 'Lawn & Garden service at Main Residence is due April 15.', timestamp: '2026-04-13T08:00:00', read: true, link: '/homes/h1' },
  { id: 'n3', user_id: 'demo-user', type: 'new_message', title: 'New Message', message: 'James Okafor sent you a message about your AC inspection.', timestamp: '2026-04-15T09:00:00', read: false, link: '/messages' },
  { id: 'n4', user_id: 'demo-user', type: 'maintenance_attention', title: 'Attention Needed', message: 'Roof at Main Residence flagged for attention.', timestamp: '2026-04-10T10:00:00', read: true, link: '/homes/h1' },
]

export const demoStore = {
  user: DEMO_USER, categories: CATEGORIES, pros: PROS, homes: HOMES,
  maintenanceItems: MAINTENANCE_ITEMS, bookings: BOOKINGS, messages: MESSAGES,
  conversations: CONVERSATIONS, notifications: NOTIFICATIONS,
  getProById: (id) => PROS.find(p => p.id === id),
  getHomeById: (id) => HOMES.find(h => h.id === id),
  getItemsForHome: (homeId) => MAINTENANCE_ITEMS.filter(m => m.home_id === homeId),
  getProsByCategory: (cat) => PROS.filter(p => p.category === cat),
  getBookingsForUser: () => BOOKINGS,
  getConversations: () => CONVERSATIONS,
  getMessagesForConversation: (convId) => MESSAGES.filter(m => m.conversation_id === convId),
  getUnreadNotifications: () => NOTIFICATIONS.filter(n => !n.read),
}
