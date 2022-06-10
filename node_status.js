require('dotenv').config();
const algosdk = require('algosdk');

const algodClient = new algosdk.Algodv2(
  process.env.ALGOD_TOKEN,
  process.env.ALGOD_SERVER,
  process.env.ALGOD_PORT,
);

const main = async () => {
  console.log(await algodClient.status().do());
}

main().catch(console.error);
