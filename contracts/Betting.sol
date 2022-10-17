// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Ownable {
  address payable owner;
  constructor() {
    owner = payable(msg.sender);
  }

  modifier Owned {
    require(msg.sender == owner);
    _;
  }
}

contract Mortal is Ownable {
  function kill() public Owned { 
    selfdestruct(owner);
  }
}


contract Betting is Mortal {
  uint minBet; // 최소 베팅액
  uint winRate; // 배당률 (%)

  event Won(bool _result, uint _amount, uint _winNum);

  function betting(uint _minBet, uint _winRate) payable public {
    require(_minBet > 0);
    require(_winRate <= 100);
    minBet = _minBet;
    winRate = _winRate;
  }

  receive() external payable{}

  function bet(uint _num) payable public {
    require(_num > 0 && _num <= 5);
    require(msg.value >= minBet);

    uint winNum = random();
    if (_num == winNum) {
      uint amtWon = msg.value * (100 - winRate)/10;
      payable(msg.sender).transfer(amtWon);
      emit Won(true, amtWon, winNum);
    } else {
      emit Won(false, 0, winNum);
    }
  }

  function getBalance() Owned public view returns(uint) {
    return address(this).balance;
  }

  function random() public view returns (uint) {
  	return uint(keccak256(abi.encodePacked(block.difficulty, block.number, block.timestamp))) % 5 + 1;
  }
}

