// Exempel på Dashboard-sida (app/dashboard/page.tsx)

'use client'

import { useEffect, useState } from 'react'
import { getMyPlans } from '@/lib/supabase' // efter att du kopierat supabase-example

export default function Dashboard() {
  const [plans, setPlans] = useState<any[]>([])

  useEffect(() => {
    // Här hämtar du userId från auth
    // getMyPlans(userId).then(setPlans)
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6">Mina kvalitetsplaner</h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        {plans.map(plan => (
          <div key={plan.id} className="bg-white rounded-2xl p-6 border">
            <h2 className="font-medium text-lg">{plan.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(plan.created_at).toLocaleDateString('sv-SE')}
            </p>
          </div>
        ))}
        
        <a href="/plan/ny" className="border-2 border-dashed rounded-2xl p-6 flex items-center justify-center text-gray-500 hover:border-blue-400">
          + Skapa ny plan
        </a>
      </div>
    </div>
  )
}
