import { createClient, SupabaseClient } from '@supabase/supabase-js';

const getInitialUrl = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('custom_supabase_url') || import.meta.env.VITE_SUPABASE_URL || 'https://ptvtqnjbhonziglpxhro.supabase.co';
    }
    return import.meta.env.VITE_SUPABASE_URL || 'https://ptvtqnjbhonziglpxhro.supabase.co';
}

const getInitialKey = () => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('custom_supabase_anon_key') || import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnRxbmpiaG9uemlnbHB4aHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTEwNzAsImV4cCI6MjA5MjM2NzA3MH0.9KWLIf6XeUzYURw6Ye9Fg7KkrO2jQ0PmPyMrlCq-Mxo';
    }
    return import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnRxbmpiaG9uemlnbHB4aHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTEwNzAsImV4cCI6MjA5MjM2NzA3MH0.9KWLIf6XeUzYURw6Ye9Fg7KkrO2jQ0PmPyMrlCq-Mxo';
}

export let supabase: SupabaseClient = createClient(getInitialUrl(), getInitialKey());

export const getCurrentSupabaseUrl = () => {
    return getInitialUrl();
};

export const getCurrentSupabaseKey = () => {
    return getInitialKey();
};

export const updateSupabaseConfig = (url: string, key: string) => {
    localStorage.setItem('custom_supabase_url', url);
    localStorage.setItem('custom_supabase_anon_key', key);
    supabase = createClient(url, key);
    // Give browser a moment before reload
    setTimeout(() => {
        window.location.reload();
    }, 500);
};

export const clearSupabaseConfig = () => {
    localStorage.removeItem('custom_supabase_url');
    localStorage.removeItem('custom_supabase_anon_key');
    window.location.reload();
};
