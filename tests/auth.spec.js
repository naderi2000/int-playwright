const { test, expect } = require("@playwright/test");

test("POST API Request", async ({ request }) => {
  const response = await request.post(
    "https://stage-api.780.ir/authserver/register",
    {
      headers: {
        mobile_no: "09126100552",
        "Content-Type": "application/json",
        "api-key": "SiAc_e1y8z1ZYJDlZlyPBOKa4xU=",
        "Grpc-metadata-Version": "20000",
        "Grpc-metadata-Platform": "WEBSITE",
        "Grpc-metadata-Device-Info": "LG-a65sd14",
        client: "web",
      },
    }
  );

  // بررسی وضعیت پاسخ
  expect(response.status()).toBe(200);

  // گرفتن بدنه پاسخ
  const responseBody = await response.json();
  console.log(responseBody);
});

test("POST API Request 2", async ({ request }) => {
  const response = await request.post(
    "https://stage-api.780.ir/authserver/token",
    {
      headers: {
        mobile_no: "09126100552",
        "Content-Type": "application/json",
        "api-key": "SiAc_e1y8z1ZYJDlZlyPBOKa4xU=",
        "Grpc-metadata-Version": "20000",
        "Grpc-metadata-Platform": "WEBSITE",
        "Grpc-metadata-Device-Info": "LG-a65sd14",
        client: "web",
      },
      data: {
        code: "1234",
      },
    }
  );

  // بررسی وضعیت پاسخ
  expect(response.status()).toBe(200);

  // گرفتن بدنه پاسخ
  const responseBody = await response.json();
//   console.log(responseBody);
  const responsetoken = await response.json();
  const token = process.env.TOKEN = responsetoken.access_token;
  console.log(process.env.TOKEN);
  var resjson = response.json();
  console.log(resjson.access_token);
});
