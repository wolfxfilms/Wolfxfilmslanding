import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export interface LeadSubmission {
  name: string;
  email: string;
  phone_or_handle?: string;
  package_tier?: string;
  message?: string;
  language?: string;
}

export async function submitLead(lead: LeadSubmission) {
  if (!supabase) {
    console.info('Supabase credentials not set. Simulated lead submission:', lead);
    return { success: true, simulated: true };
  }

  const { data, error } = await supabase
    .from('leads')
    .insert([
      {
        name: lead.name,
        email: lead.email,
        phone_or_handle: lead.phone_or_handle || '',
        package_tier: lead.package_tier || '',
        message: lead.message || '',
        language: lead.language || 'en',
      },
    ])
    .select();

  if (error) {
    console.error('Supabase error inserting lead:', error);
    throw error;
  }

  return { success: true, data };
}
