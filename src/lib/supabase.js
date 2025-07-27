import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://eduhxsumckimldzfmnji.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkdWh4c3VtY2tpbWxkemZtbmppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNDEwOTQsImV4cCI6MjA2NzgxNzA5NH0.Qkz7RdD97RrV9utkm_GezK6frr2YG6UQIDNcjjQXDh0';


export const supabase = createClient(supabaseUrl, supabaseKey);
