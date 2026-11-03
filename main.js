function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doGet(e){
    return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('askoritaa')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getPageContent(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getImagensDoDrive() {
  // MANTENHA O SEU ID DA PASTA AQUI:
  const idDaPasta = '1iFsNlWPwO7MlNOqsD-sdnWdKUE1hi96w'; 
  
  const pasta = DriveApp.getFolderById(idDaPasta);
  const arquivos = pasta.getFiles();
  const imagens = [];

  while (arquivos.hasNext()) {
    const arquivo = arquivos.next();
    const mimeType = arquivo.getMimeType();
    
    // Filtra para pegar apenas arquivos de imagem
    if (mimeType.indexOf('image') !== -1) {
      // Pega os dados brutos da imagem e converte para texto Base64
      const blob = arquivo.getBlob();
      const base64String = Utilities.base64Encode(blob.getBytes());
      
      // Monta a URL de dados (Data URI)
      const dataUrl = 'data:' + mimeType + ';base64,' + base64String;
      
      imagens.push({
        nome: arquivo.getName(),
        url: dataUrl // Agora a URL é a própria imagem em formato de texto
      });
    }
  }
  return imagens;
}