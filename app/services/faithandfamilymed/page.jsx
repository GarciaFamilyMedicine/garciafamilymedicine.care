'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function FaithAndFamilyMedRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/services/faith-family-medicine')
  }, [router])
  
  return <div>Redirecting...</div>
}