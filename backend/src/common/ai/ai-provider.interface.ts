/**
 * Contrato que debe cumplir cualquier proveedor de IA (Gemini u otro futuro),
 * para que el resto de la app nunca dependa directamente del SDK del proveedor.
 */
export interface AIProvider {
  generateContent(prompt: string): Promise<string>;
}
