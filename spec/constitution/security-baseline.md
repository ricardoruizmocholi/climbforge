# Seguridad Baseline — ClimbForge

Checklist no negociable. Ninguna feature se da por terminada si no cumple lo que le aplica.

## 1. Secretos y claves
- [ ] Ninguna clave (Gemini, Supabase service_role, JWT secret) hardcodeada en codigo
- [ ] `.env` y `.env.*` en `.gitignore` desde el primer commit
- [ ] Escaneo de secretos en CI antes de cada push (gitleaks o similar)
- [ ] `anon key` de Supabase solo en frontend; `service_role key` solo en backend

## 2. Base de datos (Supabase / Postgres)
- [ ] Row Level Security activado en TODAS las tablas con datos de usuario antes de exponerlas
- [ ] Politica por defecto: un usuario solo lee/escribe sus propias filas (`auth.uid() = user_id`)
- [ ] Consultas siempre parametrizadas via cliente de Supabase, nunca SQL concatenado a mano
- [ ] Cifrado en transito (HTTPS/TLS) y en reposo (gestionado por Supabase)

## 3. Autenticacion y sesion
- [ ] Contrasenas gestionadas por Supabase Auth (no reimplementar hashing)
- [ ] Cookies de sesion: `httpOnly`, `secure`, `sameSite=strict`
- [ ] Rate limiting en login/signup via `@nestjs/throttler`
- [ ] Bloqueo temporal de cuenta tras intentos fallidos repetidos
- [ ] Proteccion anti-bot en formularios publicos: CAPTCHA (hCaptcha/Turnstile) + honeypot field

## 4. API / Backend
- [ ] Validacion de entrada en TODOS los endpoints con DTOs de `class-validator`
- [ ] `ValidationPipe` global con `whitelist: true` y `forbidNonWhitelisted: true` (bloquea manipulacion de campos no esperados)
- [ ] Rate limiting global por IP/usuario en toda la API
- [ ] Helmet activo: CSP, X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security
- [ ] HTTPS forzado en todos los entornos
- [ ] CORS restringido a los origenes reales del frontend/app, nunca `*`

## 5. Subida de archivos (videos y fotos de escalada)
- [ ] Whitelist de tipos MIME permitidos (video/mp4, image/jpeg, image/png)
- [ ] Limite de tamano maximo por archivo
- [ ] Bucket de Supabase Storage con politica: cada usuario solo accede a sus propios archivos
- [ ] Nombre de archivo generado por el servidor, nunca el original del usuario tal cual

## 6. Frontend
- [ ] Nunca `dangerouslySetInnerHTML` con contenido de usuario sin sanitizar
- [ ] Contenido generado por usuario se escapa por defecto via JSX
- [ ] La API key de Gemini nunca llega al bundle del frontend

## 7. Automatizacion / CI
- [ ] Lint con reglas de seguridad (eslint-plugin-security) en cada PR
- [ ] Auditoria de dependencias automatizada (npm audit o similar)
- [ ] Tests deben pasar antes de mergear a la rama principal
