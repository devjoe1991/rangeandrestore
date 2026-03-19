/**
 * Range and Restore – Contact Form Google Apps Script
 * =====================================================
 *
 * SETUP INSTRUCTIONS:
 * -------------------
 * 1. Go to https://script.google.com and create a new project
 * 2. Paste this entire file into the editor
 * 3. Update SPREADSHEET_ID below with your Google Sheet ID
 *    (found in the sheet URL: docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit)
 * 4. Run the `setup` function once to create the sheet headers:
 *    - Click the function dropdown, select "setup", and click Run
 *    - Grant the required permissions when prompted
 * 5. Deploy as a Web App:
 *    - Click Deploy > New deployment
 *    - Select type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone (required for the contact form to submit)
 *    - Click Deploy and copy the Web App URL
 * 6. Paste the Web App URL into your .env file as GOOGLE_APPS_SCRIPT_URL
 *
 * SHEET STRUCTURE:
 * ----------------
 * The script will create a "Contact Form Submissions" sheet with these columns:
 * Timestamp | First Name | Last Name | Email | Phone | Treatment | Message
 */

const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE'
const SHEET_NAME = 'Contact Form Submissions'

/**
 * Run this once to set up the spreadsheet headers
 */
function setup() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID)
  let sheet = ss.getSheetByName(SHEET_NAME)

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME)
  }

  const headers = ['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Treatment of Interest', 'Message', 'Submitted At (ISO)']
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold')
  sheet.setFrozenRows(1)

  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length)

  Logger.log('Setup complete. Sheet created: ' + SHEET_NAME)
}

/**
 * Handles POST requests from the contact form
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID)
    const sheet = ss.getSheetByName(SHEET_NAME)

    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ error: 'Sheet not found. Run setup() first.' }))
        .setMimeType(ContentService.MimeType.JSON)
    }

    const now = new Date()
    const timestamp = Utilities.formatDate(now, 'Europe/London', 'dd/MM/yyyy HH:mm:ss')

    const row = [
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.treatment || '',
      data.message || '',
      data.submittedAt || now.toISOString(),
    ]

    sheet.appendRow(row)

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)

  } catch (err) {
    Logger.log('Error in doPost: ' + err.toString())
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

/**
 * Handles GET requests (health check / test)
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Range and Restore contact form endpoint is running.' }))
    .setMimeType(ContentService.MimeType.JSON)
}
