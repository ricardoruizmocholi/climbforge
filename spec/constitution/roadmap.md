# Roadmap — ClimbForge

Cada feature sigue el ciclo SDD completo (spec -> plan -> tasks -> implement -> verify) antes
de pasar a la siguiente.

## MVP (web)
1. **001 — Perfil y datos fisicos**: alta de usuario, altura/peso/actividad fisica/grado de
   escalada actual. Base de la que dependen 002, 003 y 004.
2. **002 — Generador de rutina de entrenamiento por IA**: usa el perfil (001) para pedir a
   Gemini un plan de entrenamiento especializado en escalada.
3. **003 — Feedback por video de escalada**: el usuario sube un video escalando, la IA
   detecta puntos de mejora y ajusta el plan de entrenamiento (002).
4. **004 — Planificador de dieta semanal**: presupuesto, restricciones alimentarias y tiempo
   de cocina disponible -> plan de comidas, con opcion de batch cooking.

## Fuera del MVP — futuro (no implementar todavia)
5. **005 — Beta de rutas por foto/video**: el usuario sube foto o video de una ruta concreta
   y la IA da instrucciones paso a paso para subirla. Se aborda solo cuando 001-004 esten
   validadas en produccion.

## Transversal
- La seguridad baseline aplica desde la Feature 001, no se pospone
- El empaquetado con Capacitor se aborda cuando el MVP web (001-004) este estable
