const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');

describe('Trade Operations Contract', function () {
	let jagguToken;
	let operations;
	let addr1;
	let addr2;
	let addr3;
	let addrs;

	beforeEach(async () => {
		[manager, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();

		// For ERC20 Tokens
		const JagguToken = await hre.ethers.getContractFactory('JagguToken');
		const totalSupply = BigNumber.from(10000000);
		jagguToken = await JagguToken.deploy(totalSupply);
		await jagguToken.deployed();

		// For Trade Operations
		const Operations = await hre.ethers.getContractFactory('TradeOperations');
		operations = await Operations.deploy(jagguToken.address);
		await operations.deployed();

		// Send Jaggu Tokens to 3 addresses
		await jagguToken.transfer(addr1.address, 100000);
		await jagguToken.transfer(addr2.address, 100000);
		await jagguToken.transfer(addr3.address, 100000);
	});

	describe('Deployment', async () => {
		it('Should return the correct name', async () => {
			expect(await jagguToken.name()).to.equal('JagguToken');
		});
	});

	describe('Trade Operations Tests', async () => {
        
    });
});
