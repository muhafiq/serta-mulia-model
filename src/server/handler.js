const predictClassification = require("../services/inferenceService");
const crypto = require("node:crypto")
const { storeData, getData } = require("../services/storeData")

async function postPredictHandler(request, h) {
  const { image } = request.payload;
  const { model } = request.server.app;

  const { result, suggestion } =
    await predictClassification(model, image);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  const data = {
    id: id,
    result,
    suggestion,
    createdAt: createdAt,
  };

  await storeData(id, data);

  const response = h.response({
    status: 'success',
    message: "Model is predicted successfully",
    data
  })
  response.code(201);
  return response;
}

async function getPredictHistories(request, h) {

  const data = await getData()

  const response = h.response({
    status: 'success',
    data
  })
  response.code(200);
  return response;
}

module.exports = { postPredictHandler, getPredictHistories };
