const recIDs = new Map();

recIDs.set("Robot1", "recNRC68TjMTeGY9W");
recIDs.set("Robot2", "recYAHYK3P7ck9WMs");
recIDs.set("Robot3", "reca80YEHi93YJmW9");
recIDs.set("Robot4", "recSE7H7QVmS6XlAo");
recIDs.set("Robot5", "recNQDu8CA62UpDPn");
recIDs.set("Robot6", "recew8vZQfJsq125n");
recIDs.set("Robot7", "recSdWUQywfl5NVNl");
recIDs.set("Robot8", "recCyUSBbCIeO4Z3t");
recIDs.set("Robot9", "recxOzIo95hlwfKlu");
recIDs.set("Robot10", "recBlMkHpthDBY56g");
recIDs.set("Robot11", "recwMgCDMKK7wIlEj");
recIDs.set("Robot12", "recnamGC7rcpexfYz");
recIDs.set("Robot13", "recLbtUVdlY5yjwDC");
recIDs.set("Robot14", "recXOwb2LGTYphVTp");
recIDs.set("Robot15", "reccrZAtw2rmQg1Z1");
recIDs.set("Robot16", "reciyyqHMVSZpZpJ8");
recIDs.set("Robot17", "recqqhrZkLrKOXrxI");
recIDs.set("Robot18", "recD9ELcfDXgGJXW8");
recIDs.set("Robot19", "recI7rDVrZKTvXqE4");
recIDs.set("Robot20", "recaD3mcmJkYZl4xI");

function update_airtable(command) {
  console.log('Update Airtable');

  let robotNumber = document.getElementById("robotNumberSend").value;

  if (robotNumber > 0 && robotNumber <=20) {
     
    // update with your values
    var APIKey = 'key' + 'OhhcIlqLY9rGEx';
    var BaseID = 'app' + 'v2Dfqrd1mTDlyk';
    var TableName = 'Robots';
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
