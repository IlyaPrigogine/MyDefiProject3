pragma solidity ^0.8.4;

import '@openzeppelin/contracts/interfaces/IERC20.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract MyDefiProject is Ownable {
    IERC20 token;
    address public tokenAddress;
    constructor (address token_) public {
        tokenAddress = token_;
        token = IERC20(token_);
    }

    function foo(address recipient, uint amount) external {
        token.transferFrom(msg.sender,recipient,amount);
    }

    function setTokenAddress(address token_) onlyOwner external {
        tokenAddress = token_;
        token = IERC20(token_);
    }
}
