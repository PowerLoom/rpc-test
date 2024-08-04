const { ethers } = require('ethers');

// RPC URL - use environment variable or default to the main RPC
const RPC_URL = process.env.PROST_RPC_URL || 'https://rpc-prost1m.powerloom.io/';

async function getLatestBlockNumber() {
  try {
    // Create a provider
    const provider = new ethers.JsonRpcProvider(RPC_URL);

    console.log(`Using RPC URL: ${RPC_URL}`);

    // Get the latest block number
    const blockNumber = await provider.getBlockNumber();

    console.log(`Latest block number: ${blockNumber}`);
    return blockNumber;
  } catch (error) {
    console.error('Error fetching latest block number:', error.message);
    return null;
  }
}

// Test the function
getLatestBlockNumber().then((result) => {
  if (result !== null) {
    console.log('✅ Successfully fetched the latest block number. Your ISP is supported!');
  } else {
    console.log('❌ Failed to fetch the latest block number. Your ISP/VPS region is not supported ⛔️');
  }
  process.exit(0);
});
