# Startup Website  
This project is a web application built with **React** and **Vite**, using **Supabase** for backend services. It provides pages for events, speakers, projects, and an admin area for managing content.  

## 🚀 Tech Stack  
- **React + Vite**: Frontend framework for modern web apps  
- **Supabase**: Backend service for database and authentication  
- **Bootstrap & React-Bootstrap**: UI components and styling  
- **React Router DOM**: Routing for React applications  
- **Axios**: HTTP requests  

## 📂 Project Structure  
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂admin                    # Admin components
 ┃ ┃ ┣ 📜button.comp.admin.jsx
 ┃ ┃ ┣ 📜event.comp.admin.jsx
 ┃ ┃ ┣ 📜speaker.comp.admin.jsx
 ┃ ┃ ┗ 📜startup.comp.admin.jsx
 ┃ ┣ 📂ui                       # UI components
 ┃ ┃ ┣ 📜event.comp.ui.jsx
 ┃ ┃ ┣ 📜speaker.comp.ui.jsx
 ┃ ┃ ┗ 📜startup.comp.ui.jsx
 ┃ ┣ 📜Footer.jsx
 ┃ ┗ 📜Header.jsx
 ┣ 📂layouts                    # Layout components
 ┃ ┣ 📜admin.layout.jsx
 ┃ ┗ 📜use.layout.jsx
 ┣ 📂lib                        # Libraries and utilities
 ┃ ┗ 📂supabase
 ┃ ┃ ┗ 📜supabase.js            # Supabase configuration
 ┣ 📂pages                      # Page components
 ┃ ┣ 📂admin                    # Admin pages
 ┃ ┃ ┣ 📜Account.jsx
 ┃ ┃ ┣ 📜Crawler.jsx
 ┃ ┃ ┣ 📜Crawlers.jsx
 ┃ ┃ ┣ 📜dashboard.jsx
 ┃ ┃ ┗ 📜Dashboards.jsx
 ┃ ┣ 📜EventDetail.jsx          # Event detail page
 ┃ ┣ 📜Events.jsx               # Events listing page
 ┃ ┣ 📜Home.jsx                 # Homepage
 ┃ ┣ 📜Projects.jsx             # Projects page
 ┃ ┗ 📜Speakers.jsx             # Speakers page
 ┣ 📜App.css                    # App styles
 ┣ 📜App.jsx                    # Main App component
 ┣ 📜index.css                  # Global styles
 ┗ 📜main.jsx                   # Entry point
```

## ⚙️ Installation  
Clone the repository and install dependencies:  
```bash
git clone <repository-link>
cd <project-folder>
npm install
```

## 📜 Available Scripts  
Run the development server:  
```bash
npm run dev
```
Build for production:  
```bash
npm run build
```
Preview the production build:  
```bash
npm run preview
```
Run ESLint to check code quality:  
```bash
npm run lint
```

## 📝 Environment Variables  
Create a `.env` file in the root directory and add your Supabase credentials:  
```
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

## 📦 Dependencies  
Main dependencies:
- `@supabase/supabase-js`
- `axios`
- `bootstrap`
- `react`
- `react-bootstrap`
- `react-dom`
- `react-router-dom`

Dev dependencies:
- `vite`
- `eslint`
- `postcss`~
- `autoprefixer`
- `@vitejs/plugin-react`

## 👨‍💻 Author  
Developed by **PNV Students - Group 1**  

# CrawlData & Startup React Projects
This repository includes two projects:  
1. **CrawlData** – Backend for crawling and processing startup data  
2. **Startup React** – Frontend for displaying data  

## Prerequisites
Before running the projects, make sure you have installed:
- [Node.js](https://nodejs.org/) (version 12+)
- npm (comes with Node.js)

---

## 1. Clone Backend Repository
```bash
git clone https://github.com/CED-b2005/CrawlData
```
### Install dependencies:
```bash
cd CrawlData
npm install
```
### Run backend:
```bash
npm start
```
Copy port: http://localhost:8800

## 2. Clone Frontend Repository
```bash
git clone https://github.com/YMaiNgoc/startup_react.git
```
### Install dependencies:
```bash
cd startup_react
npm install
```
### Run frontend:
```bash
npm run dev
```

### Notes
- Make sure the backend is running before starting the frontend.
- Default backend port: 8800.