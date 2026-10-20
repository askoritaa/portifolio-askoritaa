function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doGet(e){
    return HtmlService.createTemplateFromFile('index').evaluate()
    .setTitle('askoritaa')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}