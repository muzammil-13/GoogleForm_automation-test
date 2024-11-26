function submitFormResponses() {
  // Open the form by its URL
  var form = FormApp.openByUrl('https://docs.google.com/forms/d/FORM_ID/edit');
  
  // Generate random data for the submission
  var randomName = generateRandomName();
  var randomEmail = generateRandomEmail();
  var randomMessage = generateRandomMessage();
  
  // Create a response
  var formResponse = form.createResponse();

  // Add responses for each question (update index and type as per your form structure)
  var items = form.getItems();
  formResponse.withItemResponse(items[0].asTextItem().createResponse(randomName)); // Name
  formResponse.withItemResponse(items[1].asTextItem().createResponse(randomEmail)); // Email
  formResponse.withItemResponse(items[2].asParagraphTextItem().createResponse(randomMessage)); // Message
  
  // Submit the response
  formResponse.submit();
  Logger.log('Submitted at: ' + new Date() + ' | Name: ' + randomName + ' | Email: ' + randomEmail);
}

function generateRandomName() {
  var firstNames = ['John', 'Alice', 'Robert', 'Mary', 'James', 'Sophia'];
  var lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Lee', 'White'];
  return firstNames[Math.floor(Math.random() * firstNames.length)] + 
         ' ' + 
         lastNames[Math.floor(Math.random() * lastNames.length)];
}

function generateRandomEmail() {
  var domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  var username = 'user' + Math.floor(Math.random() * 100000);
  return username + '@' + domains[Math.floor(Math.random() * domains.length)];
}

function generateRandomMessage() {
  var messages = [
    'Looking forward to connecting!',
    'This is a test response.',
    'Let me know if there are further questions.',
    'Happy to participate in this process!'
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

function scheduleSubmissions() {
  var startTime = new Date();
  var endTime = new Date(startTime.getTime() + 35 * 60 * 1000);

  while (startTime < endTime) {
    ScriptApp.newTrigger('submitFormResponses')
             .timeBased()
             .at(startTime)
             .create();
    startTime = new Date(startTime.getTime() + Math.floor(Math.random() * 60 + 1) * 1000);
  }
}
