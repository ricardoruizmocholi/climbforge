import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private readonly client: SupabaseClient;

  constructor(configService: ConfigService) {
    const supabaseUrl = configService.get<string>('SUPABASE_URL');
    const serviceRoleKey = configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !serviceRoleKey) {
      throw new Error(
        'Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY. Revisa tu archivo .env.',
      );
    }

    // service_role key: solo vive aqui, en el backend. Nunca se expone al frontend.
    this.client = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
