import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  category: string;
  published: boolean;
  featured_image_url: string | null;
  author: string;
  created_at: string;
  updated_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  created_at: string;
};

export type QuoteRequest = {
  id: string;
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  industry: string;
  num_employees: number;
  annual_payroll: number | null;
  coverage_type: string;
  additional_info: string | null;
  status: string;
  created_at: string;
};

export type ClaimSubmission = {
  id: string;
  policy_number: string;
  claimant_name: string;
  claimant_email: string;
  claimant_phone: string | null;
  incident_date: string;
  incident_description: string;
  injury_type: string;
  witness_info: string | null;
  status: string;
  created_at: string;
};
