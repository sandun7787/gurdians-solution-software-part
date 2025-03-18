import React from 'react';

const AddDeductModuleGuide = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto px-6 py-12">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        <i className="fas fa-cogs mr-2"></i> Add/Deduct Module - User Guide
      </h1>

      {/* Section 5.1: Introduction */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-info-circle mr-2"></i> Introduction
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Add/Deduct Module in the HRIS system enables HR teams to manage employee financial adjustments, such as additional allowances and deductions. This module ensures accurate payroll processing by allowing users to create, modify, and track these transactions efficiently.
        </p>
      </section>

      {/* Section 5.2: User Interface Overview */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-desktop mr-2"></i> User Interface Overview
          <img src="/assets/m112.png" alt="Recruiting Module Overview" className="w-full mt-4" />
        </h2>

        {/* Subsection 5.2.1: Add/Deduct List */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-list mr-2"></i> Add/Deduct List
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Displays all addition and deduction entries with key details:
            <ul className="list-inside pl-4">
              <li><strong>Date:</strong> The date of the transaction.</li>
              <li><strong>Addition/Deduction Description:</strong> The type of adjustment.</li>
              <li><strong>Name with Initials:</strong> Employee’s name.</li>
              <li><strong>Amount:</strong> The value of the addition/deduction.</li>
              <li><strong>Remark:</strong> Any additional comments about the transaction.</li>
              <li><strong>Arrow Button ({" > "}):</strong> Navigates to the Update Page for modifications.</li>
            </ul>
          </li>
          <li><strong>Search and Filter Options:</strong>
            <ul className="list-inside pl-4">
              <li><strong>Filter by Date:</strong> Allows users to select a specific date to view related transactions.</li>
              <li><strong>Search by Employee:</strong> Enables searching by entering at least three letters of an employee’s name.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Section 5.2.2: Adding a New Record */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-plus-circle mr-2"></i> Adding a New Record
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Click the Create New button to open the Add New Entry form.</li>
          <li>Enter the required details, including Employee Name, Addition/Deduction Type, Date, Amount, and Remarks.</li>
          <li>Click Create to save the record.</li>
        </ul>
      </section>

      {/* Section 5.2.3: Updating an Existing Entry */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-edit mr-2"></i> Updating an Existing Entry
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Click the Arrow Button ({" > "}) next to a record to open the Update Page.</li>
          <li>Modify the required fields and click Update to save changes.</li>
        </ul>
      </section>

      {/* Section 5.2.4: Searching & Filtering */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-search mr-2"></i> Searching & Filtering
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Filter by Date:</strong> Select a date to view relevant records.</li>
          <li><strong>Search by Employee:</strong> Enter at least three letters to find an employee’s transactions.</li>
        </ul>
      </section>

      {/* Section 5.3: Managing Additions and Deductions */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-cogs mr-2"></i> Managing Additions and Deductions
        </h2>

        {/* Subsection 5.3.1: Viewing and Navigating the Add/Deduct List */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-eye mr-2"></i>  Viewing and Navigating the Add/Deduct List
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Open the Add/Deduct Module from the sidebar.</li>
          <li>The list displays all records with filtering and search options.</li>
          <li>Click the Arrow Button ({" > "}) to update an existing record.</li>
          <li>Click Create New to add a new entry.</li>
        </ul>

        {/* Subsection 5.3.2: Creating a New Addition/Deduction Entry */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-plus-circle mr-2"></i> Creating a New Addition/Deduction Entry
          <img src="/assets/m113.png" alt="Recruiting Module Overview" className="w-full mt-4" />
          <img src="/assets/m114.png" alt="Recruiting Module Overview" className="w-full mt-4" />
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Click on Create New.</li>
          <li>Fill in the required fields:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employee:</strong> Select an employee from the dropdown list.</li>
              <li><strong>Addition/Deduction Type:</strong> Choose the appropriate category.</li>
              <li><strong>Date:</strong> Enter the transaction date.</li>
              <li><strong>Amount:</strong> Input the adjustment value.</li>
              <li><strong>Remark:</strong> Add any additional notes.</li>
            </ul>
          </li>
          <li>Click Create to save the entry.</li>
        </ul>

        {/* Subsection 5.3.3: Updating an Existing Entry */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-edit mr-2"></i> Updating an Existing Entry
          <img src="/assets/m115.png" alt="Recruiting Module Overview" className="w-full mt-4" />
          <img src="/assets/m116.png" alt="Recruiting Module Overview" className="w-full mt-4" />
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Locate the record in the Add/Deduct List.</li>
          <li>Click the Arrow Button ({" > "}) to open the update page.</li>
          <li>Modify the necessary fields:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employee:</strong> Select or change the employee if needed.</li>
              <li><strong>Addition/Deduction Type:</strong> Modify the adjustment type.</li>
              <li><strong>Date:</strong> Update the transaction date.</li>
              <li><strong>Amount:</strong> Change the adjustment amount.</li>
              <li><strong>Remark:</strong> Edit or add any additional comments.</li>
            </ul>
          </li>
          <li>Click Update to save changes.</li>
        </ul>
      </section>

      {/* Section 5.4: Searching and Filtering Records */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-search mr-2"></i> Searching and Filtering Records
          <img src="/assets/m113.png" alt="Recruiting Module Overview" className="w-full mt-4" />
        </h2>

        {/* Subsection 5.4.1: Using the Search Bar */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-search mr-2"></i> Using the Search Bar
          <img src="/assets/m113.png" alt="Recruiting Module Overview" className="w-full mt-4" />
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Locate the Search Bar at the top of the Add/Deduct page.</li>
          <li>Enter an employee's name.</li>
          <li>Matching results will be displayed automatically.</li>
        </ul>

        {/* Subsection 5.4.2: Applying Filters */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-filter mr-2"></i> Applying Filters
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Click on the Filter by Date field.</li>
          <li>Select the desired date.</li>
          <li>The system updates records accordingly.</li>
        </ul>
      </section>

      {/* Section 5.5: Summary */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-check-circle mr-2"></i> Summary
        </h2>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li>The Add/Deduct Module facilitates the management of financial adjustments for employees.</li>
          <li>Users can view, search, filter, add, and update records efficiently.</li>
          <li>The system ensures transparency and accuracy in payroll adjustments.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          This guide provides a comprehensive walkthrough of the Add/Deduct Module functionalities in the HRIS system.
        </p>
      </section>
    </div>
  );
};

export default AddDeductModuleGuide;
