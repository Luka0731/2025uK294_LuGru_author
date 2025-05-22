# 2025uK294_LuGru_author

# Author Webseite – üK 294 Projekt

Dies ist ein interaktives Frontend zur Verwaltung von Autoren. Erstellt im Rahmen von üK 294.  
Das Projekt basiert auf **React**, **Atomic Design**, **Formik**, **JWT-Auth**, **Axios** und **React Router**.

---

## Features

- Login & Registrierung
- Liste von hunderten Autoren 
- Autoren erstellen, anzeigen, bearbeiten und löschen (CRUD)

---

## Setup

Diese Programme werden benötigt für das Frontend-Projekt:
- Docker 
- Node.js
- Kompatieblen Browser (Die beliebteste Browser auser )

Backend aufsetzen:
```bash
docker run -p 3030:3000 --name restdb -d devnyzh/rest-jsondb 
docker start restdb 
```

Frontend aufsetzen:
```bash
npm install
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
npm install axios
npm install formik
npm install formik yup
npm install --save-dev @types/yup
npm install react-router-dom
npm install --save-dev @types/react-router-dom
npm run dev
```

---

## Verwendete Technologien

| Thema            | Tool/Bibliothek          |
|------------------|--------------------------|
| UI               | React + TypeScript       |
| Komponenten      | Atomic Design            |
| Styling          | Material UI (MUI)        |
| Formulare        | Formik                   |
| Validierung      | Custom in Formik         |
| Auth             | JWT mit json-server-auth |
| API-Kommunikation| Axios                    |
| Routing          | React Router v6          |

---

## Lizenz 

> Luka Grujic 
> © 2025 Noser Young / ICT Berufsbildung Schweiz
