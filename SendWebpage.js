const recIDs = new Map();

recIDs.set("Robot1", "recCyshNHuffHGRKB");
recIDs.set("Robot2", "recOUdvzkJCBDvrRa");
recIDs.set("Robot3", "recWDmsg1rUQfjcI2");
recIDs.set("Robot4", "rec7ruH0bvuVL6LBy");
recIDs.set("Robot5", "recPx6VeSEBqHqD0a");
recIDs.set("Robot6", "recv2JC9Kqlk21gRd");
recIDs.set("Robot7", "recoYPtA7xMJ7rZXM");
recIDs.set("Robot8", "recwyxfUe0kiUNqLu");
recIDs.set("Robot9", "recVLT3sjGrNbyXeZ");
recIDs.set("Robot10", "receLWcJmopQdvVOp");
recIDs.set("Robot11", "recctfKUyQPRDBp7k");
recIDs.set("Robot12", "rec2RIbZjjoQczFaF");
recIDs.set("Robot13", "recYZa06d7m6ET1a1");
recIDs.set("Robot14", "rectzDBYxT9hhqfye");
recIDs.set("Robot15", "recb3UNzfWy708Qcr");
recIDs.set("Robot16", "recNj98YTvHAiq8fE");
recIDs.set("Robot17", "rec3qtdWNvbRsv6M9");
recIDs.set("Robot18", "recnIVkgZnvXVkpMG");
recIDs.set("Robot19", "recAJabLCgc6kxr5e");
recIDs.set("Robot20", "reca2mVP36ATYU7oi");

function update_airtable(command) {
  console.log('Update Airtable');

  let robotNumber = document.getElementById("robotNumberSend").value;

  if (robotNumber > 0 && robotNumber <=20) {
     
    // update with your values
    var APIKey = 'key' + 'q6cE5AJCfLujRX';
    var BaseID = 'app' + 'UD1PwGJYxVxy1t';
    var TableName = 'RobotTable';
    var ObjectID = recIDs.get('Robot' + robotNumber);
  
    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: APIKey }).base(BaseID);
  
    base(TableName).update(ObjectID, {
      "Value": command
    }, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("New Command: " + record.get("Value"));
    });
   } 
  else {
    alert("Something is wrong with the robot number you inputted. Try again.");
  }
  
}
