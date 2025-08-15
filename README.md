# Quote Generator App

Una aplicación moderna para generar frases inspiradoras con imágenes hermosas de Unsplash.

## ✨ Características

- **Generación de frases**: Obtiene frases aleatorias de una API
- **Imágenes de fondo**: Imágenes hermosas de Unsplash que cambian con cada frase
- **Modo oscuro**: Soporte completo para modo claro y oscuro
- **Diseño responsivo**: Se adapta a todos los dispositivos
- **Animaciones suaves**: Transiciones fluidas con Framer Motion
- **Persistencia de tema**: Recuerda tu preferencia de tema

## 🎨 Modo Oscuro

La aplicación incluye un sistema completo de temas:

- **Toggle de tema**: Botón en la esquina superior derecha para cambiar entre modo claro y oscuro
- **Detección automática**: Se adapta automáticamente a las preferencias del sistema
- **Persistencia**: Guarda tu preferencia en localStorage
- **Transiciones suaves**: Cambios de tema con animaciones fluidas
- **Adaptación visual**: Todos los componentes se adaptan al tema seleccionado

## 🚀 Tecnologías

- **Next.js 15**: Framework de React con App Router
- **React 19**: Biblioteca de UI
- **Tailwind CSS 4**: Framework de CSS con soporte nativo para modo oscuro
- **next-themes**: Manejo de temas en Next.js
- **Framer Motion**: Animaciones y transiciones
- **React Query**: Manejo de estado del servidor
- **TypeScript**: Tipado estático

## 📱 Funcionalidades

### Generación de Frases
- Clic en el botón "Generate" para obtener una nueva frase
- Frases inspiradoras de autores reconocidos
- Carga asíncrona con estados de loading

### Imágenes de Fondo
- Imágenes de alta calidad de Unsplash
- Cambio automático con cada nueva frase
- Atribución a fotógrafos
- Optimización de rendimiento

### Interfaz de Usuario
- Diseño minimalista y elegante
- Navegación intuitiva
- Feedback visual para todas las acciones
- Accesibilidad mejorada

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/ccubillosm/quotes-app.git
cd quotes-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta en modo desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
│   ├── layout.tsx      # Layout principal con providers
│   ├── page.tsx        # Página principal
│   ├── providers.tsx   # Providers de React Query y Theme
│   └── globals.css     # Estilos globales
├── components/         # Componentes reutilizables
│   ├── ThemeToggle.tsx # Toggle de tema
│   ├── QuoteCard.tsx   # Tarjeta de frase
│   ├── ImageContainer.tsx # Contenedor de imagen
│   └── GenerateButton.tsx # Botón de generación
├── lib/               # Utilidades y APIs
└── types/             # Definiciones de TypeScript
```

## 🎯 Criterios de Aceptación Implementados

✅ **Modo Oscuro Completo**: Toda la interfaz cambia a esquema oscuro
✅ **Persistencia**: La preferencia se guarda en localStorage
✅ **Adaptación Visual**: Imágenes y textos se adaptan al tema
✅ **Transiciones Suaves**: Cambios de tema con animaciones
✅ **Detección del Sistema**: Se adapta a las preferencias del usuario

## 🔧 Scripts Disponibles

- `npm run dev`: Servidor de desarrollo
- `npm run build`: Construcción para producción
- `npm run start`: Servidor de producción
- `npm run lint`: Verificación de código
- `npm run test`: Ejecutar tests de Cypress

## 🌟 Próximas Mejoras

- [ ] Favoritos de frases
- [ ] Compartir en redes sociales
- [ ] Categorías de frases
- [ ] Modo offline
- [ ] Notificaciones push

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
