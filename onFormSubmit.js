function onFormSubmit(e) {  //títulos das perguntas do formulário do Google

  const PastaMaeId = 'adc-url-da-pastaprojetos';
  
  const NomedoAluno = 'Nome completo';
  const ProjetodePesquisa = 'Projeto pelo qual pretende concorrer - 1ª opção ';
  const UploadPdf = 'Realize o UPLOAD dos documentos abaixo em formato PDF';

  const pastaMae = DriveApp.getFolderById(PastaMaeId);

  // leitura das respostas enviadas no evento (e) do formulário do Google

  const respostas = e.response.getItemResponses();

  let nomeAlunos = null
  let projetoEscolhido = null;
  let arquivos = [];

  // vincular as respostas as variáveis corretas 

  respostas.forEach(item => {
    const titulo = item.getItem().getTitle();
    const resposta = item.getResponse();

    if (titulo === NomedoAluno) {
      nomeAlunos = resposta;
    }
    if (titulo === ProjetodePesquisa) {
      projetoEscolhido = resposta;
    }
    if (titulo === UploadPdf) {
      arquivos = resposta;
    }
  });
  // validação (por segurança)

  if (!nomeAlunos || !projetoEscolhido || arquivos.length === 0) {
    throw new Error('Resposta incompleta: campos obrigatório ausentes.');
  }

  //localizar pasta do projeto de pesquisa (filha) correspondente ao escolhido no formulário 

  const pastaProjeto = pastaMae.getFoldersByName(projetoEscolhido).next();

  //criar pasta com o nome do aluno

  const pastaAluno = pastaProjeto.createFolder(nomeAlunos);

  //mover arquivos

  arquivos.forEach(fileId => {
    DriveApp.getFileById(fileId).moveTo(pastaAluno);
  });
}

