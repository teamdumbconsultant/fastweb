'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { deleteAccount } from './actions'

export default function AccountPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error || !data.user) {
        router.push('/login')
      } else {
        setUser(data.user)
      }
    }
    fetchUser()
  }, [router, supabase.auth])

  const handleDelete = async () => {
    await deleteAccount()
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center p-10 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-5">Welcome, {user.email}</h1>
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Delete Account
        </button>
      </div>
    </div>
  )
}