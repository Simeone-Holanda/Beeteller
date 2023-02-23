# Teste da Beeteller
Teste para vaga de desenvolvedor Full Stack. A descrição do desafio pode ser encontrada <a href='https://github.com/beetellergroup/selecao-full-stack'>Aqui</a> . 

### Você pode acessa a aplicação rodando em live abaixo
- Login: admin@gmail.com
- password: 123456
- <a href='https://beeteller.vercel.app/'> Beeteller Simeone </a>


# Estratégia e decisões tomadas
<p> 
    Foquei primeiro em desenvolver o layout de uma forma simples sem muitos ajustes para cumprir todos os requisitos
    do teste o mais rapido possível. Feito isso, iniciei o backend seguindo a mesma ideia de uma forma muito simples, porém dessa vez para conectar com o frontend e criar essa integração de funcionalidade, após concluir essas etapas entre na parte que costumo chamar de perfumaria, onde eu comecei a ajustar o layout de acordo com oque estava no figma mais fielmente, dessa forma eu não corria o risco de ficar com algo de essencial faltando no teste. Após essa versão inicial do teste iniciei o processo de deploy, onde hospedei o backend e o banco de dados na Railway e o frontend na Vercel. 
</p>

# Passos para executar a aplicação: 

## Back-end
    git clone https://github.com/Simeone-Holanda/Beeteller.git

    cd backend

    npm install

    * Crie um arquivo chamado .env na raiz do backend copie e cole o conteudo do arquivo .env.example no seu .env
      e ajuste suas configurações de acordo com a descrição de cada configuração. 
    
    npx sequelize-cli db:create

    npx sequelize-cli db:migrate

    npx sequelize-cli db:seed:all

    npm run dev

## Front-end 
    cd frontend

    npm install

    * Crie um arquivo chamado .env na raiz do frontend copie e cole o conteudo do arquivo .env.example no seu .env e ajuste suas configurações de acordo com a descrição de cada configuração. 
    
    npm start

### Funcionalidade que pretendo adicionar nas proximas versões
  - Sistema de notificações de erros usando a biblioteca React-Toastify
  -  Efeitos de load em alguns componentes que carregam dados do backend
  - Logout no backend também e não apenas no frontend. 

<hr>

<div align="center">
  <small>Desenvolvido por Simeone Aquino de Holanda - fev/2023 </small>
</div>