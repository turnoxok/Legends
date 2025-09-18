exports.handler = async function(event) {
  try {
    // URL de tu Apps Script
    const googleScriptUrl = "https://script.google.com/macros/s/AKfycbyzo0C9FmurlTJfPLXg_S9b07xFyMTJ4JqhJ6nxpcGz-o6HlGiZJZRmSn-vhn-6MqZU/exec";

    const response = await fetch(googleScriptUrl, {
      method: "POST",
      body: event.body,
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: data
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};



