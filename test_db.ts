import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://ptvtqnjbhonziglpxhro.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0dnRxbmpiaG9uemlnbHB4aHJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3OTEwNzAsImV4cCI6MjA5MjM2NzA3MH0.9KWLIf6XeUzYURw6Ye9Fg7KkrO2jQ0PmPyMrlCq-Mxo'
);

(global as any).supabase = supabase;

import { db } from './services/database';

async function test() {
    try {
        console.time('getExams');
        const ex = await db.getExams();
        console.timeEnd('getExams');
        console.log("Exams fetched:", ex.length);

        console.time('getUsers');
        const us = await db.getUsers();
        console.timeEnd('getUsers');
        console.log("Users fetched:", us.length);

        console.time('getAllResults');
        const res = await db.getAllResults();
        console.timeEnd('getAllResults');
        console.log("Results fetched:", res.length);
    } catch (err: any) {
        console.error("Test error:", err);
    }
}

test();
