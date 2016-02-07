(function (req, res) {

  // parse file metadata
  var originalFilename = req.headers['x-filename']
    , splitFilename = originalFilename ? originalFilename.split('.') : null
    , extension = splitFilename ? splitFilename[splitFilename.length - 1] : ""
    , fileName = $.lib.shortid() + extension
    , filePath = require('path').resolve($.options.upload.location, fileName)
    , originalSize = parseInt(req.headers['content-length'], 10)

  console.log("receiving file", originalFilename,
    "(" + originalSize + ") bytes",
    "writing to", filePath);

  // try opening a write stream to the filesystem
  var fileStream
    , receivedBytes = 0;
  try {
    fileStream = require('fs').createWriteStream(fileName);
  } catch (e) {
    var error = "could not open " + filePath + " for writing";
    console.error(error);
    require('send-data/json', req, res, { error: error });
    return;
  }

  // receive data from incoming request
  req.on('data', onData).on('end', onEnd).on('error', onError);

  function onData (chunk) {
    fileStream.write(chunk);
    receivedBytes += chunk.length;
    console.log("uploading", fileName,
      Math.floor(100 * receivedBytes / originalSize), "%");
  }

  function onEnd () {
    fileStream.end();
    console.log("uploaded", fileName);
    require('send-data/json', req, res, { uploaded: fileName });
  }

  function onError () {
    console.error("error receiving file");
    fileSteam.end(function () {
      require('fs').unlink(filePath, function () {
        console.log("partial upload", filePath, "deleted");
      })
    })
  }

})
