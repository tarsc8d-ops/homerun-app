const p = (extra = {}) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.6',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  ...extra,
})

export const HomeIcon = (e) => (<svg {...p(e)}><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1" /></svg>)

export const SearchIcon = (e) => (<svg {...p(e)}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>)

export const CalendarIcon = (e) => (<svg {...p(e)}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>)

export const ChatIcon = (e) => (<svg {...p(e)}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>)

export const BellIcon = (e) => (<svg {...p(e)}><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>)

export const UserIcon = (e) => (<svg {...p(e)}><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>)

export const PlusIcon = (e) => (<svg {...p(e)}><path d="M12 5v14M5 12h14" /></svg>)

export const ChevronRight = (e) => (<svg {...p(e)}><path d="M9 18l6-6-6-6" /></svg>)

export const ChevronLeft = (e) => (<svg {...p(e)}><path d="M15 18l-6-6 6-6" /></svg>)

export const ChevronDown = (e) => (<svg {...p(e)}><path d="M6 9l6 6 6-6" /></svg>)

export const StarIcon = (e) => (<svg {...p({ fill: 'currentColor', ...e })}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>)

export const StarOutline = (e) => (<svg {...p(e)}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>)

export const CheckCircle = (e) => (<svg {...p(e)}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path d="M22 4L12 14.01l-3-3" /></svg>)

export const AlertCircle = (e) => (<svg {...p(e)}><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>)

export const ClockIcon = (e) => (<svg {...p(e)}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>)

export const WrenchIcon = (e) => (<svg {...p(e)}><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></svg>)

export const BoltIcon = (e) => (<svg {...p(e)}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>)

export const ThermometerIcon = (e) => (<svg {...p(e)}><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" /></svg>)

export const TreeIcon = (e) => (<svg {...p(e)}><path d="M12 22v-7M17 8l-5-6-5 6h3v4h4V8z" /><path d="M15 12l-3-4-3 4h2v3h2v-3z" /></svg>)

export const CogIcon = (e) => (<svg {...p(e)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>)

export const PaintbrushIcon = (e) => (<svg {...p(e)}><path d="M18.37 2.63L14 7l-1.59-1.59a2 2 0 00-2.82 0L8 7l9 9 1.59-1.59a2 2 0 000-2.82L17 10l4.37-4.37a2.12 2.12 0 10-3-3z" /><path d="M9 8l-5 5a2 2 0 000 2.83l.17.17a2 2 0 002.83 0L12 11" /></svg>)

export const GridIcon = (e) => (<svg {...p(e)}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>)

export const ShieldIcon = (e) => (<svg {...p(e)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>)

export const SparkleIcon = (e) => (<svg {...p(e)}><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" /><path d="M18 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1z" /></svg>)

export const LockIcon = (e) => (<svg {...p(e)}><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>)

export const HammerIcon = (e) => (<svg {...p(e)}><path d="M15 12l-8.5 8.5a2.12 2.12 0 01-3-3L12 9" /><path d="M17.64 2.36a2.12 2.12 0 013 3L14 12l-3-3 6.64-6.64z" /></svg>)

export const MapPinIcon = (e) => (<svg {...p(e)}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>)

export const DollarIcon = (e) => (<svg {...p(e)}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>)

export const SendIcon = (e) => (<svg {...p(e)}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>)

export const XIcon = (e) => (<svg {...p(e)}><path d="M18 6L6 18M6 6l12 12" /></svg>)

export const MenuIcon = (e) => (<svg {...p(e)}><path d="M3 12h18M3 6h18M3 18h18" /></svg>)

export const SettingsIcon = (e) => (<svg {...p(e)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></svg>)

export const LogOutIcon = (e) => (<svg {...p(e)}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>)

export const EditIcon = (e) => (<svg {...p(e)}><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" /><path d="M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>)

export const TrashIcon = (e) => (<svg {...p(e)}><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" /></svg>)

export const PhoneIcon = (e) => (<svg {...p(e)}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>)

export const VerifiedIcon = (e) => (<svg {...p({ fill: 'currentColor', stroke: 'none', ...e })}><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>)

export const ArrowUpRight = (e) => (<svg {...p(e)}><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>)

export const GoogleIcon = (e) => (<svg xmlns="http://www.w3.org/2000/svg" width={e?.width || 18} height={e?.height || 18} viewBox="0 0 24 24" {...e}><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>)

export const InfoIcon = (e) => (<svg {...p(e)}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>)

export const BriefcaseIcon = (e) => (<svg {...p(e)}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>)

export const UsersIcon = (e) => (<svg {...p(e)}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>)

export const HeartIcon = (e) => (<svg {...p(e)}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>)

export const BarChartIcon = (e) => (<svg {...p(e)}><path d="M18 20V10M12 20V4M6 20v-6" /></svg>)

export const FilterIcon = (e) => (<svg {...p(e)}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>)

// Category icon mapper
export const getCategoryIcon = (category) => {
  const map = {
    plumbing: WrenchIcon,
    electrical: BoltIcon,
    hvac: ThermometerIcon,
    roofing: HomeIcon,
    landscaping: TreeIcon,
    appliance: CogIcon,
    painting: PaintbrushIcon,
    flooring: GridIcon,
    pest: ShieldIcon,
    cleaning: SparkleIcon,
    security: LockIcon,
    general: HammerIcon,
  }
  return map[category] || WrenchIcon
}
