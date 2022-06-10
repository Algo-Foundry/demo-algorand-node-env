require('dotenv').config();
const algosdk = require('algosdk');

const indexerClient = new algosdk.Indexer(
  process.env.INDEXER_TOKEN,
  process.env.INDEXER_SERVER,
  process.env.INDEXER_PORT,
);

const main = async () => {
  // account info via indexer
  console.log(await indexerClient.lookupAccountByID(process.env.ADDR_CREATOR).do());
}

main().catch(console.error);
