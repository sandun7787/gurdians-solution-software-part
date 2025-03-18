import React from 'react';

const EventCalendarModuleGuide = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto px-6 py-12">
      {/* Main Heading */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        <i className="fas fa-calendar-alt mr-2"></i> Event Calendar Module User Guide
      </h1>

      {/* Section 6.1: Overview of the Event Calendar Module */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-info-circle mr-2"></i> Overview of the Event Calendar Module
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Event Calendar Module in the HRIS system enables administrators to manage events, including working days, holidays, and overtime (OT) schedules. This guide provides step-by-step instructions on how to navigate the calendar, add and edit events, manage OT, and apply events to specific projects. The module also includes a comprehensive UI to help users efficiently track and manage events.
        </p>
      </section>

      {/* Section 6.1.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-desktop mr-2"></i> User Interface Overview
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Event Calendar page is where users interact with the calendar to manage and track events. Below is an overview of the key UI components.
        </p>
        <img src="/assets/m117.png" alt="User Interface Overview" className="w-full mt-4" />
        <img src="/assets/m118.png" alt="User Interface Overview" className="w-full mt-4" />
        <img src="/assets/m119.png" alt="User Interface Overview" className="w-full mt-4" />
       
      </section>

      {/* Section 6.1.1.1: Key Components of the Event Calendar UI */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-puzzle-piece mr-2"></i>Key Components of the Event Calendar UI
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong>
            <ul className="list-inside pl-4">
              <li>Located on the left side of the screen, the Navigation Sidebar provides access to various sections of the HRIS system, including the Event Calendar.</li>
              <li><strong>Event Calendar:</strong> This is the main option where you manage events.</li>
            </ul>
          </li>
          <li><strong>Calendar View:</strong>
            <ul className="list-inside pl-4">
              <li>The main calendar view displays the current month, with days of the week listed at the top (Sunday to Saturday).</li>
              <li>You can easily navigate through months by using the left and right arrows located at the top of the calendar. The current date is highlighted, and clicking any date will open the event management form.</li>
            </ul>
          </li>
          <li><strong>Selected Date and Event Management Form:</strong>
            <ul className="list-inside pl-4">
              <li>When a date is clicked, the Event Management Form opens on the right side of the page.</li>
              <li>This form allows you to:
                <ul className="list-inside pl-4">
                  <li>Add new events (e.g., Working Day, Holiday).</li>
                  <li>Assign overtime rates (OT) and specify whether the day is a holiday.</li>
                  <li>Modify event details, including changing OT rates or holiday status for specific employee groups.</li>
                </ul>
              </li>
              <li>Action Buttons available in this form:
                <ul className="list-inside pl-4">
                  <li><strong>+ Add New:</strong> Opens the event creation form.</li>
                  <li><strong>Update:</strong> Modifies an existing event.</li>
                  <li><strong>Apply:</strong> Saves any changes made to the event.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Section 6.2: Navigating and Using the Event Calendar */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">
          <i className="fas fa-calendar-check mr-2"></i>Navigating and Using the Event Calendar
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          This section covers the steps for using the Event Calendar, including adding, editing, and deleting events, as well as managing overtime and applying events to projects.
        </p>
      </section>

      {/* Section 6.2.1: Adding a New Event */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-plus-circle mr-2"></i>Adding a New Event
        </h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>To add a new event for a specific date, follow these steps:</li>
          <img src="/assets/m118.png" alt="User Interface Overview" className="w-full mt-4" />
        <img src="/assets/m119.png" alt="User Interface Overview" className="w-full mt-4" />
          <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
            <li><strong>Select a Date:</strong> Click on any date in the calendar (e.g., March 2, 2025) to select the day for which you want to add an event.</li>
            <li><strong>Choose Event Type:</strong> In the dropdown menu, select the type of event (e.g., "Working Day").</li>
            <li><strong>Fill in Event Details:</strong> 
              <ul className="list-inside pl-4">
                <li><strong>Group:</strong> Choose the employee group(s) the event applies to (e.g., EPF Staff, Non-EPF Labour, Management).</li>
                <li><strong>Overtime (OT):</strong> Enter the overtime rate for each group (e.g., 1.50).</li>
                <li><strong>Holiday:</strong> Choose whether the day is a holiday for the selected group (Yes/No).</li>
              </ul>
            </li>
            <li><strong>Click Apply:</strong> After filling out the event details, click the Apply button to save the event.</li>
            <li><strong>Confirmation:</strong> The event will now appear in the calendar for the selected date.</li>
          </ul>
        </ul>
      </section>

      {/* Section 6.3: Editing an Existing Event */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-edit mr-2"></i>Editing an Existing Event
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To update or modify an existing event (e.g., change OT rates or holiday status), follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Select the Date:</strong> Navigate to the Event Calendar and select the date you wish to edit (e.g., March 4, 2025).</li>
          <li><strong>Click the Update Button:</strong> Click the Update button next to the event details. The event management form will open.</li>
          <li><strong>Modify Event Details:</strong> 
            <ul className="list-inside pl-4">
              <li>Change the Group assignments.</li>
              <li>Adjust the OT rate if necessary.</li>
              <li>Update the Holiday status (Yes/No).</li>
            </ul>
          </li>
          <li><strong>Click Apply:</strong> Once the changes are made, click the Apply button to save the updated event.</li>
          <li><strong>Confirmation:</strong> The updated event will now reflect in the calendar.</li>
        </ul>
      </section>

      {/* Section 6.3.1: Editing Overtime (OT) for Employee Groups */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-clock mr-2"></i> Editing Overtime (OT) for Employee Groups
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The system allows you to adjust overtime (OT) rates for different employee groups. To modify OT rates, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Select the Date:</strong> Choose the date you want to edit OT rates for.</li>
          <li><strong>Edit OT Rates:</strong> Adjust the OT rates for relevant employee groups (e.g., EPF Staff, Non-EPF Labour, Management).</li>
          <li><strong>Click Apply:</strong> After modifying the OT rates, click Apply to save the changes.</li>
          <li><strong>Confirmation:</strong> The updated OT rates will be applied for the selected date.</li>
        </ul>
      </section>

      {/* Section 6.4: Applying Events to Projects */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-project-diagram mr-2"></i> Applying Events to Projects
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          You can apply the event to specific projects, ensuring that the event is reflected across only the relevant projects.
        </p>
        <img src="/assets/m121.png" alt="User Interface Overview" className="w-full mt-4" />
        <h4 className="text-xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-check-square mr-2"></i>  Steps to Apply Events to Projects:
        </h4>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Select Projects:</strong> From the Select Projects dropdown, choose the project(s) to which the event should apply. If no project is selected, the event applies to all projects by default.</li>
          <li><strong>Click Apply:</strong> After selecting the projects, click Apply to save the event for the selected projects.</li>
        </ul>
      </section>

      {/* Section 6.5: Summary of Key Features */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-th-list mr-2"></i> Summary of Key Features
        </h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Event Calendar:</strong> Easily navigate the calendar to view and manage events for any selected day.</li>
          <li><strong>Add New Event:</strong> Create new events by selecting a date and entering event details (e.g., Working Day, Holiday).</li>
          <li><strong>Update Events:</strong> Modify existing events by updating OT rates, holiday status, and employee group assignments.</li>
          <li><strong>Overtime Management:</strong> Edit overtime (OT) rates for specific employee groups.</li>
          <li><strong>Project-Specific Events:</strong> Apply events to selected projects or all projects to ensure accurate scheduling across the organization.</li>
        </ul>
      </section>

      {/* Section 6.6: Conclusion */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">
          <i className="fas fa-clipboard-check mr-2"></i>  Conclusion
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Event Calendar Module is a comprehensive tool for managing and tracking events like working days, holidays, and overtime. By following the steps in this guide, you can effectively navigate the calendar, add and update events, adjust overtime rates, and apply events to specific projects.
          This module helps streamline the management of employee schedules and ensures accurate payroll processing.
        </p>
      </section>
    </div>
  );
};

export default EventCalendarModuleGuide;
