import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ptvtqnjbhonziglpxhro.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnRxbmpiaG9uemlnbHB4aHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTEwNzAsImV4cCI6MjA5MjM2NzA3MH0.9KWLIf6XeUzYURw6Ye9Fg7KkrO2jQ0PmPyMrlCq-Mxo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
