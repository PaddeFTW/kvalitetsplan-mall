// Enkel Supabase-klient (kopiera till lib/supabase.ts i Next.js)

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Exempel: spara plan
export async function savePlan(userId: string, title: string, data: any) {
  const { error } = await supabase
    .from('plans')
    .insert({ user_id: userId, title, data })
  
  if (error) console.error(error)
  else console.log('Plan sparad!')
}

// Exempel: hämta mina planer
export async function getMyPlans(userId: string) {
  const { data, error } = await supabase
    .from('plans')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  return data || []
}
