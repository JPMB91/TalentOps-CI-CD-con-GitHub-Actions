# DevOps Project

Proyecto de configuración básica de DevOps para aplicaciones Next.js

## Descripción

Este proyecto sirve como plantilla base para configurar un entorno de desarrollo profesional con herramientas DevOps esenciales. Incluye una pipeline de CI, hooks de pre-commit, y configuración de contenedores docker para despliegue.

## Stack

- **GitHub Actions** - Pipeline de integración continua
- **Docker** - Containerización de aplicaciones
- **Husky** - Git hooks para control de calidad pre-commit

Testing

- **Jest**
- **Testing**
- **ESLint**
- **lint-staged**

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/JPMB91/TalentOps-Introduccion-a-devops

# Instalar dependencias
npm install

# Configurar Husky
npm run prepare
```

## Uso con Docker

```bash
# Construir imagen
docker build -t devops-app .

# Ejecutar contenedor
docker run -p 3000:3000 devops-app
```
