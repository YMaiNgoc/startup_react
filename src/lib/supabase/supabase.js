import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL || "https://nclotwsdjvsaajimhgba.supabase.co",
    import.meta.env.VITE_SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jbG90d3NkanZzYWFqaW1oZ2JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTg2NjUsImV4cCI6MjA3MDEzNDY2NX0.HiFQUAJKIWWihmElCf_K7Iiyot_lUyM77tzB8oxTxUg"
);