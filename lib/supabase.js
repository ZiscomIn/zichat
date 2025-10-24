import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://yggzevofazqdlxcvltda.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnZ3pldm9mYXpxZGx4Y3ZsdGRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyODQwNjQsImV4cCI6MjA3Njg2MDA2NH0.IFujOg41e0wmZbGEc3xga9f50OK_A4EPLi7EKmuAZts"
export const supabase = createClient(supabaseUrl, supabaseKey)
