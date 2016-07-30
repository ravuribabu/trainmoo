var PDFImage = require("pdf-image").PDFImage;

var pdfImage = new PDFImage("../tmp/3541422-RESTfulWebServicesCookbookpdf.pdf");
pdfImage.convertPage(0).then(function (imagePath) {
  // 0-th page (first page) of the slide.pdf is available as slide-0.png
  console.log(imagePath);
  fs.existsSync("slide-0.png") // => true
}, function(err){
	console.log(err);
});