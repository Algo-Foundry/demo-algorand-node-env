require("dotenv").config();
const algosdk = require("algosdk");

const kmdclient = new algosdk.Kmd(
  process.env.KMD_TOKEN,
  process.env.KMD_SERVER,
  process.env.KMD_PORT
);

const algodClient = new algosdk.Algodv2(
  process.env.ALGOD_TOKEN,
  process.env.ALGOD_SERVER,
  process.env.ALGOD_PORT,
);

const main = async () => {
  // list wallets
  const { wallets } = await kmdclient.listWallets();
  const defaultWallet = wallets[0];

  // get default wallet
  const wallethandle = await kmdclient.initWalletHandle(defaultWallet.id);

  // generate account from wallet
  const address = (await kmdclient.generateKey(wallethandle.wallet_handle_token)).address;

  // account info via algod
  console.log(await algodClient.accountInformation(address).do());
}

main().catch(console.error);
