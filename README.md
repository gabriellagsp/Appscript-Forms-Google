# Appscript-Forms-Google
Automação em Google Apps Script para organização de documentos em editais no Google Drive.

## 📌 Sobre:
Este script foi desenvolvido para automatizar o processo de recebimento e organização de documentos de editais via Google Forms. Antes da automação, a triagem de anexos e a criação de pastas por candidato e projeto de pesquisa eram feitas de forma 100% manual, gerando gargalos operacionais e risco de perda de dados.
​A solução intercepta o envio do formulário, cria diretórios dinâmicos no Google Drive e roteia os arquivos PDF automaticamente para o local correto.

## ⚙️ Como funciona a lógica:

* **Gatilho (Trigger)**: O script é acionado pelo evento onFormSubmit do Google Forms quando o candidato envia a resposta com os documentos no formulário.
* **Leitura de Dados**: O código mapeia as respostas baseando-se nos títulos exatos das perguntas.
* **Validação**: Checa se os campos críticos (Nome, Projeto e Arquivos) foram preenchidos.
* **Manipulação de Diretórios (Drive API)**: Localiza a pasta do projeto escolhido, cria uma subpasta com o nome do candidato e move os arquivos de upload para dentro dela.

## 🚀 Como adaptar para o seu uso:

​Para reutilizar este código, será necessário alterar as variáveis de configuração no início do script:
​
* Substituir o 'PastaMaeId' pelo ID da sua pasta raiz no Google Drive. 
* Se houver perguntas de multipla escolha, as "pastas filhas" devem ter o título extamente igual as opções disponíveis. Por exemplo, em editais de projetos, se há opção de participação em projetos X, Y e Z, caso o candidato escolha a opção Y, a pasta filha deve possuir o título Y.
* Alterar os textos das constantes (NomedoAluno, ProjetodePesquisa, UploadPdf) para corresponderem exatamente aos títulos das perguntas do seu formulário.
