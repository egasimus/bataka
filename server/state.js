(function () {

  var tatuiral = require('fs').readFileSync(
    require("path").resolve(__dirname, "../README"), 'utf8').trim().split("\n\n\n");

  return $.lib.riko.M({

    threads:
      { "tatuiral":
        { id: "tatuiral"
        , posts:
          [ { id: "firstPostEver"
            , user: "iniziador"
            , trip: "TRIPKOD: IBO VAISTENU"
            , time: "DATA: FNA4ALOTO"
            , media:
              { service: "ipfs"
              , type: "image"
              , src: "QmUHAZMsZ5jd6mvtx5QW1HKs9BChyk327joDB2sW2bkhod" }
            , text: tatuiral[0] }
          , { id: "firstPostEver2"
            , user: "iniziador"
            , trip: "TRIPKOD: IBO VAISTENU"
            , time: "DATA: FNA4ALOTO"
            , media:
              { service: "ipfs"
              , type: "image"
              , src: "Qmai5tAvGrgUQSukU5ZTvsknbFnCYCwJu41pHngeS8aaHn" }
            , text: tatuiral[1] }
          , { id: "firstPostEver3"
            , user: "iniziador"
            , trip: "TRIPKOD: IBO VAISTENU"
            , time: "DATA: FNA4ALOTO"
            , media:
              { service: "ipfs"
              , type: "image"
              , src: "QmPkUDfoF1Atdn6dJfVvseGk4oM38GgLt4AgeGhh1FHgK2" }
            , text: tatuiral[2] }
            ]} },

    people:
      0

  })

})()
