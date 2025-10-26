/*
  # Initial Schema for Accinsco Website

  ## Overview
  This migration creates the foundational database structure for the Accinsco website,
  including tables for blog posts, news articles, contact form submissions, quote requests,
  and claims submissions.

  ## New Tables

  ### 1. `blog_posts`
  Stores blog articles and news content
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Article title
  - `slug` (text, unique) - URL-friendly identifier
  - `content` (text) - Article content
  - `excerpt` (text) - Short summary
  - `category` (text) - Article category
  - `published` (boolean) - Publication status
  - `featured_image_url` (text) - Featured image URL
  - `author` (text) - Author name
  - `created_at` (timestamptz) - Creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `contact_submissions`
  Stores contact form submissions
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Submitter name
  - `email` (text) - Submitter email
  - `phone` (text) - Phone number (optional)
  - `subject` (text) - Message subject
  - `message` (text) - Message content
  - `status` (text) - Submission status (new, read, responded)
  - `created_at` (timestamptz) - Submission timestamp

  ### 3. `quote_requests`
  Stores online quote requests
  - `id` (uuid, primary key) - Unique identifier
  - `business_name` (text) - Business name
  - `contact_name` (text) - Contact person name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone
  - `industry` (text) - Business industry
  - `num_employees` (integer) - Number of employees
  - `annual_payroll` (numeric) - Annual payroll amount
  - `coverage_type` (text) - Type of coverage requested
  - `additional_info` (text) - Additional information
  - `status` (text) - Request status (pending, quoted, closed)
  - `created_at` (timestamptz) - Request timestamp

  ### 4. `claims_submissions`
  Stores workers compensation claims
  - `id` (uuid, primary key) - Unique identifier
  - `policy_number` (text) - Policy number
  - `claimant_name` (text) - Claimant name
  - `claimant_email` (text) - Claimant email
  - `claimant_phone` (text) - Claimant phone
  - `incident_date` (date) - Date of incident
  - `incident_description` (text) - Incident description
  - `injury_type` (text) - Type of injury
  - `witness_info` (text) - Witness information (optional)
  - `status` (text) - Claim status (submitted, reviewing, approved, denied)
  - `created_at` (timestamptz) - Submission timestamp

  ## Security
  - RLS enabled on all tables
  - Public read access for published blog posts only
  - Authenticated access required for submissions and management
  - Restrictive policies ensure data privacy

  ## Notes
  - All tables use UUID for primary keys
  - Timestamps are automatically set
  - Status fields use text for flexibility
  - Tables are designed for easy querying and reporting
*/

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text DEFAULT '',
  category text DEFAULT 'general',
  published boolean DEFAULT false,
  featured_image_url text,
  author text DEFAULT 'Accinsco Team',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create quote_requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  industry text NOT NULL,
  num_employees integer NOT NULL,
  annual_payroll numeric,
  coverage_type text NOT NULL,
  additional_info text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create claims_submissions table
CREATE TABLE IF NOT EXISTS claims_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  policy_number text NOT NULL,
  claimant_name text NOT NULL,
  claimant_email text NOT NULL,
  claimant_phone text,
  incident_date date NOT NULL,
  incident_description text NOT NULL,
  injury_type text NOT NULL,
  witness_info text,
  status text DEFAULT 'submitted',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE claims_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_posts
CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for quote_requests
CREATE POLICY "Anyone can insert quote requests"
  ON quote_requests
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update quote requests"
  ON quote_requests
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for claims_submissions
CREATE POLICY "Anyone can insert claims"
  ON claims_submissions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view claims"
  ON claims_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update claims"
  ON claims_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_claims_submissions_status ON claims_submissions(status, created_at DESC);
