const { test, expect } = require('@playwright/test');

test("authserver api test", async ({ request }) => {
    const res = await request.post("https://stage-api.780.ir/authserver/register", {
       headers: {

         mobile_no: "09126100552",
         "Content-Type": "application/json",
         "api-key": "SiAc_e1y8z1ZYJDlZlyPBOKa4xU=",
         "Grpc-metadata-Version": "20000",
         "Grpc-metadata-Platform": "WEBSITE",
         "Grpc-metadata-Device-Info": "LG-a65sd14",
         client: "web"
      }
    })

    expect(res.status()).toBe(200)

    const jsonRes = await res.json()
    console.log(jsonRes);
})


test("token api test", async ({ request }) => {
    const res = await request.post("https://stage-api.780.ir/authserver/token", {
       headers: {

         mobile_no: "09126100552",
         "Content-Type": "application/json",
         "api-key": "SiAc_e1y8z1ZYJDlZlyPBOKa4xU=",
         "Grpc-metadata-Version": "20000",
         "Grpc-metadata-Platform": "WEBSITE",
         "Grpc-metadata-Device-Info": "LG-a65sd14",
         client: "web"
      },
      data: {
        "code":"1234"
     }
    });



    expect(res.status()).toBe(200)

    const jsonRes = await res.json()
    console.log(jsonRes);
})
