import React from "react";

const EmployeeManagementPage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Section 3: Managing Employees */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
    <i className="fas fa-cogs mr-2"></i>User Guide for Managing Employees Module
  </h1>
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-users mr-2"></i>Managing Employees overview
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Employees Management Module allows HR teams to manage employee profiles, track their status, and update key details. The following features are available:
        </p>
      </section>

      {/* Section 3.1: Employees List */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-list mr-2"></i>Employees List
        </h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-check-circle mr-2"></i>Displays a list of all employees, including their name, designation, department, pay group, employment status, and joined date.</li>
          <li><i className="fas fa-check-circle mr-2"></i>Employee profiles are represented with initials and color-coded circles.</li>
          <li><i className="fas fa-check-circle mr-2"></i>Employees can be searched using filters such as Employee Name, Department, and Pay Group.</li>
          <li><i className="fas fa-check-circle mr-2"></i>The View button allows users to see detailed employee information.</li>
        </ul>
        <img src="/assets/m88.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Section 3.2: Searching and Filtering Employees */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-search mr-2"></i>Searching and Filtering Employees
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Employees Management Module provides robust search and filtering options to efficiently locate and manage employee records. Follow these steps to use the search and filter functions effectively:
        </p>
      </section>

      {/* Section 3.2.1: Using the Search Bar */}
      <section className="mb-10">
        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-search mr-2"></i>Using the Search Bar
        </h4>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-arrow-right mr-2"></i>Locate the search bar at the top of the Employees page.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Enter the employee's Name, Employee Code, NIC, or EPF No based on the selected filter option.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Click the Search button to display matching results.</li>
        </ul>
        <img src="/assets/m89.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Section 3.2.2: Applying Filters */}
      <section className="mb-10">
        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-filter mr-2"></i>Applying Filters
        </h4>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-arrow-right mr-2"></i>Click on the Filter Dropdown next to the search bar.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Select a filter option:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><i className="fas fa-circle mr-2"></i>Employee Name: Search employees by name.</li>
              <li><i className="fas fa-circle mr-2"></i>Employee Code: Filter using unique employee identification codes.</li>
              <li><i className="fas fa-circle mr-2"></i>NIC: Search by National Identity Card number.</li>
              <li><i className="fas fa-circle mr-2"></i>EPF No: Filter employees based on their Employee Provident Fund number.</li>
            </ul>
          </li>
          <li><i className="fas fa-arrow-right mr-2"></i>The employee list will update based on the selected criteria.</li>
        </ul>
        <img src="/assets/m89.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Section 3.2.3: Managing Active Filters */}
      <section className="mb-10">
        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-filter mr-2"></i>Managing Active Filters
        </h4>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-arrow-right mr-2"></i>The employee list will update based on the selected filter criteria.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>To refine the search further, click on the Active Filters button, which appears when filters are applied.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>To remove filters, either click Clear Filters or manually deselect applied filters by selecting All in the dropdown menu.</li>
        </ul>
        <img src="/assets/m90.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Section 3.3: Adding a New Employee */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-user-plus mr-2"></i>Adding a New Employee
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Add New Employee feature allows HR teams to register a new staff member or labor worker in the system. Follow these steps to add a new employee:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-arrow-right mr-2"></i>Navigate to the Employees module from the left sidebar.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Click the <i className="fas fa-plus-circle"></i> Add New button at the top of the Employees page.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Select the type of employee you want to add:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><i className="fas fa-circle mr-2"></i>Add Staff/Management: For office-based employees and managerial roles.</li>
              <li><i className="fas fa-circle mr-2"></i>Add Labour: For field workers, contract employees, and labor personnel.</li>
            </ul>
          </li>
        </ul>
        <img src="/assets/m92.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Section 3.3.1: User Guide for New Labour Registration */}
      <section className="mb-10">
        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-user-cog mr-2"></i>User Guide for New Labour Registration
        </h4>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The New Labour Registration form is used to add new labor employees to the system, capturing important personal, contact, and employment details. This guide provides step-by-step instructions on how to complete the form.
        </p>
      </section>

      {/* Personal Information Section */}
      <section className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mt-4">
          <i className="fas fa-id-card mr-2"></i>Personal Information
        </h5>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-arrow-right mr-2"></i>Profile Picture: Upload a profile picture for the employee (optional). Only PNG, JPG, SVG, WEBP, and GIF formats are allowed.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>NIC (National Identity Card Number): Enter the employee's NIC number.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Name with Initials: Input the employee’s name with initials.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Full Name: Enter the full name of the employee.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>EPF Number: Provide the employee’s EPF number.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Date of Birth: Input the employee’s date of birth.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Employee Code: Assign a unique employee code for identification.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Candidate: Select the candidate type (e.g., new applicant).</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Department: Choose the department the employee will be assigned to.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Title: Select the employee's title (Mr./Ms., etc.).</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Last Name: Enter the last name of the employee.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>ETF Number: Provide the employee’s ETF number.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Passport Number: Enter the employee’s passport number (if applicable).</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Nationality: Select the employee’s nationality.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Religion: Select the employee's religion.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Blood Group: Select the employee’s blood group.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Marital Status: Choose the marital status of the employee.</li>
        </ul>
        <img src="/assets/m93.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Address Information Section */}
      <section className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mt-4">
          <i className="fas fa-home mr-2"></i>Address Information
        </h5>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-arrow-right mr-2"></i>Address Line 1: Enter the primary address (required).</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Address Line 2: Enter additional address details (optional).</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Address Line 3: Further address details (optional).</li>
        </ul>
        <img src="/assets/m94.png" alt="Employees List" className="w-full mt-4" />
      </section>

      {/* Contact Information Section */}
      <section className="mb-10">
        <h5 className="text-lg font-semibold text-gray-800 mt-4">
          <i className="fas fa-phone mr-2"></i>Contact Information
        </h5>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-arrow-right mr-2"></i>Fixed Phone: Enter the employee’s fixed landline phone number.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Mobile Phone: Enter the employee’s mobile phone number.</li>
          <li><i className="fas fa-arrow-right mr-2"></i>Email: Provide the employee’s email address.</li>
        </ul>
        <img src="/assets/m95.png" alt="Employees List" className="w-full mt-4" />
       
      </section>
      {/* Section 3.3.1.1.4: Bank Details */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-university mr-2"></i>Bank Details
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Fill out the employee’s banking details for salary processing.
  </p>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Bank:</strong> Select the employee’s bank from the list.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Bank Account Number:</strong> Enter the bank account number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Branch Name:</strong> Input the branch name of the employee's bank.</li>
  </ul>
  <img src="/assets/m96.png" alt="Bank Details" className="w-full mt-4" />
</section>
{/* Section 3.3.1.1.5: Other Employment Details */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-briefcase mr-2"></i>Other Employment Details
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    This section contains details related to the employee's role and employment conditions.
  </p>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Date Joined:</strong> Enter the employee's official joining date.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Employment Type:</strong> Select the employment type (Full-time, Part-time, Temporary).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Max OT Hours/Month:</strong> Enter the maximum overtime hours allowed per month.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Working Hours Per Day:</strong> Specify the number of working hours per day.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Designation:</strong> Select the employee’s job role/designation.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Pay Group:</strong> Select the pay group to categorize the employee (e.g., EPF Staff, Non-EPF Labour).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Shift:</strong> Select the shift type (e.g., Day, Night).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>OT (Overtime):</strong> Specify if overtime applies to the employee.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Reporting Employees:</strong> Choose the employees the new hire will report to (1st and 2nd).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Contract Agreement Number:</strong> Enter the contract agreement number (if applicable).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Agreement Expiry Date:</strong> Specify the contract’s expiry date (if applicable).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Status:</strong> Select the employment status (e.g., Active, Inactive).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Remark/Welfare:</strong> Input any additional remarks or welfare information for the employee.</li>
  </ul>
  <img src="/assets/m97.png" alt="Other Employment Details" className="w-full mt-4" />
</section>

{/* Section 3.3.1.1.6: How to Submit the Registration */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-paper-plane mr-2"></i>How to Submit the Registration
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Ensure all required fields are filled accurately. These fields are typically marked with a red asterisk (*).</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Review all entered information to ensure there are no errors.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Once the form is complete, click <strong>Save</strong> to register the new labour employee in the system.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>After saving, the employee will be added to the employee list and can be viewed or updated from the Employees section.</li>
  </ul>
</section>
{/* Section 3.3.2: User Guide for New Staff Registration Process */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800">
    <i className="fas fa-user-tie mr-2"></i>User Guide for New Staff Registration Process
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    This section of the user guide explains how to register new staff within the HRIS system, which is divided into several steps, from personal details to other employment-related data.
  </p>
</section>

{/* Section 3.3.2.1: Step-by-Step Process for Registering a New Staff Member */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-clipboard-list mr-2"></i>Step-by-Step Process for Registering a New Staff Member
  </h4>
</section>

{/* Section 3.3.2.1.1: Personal Details */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-id-card mr-2"></i>Personal Details
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Profile Picture:</strong> Click on the Choose File button to upload the staff member's profile picture (PNG, JPG, SVG, WEBP, and GIF file types are supported).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>NIC:</strong> Enter the National Identity Card number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Name with Initials:</strong> Enter the initials of the staff member.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Full Name:</strong> Input the complete name of the staff member.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>EPF Number:</strong> Enter the Employee Provident Fund (EPF) number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Date of Birth:</strong> Select the date of birth in MM/DD/YYYY format.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Employee Code:</strong> Enter a unique code for the staff member.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Department:</strong> Select the relevant department from the dropdown.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Title:</strong> Select the staff member's title (e.g., Mr., Mrs., Dr.).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Gender:</strong> Choose the gender of the staff member.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>First Name and Last Name:</strong> Enter the first and last names.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Other Names:</strong> If applicable, enter any other names the staff member is known by.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Temp Employee Number:</strong> If applicable, input the temporary employee number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>ETF Number:</strong> Enter the Employee Trust Fund (ETF) number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Passport Number:</strong> If available, input the staff member’s passport number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Nationality:</strong> Select the nationality from the list.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Religion:</strong> Select the religion of the employee.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Blood Group:</strong> Choose the blood group.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Marital Status:</strong> Select the marital status.</li>
  </ul>
  <img src="/assets/m93.png" alt="Employees List" className="w-full mt-4" />
</section>

{/* Section 3.3.2.1.2: Contact Information */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-phone mr-2"></i>Contact Information
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Fixed Phone:</strong> Enter the fixed phone number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Mobile Phone:</strong> Input the mobile phone number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Email:</strong> Enter the staff member’s email address.</li>
  </ul>
  <img src="/assets/m94.png" alt="Employees List" className="w-full mt-4" />
</section>

{/* Section 3.3.2.1.3: Address Information */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-home mr-2"></i>Address Information
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Address Line 1:</strong> Fill in the primary address.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Address Line 2:</strong> Fill in any secondary address information (if applicable).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Address Line 3:</strong> Fill in any additional address information (if applicable).</li>
  </ul>
  <img src="/assets/m95.png" alt="Employees List" className="w-full mt-4" />
</section>

{/* Section 3.3.2.1.4: Bank Details */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-credit-card mr-2"></i>Bank Details
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Bank:</strong> Select the bank where the employee holds an account.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Bank Account Number:</strong> Enter the bank account number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Branch Name:</strong> Enter the bank branch name.</li>
  </ul>
  <img src="/assets/m96.png" alt="Employees List" className="w-full mt-4" />
</section>

{/* Section 3.3.2.1.5: Other Employment Details */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-briefcase mr-2"></i>Other Employment Details
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Date Joined:</strong> Select the date the staff member joined the company.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Employment Type:</strong> Choose the type of employment (e.g., Full-time, Part-time, Contract).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Designation:</strong> Select the job title or designation.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Pay Group:</strong> Select the pay group under which the employee will be classified.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Role:</strong> Specify the role the staff member will hold.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Contract Agreement Number:</strong> If applicable, input the contract agreement number.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Shift:</strong> Choose the staff member’s shift.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>OT (Overtime):</strong> Select whether the employee has overtime and input the details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Reporting Employee 1 and 2:</strong> Select the employees the new staff member will report to.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Working Hours Per Day:</strong> Specify the number of working hours expected per day.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Max OT Hours/Month:</strong> Input the maximum overtime hours allowed per month.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Status:</strong> Set the employment status (e.g., Active, Probationary, Inactive).</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Agreement Expire Date:</strong> If applicable, set the expiration date for the staff member's agreement.</li>
    <li><i className="fas fa-arrow-right mr-2"></i><strong>Remark/Welfare:</strong> Any additional remarks or welfare details.</li>
  </ul>
  <img src="/assets/m97.png" alt="Employees List" className="w-full mt-4" />
</section>

{/* Section 3.3.2.1.6: Submit the New Staff Information */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-paper-plane mr-2"></i>Submit the New Staff Information
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Review all the entered details to ensure accuracy.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the <strong>Submit</strong> button to complete the registration of the new staff member.</li>
  </ul>
</section>

{/* Section 3.3.2.1.7: Important Notes */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-exclamation-circle mr-2"></i>Important Notes
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Fields marked with an asterisk (*) are mandatory and must be filled in before submitting the form.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Ensure that the Profile Picture and all other document uploads meet the specified file type requirements.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>If any information is incorrect or incomplete, the system may prompt you to correct it before submission.</li>
  </ul>
</section>

{/* Section 3.3.2.1.8: Conclusion */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-check-circle mr-2"></i>Conclusion
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Once the new staff registration is completed, the system will process the information, and the staff member's profile will be created. You will be able to view and edit the employee details from the Employee Management module as needed.
    This guide ensures that you can successfully register new staff members and manage their personal and employment details effectively within the HRIS system.
  </p>
</section>

    </div>
  );
};

export default EmployeeManagementPage;
