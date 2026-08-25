import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { AIProvider } from './ai-provider.interface';

/**
 * Encapsula el acceso a Gemini. Ninguna otra parte del backend debe importar
 * el SDK de Gemini directamente ni leer GEMINI_API_KEY: todo pasa por aqui.
 * Implementacion pendiente — ver Feature 002 en spec/features/.
 */
@Injectable()
export class AIProviderService implements AIProvider {
  constructor(private readonly configService: ConfigService) {}

  generateContent(_prompt: string): Promise<string> {
    const apiKey = this.configService.get<string>('GEMINI_API_KEY');
    if (!apiKey) {
      throw new Error('Falta GEMINI_API_KEY. Revisa tu archivo .env.');
    }
    return Promise.reject(
      new Error('AIProviderService.generateContent no esta implementado todavia.'),
    );
  }
}
