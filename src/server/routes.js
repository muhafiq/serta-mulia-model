const {postPredictHandler, getPredictHistories} = require("../server/handler");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: postPredictHandler,
    options: {
      payload: {
        /*Mengizinkan data berupa gambar*/
        maxBytes: 1000000, // 1mb
        allow: "multipart/form-data",
        multipart: true,
      },
    },
  },
  {
    path: "/predict/histories",
    method: "GET",
    handler: getPredictHistories,
  }
];

module.exports = routes;
