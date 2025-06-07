Troca Fácil — Aplicativo Mobile

Desenvolvimento de uma interface gráfica mobile para uma aplicação de blogging, utilizando React Native. O objetivo é oferecer uma aplicação acessível, intuitiva e de fácil navegação, proporcionando uma experiência de usuário fluida tanto para docentes (professores) quanto para estudantes.

🚀 Funcionalidades Implementadas

Tela de Login

Tela Home do Professor

Listagem de posts cadastrados

Criação de novos posts

Edição de posts 

Exclusão de posts (em desenvolvimento)

Salvamento de posts (em desenvolvimento)

Outras telas (em desenvolvimento)

🛠️ Tecnologias Utilizadas

React Native

TypeScript

React Navigation

Context API

TrocaFacil/
├── app/
│   └── screens/
│       ├── Login.tsx
│       ├── Home.tsx
│       ├── CreatePost.tsx
│       └── EditPost.tsx
├── components/
│   └── PostCard.tsx
├── context/
│   ├── AuthContext.tsx
│   └── PostContext.tsx
├── routes/
│   └── app.routes.tsx
│   └── index.tsx
├── App.tsx

Como Rodar o Projeto

Clone este repositório:

git clone https://github.com/seu-usuario/troca-facil.git

cd troca-facil

Instale as dependências:

npm install

Rode com Expo:

npx expo start

Desafios Enfrentados:

Durante a tentativa de melhorias, um dos principais desafios foi a navegação após o login. A proposta original era que, ao realizar o login corretamente, o professor fosse redirecionado automaticamente para a tela Home.
Apesar das diversas tentativas a tela de login continuava sendo exibida.

👩‍💻 Autora Dominique Santos

GitHub: @dominiquesantos
