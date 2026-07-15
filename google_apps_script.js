/**
 * GOOGLE APPS SCRIPT WEBHOOK FOR NASHA MUKTI PLEDGE
 *
 * Instructions:
 * 1. Open a new Google Sheet.
 * 2. Create the following column headers in Row 1:
 *    A: Timestamp | B: Certificate ID | C: Name | D: Mobile | E: Age | F: Gender | G: District | H: Block | I: Village | J: Category | K: Police Station
 * 3. Go to Extensions -> Apps Script.
 * 4. Delete any default code and paste this entire script.
 * 5. Click Save (Disk icon).
 * 6. Click "Deploy" (top-right) -> "New deployment".
 * 7. Select type: "Web app".
 * 8. Set Configuration:
 *    - Description: "Nasha Mukti Webhook"
 *    - Execute as: "Me" (your-email)
 *    - Who has access: "Anyone"
 * 9. Click "Deploy", approve any permissions requested.
 * 10. Copy the "Web app URL" and paste it into GOOGLE_SCRIPT_URL in "app.js".
 *
 * LIVE COUNTER: doGet() returns the current pledge count so the website's
 * Live Impact Counter updates in real time. The site calls:
 *   GET <web-app-url>?action=count
 */

// ── GET: Return total pledge count ───────────────────────────────────────────
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    // lastRow minus 1 to exclude the header row; clamp to 0
    var count = Math.max(0, sheet.getLastRow() - 1);
    return ContentService
      .createTextOutput(JSON.stringify({ count: count, status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ count: 0, status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── POST: Log a new pledge submission ────────────────────────────────────────
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      data.timestamp,
      data.certificateId,
      data.name,
      data.mobile,
      data.age,
      data.gender,
      data.district,
      data.block,
      data.village,
      data.category,
      data.policeStation
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data logged successfully" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
}

// ── OPTIONS: Handle CORS preflight requests ──────────────────────────────────
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
