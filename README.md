# Algorand Node Environment Demo
This repository contains some sample javascript files to demostrate some of the features in algorand sdk.

## Setup instructions
1. Install library packages
```
npm install
```

2. Create .env.example and rename it to .env
   
3. Update `ADDR_CREATOR` address in .env file
```
// In your Algorand Sandbox directory, run the following command
./sandbox goal account list

// Copy one of the account addresses and update ADDR_CREATOR, it will look something like this, EXWYCKUQXOSKGUU7RHTVFLNDVFPSDJRB5DABIA7I6BVHFYQD4CQJYZX3NA
```

4. Run command to use the .env file in this demo
```
source .env
```

5. Run scripts
```
node create_account.js
node indexer_lookup.js
node node_status.js
```

## Useful sandbox goal commands
You need to be in your sandbox directory to run these commands
```
List all accounts 
./sandbox goal account list

Export account mnemonic
./sandbox goal account export -a <account address>
```
