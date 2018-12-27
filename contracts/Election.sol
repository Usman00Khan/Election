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
	uint public hour;
	uint public min;
	constructor () public {
		electionStarted = false;
		/*candidateList = _candidateNames;
		for(uint i =0;i<candidateList.length;i++){
			addCandidate(candidateList[i]);*/
		//}
		//addCandidate(candidate);
	}

	function addCandidate (bytes32 _name) public {

		require (msg.sender == address(0x007aba4a306f65ed1269ec888d1cdf4a85c9b2652b));
		require (!electionStarted);
		require (isNewEntry(_name));
		
		candidatesCount ++;
		candidates[candidatesCount] = Candidate(candidatesCount,_name,0);
	}
	function vote (uint candidateId) public {

		require (!voters[msg.sender]);

		require (candidateId>0&&candidateId<=candidatesCount);
		
		
		candidates[candidateId].voteCount++;
		voters[msg.sender] = true;
	}
	
	function isNewEntry(bytes32 candidate) view public returns (bool) {
    for(uint i = 1; i <= candidatesCount; i++) {
        if (candidates[i].name == candidate) {
            return false;
        }
    }
    return true;
  }

  function startVote () public {

  	require (msg.sender == address(0x007aba4a306f65ed1269ec888d1cdf4a85c9b2652b));
  	electionStarted =true;
  }

  function setTimer (uint a , uint b) public {
  	require (msg.sender == address(0x007aba4a306f65ed1269ec888d1cdf4a85c9b2652b));

  	require (!electionStarted);
  	
  	hour = a;
  	min = b;
  }

  function gethighest () public returns(uint) {

  	require (candidatesCount>0);
  	Candidate memory max=candidates[1];
  	for (uint i =2;i<=candidatesCount;i++){
  		if(candidates[i].voteCount>max.voteCount){
  			max =candidates[i];
  		}
  	}
  	return max.id;
  }
}

