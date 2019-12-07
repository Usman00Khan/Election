pragma solidity ^0.5.0;
/**
 * The Election contract does this and that...
 */
contract Election {
	//model
	//store
	//fetch
	struct Candidate {
		uint id;
		bytes32 name;
		uint voteCount;
	}
	bool public electionStarted;
	mapping (address => bool) public voters;
	mapping (uint => Candidate) public candidates;
	uint public candidatesCount;
	string public time;
	// uint public min;
	constructor () public {
		electionStarted = false;
		/*candidateList = _candidateNames;
		for(uint i =0;i<candidateList.length;i++){
			addCandidate(candidateList[i]);*/
		//}
		//addCandidate(candidate);
	}

	function addCandidate (bytes32 _name) public {

		require (msg.sender == address(0x0038b9D8EE6ba24c2D2a07cb8395478E93F086F9B5),
		"Sender not authorised");
		require (!electionStarted,"Election is going on");
		require (isNewEntry(_name),"Already exists");
		candidatesCount ++;
		candidates[candidatesCount] = Candidate(candidatesCount,_name,0);
	}
	function vote (uint candidateId) public {

		require (!voters[msg.sender],"Already voted");

		require (candidateId>0&&candidateId<=candidatesCount,"Invalid candidate ID");
		candidates[candidateId].voteCount++;
		voters[msg.sender] = true;
	}
	function isNewEntry(bytes32 candidate) public view  returns (bool) {
    for(uint i = 1; i <= candidatesCount; i++) {
        if (candidates[i].name == candidate) {
            return false;
        }
    }
    return true;
  }

  function startVote () public {

  	require (msg.sender == address(0x0038b9D8EE6ba24c2D2a07cb8395478E93F086F9B5),"Not authorized");
	  electionStarted = true;
  }

  function setTimer (string memory a) public {
  	require (msg.sender == address(0x0038b9d8ee6ba24c2d2a07cb8395478e93f086f9b5),"Not authorized");
	  time = a;
  }
  function getTimer () public view returns(string memory) {
	  return time;
  }
  function gethighest () public view returns(uint) {

  	require (candidatesCount>0,"invalid candidate");
	  Candidate memory max = candidates[1];
  	for (uint i = 2;i<=candidatesCount;i++){
  		if(candidates[i].voteCount>max.voteCount){
  			max = candidates[i];
  		}
  	}
  	return max.id;
  }
}

