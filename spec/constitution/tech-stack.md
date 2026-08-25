# Stack Tecnologico — ClimbForge

| Capa | Eleccion | Por que |
|---|---|---|
| Frontend | React 18 + TypeScript + Vite + Tailwind | Portable a movil via Capacitor sin rehacer UI |
| Mobile | Capacitor | Empaqueta el mismo build web como app instalable, sin mantener dos codebases |
| Backend | NestJS + TypeScript | Estructura por modulos/guards/interceptors alineada con los guardarrailes de seguridad del proyecto |
| Contenedores | Docker + docker-compose | Backend reproducible y listo para desplegar |
| Base de datos | PostgreSQL via Supabase | RLS nativo, Auth y Storage integrados sin infraestructura propia |
| Autenticacion | Supabase Auth | Gestiona hashing de contrasenas, sesiones y tokens |
| Storage de video/foto | Supabase Storage | Buckets con politicas de acceso propias para videos y fotos de escalada |
| IA — entrenamiento y dieta | Google Gemini API | Encapsulada en `AIProviderService` para poder cambiar de proveedor sin tocar el resto del codigo |
| Tests | Vitest (frontend) / Jest (backend) | Estandar de cada ecosistema |

## Claves de arquitectura
- El `anon key` de Supabase es publico por diseno — la seguridad real la dan las politicas RLS, no el secreto de la clave
- El `service_role key` nunca sale del backend
- Toda llamada a Gemini pasa por el backend — el frontend nunca tiene la API key de Gemini
