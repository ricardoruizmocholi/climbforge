# Feature 001 — Perfil y datos fisicos

## Que hace
Permite a un usuario registrarse, iniciar sesion y completar un perfil con los datos que
alimentan el resto de la app: datos fisicos y de escalada.

## Datos capturados
- Altura (cm)
- Peso (kg)
- Nivel de actividad fisica general (sedentario / ligera / moderada / alta)
- Grado de escalada actual (definir un unico estandar, ej. escala francesa 5a-9a, o V-scale
  de boulder — no texto libre)
- Objetivo principal (opcional en v1: mejorar fuerza / mejorar tecnica / perder grasa / mantenimiento)

## Criterios de aceptacion
- [ ] Un usuario puede registrarse con email/contrasena via Supabase Auth
- [ ] Tras registrarse, se le pide completar el perfil antes de acceder al resto de la app
- [ ] Los campos altura/peso/actividad/grado son obligatorios; objetivo es opcional
- [ ] Los datos se guardan en una tabla profiles con RLS: cada usuario solo lee/escribe su propia fila
- [ ] El usuario puede editar su perfil despues de creado
- [ ] Validacion: altura entre 100-230 cm, peso entre 30-200 kg, grado dentro de una lista cerrada de valores validos
- [ ] Si el usuario intenta acceder a otra ruta de la app sin perfil completo, se le redirige al formulario de perfil

## Fuera de alcance de esta feature
- El plan de entrenamiento (Feature 002)
- La subida de video (Feature 003)
- El planificador de dieta (Feature 004)
