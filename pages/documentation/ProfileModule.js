import React from 'react';

const UserProfile = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Section 1: User Profile Module User Guide */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          <i className="fas fa-user-circle mr-2"></i> User Profile Module User Guide
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The User Profile Module provides a detailed view of employee information in the system. The profile page displays personal, contact, and employment information that is crucial for HR and administrative management.
        </p>
      </section>

      {/* Section 2: Overview of the Profile Page */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-info-circle mr-2"></i> Overview of the Profile Page
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Profile Page is the central hub for viewing and managing the personal information of an employee. This includes details such as name, contact details, employment type, nationality, and more.
        </p>
       
      </section>

      {/* Section 3: Components of the User Profile Page */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-cogs mr-2"></i> Components of the User Profile Page
        </h3>
        
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Below is an explanation of the UI components available within the User Profile section.
        </p>
        <img src="/assets/m122.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Section 4: Key UI Components */}
      <section className="mb-10">
        <h4 className="text-xl font-semibold text-gray-800">
          <i className="fas fa-briefcase mr-2"></i> Key UI Components
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>
            <i className="fas fa-bars mr-2"></i><strong>Navigation Sidebar:</strong> The sidebar is located on the left-hand side of the page, providing quick navigation to other modules like Dashboard, Employees, Recruiting, Payroll, Reports, Master Details, and Event Calendar. Profile Section: This is the section you are currently viewing.
          </li>
          <li>
            <i className="fas fa-user-tie mr-2"></i><strong>Profile Header:</strong> Employee Name & Position: This section displays the employee’s full name, role, and workplace (e.g., Quantity Surveyor | Site). Employee Status: Indicates whether the employee is Active or Inactive. Employment Type: Displays whether the employee is on a Contract Basis, Permanent, or other employment types. Phone Number & Email: Provides the employee’s primary contact details.
          </li>
          <li>
            <i className="fas fa-file-alt mr-2"></i><strong>Tabs for Detailed Information:</strong> Profile: Shows the employee's personal information such as name, nationality, gender, religion, etc. Attendance: Displays attendance records, including check-in times, work hours, etc. Leaves: Displays the number of leave days taken, pending leave requests, and leave balances. Documents: Allows the viewing of documents related to the employee (e.g., ID proofs, contracts).
          </li>
        </ul>
      </section>

      {/* Section 5: Employment Information */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-id-badge mr-2"></i> Employment Information
        </h3>
        <img src="/assets/m123.png" alt="Employees List" className="w-full mt-4" />
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Role/Position:</strong> This displays the employee's job role or designation (e.g., Quantity Surveyor | Site).</li>
          <li><strong>Employment Type:</strong> Indicates the nature of employment (e.g., Contract Basis, Permanent, etc.).</li>
          <li><strong>Status:</strong> Whether the employee is currently Active or Inactive.</li>
          <li><strong>Joining Date:</strong> The date when the employee joined the organization.</li>
          <li><strong>Contract Basis:</strong> If the employee is on a contract, this will show.</li>
        </ul>
      </section>

      {/* Section 6: Personal Information */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-address-card mr-2"></i> Personal Information
        </h3>
        <img src="/assets/m124.png" alt="Employees List" className="w-full mt-4" />
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Title:</strong> The employee’s prefix (Mr., Mrs., etc.).</li>
          <li><strong>First Name:</strong> The employee’s first name.</li>
          <li><strong>Last Name:</strong> The employee’s last name.</li>
          <li><strong>Full Name:</strong> The complete name of the employee as per official records.</li>
          <li><strong>NIC (National Identity Card):</strong> The employee's national identification number.</li>
          <li><strong>Gender:</strong> The gender of the employee.</li>
          <li><strong>Date of Birth:</strong> The employee's birthdate.</li>
          <li><strong>Nationality:</strong> The nationality of the employee (e.g., Sri Lankan, Indian).</li>
          <li><strong>Religion:</strong> The employee's religion (e.g., Buddhist, Christian).</li>
          <li><strong>EPF No.:</strong> The Employee Provident Fund (EPF) number, used for tracking contributions.</li>
        </ul>
      </section>

      {/* Section 7: Contact Information */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-phone-alt mr-2"></i> Contact Information
        </h3>
        <img src="/assets/m125.png" alt="Employees List" className="w-full mt-4" />
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Address:</strong> The residential address of the employee.</li>
          <li><strong>Mobile Phone:</strong> The employee's mobile number.</li>
          <li><strong>Email:</strong> The email address used for correspondence with the employee.</li>
        </ul>
      </section>

      {/* Section 8: Bank Details */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-university mr-2"></i> Bank Details
        </h3>
        <img src="/assets/m126.png" alt="Employees List" className="w-full mt-4" />
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Bank Name:</strong> The name of the employee’s bank (e.g., Commercial Bank).</li>
          <li><strong>Account Number:</strong> The employee’s bank account number.</li>
          <li><strong>Branch Name:</strong> The branch where the employee holds an account.</li>
        </ul>
      </section>

      {/* Section 9: Managing the Profile View */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-edit mr-2"></i> Managing the Profile View
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Employee Overview:</strong> This page provides a snapshot of an employee’s personal, contact, and professional details, helping HR and management to easily access key data.</li>
          <li><strong>Tabs Navigation:</strong> 
            <ul className="list-inside list-disc pl-6">
              <li><i className="fas fa-calendar mr-2"></i> Attendance Tab: Click to view the attendance records for the selected period.</li>
              <li><i className="fas fa-calendar-check mr-2"></i> Leaves Tab: Navigate here to see leave records such as pending and approved leave.</li>
              <li><i className="fas fa-file-alt mr-2"></i> Documents Tab: You can view the documents uploaded for the employee, such as identity proof, bank details, etc.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-edit mr-2"></i> Managing the Profile View
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          While the Profile section does not allow for direct editing or deleting information, it is an essential area for viewing employee details and updating information in other sections.
        </p>
      </section>

      {/* Section 7.2: User Guide: Profile - Attendance Module */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-calendar-check mr-2"></i> User Guide: Profile - Attendance Module
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Attendance Module allows users to monitor and track the attendance records of employees. This section is part of the user profile and provides details about the employee’s daily attendance, including time in, time out, work hours, overtime (OT), and any remarks related to attendance.
        </p>
      </section>

      {/* Section 7.2.1: User Interface Overview */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-info-circle mr-2"></i> User Interface Overview
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Attendance Module is accessed from the Profile Section of the employee’s details page. The interface is designed to provide a detailed view of the employee’s attendance on a monthly basis.
        </p>
        <img src="/assets/m127.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Key Components of the Attendance Interface */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-cogs mr-2"></i> Key Components of the Attendance Interface
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>
            <i className="fas fa-clipboard mr-2"></i><strong>Header Section:</strong> 
            Profile Information: Displays the employee's name, position, employee ID, contact details, and employment type (e.g., Contract Basis).
          </li>
          <li>
            <i className="fas fa-table mr-2"></i><strong>Attendance Table:</strong> 
            Date Column: Displays the date for each workday in the selected month.
          </li>
          <li>
            <i className="fas fa-calendar-day mr-2"></i><strong>Month & Year Selector:</strong> 
            Allows users to select the specific month and year for viewing attendance records.
          </li>
          <li>
            <i className="fas fa-file-export mr-2"></i><strong>Generate Reports Button:</strong> 
            Allows users to generate attendance reports for the selected month.
          </li>
        </ul>
      </section>

      {/* Section 7.2.2: Using the Attendance Module */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-users mr-2"></i> Using the Attendance Module
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Attendance module allows for tracking employee attendance based on selected periods.
        </p>
        <ol className="list-decimal pl-6 text-lg text-gray-700">
          <li>
            <i className="fas fa-check-circle mr-2"></i><strong>Viewing Employee Attendance Records:</strong> 
            Navigate to the Profile section of the employee’s profile and click on the Attendance tab.
          </li>
          <li>
            <i className="fas fa-edit mr-2"></i><strong>Changing the Month/Year:</strong> 
            Select the month and year and click the Get reports button to reload attendance records.
          </li>
          <li>
            <i className="fas fa-download mr-2"></i><strong>Generating Reports:</strong> 
            After selecting the month/year, click Get reports to generate the desired report.
          </li>
        </ol>
      </section>

      {/* Section 7.2.3: Attendance Record Fields */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-list-alt mr-2"></i> Attendance Record Fields
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Project Code:</strong> Indicates the project code for the employee, if applicable.</li>
          <li><strong>In Date:</strong> Shows the start date of attendance for the day.</li>
          <li><strong>Out Date:</strong> Shows the end date of attendance for the day.</li>
          <li><strong>Day:</strong> The day of the week (e.g., Monday, Tuesday, etc.).</li>
          <li><strong>In Time:</strong> The time the employee clocks in for work.</li>
          <li><strong>Out Time:</strong> The time the employee clocks out after completing the workday.</li>
          <li><strong>Late:</strong> If the employee clocks in after the designated start time, this will indicate "Yes" or "No".</li>
          <li><strong>Early:</strong> If the employee leaves work before the scheduled time, it will indicate "Yes" or "No".</li>
          <li><strong>Work Hours:</strong> Total work hours for the day, calculated based on the In Time and Out Time.</li>
          <li><strong>OT Type:</strong> If overtime was worked, this will specify the type of overtime.</li>
          <li><strong>Remarks:</strong> Any additional notes related to the employee’s attendance for that day.</li>
        </ul>
      </section>

      {/* Section 7.2.4: Summary */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-summary mr-2"></i> Summary
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Attendance Tracking:</strong> The Attendance module provides a comprehensive view of employee attendance, helping HR track work hours, lateness, early departures, and overtime.</li>
          <li><strong>User-Friendly Navigation:</strong> Employees' attendance can be tracked for any given month with easy-to-navigate controls and reports.</li>
          <li><strong>Reporting Capabilities:</strong> Attendance data can be exported or reported to higher management for detailed analysis.</li>
        </ul>
      </section>
           {/* Section 7.3: User Guide: Leave Module in Profile */}
           <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-calendar-alt mr-2"></i> User Guide: Leave Module in Profile
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Leave Module within the Profile section allows employees to manage and track their leave requests, including pending leaves, approved leaves, and applying for new leaves. Below is the detailed guide on how to use the Leave Module effectively.
        </p>
      </section>

      {/* Section 7.3.1: User Interface Overview */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-info-circle mr-2"></i> User Interface Overview
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Leave section is divided into several key components to provide a clear overview of the employee’s leave status and allow for new leave applications.
        </p>
        <img src="/assets/m128.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Key Components of the Leave Interface */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-cogs mr-2"></i> Components of the Leave Interface
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>
            <i className="fas fa-calendar-check mr-2"></i><strong>Remaining Leaves:</strong> Displays the total number of remaining leaves the employee has for the year. It also shows the number of short leaves and the total number of leave days taken.
          </li>
          <li>
            <i className="fas fa-hourglass-half mr-2"></i><strong>Pending Leaves (2025):</strong> A table that displays any pending leave requests for the specified year. Initially, it shows "No results" if no leave applications are pending.
          </li>
          <li>
            <i className="fas fa-check-circle mr-2"></i><strong>Approved Leaves (2025):</strong> A table showing approved leave applications for the year. This section will populate once the leave applications are approved.
          </li>
          <li>
            <i className="fas fa-paper-plane mr-2"></i><strong>Apply for Leave Button:</strong> A button provided below the remaining leaves section to initiate the leave application process. Clicking this button opens a popup where the employee can enter details for their leave request.
          </li>
        </ul>
      </section>

      {/* Section 7.3.1.2: Steps to Apply for Leave */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-pencil-alt mr-2"></i> Steps to Apply for Leave
        </h4>
        <img src="/assets/m129.png" alt="Employees List" className="w-full mt-4" />
        <ol className="list-decimal pl-6 text-lg text-gray-700">
          <li><strong>Navigate to the Leave Section:</strong> Go to the Profile page in the HR system and click on the Leaves tab.</li>
          <li><strong>Check Remaining Leave Balance:</strong> Review your remaining leave balance at the top of the section. It shows the total remaining leaves and whether any short leaves are available.</li>
          <li><strong>Click "Apply for Leave":</strong> To apply for leave, click the Apply For Leave button.</li>
          <li><strong>Fill in Leave Application Form:</strong> A popup form will appear where you must enter the following information:
            <ul className="list-inside list-disc">
              <li>Leave Type: Select the type of leave you wish to apply for (e.g., Sick Leave, Annual Leave).</li>
              <li>Leave Date: Choose the date for which you are requesting leave. The date format will be MM/DD/YYYY.</li>
              <li>Leave Apply Type: Select whether the leave type is Short Leave, Full Day Leave, or Other.</li>
              <li>Reason: Provide the reason for your leave request. (This section may be optional depending on the organization’s policies.)</li>
            </ul>
          </li>
          <li><strong>Submit the Leave Application:</strong> After filling in the required details, click the Apply button to submit the application. The leave request will be sent for approval.</li>
          <li><strong>Leave Status:</strong> Once submitted, the status of your leave request will show up as "Pending" in the Pending Leaves (2025) table. Once the leave is approved, it will be displayed under Approved Leaves (2025).</li>
        </ol>
      </section>

      {/* Section 7.3.1.2.1: Managing Leave Requests */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-cogs mr-2"></i> Managing Leave Requests
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Pending Leave Requests:</strong> If your leave application is still under review or awaiting approval, it will be displayed in the Pending Leaves section.</li>
          <li><strong>Approved Leave Requests:</strong> When a leave request is approved, it will move to the Approved Leaves section, indicating that the leave has been granted.</li>
        </ul>
      </section>

      {/* Section 7.3.1.2.2: Leave Details Table */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-table mr-2"></i> Leave Details Table
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Project Code:</strong> (if applicable) This column shows the project code related to the leave request.</li>
          <li><strong>In Date:</strong> The date on which the leave is to start.</li>
          <li><strong>Out Date:</strong> The date on which the leave ends.</li>
          <li><strong>Day:</strong> The day of the week the leave is being taken.</li>
          <li><strong>In Time & Out Time:</strong> The exact start and end time of the leave, if applicable.</li>
          <li><strong>Late & Early:</strong> Tracks whether the employee was late or early before or after the leave period.</li>
          <li><strong>Work Hours:</strong> The total hours worked during the leave period, if applicable.</li>
          <li><strong>OT Type:</strong> If overtime (OT) is applied during the leave period.</li>
          <li><strong>Remarks:</strong> This section allows for any notes or additional comments related to the leave request.</li>
        </ul>
      </section>

      {/* Section 7.3.2: Summary */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-summary mr-2"></i> Summary
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Remaining Leaves:</strong> Displays the current leave balance.</li>
          <li><strong>Pending Leaves:</strong> Shows any leave applications that are yet to be approved.</li>
          <li><strong>Approved Leaves:</strong> Displays all approved leave applications.</li>
          <li><strong>Apply for Leave:</strong> Button to initiate a leave request form.</li>
          <li><strong>Leave Application Form:</strong> Includes fields for selecting leave type, leave dates, reason, etc.</li>
          <li><strong>Leave Status:</strong> Reflects whether the leave is pending or approved.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify mt-4">
          By following these steps, employees can easily apply for and track their leaves, making the leave management process more efficient for both employees and HR administrators.
        </p>
      </section>
      {/* Section 7.4: User Guide: Documents Module in Profile */}
      <section className="mb-10">
        <h3 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-file-alt mr-2"></i> User Guide: Documents Module in Profile
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Documents Module within the Profile section allows employees to preview and access their stored documents. This guide provides a detailed overview of the module, how to use it, and how users can view their documents.
        </p>
      </section>

      {/* Section 7.4.1: User Interface Overview */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-info-circle mr-2"></i> User Interface Overview
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Documents Module is part of the Profile section and is designed to help employees view and access their important documents, such as identification proofs, contracts, certifications, or other relevant files.
        </p>
        <img src="/assets/m130.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Section 7.4.1.1: Components of the Documents Interface */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-cogs mr-2"></i> Components of the Documents Interface
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li>
            <i className="fas fa-bars mr-2"></i><strong>Navigation Sidebar:</strong> Users can access the Documents Module by navigating to Profile from the sidebar and clicking the Documents tab.
          </li>
          <li>
            <i className="fas fa-folder-open mr-2"></i><strong>Your Documents Section:</strong> This section displays all uploaded documents related to the user. If no documents are uploaded, the section will display "0 items".
          </li>
          <li>
            <i className="fas fa-list-alt mr-2"></i><strong>Document List:</strong> If documents are uploaded, they will appear in a list format showing details such as:
            <ul className="list-inside list-disc">
              <li>Document Name</li>
              <li>Upload Date</li>
              <li>Document Type</li>
              <li>Preview Option</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Section 7.4.2: How to Use the Documents Module */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-cogs mr-2"></i> How to Use the Documents Module
        </h4>

        {/* Sub-section: Viewing Uploaded Documents */}
        <h5 className="text-xl font-semibold text-gray-800 mt-6">
          <i className="fas fa-eye mr-2"></i> Viewing Uploaded Documents
        </h5>
        <ol className="list-decimal pl-6 text-lg text-gray-700">
          <li><strong>Navigate to the Profile module:</strong> From the sidebar.</li>
          <li><strong>Click on the Documents tab:</strong> To open the Documents section.</li>
          <li><strong>If documents are available:</strong> They will be listed in the "Your Documents" section.</li>
          <li><strong>Click on a document name or preview button:</strong> (if available) to open and view the document.</li>
        </ol>

        {/* Sub-section: Downloading a Document */}
        <h5 className="text-xl font-semibold text-gray-800 mt-6">
          <i className="fas fa-download mr-2"></i> Downloading a Document (If download functionality is available)
        </h5>
        <ol className="list-decimal pl-6 text-lg text-gray-700">
          <li><strong>Navigate to the Documents Module:</strong> From the sidebar.</li>
          <li><strong>Click on the document you want to download:</strong> To open it in a new window or tab.</li>
          <li><strong>Download the document:</strong> You may have the option to download it if available.</li>
        </ol>
      </section>

      {/* Section 7.4.3: Managing Documents */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-tools mr-2"></i> Managing Documents
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>Only previewing is allowed:</strong> Users cannot delete or update documents.</li>
          <li><strong>Updating a document:</strong> If you need to update a document, contact the HR department or system administrator for assistance.</li>
          <li><strong>Ensure your documents are up to date:</strong> Make sure your required documents are accessible.</li>
          <li><strong>Use the preview feature:</strong> To verify your documents without downloading them.</li>
        </ul>
      </section>

      {/* Section 7.4.4: Summary */}
      <section className="mb-10">
        <h4 className="text-2xl font-semibold text-gray-800">
          <i className="fas fa-check-circle mr-2"></i> Summary
        </h4>
        <ul className="list-disc pl-6 text-lg text-gray-700">
          <li><strong>The Documents Module:</strong> Allows users to preview uploaded documents.</li>
          <li><strong>No option to delete or update documents:</strong> From this module.</li>
          <li><strong>Easy access to important files:</strong> For verification and reference.</li>
          <li><strong>Contact HR or system administrator:</strong> For updates or changes needed to documents.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify mt-4">
          By following these steps, employees can effectively use the Documents Module to view and verify their stored documents.
        </p>
      </section>
    </div>
  );
};

export default UserProfile;
