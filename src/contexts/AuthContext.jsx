import { createContext, useContext, useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'
import { demoStore } from '../lib/demoData'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isDemo, setIsDemo] = useState(false)
  const [userRole, setUserRole] = useState('homeowner') // 'homeowner' | 'pro'

  useEffect(() => {
    if (isSupabaseConfigured()) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session?.user ?? null)
        setLoading(false)
      })
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null)
      })
      return () => subscription.unsubscribe()
    } else {
      setLoading(false)
    }
  }, [])

  const signInWithGoogle = async () => {
    if (isSupabaseConfigured()) {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/dashboard' }
      })
      if (error) console.error('Auth error:', error)
    }
  }

  const signInDemo = (role = 'homeowner') => {
    setIsDemo(true)
    setUserRole(role)
    setUser({
      id: demoStore.user.id,
      email: demoStore.user.email,
      user_metadata: { full_name: demoStore.user.name, avatar_url: null }
    })
  }

  const signOut = async () => {
    if (isSupabaseConfigured() && !isDemo) {
      await supabase.auth.signOut()
    }
    setUser(null)
    setIsDemo(false)
    setUserRole('homeowner')
  }

  const switchRole = (role) => setUserRole(role)

  return (
    <AuthContext.Provider value={{ user, loading, isDemo, userRole, signInWithGoogle, signInDemo, signOut, switchRole }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
