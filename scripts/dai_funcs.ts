import {deployments, ethers, getNamedAccounts, network} from 'hardhat';
import {Greeter, MyDefiProject} from "../typechain";
import {dai_ropsten, fooAmount, initialApprove} from "../helpers/constants";
import {parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    if (await network.name === 'ropsten') {
        const Dai = await ethers.getContractAt('IERC20', dai_ropsten);
        const MyDefiProject = await ethers.getContract<MyDefiProject>('MyDefiProject');

        console.log(`${await MyDefiProject.tokenAddress()}`);

        // await Dai.approve(MyDefiProject.address, parseEther(initialApprove));
        await MyDefiProject.foo(ethers.constants.AddressZero,parseEther(fooAmount))
    }

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
