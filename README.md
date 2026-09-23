# Práctica guiada: contador con React Native y Expo

En esta práctica implementarás la funcionalidad del botón **Reiniciar** de una aplicación de contador. Además, practicarás un flujo básico de trabajo colaborativo con Git y GitHub.

## Propósito

Al finalizar, el botón **Reiniciar** deberá devolver el contador al valor `0` y actualizar el número mostrado en pantalla.

La única parte que debes modificar es:

```text
hooks/useCounter.tsx
```

No modifiques archivos de configuración, pruebas ni componentes de interfaz.

## Antes de empezar

Debes tener instalado:

- Node.js.
- Git.
- Visual Studio Code.
- Expo Go en tu teléfono Android, si trabajarás con un dispositivo físico.
- Una cuenta de GitHub iniciada en el navegador.

---

## 1. Crear tu Fork

Un **Fork** es una copia personal del repositorio del docente dentro de tu propia cuenta de GitHub. Trabajarás en esa copia; no trabajarás directamente sobre el repositorio original.

1. Ingresa al repositorio proporcionado por el docente.
2. En la parte superior derecha, pulsa el botón **Fork**.
3. Verifica que en **Owner** aparezca tu cuenta de GitHub.
4. Mantén el nombre sugerido del repositorio.
5. Pulsa **Create fork**.

Al terminar, estarás en una dirección similar a esta:

```text
https://github.com/TU-USUARIO/contador-app-inicial
```

---

## 2. Clonar tu Fork en tu computadora

1. Dentro de **tu Fork**, pulsa el botón verde **Code**.
2. Selecciona la pestaña **HTTPS**.
3. Copia la dirección del repositorio.
4. Abre PowerShell o la terminal de Visual Studio Code en la carpeta donde guardarás tus proyectos.
5. Ejecuta este comando, reemplazando la URL por la que copiaste:

```bash
git clone URL-DE-TU-FORK
```

Ejemplo:

```bash
git clone https://github.com/tu-usuario/contador-app-inicial.git
```

6. Ingresa a la carpeta creada:

```bash
cd contador-app-inicial
```

7. Instala las dependencias del proyecto:

```bash
npm install
```

---

## 3. Crear tu rama de trabajo

Una **rama** es un espacio de trabajo separado dentro de tu Fork. Allí registrarás exclusivamente tu solución.

La rama debe seguir esta estructura:

```text
practica/apellido-apellido-nombre
```

Usa letras minúsculas, sin tildes, sin ñ y separa cada apellido o nombre con guiones.

Ejemplo para Eder Figueroa Piscoya:

```text
practica/figueroa-piscoya-eder
```

Para crear la rama y situarte en ella, ejecuta:

```bash
git switch -c practica/apellido-apellido-nombre
```

Ejemplo:

```bash
git switch -c practica/figueroa-piscoya-eder
```

Puedes confirmar que estás en la rama correcta ejecutando:

```bash
git branch --show-current
```

Debe mostrarse el nombre de tu rama `practica/...`.

---

## 4. Ejecutar la aplicación

En la terminal, dentro de la carpeta del proyecto, ejecuta:

```bash
npx expo start
```

Luego:

1. Conecta tu computadora y teléfono a la misma red Wi-Fi.
2. Abre Expo Go en tu teléfono.
3. Escanea el código QR mostrado en la terminal o en el navegador.
4. Prueba los botones `+1` y `-1`.

Notarás que el botón **Reiniciar** todavía no cumple su función. Esa es la tarea a resolver.

---

## 5. Resolver la práctica

1. Abre el proyecto en Visual Studio Code.
2. Ubica el archivo:

```text
hooks/useCounter.tsx
```

3. Busca la función `resetCounter`.
4. Implementa la lógica necesaria para que el estado `counter` vuelva a `0`.
5. Guarda el archivo.
6. Verifica en Expo Go que, después de aumentar o disminuir el valor, el botón **Reiniciar** muestre nuevamente `0`.

Solo debes modificar `hooks/useCounter.tsx`.

---

## 6. Registrar tu solución con Git

Cuando la aplicación funcione, registra tu cambio con estos comandos:

```bash
git add hooks/useCounter.tsx
```

Luego crea un commit:

```bash
git commit -m "Implementa reinicio del contador"
```

Finalmente, publica tu rama en tu Fork:

```bash
git push -u origin practica/apellido-apellido-nombre
```

Ejemplo:

```bash
git push -u origin practica/figueroa-piscoya-eder
```

---

## 7. Crear el Pull Request

El **Pull Request (PR)** es la entrega de tu solución al repositorio del docente para su revisión.

1. Regresa al navegador y abre tu Fork en GitHub.
2. Si aparece el botón **Compare & pull request**, púlsalo.
3. Si no aparece, pulsa **Contribute** y luego **Open pull request**.
4. Si fuera necesario, pulsa **compare across forks**.
5. Verifica cuidadosamente estos campos:

| Campo | Valor esperado |
|---|---|
| Base repository | Repositorio del docente |
| Base branch | `main` |
| Head repository | Tu Fork |
| Compare branch | Tu rama `practica/apellido-apellido-nombre` |

6. En el título escribe:

```text
Práctica Contador - Apellidos y nombres
```

Ejemplo:

```text
Práctica Contador - Figueroa Piscoya Eder
```

7. Completa todos los datos de la plantilla del Pull Request.
8. Marca las casillas de declaración de autoría solo si corresponden a tu trabajo.
9. Pulsa **Create pull request**.

No debes pulsar **Merge pull request**. El docente revisará y cerrará la entrega cuando corresponda.

---

## 8. Si necesitas corregir tu entrega antes del plazo

No crees otro Pull Request.

Realiza los cambios necesarios en el mismo archivo, guarda y ejecuta nuevamente:

```bash
git add hooks/useCounter.tsx
git commit -m "Corrige reinicio del contador"
git push
```

GitHub actualizará automáticamente el Pull Request que ya creaste porque continúas trabajando en la misma rama.

---

## Entregable

Tu entrega estará completa cuando tengas un Pull Request abierto desde tu rama personal hacia el repositorio del docente, con la plantilla completada y el botón **Reiniciar** funcionando.
