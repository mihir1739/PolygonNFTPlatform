const hre = require("hardhat");

// Returns the Ether balance of a given address.
async function getBalance(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

// Logs the Ether balances for a list of addresses.
async function printBalances(addresses) {
  let idx = 0;
  for (const address of addresses) {
    console.log(`Address ${idx} balance: `, await getBalance(address));
    idx ++;
  }
}

// Logs the memos stored on-chain from coffee purchases.


async function main() {
  // Get the example accounts we'll be working with.
  const [owner, tipper, tipper2, tipper3] = await hre.ethers.getSigners();

  // We get the contract to deploy.
  const gor = await hre.ethers.getContractFactory("gor");
  const Gor = await gor.deploy();

  // Deploy the contract.
  await Gor.deployed();
  console.log("Gor:", Gor.address);

  // Check balances before the coffee purchase.
  const addresses = [owner.address, tipper.address, tipper2.address, tipper3.address];
  console.log("== start ==");
  await printBalances(addresses);

  // Buy the owner a few coffees.
  const tip = {value: hre.ethers.utils.parseEther("0.00065")};
  await Gor.connect(tipper).Purchase("Carolina", 1, 1,tip);
  await Gor.connect(tipper2).Purchase("Vitto", 1, 1,tip);
  await Gor.connect(tipper3).Purchase("Kay", 1, 1,tip);

  // Check balances after the coffee purchase.
  console.log("== bought coffee ==");
  await printBalances(addresses);
  const d = await Gor.connect(tipper).dt(tipper.address)
  console.log(d)

  // Check balances after withdrawal.

  // Check out the memos.
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });