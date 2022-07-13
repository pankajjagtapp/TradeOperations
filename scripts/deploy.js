const hre = require('hardhat');
const { BigNumber } = require('ethers');

async function main() {
	const JagguToken = await hre.ethers.getContractFactory('JagguToken');
	const totalSupply = BigNumber.from(10000000);
	const jagguToken = await JagguToken.deploy(totalSupply);
	console.log('Jaggu Token address: ', jagguToken.address);

	const Operations = await hre.ethers.getContractFactory('TradeOperations');
	const operations = await Operations.deploy(jagguToken.address);
	console.log('Trade Operations address: ', operations.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
