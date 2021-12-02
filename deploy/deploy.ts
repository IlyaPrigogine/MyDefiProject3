import {DeployFunction} from 'hardhat-deploy/types';
import {dai_ropsten} from "../helpers/constants";


const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy} = deployments;
    const {owner} = await getNamedAccounts();

    console.log('chainId:', await getChainId());

    if (network.name == 'ropsten') {
        await deploy('MyDefiProject', {
            from: owner,
            args: [dai_ropsten],
            log: true,
        })
    }

};
export default func;
func.tags = ['Greeter'];
