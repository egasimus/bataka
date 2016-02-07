(function (req, res) {

  if (req.method === 'POST') {

    var busboy  = new (require('busboy'))({ headers: req.headers })
      , uploads = [];

    busboy.on('file', function (fieldName, file, fileName, encoding, mimeType) {

      var splitFileName = fileName ? fileName.split('.') : null
        , extension = splitFileName ? "." + splitFileName[splitFileName.length - 1] : ""
        , newFileName = $.lib.shortid() + extension
        , uploadPath = require('path').resolve($.options.upload.location, newFileName)

      console.log("Uploading", fileName, "to", uploadPath);
      uploads.push(newFileName);
      file.pipe(require('fs').createWriteStream(uploadPath));

    });

    busboy.on('finish', function () {

      res.writeHead(200, { 'Connection': 'close'})
      res.end(JSON.stringify({uploaded: uploads}))

    })

    return req.pipe(busboy);

  } else {

    res.writeHead(404);
    res.end();

  }

})
