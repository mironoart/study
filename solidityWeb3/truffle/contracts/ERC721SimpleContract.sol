pragma solidity ^0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract ERC721SimpleContract is ERC721Full{
  
    constructor() ERC721Full("Simple", "SMPL") public {}

    
    function mint(address to, uint256 tokenId) public  {
        _mint(to, tokenId);
    }
    
    function _mint(address to) public {
        mint(to, totalSupply().add(1));
    }

}