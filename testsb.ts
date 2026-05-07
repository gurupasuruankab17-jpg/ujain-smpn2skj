import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ptvtqnjbhonziglpxhro.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnRxbmpiaG9uemlnbHB4aHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTEwNzAsImV4cCI6MjA5MjM2NzA3MH0.9KWLIf6XeUzYURw6Ye9Fg7KkrO2jQ0PmPyMrlCq-Mxo';
const supabase = createClient(supabaseUrl, supabaseKey);

async function test() {
    const { data, error } = await supabase.from('settings').select('*');
    console.log(data, error);
}

test();
