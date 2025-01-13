// NOTE ***** airtable_rec_id variable is equal to the airtable Record ID, 

// Base & Field info
let table0 = base.getTable("Sales");
let query = await table0.selectRecordsAsync(
    {fields: ["Quote Follow Up Stage", "F1 Date", "F2 Date", "F3 Date"]}
);

let inputConfig = input.config();

console.log(`The value of airtable_rec_id is ${inputConfig.airtable_rec_id}`);

let record = query.records.find(r => r.id === inputConfig.airtable_rec_id);

if (record) {
    // Access the "Quote Follow Up Stage" field as an object, and get its 'name' property
    let followUpStage = record.getCellValue("Quote Follow Up Stage");
    let followUpStageText = followUpStage ? followUpStage.name : 'No Follow Up Stage';
    console.log(`This is the Followup stage: ${followUpStageText}`);

    // maping of lead stage to an int
    const stageMapping = {
        "No Follow Up Stage": 0,
        "1st round Completed": 1,
        "2nd Round Completed": 2,
        "3rd Round Completed": 3,
        "Excessive Amount": 4
    };

    // Map the selected dropdown option to the corresponding integer
    let selectedDropdownInt = stageMapping[followUpStageText] !== undefined ? stageMapping[followUpStageText] : null;
  
    if (selectedDropdownInt !== null) {
        console.log(`Selected dropdown integer: ${selectedDropdownInt}`);
    } else {
        console.log('Invalid or unknown Follow Up Stage');
    }

    console.log(`This is the F1 Date: ${record.getCellValue("F1 Date")}`);
    console.log(`This is the F2 Date: ${record.getCellValue("F2 Date")}`);
    console.log(`This is the F3 Date: ${record.getCellValue("F3 Date")}`);

    incrementStage(selectedDropdownInt, stageMapping, record);

} else {
    console.log("Record was not found...");
}

// Function to increment the stage integer and print the updated stage
async function incrementStage(currentStageInt, stageMapping, record) {
    if (currentStageInt === null) {
        console.log('Invalid stage provided for increment.');
        return;
    }

    let newStageInt = currentStageInt + 1;

    //  stop at 4 (Excessive Amount)
    if (newStageInt > 4) {
        newStageInt = 4;  
    }

    const newStageText = Object.keys(stageMapping).find(key => stageMapping[key] === newStageInt);

    // Log the new stage integer and the corresponding stage
    console.log(`New stage integer: ${newStageInt}`);
    console.log(`New Quote Follow Up Stage: ${newStageText}`);

    let attachDateField = assignAttachDateField(newStageInt);

    await updateAirtableRecord(record.id, attachDateField, newStageText);
}

// Function to assign Attach_Date_field based on the new stage
function assignAttachDateField(newStageInt) {
    let attachDateField;

    // Based on the newStageInt, assign the correct F1, F2, or F3 date field
    switch (newStageInt) {
        case 1:
            attachDateField = "F1 Date"; 
            break;
        case 2:
            attachDateField = "F2 Date";  
            break;
        case 3:
            attachDateField = "F3 Date";  
            break;
        default:
            attachDateField = null; // If newStageInt is 0 or 4, no Attach_Date_field is assigned
            break;
    }

    if (attachDateField) {
        console.log(`Attach_Date_field is assigned to: ${attachDateField}`);
    } else {
        console.log("No Attach_Date_field assigned for this stage.");
    }

    return attachDateField;
}

// Function to get current timestamp (YYYY-MM-DD)
function getCurrentTimestamp() {
    // Get the current date
    const today = new Date();

    // Format the date to YYYY-MM-DD
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

console.log(`The Current Date this script ran: ${getCurrentTimestamp()}`);

// Function to update the Airtable record
async function updateAirtableRecord(recordId, attachDateField, newStageText) {
    let formattedDate = getCurrentTimestamp();
    
    let updateData = {};

    if (attachDateField) {
        updateData[attachDateField] = formattedDate; // Update the corresponding date field (F1, F2, F3)
    }

    if (newStageText) {
        updateData["Quote Follow Up Stage"] = {name: newStageText}; // Update the "Quote Follow Up Stage"
    }

    // Make sure there is something to update
    if (Object.keys(updateData).length > 0) {
        await table0.updateRecordAsync(recordId, updateData);
        console.log(`Record ${recordId} updated with new data:`, updateData);
    } else {
        console.log('No fields to update.');
    }
}
