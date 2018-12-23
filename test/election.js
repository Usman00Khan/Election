var Election = artifacts.require("./Election.sol");
var electionInstance;
contract("Election",function(accounts){
	 it("initializes with two candidates",function(){
	 	return Election.deployed().then(function(instance){
	 		return instance.candidatesCount();
	 	}).then(function(count){
	 		assert.equal(count,2);
	 	});
	 });

	 it("it initializes the candidates with correct value",function(){
	 	return Election.deployed().then(function(instance){
	 		electionInstance = instance;
	 		return electionInstance.candidates(1);
	 	}).then(function(candidate){
	 		assert.equal(candidate[0],1,"correct cand1 id");
	 		assert.equal(candidate[1],"Candidate 1","correct cand1 id");
	 		assert.equal(candidate[2],0,"correct cand1 id");
	 		return electionInstance.candidates(2);
	 	}).then(function(candidate){
	 		assert.equal(candidate[0],2,"correct cand2 id");
	 		assert.equal(candidate[1],"Candidate 2","correct cand2 id");
	 		assert.equal(candidate[2],0,"correct cand2 id");
	 	});
	});
})