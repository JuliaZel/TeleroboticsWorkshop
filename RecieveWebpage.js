// listener 
function listener() {
  //console.log("Calling the listener function")
  let robotNumber = document.getElementById("robotNumberSubscribe").value;
  //console.log("Robot Number ", robotNumber)

  if (robotNumber > 0 && robotNumber <= 20) {
    // update with your own AirTable values
    var APIKey = 'key' + 'q6cE5AJCfLujRX';
    var BaseID = 'app' + 'UD1PwGJYxVxy1t';
    var TableName = 'RobotTable';
    var ObjectID = recIDs.get('Robot' + robotNumber);

    var Airtable = require('airtable');
    var base = new Airtable({ apiKey: APIKey }).base(BaseID);
    var retrieved_record = "no_command";

    base(TableName).find(ObjectID, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
      retrieved_record = record.get("Value")
      // console.log('Retrieved', record.id);
      // console.log('Value:', record.get("Value"))

      if (record.get("Value") != "no_command") {
        // console.log("HELLO!?")

        // run the new command
        console.log("Running the command:", record.get("Value"))

        // Clear the old command, update to "no_command"
        base(TableName).update(ObjectID, { "Value": "no_command" }, function(err, record) {
          if (err) {
            console.error(err);
            return;
          }
          // console.log("New Command: " + record.get("Name"));
        });
        runCommands(record.get("Value"));
      } 
      
      else {
        console.log("No change found");
      }
    });
  }
}


  function runCommands(command) {
    // WHAT MOTORS ARE YOU USING TO DRIVE YOUR VEHICLE? 
    motorOne = "A"
    motorTwo = "B"

    if (command == "forward") {
      var motorOne = new mySPIKE.Motor(motorOne);
      var motorTwo = new mySPIKE.Motor(motorTwo);
      // run_for_degrees(degrees, speed (0 to 100), function(){});
      motorOne.run_for_degrees(360, -50, function() {
        console.log("Forward Wheel 1")
      });
      motorTwo.run_for_degrees(360, 50, function() {
        console.log("Forward Wheel 2")
      });
    }
    else if (command == "right") {
      var motorTwo = new mySPIKE.Motor(motorOne);
      motorTwo.run_for_degrees(405, -50, function() {
        console.log("Right")
      });
    }
    else if (command == "left") {
      var motorOne = new mySPIKE.Motor(motorTwo);
      motorOne.run_for_degrees(405, -50, function() {
        console.log("Left")
      });
    }
    else if (command == "rotate180") {
      var motorOne = new mySPIKE.Motor(motorOne);
      var motorTwo = new mySPIKE.Motor(motorTwo);
      motorOne.run_for_degrees(360, 50, function() {
        console.log("Rotate 180 Wheel 1")
      });
      motorTwo.run_for_degrees(360, 50, function() {
        console.log("Rotate 180 Wheel 2")
      });
    }
    else if (command == "backward") {
      var motorOne = new mySPIKE.Motor(motorOne);
      var motorTwo = new mySPIKE.Motor(motorTwo);
      motorOne.run_for_degrees(360, 50, function() {
        console.log("Backward Wheel 1")
      });
      motorTwo.run_for_degrees(360, -50, function() {
        console.log("Backward Wheel 2")
      });
    }
    else if (command == "actionOne") {
      // TYPE IN YOUR OWN CODE HERE
    }
    else if (command == "actionTwo") {
      // TYPE IN YOUR OWN CODE HERE
    }
  }



