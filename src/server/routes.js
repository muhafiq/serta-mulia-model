const postPredictHandler = require("../server/handler");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: postPredictHandler,
    options: {
      payload: {
        /*Mengizinkan data berupa gambar*/
        maxBytes: 1048576, // 1mb
        allow: "multipart/form-data",
        multipart: true,
      },
    },
  },
];

module.exports = routes;
