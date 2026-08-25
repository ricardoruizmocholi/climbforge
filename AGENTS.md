# ClimbForge

Aplicacion web (con evolucion a app movil via Capacitor) que ayuda a escaladores a mejorar
su rendimiento fisico combinando un plan de entrenamiento personalizado por IA, feedback
sobre tecnica a partir de video, y un planificador de dieta semanal ajustado a presupuesto,
restricciones alimentarias y tiempo disponible para cocinar.

## Stack
- Lenguaje: TypeScript estricto (`strict: true`, sin `any` sin justificar)
- Frontend: React 18 + Vite + Tailwind CSS
- Mobile: Capacitor (empaqueta el mismo build de React, sin codebase nativo separado)
- Backend: NestJS + TypeScript, containerizado con Docker
- Base de datos / Auth / Storage: Supabase (PostgreSQL + Row Level Security + Supabase Auth + Supabase Storage)
- IA: Google Gemini API, encapsulada detras de un `AIProviderService` propio
- Tests: Vitest (frontend) + Jest (backend)

## Comandos
- `docker compose up` — arranca el backend y servicios locales
- `npm run dev` (dentro de frontend/) — arranca el frontend en local
- `npm run test` — ejecuta los tests (deben pasar antes de cada commit)
- `npm run lint` — revisa estilo y reglas de seguridad (antes de cada PR)
- `npm run build` — compila para produccion

## Estructura del proyecto
- `frontend/` — React + TS
- `backend/` — NestJS + TS (API, logica de negocio, orquestacion de IA)
- `spec/` — constitution y specs de features (fuente de verdad del proyecto)
- `tests/` — tests de integracion cruzados
- `docs/` — notas de sesion y decisiones

## Convenciones
- Nombres: camelCase en variables/funciones, PascalCase en componentes y clases
- Tests junto al archivo: `foo.service.ts` + `foo.service.spec.ts`
- Errores: clases propias en `backend/src/common/errors/`, nunca `throw` de strings sueltos
- DTOs de entrada con `class-validator` en TODOS los endpoints, con `whitelist: true` y `forbidNonWhitelisted: true`

## Seguridad — no negociable (detalle completo en spec/constitution/security-baseline.md)
- Nunca hardcodear claves ni secretos. Todo via variables de entorno; `.env` siempre en `.gitignore`
- Solo el `service_role key` de Supabase vive en el backend. El frontend usa unicamente el `anon key` publico, protegido por politicas RLS
- Cada tabla de Supabase con datos de usuario lleva su politica RLS antes de exponerse — sin excepciones
- Toda cookie de sesion: `httpOnly`, `secure`, `sameSite=strict`
- Todo endpoint de login/signup con rate limiting y proteccion anti-bot
- Toda entrada de usuario se valida en el backend, nunca solo en el frontend
- Toda subida de archivo (video, foto) restringida por tipo MIME y tamano maximo, en un bucket con politica de acceso propia
- HTTPS forzado en todos los entornos; Helmet activo con cabeceras de seguridad (CSP, HSTS, X-Frame-Options, etc.)

## No hagas
- No instalar dependencias nuevas sin avisar primero
- No subir `.env`, claves de Gemini/Supabase, ni datos reales de usuarios a git
- No usar `any` en TypeScript sin comentario justificando por que
- No escribir SQL concatenado a mano — usa siempre el cliente de Supabase o un query builder parametrizado
- No implementar la Feature 005 (beta de rutas por foto/video) todavia — es futuro, no MVP

## Flujo de trabajo
- Antes de una tarea no trivial, propon un plan y espera mi OK (modo Plan)
- Una tarea de `tasks.md` a la vez; al terminar, dime que cambiaste para que lo revise
- Si no estas seguro al 80% de un requisito, pregunta — no inventes comportamiento
- Corre lint + tests antes de dar una tarea por terminada

## Documentacion
- Constitution en `spec/constitution/`
- Features en `spec/features/`
