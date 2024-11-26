# Google Form Auto-Submitter

## **Overview**

The **Google Form Auto-Submitter** is a project designed to automate the submission of randomized data to a Google Form. It simulates user behavior by generating random names, email addresses, and responses to questions, and submits them at random intervals for a specific time window. This tool is ideal for testing, mock data generation, or simulating multiple entries in a form.

---

## **Features**

- **Randomized Responses**: Generates random names, email addresses, and messages for each submission.
- **Interactive Form Selection**: Allows users to dynamically specify the target Google Form.
- **Time-Bound Execution**: Runs for a fixed duration (e.g., 35 minutes) with randomized intervals.
- **Logging**: Tracks submission details in the Apps Script log for monitoring and debugging.

---

## **Technologies Used**

- **Google Apps Script**: For automation and scheduling.
- **Google Forms**: As the target for automated submissions.
- **Google Sheets**: (Optional) Interface for user-provided configuration or dynamic form URL management.

---

## **Installation and Setup**

1. **Create a Google Form**
   - Add fields for **Name**, **Email**, and **Message** (or other required questions).
   - Note the Form URL.

2. **Create a Google Apps Script**
   - In Google Drive, click **New > Google Apps Script**.
   - Copy the provided script into the Apps Script editor.

3. **Optional: Use Google Sheets for Form URL Management**
   - Create a Google Sheet with a column for the Form URL.
   - Paste the URL into the designated cell (e.g., `A2`).

4. **Authorize the Script**
   - Run the script for the first time and authorize access to Google Forms.

---

## **Usage**

### **Option 1: Hardcoded Form URL**
- Replace `FORM_ID` in the script with the ID of your Google Form.
- Run the `scheduleSubmissions()` function to start submissions.

### **Option 2: Dynamic Form Selection via Google Sheets**
- Paste the Form URL into the designated cell in Google Sheets (e.g., `A2`).
- Run the `getFormUrlFromSheet()` function to fetch the URL and begin submissions.

### **Option 3: Dynamic Form Selection via Prompt**
- Run the `getFormUrlFromPrompt()` function to input the Form URL dynamically through a dialog box.

---

## **Scripts**

### **Core Script**

```javascript
// Add the full script here, including randomized response generation and submission logic
```

---

## **Customizing the Script**

- **Modify Random Data Generators**: Update functions like `generateRandomName()`, `generateRandomEmail()`, and `generateRandomMessage()` to suit your requirements.
- **Adjust Submission Interval**: Change the random interval range in the `scheduleSubmissions()` function.
- **Extend Logging**: Enhance logs to include error handling or export to a Google Sheet.

---

## **Future Enhancements**

1. **Dynamic Data Source**:
   - Use Google Sheets or external APIs to provide dynamic inputs for form submissions.
   
2. **Enhanced Logging**:
   - Export logs to a Google Sheet for easier monitoring and record-keeping.
   
3. **Error Handling**:
   - Add retry mechanisms for failed submissions.

4. **Customizable Duration**:
   - Allow users to set the submission window dynamically through a configuration file or prompt.

---

## **License**

This project is licensed under the MIT License. You are free to use, modify, and distribute the code.

---

## **Contributors**

- **Muzammil Ibrahim**  
- Open to contributions! Feel free to fork this repository and submit pull requests.

---

## **Disclaimer**

This tool is intended for ethical purposes such as testing or generating mock data. Do not use it for spamming, violating terms of service, or any unethical activities.
```

Feel free to adapt this README based on any additional details or project-specific requirements. Let me know if you'd like help formatting it for GitHub or adding more sections!
