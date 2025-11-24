# 🚀 ImpactaHub – Plataforma de Atualização Profissional

O **ImpactaHub** é uma plataforma desenvolvida para conectar profissionais de diversas áreas ao universo da tecnologia, oferecendo conteúdos, cursos e materiais voltados às áreas de interesse de cada usuário. O sistema permite o cadastro de perfis, listagem, exclusão e exibição personalizada de conteúdos tecnológicos.

---

## 📌 Status do Projeto
🟢 **Em desenvolvimento** – funcionalidades principais implementadas e novas features em construção.

---

## 📚 Sumário
1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Tecnologias Utilizadas](#-tecnologias-utilizadas)
3. [Instalação](#-instalação)
4. [Como Usar](#-como-usar)
5. [Estrutura de Pastas](#-estrutura-de-pastas)
6. [Endpoints / Rotas Principais](#-endpoints--rotas-principais)
7. [Autores e Créditos](#-autores-e-créditos)
8. [Screenshots](#-screenshots--demonstração)
9. [Contato](#-contato)
10. [Links Importantes](#-links-importantes)

---

## 📖 Sobre o Projeto

A ideia do ImpactaHub é impactar profissionais que desejam se atualizar tecnologicamente.  
O usuário informa sua **área de atuação** e **interesses**, e o sistema o conecta a conteúdos relevantes, como:

- Novas tecnologias
- Automação
- Notícias da área
- Cursos recomendados
- Tendências de engenharia e TI

A plataforma serve como ponte entre a formação do profissional e o mercado tecnológico atual.

---

## 🛠 Tecnologias Utilizadas

### **Frontend**
- React + Vite
- TypeScript
- TailwindCSS
- React Hook Form
- Zod (validações)
- React Router DOM

### **Estruturas de pastas**
src/
 ├── api/
 │    └── cadastro.ts
 ├── assets/
 ├── components/
 │    ├── header.tsx
 │    ├── footer.tsx
 │    ├── perfil-card.tsx
 │    └── ...
 ├── hooks/
 ├── pages/
 │    ├── Home.tsx
 │    ├── Cadastro.tsx
 │    ├── Perfil.tsx
 │    └── Conteudos.tsx
 ├── schemas/
 │    └── cadastroSchema.ts
 ├── types/
 │    └── cadastro.ts
 ├── App.tsx
 ├── main.tsx
 └── index.css

### **Backend**
- Java (API hospedada em Render)

### **Deploy / Infra**
- Vercel / Netlify (frontend)
- Render (backend)

---

## 📥 Instalação

### 1. Clonar o repositório
```bash
git clone https://github.com/1TDSPV-GS-2-IMPACTAHUB/gs-2-impactahub.git
