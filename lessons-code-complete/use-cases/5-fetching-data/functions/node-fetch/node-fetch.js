const fetch = require("node-fetch");

const API_ENDPOINT =
  "https://data.mongodb-api.com/app/data-czvsz/endpoint/matchScenario?prolificInput=abcd1234";

exports.handler = async (event, context) => {
  let response;
  try {
    response = await fetch(API_ENDPOINT);
    response = await response.text();
    // handle response
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
