App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Election.json", function(election) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Election = TruffleContract(election);
      // Connect provider to interact with contract
      App.contracts.Election.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    var electionInstance;
    var loader = $("#loader");
    var content = $("#content");

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        if (account == null){
        loader.show();
        content.hide();}
        else{
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);


      }}
    });

    App.contracts.Election.deployed().then(function(instance){
      electionInstance = instance;
      return electionInstance.electionStarted().then(function(started){
        if(started){
        $("#addCandidatesDiv").hide();
        $("#StartTiming").hide(); 
      }
      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
    })

    // Load contract data
    App.contracts.Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidatesCount();
    }).then(function(candidatesCount) {
      var candidatesResults = $("#candidatesResults");
      candidatesResults.empty();
      var candidatesSelect = $("#candidatesSelect");
      candidatesSelect.empty();

      for (var i = 1; i <= candidatesCount; i++) {
        electionInstance.candidates(i).then(function(candidate) {
          var id = candidate[0];
          var name = web3.toAscii(candidate[1]);
          var voteCount = candidate[2];

          // Render candidate ballot option
          var candidatesOption = "<option value='" + id + "' >" + name + "</ option>";
          candidatesSelect.append(candidatesOption);
          var candidateTemp = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount+"</td></tr>";
          candidatesResults.append(candidateTemp);
        });
      }
      return electionInstance.voters(App.account);
    }).then(function(hasVoted) {
      // Do not allow a user to vote
      if(hasVoted) {
        $('#voteCandidateForm').hide();
      }
      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  },
  castVote: function() {
    var candidateId = $('#candidatesSelect').val();
    App.contracts.Election.deployed().then(function(instance) {
      return instance.vote(candidateId, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
    }).catch(function(err) {
      console.error(err);
    });
  },

  addCandidates: function() {
    var candidateName = $('#candidateName').val();
    App.contracts.Election.deployed().then(function(instance){
      return instance.addCandidate(candidateName, { from: App.account });
    }).then(function(result) {
      // Wait for votes to update
    }).catch(function(err) {
      console.error(err);
    });
  },

  startVoting: function () {
  App.contracts.Election.deployed().then(function(instance) {
    return instance.startVote({from: App.account});
  }).then(function(result){

  }).catch(function(err){
    console.error(err);
  });
  },

  setTimer: function(){
    var hour = $('#end_hours').val();
    var mins = $('#end_minutes').val();
    h = parseInt(hour);
    m = parseInt(mins);
    App.contracts.Election.deployed().then(function(i){
      return i.setTimer(h,m, {from: App.account});
    }).then(function(result){

  }).catch(function(err){
    console.error(err);
  });
  },
  getWinner: function(){
      App.contracts.Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.candidatesCount();
    }).then(function(candidatesCount) {

      var max = [0,"",0];
      var candidatesResults = $("#winnerName");
      candidatesResults.empty();

      for (var i = 1; i <= candidatesCount; i++) {
        electionInstance.candidates(i).then(function(candidate) {
          if(max[2]<candidate[2]){
            max[0] = candidate[0];
            max[1] = web3.toAscii(candidate[1]);
            max[2] = candidate[2];
          var candidateTemp = "<br/>"+"Id: " + max[0]+"<br/>"+"Name: "+ max[1] + "<br/>No. of votes:" + max[2]+"<br/>";
        }
        candidatesResults.append(candidateTemp);
          
        });
      }
    })

  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});