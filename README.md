# FindPlaneNum

FindPlaneNum es una aplicación web para **buscar y verificar números de matrícula de vehículos en un parking**.  
Construida con **Astro + TypeScript** en el frontend y **Express + TypeScript** en el backend.

---

## 🧩 Tecnologías

- **Frontend:** Astro, TypeScript, HTML, CSS  
- **Backend:** Express.js, TypeScript  
- **Sesiones:** express-session para gestión de usuarios  
- **CORS:** Para permitir comunicación entre frontend y backend en distintos puertos  
- **Node.js** y npm para gestión de paquetes  

---

## 🚀 Funcionalidades

- Login de usuario con sesión en backend  
- Envío de formulario desde el frontend al backend  
- Verificación de matrícula en el parking (simulada)  
- Gestión de sesiones usando cookies y express-session  

---

## 📂 Estructura del proyecto

/project-root
│
├─ /back # Backend (Express + TS)
│ ├─ /controllers # Controladores de rutas
│ ├─ /services # Lógica de negocio (login, búsqueda)
│ ├─ /routers # Rutas del backend
│ ├─ /config # Configuraciones, dotenv
│ └─ server.ts # Servidor Express principal
│
├─ /front # Frontend (Astro + TS)
│ ├─ /components # Componentes UI (formulario login, botones)
│ └─ /pages # Páginas de la app
│
├─ .gitignore # Archivos a ignorar en Git
└─ README.md



---

## ⚡ Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone <tu-repo-url>
cd <tu-proyecto>
cd back
npm install
cd ../front
npm install
PORT=4000
SESSION_SECRET=tu_secreto_aqui
cd front
npm run dev


