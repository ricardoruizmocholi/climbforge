import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Faltan VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY. Revisa tu archivo .env.',
  );
}

// Solo el anon key vive en el frontend. La seguridad real la dan las
// politicas RLS de Supabase, no el secreto de esta clave.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
