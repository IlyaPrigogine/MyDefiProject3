import {deployments, ethers, getNamedAccounts, network} from 'hardhat';
import {Greeter, MyDefiProject} from "../typechain";
import {dai_ropsten, destAddress, fooAmount, initialApprove, usdc_ropsten} from "../helpers/constants";
import {parseEther, parseUnits} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    // if (await network.name === 'ropsten') {
    //     const Dai = await ethers.getContractAt('IERC20', dai_ropsten);
    //     const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');
    //
    //     console.log(`${await MyDefiProject.tokenAddress()}`);
    //
    //     await MyDefiProject.setTokenAddress(await Dai.address);
    //     await Dai.approve(MyDefiProject.address, parseEther(initialApprove));
    //     await MyDefiProject.foo(destAddress,parseEther(fooAmount))
    // }


    if (await network.name === 'ropsten') {
        const Usdc = await ethers.getContractAt('IERC20', usdc_ropsten);
        const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');

        // await MyDefiProject.setTokenAddress(await Usdc.address);
        // console.log(`${await MyDefiProject.tokenAddress()}`);
        // await Usdc.approve(MyDefiProject.address, parseEther(initialApprove));
        await MyDefiProject.foo(destAddress,parseUnits(fooAmount,6));
    }

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
