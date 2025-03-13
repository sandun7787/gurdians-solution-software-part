<link
   rel="stylesheet"
   href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
   integrity="sha384-LN6zU6hF5Yk5cmqGzmmrzGrbsFTYqZB09U8DhX9TwAzAFhF9H1CZ2kU3Kz2vL/3G"
   crossorigin="anonymous"
/>

const MasterDetailsModule = () => {
    return (
      <div className="flex flex-col min-h-screen container mx-auto px-6 py-12">
  
        {/* Main Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          User Guide for Master Details Module
        </h1>
  
        {/* Section 2: Overview */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">2. User Guide for Master Details Module</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            The Master Details module in Cirrus HRIS is a key component for managing essential HR data categories, such as Nationality, Religion, Designation, Holiday Type, and more. This module helps HR professionals easily manage and update these categories for efficient employee data management.
          </p>
        </section>
  
        {/* Section 2: Overview */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">2. User Guide for Master Details Module</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            The Master Details module in Cirrus HRIS is a key component for managing essential HR data categories, such as Nationality, Religion, Designation, Holiday Type, and more. This module helps HR professionals easily manage and update these categories for efficient employee data management.
          </p>
        </section>
  
         {/* Section 2.1: Navigating to Master Details */}
      <section className="mb-10 flex flex-row items-center">
        <div className="w-1/2">
        <img
            src="/assets/m10.png"
            alt="Login Page"
            className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-semibold text-gray-800">2.1 Navigating to Master Details</h2>
          <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
            <li>Step 1: Log in to your Cirrus HRIS dashboard.</li>
            <li>Step 2: From the left-hand sidebar, locate and click on Master Details. This will open the Master Details page.</li>
            <li>Step 3: In the Master Details module, you will find a list of subcategories, including Nationality, Religion, Designation, Holiday Type, Employment Category, and more.</li>
          </ul>
        </div>
      </section>
  
      {/* Section 2.1.1: Available Categories in Master Details */}
      <section className="mb-10 flex flex-row items-center">
        <div className="w-1/2">
        <img
            src="/assets/m11.png"
            alt="Login Page"
            className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg"
          />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-semibold text-gray-800">2.1.1 Available Categories in Master Details</h2>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li>Nationality</li>
            <li>Religion</li>
            <li>Designation</li>
            <li>Holiday Type</li>
            <li>Employment Category</li>
            <li>Employment Type</li>
            <li>Shift</li>
            <li>Pay Group</li>
            <li>Bank Type</li>
            <li>Bonus Rate</li>
            <li>Add/Deduct Type</li>
            <li>Remaining Leave Type</li>
            <li>Minimum Experience</li>
            <li>Assessment Form</li>
          </ul>
        </div>
      </section>
  
         {/* Section 2.1.1: Managing Nationality in the Master Details Module */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.1 Managing Nationality in the Master Details Module</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Nationality Management Module in the HRIS system allows users to efficiently manage and track various nationalities within the organization. This guide will explain the user interface (UI) and how to use the features for adding, updating, and deleting nationalities.
        </p>
  
        {/* Section 2.1.1.1.1: User Interface Overview */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.1.1 User Interface Overview</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            The Nationality page is located under the Master Details section in the HRIS system. This module is essential for recording the nationality of employees. The interface consists of several key components, which are explained below:
          </p>
          <img src="/assets/m12.png" alt="Nationality Page" className="w-full mt-4" />
        </section>
  
        {/* Section 2.1.1.1.1.1: Components of the Nationality Interface */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.1.1.1 Components of the Nationality Interface</h3>
          <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
            <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, the sidebar helps you navigate between different modules of the HRIS system.</li>
            <li><strong>Nationality Table:</strong> The main area of the screen displays a list of existing nationalities. It is organized in a table format with the following columns:
              <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
                <li><strong>Nationality ID:</strong> A unique ID assigned to each nationality.</li>
                <li><strong>Nationality:</strong> The name of the nationality (e.g., Sri Lankan, Indian, American).</li>
                <li><strong>Actions:</strong> Contains buttons to update or delete a nationality.</li>
              </ul>
            </li>
            <li><strong>Action Buttons:</strong>
              <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
                <li><strong>Add New:</strong> This button allows you to create a new nationality.</li>
                <li><strong>Update:</strong> Each nationality in the list has an Update button, which allows you to modify its details.</li>
                <li><strong>Delete:</strong> Each nationality in the list has a Delete button to remove it from the system.</li>
              </ul>
            </li>
            <li><strong>Top Buttons:</strong>
              <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
                <li><strong>+ Add New:</strong> Located at the top-right corner, this button opens the form to create a new nationality.</li>
                <li><strong>Update:</strong> Allows users to edit an existing nationality.</li>
                <li><strong>Delete:</strong> Clicking Delete will remove the selected nationality.</li>
              </ul>
            </li>
          </ul>
          
        </section>
  
        {/* Section 2.1.1.1.2: Adding a New Nationality */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.1.2 Adding a New Nationality</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            To add a new nationality, follow these simple steps:
          </p>
          <img src="/assets/m13.png" alt="Adding Nationality" className="w-full mt-4" />
          <img src="/assets/m14.png" alt="Adding Nationality" className="w-full mt-4" />
          <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
            <li>Navigate to the Nationality page under the Master Details section from the sidebar.</li>
            <li>Click the + Add New button located at the top-right of the screen.</li>
            <li>Fill in the form with the nationality name (e.g., Sri Lankan, American, Canadian).</li>
            <li>Click the Create button to save the new nationality.</li>
          </ul>
          
        </section>
  
        {/* Section 2.1.1.1.3: Updating an Existing Nationality */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.1.3 Updating an Existing Nationality</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            To modify an existing nationality, follow these steps:
          </p>
          <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
            <li>Navigate to the Nationality page under Master Details.</li>
            <li>Find the nationality you wish to update (e.g., Sri Lankan).</li>
            <li>Click the Update button next to the nationality you want to modify.</li>
            <li>The Nationality Update form will open with the current details.</li>
            <li>Make necessary changes to the nationality name as needed.</li>
            <li>Click the Update button to save the changes.</li>
          </ul>
          <img src="/assets/m15.png" alt="Updating Nationality" className="w-full mt-4" />
        </section>
  
        {/* Section 2.1.1.1.4: Deleting a Nationality */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.1.4 Deleting a Nationality</h3>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            To delete a nationality, follow these steps:
          </p>
          <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
            <li>Navigate to the Nationality page under Master Details.</li>
            <li>Find the nationality you wish to delete.</li>
            <li>Click the Delete button next to the nationality.</li>
            <li>A confirmation pop-up will appear asking you to confirm the deletion.</li>
            <li>Click Yes to permanently delete the nationality, or No to cancel the deletion.</li>
          </ul>
          <img src="/assets/m15.png" alt="Deleting Nationality" className="w-full mt-4" />
        </section>
  
        {/* Section 2.1.1.1.5: Summary */}
        <section className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.1.5 Summary</h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><strong>Nationality Table:</strong> Displays existing nationalities along with action buttons (Update/Delete).</li>
            <li><strong>Add New:</strong> To create a new nationality, click the + Add New button, fill out the form, and click Create.</li>
            <li><strong>Update:</strong> Modify an existing nationality by clicking the Update button, making changes, and saving.</li>
            <li><strong>Delete:</strong> Remove a nationality by clicking the Delete button and confirming the deletion.</li>
          </ul>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            By following these steps, HR teams can effectively manage nationalities in the system, ensuring accurate records for all employees.
          </p>
        </section>
      </section>
      {/* Section 2.1.1.2: Religion Management Module */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.2 Religion Management Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Religion Management Module in the HRIS system allows users to efficiently manage employee religious categories. This guide provides a comprehensive explanation of the user interface (UI) and provides step-by-step instructions on how to add, update, and delete religions within the system.
        </p>
        <img src="/assets/m16.png" alt="Religion" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.2.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.2.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Religion Management page is located under the Master Details section in the HRIS system. It allows users to manage different religions such as Buddhist, Christian, Hindu, Muslim, and others. The interface consists of several key components, which are explained below:
        </p>
        <img src="/assets/m16.png" alt="Religion Management" className="w-full mt-4" />
        <img src="/assets/m18.png" alt="Religion Management" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.2.1.1: Components of the Religion Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.2.1.1 Components of the Religion Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, the sidebar provides easy access to various modules within the HRIS system.</li>
          <li><strong>Religion Table:</strong> The main area of the screen displays a list of existing religions. The table consists of the following columns:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Religion ID:</strong> A unique identifier assigned to each religion in the system.</li>
              <li><strong>Religion:</strong> The name of the religion (e.g., Buddhist, Hindu, Muslim).</li>
            </ul>
          </li>
          <li><strong>Actions:</strong> Action buttons are located next to each religion, these allow you to manage the details of a religion:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Update:</strong> Modify the details of the religion.</li>
              <li><strong>Delete:</strong> Permanently remove the religion from the system.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>+ Add New:</strong> Located at the top-right corner, this button opens the form to add a new religion.</li>
              <li><strong>Update:</strong> Use this button to modify existing religion details.</li>
              <li><strong>Delete:</strong> Clicking Delete will permanently remove a selected religion from the system.</li>
            </ul>
          </li>
        </ul>
        
      </section>
  
      {/* Section 2.1.1.2.2: Adding a New Religion */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.2.2 Adding a New Religion</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new religion, follow these simple steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Religion Management page under the Master Details section from the sidebar.</li>
          <li>Click the + Add New button at the top-right of the screen.</li>
          <li>The Religion Registration Form will open.
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Religion Name:</strong> Enter the name of the religion (e.g., Christianity, Buddhism, Islam, etc.).</li>
            </ul>
          </li>
          <li>Click the Create button to save the new religion. Once created, the new religion will be displayed in the religion list.</li>
        </ul>
        <img src="/assets/m17.png" alt="Adding a New Religion" className="w-full mt-4" />
        <img src="/assets/m19.png" alt="Religion Interface" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.2.3: Updating an Existing Religion */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.2.3 Updating an Existing Religion</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To modify an existing religion, such as updating the name or correcting any errors, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Religion page under Master Details.</li>
          <li>Locate the religion you want to update in the table.</li>
          <li>Click the Update button next to the religion name.</li>
          <li>The Religion Update Form will open, showing the current details of the religion.</li>
          <li>Make the necessary changes to the religion name if required.</li>
          <li>Click the Update button to save the changes. The updated religion details will now appear in the religion list.</li>
        </ul>
        <img src="/assets/m20.png" alt="Updating Religion" className="w-full mt-4" />
        <img src="/assets/m21.png" alt="Updating Religion" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.2.4: Deleting a Religion */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.2.4 Deleting a Religion</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To remove a religion from the system, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Religion Management page under Master Details.</li>
          <li>Locate the religion you want to delete in the table.</li>
          <li>Click the Delete button next to the religion.</li>
          <li>A confirmation pop-up will appear asking if you're sure you want to delete the religion.</li>
          <li>Click Yes to confirm the deletion or No to cancel the action.</li>
          <li>Once deleted, the religion will no longer be listed in the table and will be permanently removed from the system.</li>
        </ul>
        <img src="/assets/m20.png" alt="Deleting Religion" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.2.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.2.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Religion Table:</strong> Displays existing religions with options to update or delete.</li>
          <li><strong>Add New Religion:</strong> Click the + Add New button, input the religion name, and click Create.</li>
          <li><strong>Update Religion:</strong> Modify religion details by clicking Update, making changes, and saving.</li>
          <li><strong>Delete Religion:</strong> Remove a religion from the system by clicking Delete and confirming the action.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Religion Management Module allows HR administrators to maintain and manage religious data within the HRIS system. By following these steps, you can easily add, update, or delete religions in the system.
        </p>
      </section>
{/* Section 2.1.1.3: Designation Management Module */}
<section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.3 Designation Management Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Designation module in the HRIS system allows users to manage and maintain employee designations effectively. This guide provides detailed instructions on how to add, update, and delete designations.
        </p>
      </section>
  
      {/* Section 2.1.1.3.1: Designation Management Module Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.3.1 Designation Management Module Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Designation page is located under the Master Details section in the HRIS system. Users can manage various designations, including Skilled Labor, Secretary, Plant Operator, Engineer, and more. The interface allows HR personnel to edit, update, and delete designation details efficiently.
        </p>
        <img src="/assets/m22.png" alt="Designation Management Module" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.3.1.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.3.1.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Designation page displays existing designations and provides options to add new designations. Below is an overview of the interface:
        </p>
        <img src="/assets/m22.png" alt="Designation Interface" className="w-full mt-4" />
        <img src="/assets/m23.png" alt="Designation Interface" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.3.1.1.1: Components of the Designation Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.3.1.1.1 Components of the Designation Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, it allows navigation between various modules of the HRIS system. To manage designations, go to: Master Details → Designation.</li>
          <li><strong>Designation Table:</strong> This is the main area that displays a list of existing designations. The table includes the following columns:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Designation ID:</strong> A unique identifier for each designation.</li>
              <li><strong>Designation:</strong> The name of the designation (e.g., Skilled Labor, Secretary).</li>
              <li><strong>Type:</strong> The type of work (e.g., Direct Production).</li>
              <li><strong>Salary Type:</strong> The type of salary (e.g., Monthly).</li>
              <li><strong>Starting Salary:</strong> The starting salary for the designation.</li>
            </ul>
          </li>
          <li><strong>Actions:</strong> Action buttons are located next to each designation, these allow you to manage the details of a designation:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Add New:</strong> To add a new designation.</li>
              <li><strong>Update:</strong> Modify the details of an existing designation.</li>
              <li><strong>Delete:</strong> Remove a designation from the list.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>+ Add New:</strong> Located at the top-right of the screen, this button opens a form to add a new designation.</li>
              <li><strong>Update:</strong> This button allows users to edit the designation's details.</li>
              <li><strong>Delete:</strong> This option removes the selected designation.</li>
            </ul>
          </li>
        </ul>
       
      </section>
  
      {/* Section 2.1.1.3.2: Adding a New Designation */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.3.2 Adding a New Designation</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new designation, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Designation page under Master Details from the sidebar.</li>
          <li>Click the + Add New button at the top-right corner of the screen.</li>
          <li>Fill in the form:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Designation:</strong> Enter the name of the designation (e.g., Skilled Labor, Secretary).</li>
              <li><strong>Short Name:</strong> Provide a short name for the designation.</li>
              <li><strong>Type:</strong> Select the type (e.g., Direct Production).</li>
              <li><strong>Salary Type:</strong> Select the salary type (e.g., Monthly).</li>
              <li><strong>Starting Salary:</strong> Enter the starting salary amount.</li>
            </ul>
          </li>
          <li>Click the Create button to save the new designation. The newly created designation will now appear in the designation list.</li>
        </ul>
        <img src="/assets/m24.png" alt="Adding a New Designation" className="w-full mt-4" />
        <img src="/assets/m25.png" alt="Adding a New Designation" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.3.3: Updating an Existing Designation */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.3.3 Updating an Existing Designation</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To update an existing designation, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Designation page under Master Details.</li>
          <li>Locate the designation you want to update.</li>
          <li>Click the Update button next to the designation. The Designation Update form will open, displaying the current details.</li>
          <li>Make the necessary changes:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Designation:</strong> Change the designation name if needed.</li>
              <li><strong>Short Name:</strong> Edit the short name if necessary.</li>
              <li><strong>Type:</strong> Change the work type if required (e.g., Direct Production, Indirect Production).</li>
              <li><strong>Salary Type:</strong> Select a different salary type if needed.</li>
              <li><strong>Starting Salary:</strong> Update the starting salary for the designation.</li>
            </ul>
          </li>
          <li>Click the Update button to save the changes. The updated designation details will now appear in the designation list.</li>
        </ul>
        <img src="/assets/m26.png" alt="Updating Designation" className="w-full mt-4" />
        <img src="/assets/m27.png" alt="Updating Designation" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.3.4: Deleting a Designation */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.3.4 Deleting a Designation</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To remove a designation from the system, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Designation page under Master Details.</li>
          <li>Locate the designation you want to delete.</li>
          <li>Click the Delete button next to the designation. A confirmation pop-up will appear.</li>
          <li>Click Yes to confirm the deletion, or No to cancel. Once deleted, the designation will no longer appear in the list.</li>
        </ul>
        <img src="/assets/m26.png" alt="Deleting Designation" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.3.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.3.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Designation Table:</strong> Displays existing designations and their related salary and type details.</li>
          <li><strong>Add New:</strong> Click + Add New, fill in the form with designation name, short name, type, salary type, and starting salary, and click Create.</li>
          <li><strong>Update:</strong> Modify an existing designation by clicking Update, making necessary changes, and clicking Update to save.</li>
          <li><strong>Delete:</strong> Remove any designation by clicking Delete and confirming the action.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          By following these steps, HR teams can effectively manage employee designations in the system, ensuring accurate classification and compensation details for all employees.
        </p>
      </section>
      
     <br></br>
     
  {/* Section 2.1.1.4: Holiday Type Management Module */}
  <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.4 Holiday Type Management Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Holiday Type module in the HRIS system allows users to efficiently manage and track various types of holidays in the organization. This guide will explain the user interface (UI) and how to use the features for adding, updating, and deleting holiday types.
        </p>
      </section>
  
      {/* Section 2.1.1.4.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.4.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Holiday Type page is located under the Master Details section in the HRIS system. Here, users can manage different holiday types such as Working Day, Christmas, National Day, and more. The interface consists of several key components, which are explained below:
        </p>
        <img src="/assets/m28.png" alt="Holiday Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.4.1.1: Components of the Holiday Type Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.4.1.1 Components of the Holiday Type Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, the sidebar helps you navigate between different modules of the HRIS system. To manage holiday types, go to: Master Details → Holiday Type.</li>
          <li><strong>Holiday Type Table:</strong> The main area of the screen displays a list of existing holiday types. The table consists of the following columns:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Holiday Type ID:</strong> A unique ID for each holiday type.</li>
              <li><strong>Type:</strong> The name of the holiday (e.g., Christmas, National Day, Working Day).</li>
              <li><strong>OT Value:</strong> The overtime value associated with the holiday type (e.g., 0 for normal working day, 1 or 2 for holidays with overtime).</li>
              <li><strong>Actions:</strong> Contains buttons to update or delete a holiday type.</li>
            </ul>
          </li>
          <li><strong>Action Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Add New:</strong> This button allows you to create a new holiday type.</li>
              <li><strong>Update:</strong> Each holiday type in the list has an Update button, which allows you to modify its details.</li>
              <li><strong>Delete:</strong> Each holiday type in the list has a Delete button to remove it from the system.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>+ Add New:</strong> Located at the top-right corner, this button opens the form to create a new holiday type.</li>
              <li><strong>Update:</strong> For each existing holiday type, the Update button allows users to edit the details.</li>
              <li><strong>Delete:</strong> Clicking Delete will remove the selected holiday type.</li>
            </ul>
          </li>
        </ul>
        <img src="/assets/m28.png" alt="Holiday Type Actions" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.4.2: Adding a New Holiday Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.4.2 Adding a New Holiday Type</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new holiday type, follow these simple steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Holiday Type page under the Master Details section from the sidebar.</li>
          <li>Click the + Add New button located at the top-right of the screen.</li>
          <li>Fill in the form:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Type:</strong> Enter the name of the holiday (e.g., Christmas, National Day, Working Day).</li>
              <li><strong>Overtime (OT) Value:</strong> Specify the OT value. For example:
                <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
                  <li>0: Normal workday.</li>
                  <li>1: Single overtime pay.</li>
                  <li>2: Double overtime pay (commonly used for holidays).</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Click the Create button to save the new holiday type. The new holiday type will now appear in the holiday type list.</li>
        </ul>
        <img src="/assets/m29.png" alt="Adding Holiday Type" className="w-full mt-4" />
        <img src="/assets/m30.png" alt="Adding Holiday Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.4.3: Updating an Existing Holiday Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.4.3 Updating an Existing Holiday Type</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To modify an existing holiday type, such as changing the name or OT value, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Holiday Type page under Master Details.</li>
          <li>Find the holiday type you wish to update (e.g., Christmas).</li>
          <li>Click the Update button next to the holiday type you want to modify.</li>
          <li>The Holiday Type Update form will open with the current details.</li>
          <li>Make necessary changes:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Type:</strong> Update the name of the holiday type (e.g., change Christmas to New Year).</li>
              <li><strong>OT Value:</strong> Update the OT value if necessary (e.g., change from 2 to 1).</li>
            </ul>
          </li>
          <li>Click the Update button to save the changes. The holiday type will be updated with the new details in the list.</li>
        </ul>
        <img src="/assets/m31.png" alt="Updating Holiday Type" className="w-full mt-4" />
        <img src="/assets/m32.png" alt="Updating Holiday Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.4.4: Deleting a Holiday Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.4.4 Deleting a Holiday Type</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To delete a holiday type, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Holiday Type page under Master Details.</li>
          <li>Find the holiday type you wish to delete (e.g., Wesak Poya).</li>
          <li>Click the Delete button next to the holiday type.</li>
          <li>A confirmation pop-up will appear asking you to confirm the deletion.</li>
          <li>Click Yes to permanently delete the holiday type, or No to cancel the deletion. Once deleted, the holiday type will no longer appear in the list.</li>
        </ul>
        <img src="/assets/m31.png" alt="Deleting Holiday Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.4.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.4.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Holiday Type Table:</strong> Displays existing holiday types, OT values, and action buttons (Update/Delete).</li>
          <li><strong>Add New:</strong> To create a new holiday type, click the + Add New button, fill out the form, and click Create.</li>
          <li><strong>Update:</strong> Modify any existing holiday type by clicking the Update button, making changes, and saving.</li>
          <li><strong>Delete:</strong> Remove any holiday type by clicking the Delete button and confirming the deletion.</li>
        </ul>
       
      </section>
  <br/>
    {/* Section 2.1.1.5: Employment Category Management Module */}
    <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.5 Employment Category Management Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Employment Category module in the HRIS system allows users to manage and categorize employees based on their roles and classifications. This guide will explain the user interface (UI) and how to use the features for adding, updating, and deleting employment categories.
        </p>
      </section>
  
      {/* Section 2.1.1.5.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.5.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Employment Category page is located under the Master Details section in the HRIS system. In this section, users can manage different employee categories like Management, Staff, and Labour. The interface consists of several key components, which are explained below:
        </p>
        <img src="/assets/m33.png" alt="Employment Category" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.5.1.1: Components of the Employment Category Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.5.1.1 Components of the Employment Category Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, the sidebar helps you navigate between different modules of the HRIS system. To manage employee categories, go to: Master Details → Employment Category.</li>
          <li><strong>Employment Category Table:</strong> The main area of the screen displays a list of existing employment categories. The table consists of the following columns:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employment Category ID:</strong> A unique ID for each employment category.</li>
              <li><strong>Employment Category:</strong> The name of the category (e.g., Management, Staff, Labour).</li>
              <li><strong>Actions:</strong> Contains buttons to update or delete an employment category.</li>
            </ul>
          </li>
          <li><strong>Action Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Add New:</strong> This button allows you to create a new employment category.</li>
              <li><strong>Update:</strong> Each employment category in the list has an Update button, which allows you to modify its details.</li>
              <li><strong>Delete:</strong> Each employment category in the list has a Delete button to remove it from the system.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>+ Add New:</strong> Located at the top-right corner, this button opens the form to create a new employment category.</li>
              <li><strong>Update:</strong> For each existing employment category, the Update button allows users to edit the details.</li>
              <li><strong>Delete:</strong> Clicking Delete will remove the selected employment category.</li>
            </ul>
          </li>
        </ul>
        <img src="/assets/m33.png" alt="Employment Category Actions" className="w-full mt-4" />
        <img src="/assets/m34.png" alt="Employment Category Actions" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.5.2: Adding a New Employment Category */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.5.2 Adding a New Employment Category</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new employment category, follow these simple steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Employment Category page under the Master Details section from the sidebar.</li>
          <li>Click the + Add New button located at the top-right of the screen.</li>
          <li>Fill in the form:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employment Category:</strong> Enter the name of the category (e.g., Management, Staff, Labour).</li>
            </ul>
          </li>
          <li>Click the Create button to save the new employment category. The new employment category will now appear in the employment category list.</li>
        </ul>
        <img src="/assets/m35.png" alt="Adding Employment Category" className="w-full mt-4" />
        <img src="/assets/m36.png" alt="Adding Employment Category" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.5.3: Updating an Existing Employment Category */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.5.3 Updating an Existing Employment Category</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To modify an existing employment category, such as changing the category name, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Employment Category page under Master Details.</li>
          <li>Find the employment category you wish to update (e.g., Management).</li>
          <li>Click the Update button next to the employment category you want to modify.</li>
          <li>The Employment Category Update form will open with the current details.</li>
          <li>Make necessary changes:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employment Category:</strong> Update the name of the employment category (e.g., change Management to Senior Management).</li>
            </ul>
          </li>
          <li>Click the Update button to save the changes. The employment category will be updated with the new details in the list.</li>
        </ul>
        <img src="/assets/m37.png" alt="Updating Employment Category" className="w-full mt-4" />
        <img src="/assets/m38.png" alt="Updating Employment Category" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.5.4: Deleting an Employment Category */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.5.4 Deleting an Employment Category</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To delete an employment category, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Employment Category page under Master Details.</li>
          <li>Find the employment category you wish to delete (e.g., Labour).</li>
          <li>Click the Delete button next to the employment category.</li>
          <li>A confirmation pop-up will appear asking you to confirm the deletion.</li>
          <li>Click Yes to permanently delete the employment category, or No to cancel the deletion. Once deleted, the employment category will no longer appear in the list.</li>
        </ul>
        <img src="/assets/m37.png" alt="Deleting Employment Category" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.5.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.5.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Employment Category Table:</strong> Displays existing employment categories, IDs, and action buttons (Update/Delete).</li>
          <li><strong>Add New:</strong> To create a new employment category, click the + Add New button, fill out the form, and click Create.</li>
          <li><strong>Update:</strong> Modify any existing employment category by clicking the Update button, making changes, and saving.</li>
          <li><strong>Delete:</strong> Remove any employment category by clicking the Delete button and confirming the deletion.</li>
        </ul>
      
      </section>

      <br></br>
      {/* Section 2.1.1.6: Employment Type Management Module */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.6 Employment Type Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Employment Type module in the HRIS system is designed to help users manage and track various types of employment status within the organization. The module allows HR teams to define and categorize the different employment types, such as Permanent and Contract Basis, that exist within the company. Below is a detailed guide for users on how to navigate the Employment Type module, including how to add, update, and delete employment types.
        </p>
      </section>
  
      {/* Section 2.1.1.6.1.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.6.1.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Employment Type page is located under the Master Details section of the HRIS system. The interface allows users to manage and configure the different employment types used by the company.
        </p>
        <img src="/assets/m39.png" alt="Employment Type Module" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.6.1.1.1: Components of the Employment Type Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.6.1.1.1 Components of the Employment Type Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> The Navigation Sidebar is located on the left side of the page and helps you quickly navigate between various modules of the HRIS system. To manage employment types, go to: Master Details → Employment Type.</li>
          <li><strong>Employment Type Table:</strong> The main area of the screen displays a list of existing employment types. This table is organized with the following columns:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employment Type ID:</strong> A unique identifier for each employment type.</li>
              <li><strong>Employment Type:</strong> The name of the employment type, such as Permanent or Contract Basis.</li>
              <li><strong>Actions:</strong> Includes buttons for updating or deleting an employment type.</li>
            </ul>
          </li>
          <li><strong>Action Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Add New:</strong> This button opens a form that allows you to create a new employment type.</li>
              <li><strong>Update:</strong> Each employment type listed has an Update button that lets you modify its details.</li>
              <li><strong>Delete:</strong> The Delete button removes the selected employment type from the system.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>+ Add New:</strong> This button is located at the top-right of the Employment Type table. Clicking this opens the form to add a new employment type.</li>
              <li><strong>Update:</strong> This button appears for each existing employment type and allows you to edit it.</li>
              <li><strong>Delete:</strong> This button lets you delete an employment type after selecting the one to be removed.</li>
            </ul>
          </li>
        </ul>
        <img src="/assets/m39.png" alt="Employment Type Actions" className="w-full mt-4" />
        <img src="/assets/m40.png" alt="Employment Type Actions" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.6.2: Adding a New Employment Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.6.2 Adding a New Employment Type</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new employment type (e.g., adding a new type like "Intern"), follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Employment Type page under the Master Details section in the sidebar.</li>
          <li>Click the + Add New button located at the top-right of the screen.</li>
          <li>Fill in the form:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employment Type:</strong> Enter the name of the employment type (e.g., Permanent, Contract Basis).</li>
            </ul>
          </li>
          <li>Click the Create button to save the new employment type. The newly added employment type will now appear in the list with its respective ID and name.</li>
        </ul>
        <img src="/assets/m41.png" alt="Adding Employment Type" className="w-full mt-4" />
        <img src="/assets/m42.png" alt="Adding Employment Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.6.3: Updating an Existing Employment Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.6.3 Updating an Existing Employment Type</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To update an existing employment type (e.g., changing "Contract Basis" to "Freelance"), follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Employment Type page under Master Details.</li>
          <li>Find the employment type you wish to update (e.g., "Contract Basis").</li>
          <li>Click the Update button next to the employment type you want to modify.</li>
          <li>The Employment Type Update form will open with the current details.</li>
          <li>Make the necessary changes:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Employment Type:</strong> Modify the name of the employment type (e.g., change "Contract Basis" to "Freelance").</li>
            </ul>
          </li>
          <li>Click Update to save the changes. The employment type will be updated in the list with the new details.</li>
        </ul>
        <img src="/assets/m43.png" alt="Updating Employment Type" className="w-full mt-4" />
        <img src="/assets/m44.png" alt="Updating Employment Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.6.4: Deleting an Employment Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.6.4 Deleting an Employment Type</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To delete an employment type, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Employment Type page under Master Details.</li>
          <li>Find the employment type you wish to delete (e.g., "Contract Basis").</li>
          <li>Click the Delete button next to the employment type.</li>
          <li>A confirmation pop-up will appear asking you to confirm the deletion.</li>
          <li>Click Yes to permanently delete the employment type, or No to cancel the deletion. Once deleted, the employment type will no longer appear in the list.</li>
        </ul>
        <img src="/assets/m43.png" alt="Deleting Employment Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.6.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.6.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Employment Type Table:</strong> Displays existing employment types, with options to update or delete.</li>
          <li><strong>Add New:</strong> To create a new employment type, click the + Add New button, fill out the form, and click Create.</li>
          <li><strong>Update:</strong> To modify an existing employment type, click Update, make the necessary changes, and save them.</li>
          <li><strong>Delete:</strong> To remove an employment type, click Delete and confirm the action.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          By following these steps, HR teams can effectively manage employment types within the system, ensuring proper categorization and classification of employees.
        </p>
      </section>
       <br/>
       {/* Section 2.1.1.7: Shift Management Module */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.7 Shift Management Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Shift module in the HRIS system helps users manage work shifts for employees. The module allows users to create, update, and delete shift schedules, providing flexibility in assigning work hours and creating shift patterns.
        </p>
      </section>
  
      {/* Section 2.1.1.7.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.7.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Shift page is part of the Master Details section in the HRIS system. The UI provides an easy-to-use platform to manage various shifts such as "08:30-16:30," "Site Labour," etc. Below are the main components of the interface:
        </p>
        <img src="/assets/m45.png" alt="Shift Management Page" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.7.1.1: Components of the Shift Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.7.1.1 Components of the Shift Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> Located on the left, the sidebar helps you navigate to different sections of the HRIS system. Master Details → Shift: This is where you manage shifts for employees.</li>
          <li><strong>Shift Table:</strong> The main area displays a list of existing shifts in a tabular format with the following columns:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Shift ID:</strong> Unique identifier for each shift.</li>
              <li><strong>Shift Name:</strong> The name of the shift (e.g., "08:30-16:30," "Site Labour").</li>
              <li><strong>Start:</strong> Start time for the shift.</li>
              <li><strong>End:</strong> End time for the shift.</li>
              <li><strong>Actions:</strong> Contains the buttons for updating or deleting a shift.</li>
            </ul>
          </li>
          <li><strong>Action Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Add New:</strong> This button allows users to create a new shift schedule.</li>
              <li><strong>Update:</strong> Each existing shift in the list has an Update button to modify shift details.</li>
              <li><strong>Delete:</strong> This button allows users to delete a shift from the system.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>+ Add New:</strong> Located at the top-right corner, this button opens the form to create a new shift.</li>
              <li><strong>Update/Delete:</strong> These buttons allow you to edit or remove existing shifts from the system.</li>
            </ul>
          </li>
        </ul>
        <img src="/assets/m45.png" alt="Shift Management Page" className="w-full mt-4" />
        <img src="/assets/m46.png" alt="Shift Management Page" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.7.2: Adding a New Shift */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.7.2 Adding a New Shift</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new shift, follow these simple steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Shift page under Master Details from the sidebar.</li>
          <li>Click the + Add New button located at the top-right of the screen.</li>
          <li>In the Shift Registration form, fill in the necessary details:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Shift Name:</strong> Enter the name of the shift (e.g., "08:30-16:30").</li>
              <li><strong>OT Grace Period (in minutes):</strong> Enter the grace period for overtime if applicable.</li>
              <li><strong>Login Grace Period (in minutes):</strong> Enter the time grace period allowed for logging in.</li>
              <li><strong>Start:</strong> Set the start time for the shift.</li>
              <li><strong>End:</strong> Set the end time for the shift.</li>
              <li><strong>Additional days (Sunday to Saturday):</strong> Configure start and end times for each day of the week if the shift has specific timings for each day.</li>
            </ul>
          </li>
          <li>Click Create to save the new shift. The newly created shift will now appear in the shift list, ready for use.</li>
        </ul>
        <img src="/assets/m47.png" alt="Shift Management Page" className="w-full mt-4" />
        <img src="/assets/m48.png" alt="Shift Management Page" className="w-full mt-4" />
        <img src="/assets/m49.png" alt="Shift Management Page" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.7.3: Updating an Existing Shift */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.7.3 Updating an Existing Shift</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To update the details of an existing shift, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Shift page under Master Details.</li>
          <li>Locate the shift you wish to update (e.g., "08:30-16:30").</li>
          <li>Click the Update button next to the shift you want to modify.</li>
          <li>The Shift Update form will open with the current shift details.</li>
          <li>Make necessary changes:
            <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
              <li><strong>Shift Name:</strong> Update the name if required.</li>
              <li><strong>OT Grace Period:</strong> Modify the overtime grace period if necessary.</li>
              <li><strong>Login Grace Period:</strong> Update the login grace period.</li>
              <li><strong>Start and End:</strong> Change the timing as needed for the shift.</li>
            </ul>
          </li>
          <li>Click Update to save the changes. The updated shift will now appear in the list with the new details.</li>
        </ul>
        <img src="/assets/m50.png" alt="Shift Management Page" className="w-full mt-4" />
        <img src="/assets/m51.png" alt="Shift Management Page" className="w-full mt-4" />
        <img src="/assets/m52.png" alt="Shift Management Page" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.7.4: Deleting a Shift */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.7.4 Deleting a Shift</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To delete a shift, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Shift page under Master Details.</li>
          <li>Find the shift you want to delete (e.g., "Site Labour").</li>
          <li>Click the Delete button next to the shift.</li>
          <li>A confirmation pop-up will appear asking you to confirm the deletion.</li>
          <li>Click Yes to permanently delete the shift, or No to cancel the deletion. Once deleted, the shift will no longer appear in the list.</li>
        </ul>
        <img src="/assets/m50.png" alt="Shift Management Page" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.7.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.7.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Shift Table:</strong> Displays all existing shifts, their start and end times, and action buttons (Update/Delete).</li>
          <li><strong>Add New:</strong> To create a new shift, click + Add New, fill out the form, and click Create.</li>
          <li><strong>Update:</strong> Modify any existing shift by clicking Update, making changes, and saving.</li>
          <li><strong>Delete:</strong> Remove a shift by clicking Delete and confirming the action.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          By following these steps, HR teams can easily manage shift schedules for employees, ensuring proper work hours and maintaining accurate records.
        </p>
      </section>
      <br></br>
      {/* Section 2.1.1.8: Pay Group Management Module */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.8 Pay Group Management Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Pay Group module in the HRIS system allows users to efficiently manage employee pay groups. This guide explains the user interface (UI) and provides detailed instructions on how to add, update, and delete pay groups.
        </p>
      </section>
  
      {/* Section 2.1.1.8.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.8.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Pay Group page is located under the Master Details section in the HRIS system. Users can manage different pay groups such as EPF Staff, Non-EPF Labour, Casual Payment, and more. The interface consists of several key components, explained below:
        </p>
        <img src="/assets/m59.png" alt="Pay Group" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.8.1.1: Components of the Pay Group Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.8.1.1 Components of the Pay Group Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, the sidebar allows navigation between different modules of the HRIS system.</li>
          <li><strong>Pay Group Table:</strong> Displays a list of existing pay groups with the following columns:
            <ul className="list-inside pl-4">
              <li><strong>Pay Group ID:</strong> A unique identifier for each pay group.</li>
              <li><strong>Pay Group:</strong> The name of the pay group (e.g., EPF Staff, Non-EPF Labour).</li>
              <li><strong>Actions:</strong> Buttons for updating or deleting a pay group.</li>
            </ul>
          </li>
          <li><strong>Action Buttons:</strong>
            <ul className="list-inside pl-4">
              <li><strong>Add New:</strong> Allows users to create a new pay group.</li>
              <li><strong>Update:</strong> Lets users modify a pay group.</li>
              <li><strong>Delete:</strong> Removes the selected pay group from the system.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4">
              <li><strong>+ Add New:</strong> Opens the form to create a new pay group.</li>
              <li><strong>Update/Delete:</strong> Lets users edit or remove an existing pay group.</li>
            </ul>
          </li>
        </ul>
        <img src="/assets/m59.png" alt="Pay Group" className="w-full mt-4" />
        <img src="/assets/m60.png" alt="Pay Group" className="w-full mt-4" />

      </section>
  
      {/* Section 2.1.1.8.2: Adding a New Pay Group */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.8.2 Adding a New Pay Group</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new pay group, follow these simple steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Pay Group page under Master Details.</li>
          <li>Click the + Add New button at the top-right of the screen.</li>
          <li>Fill in the form with the pay group name (e.g., "EPF Staff" or "Non-EPF Labour").</li>
          <li>Click Create to save the new pay group.</li>
        </ul>
        <img src="/assets/m61.png" alt="Pay Group" className="w-full mt-4" />
        <img src="/assets/m62.png" alt="Pay Group" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.8.3: Updating an Existing Pay Group */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.8.3 Updating an Existing Pay Group</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To modify an existing pay group, such as changing the name or salary allocation details, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Pay Group page under Master Details.</li>
          <li>Locate the pay group you want to update.</li>
          <li>Click the Update button next to the pay group.</li>
          <li>The Pay Group Update form will open with the current details.</li>
          <li>Make the necessary changes:
            <ul className="list-inside pl-4">
              <li><strong>Pay Group:</strong> Update the name if necessary.</li>
              <li><strong>Employee Factor in Salary Allocation:</strong> Add or remove allowances such as:
                <ul className="list-inside pl-4">
                  <li>Variable Performance Allowance</li>
                  <li>Travelling Allowance</li>
                  <li>Hardship Allowance</li>
                  <li>Accommodation Allowance</li>
                  <li>Special Task Allowance</li>
                  <li>Performance-Based Allowance</li>
                  <li>Extra Working Hours Allowance</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Click the Update button to save the changes.</li>
        </ul>
        <img src="/assets/m63.png" alt="Pay Group" className="w-full mt-4" />
        <img src="/assets/m64.png" alt="Pay Group" className="w-full mt-4" />
        <img src="/assets/m65.png" alt="Pay Group" className="w-full mt-4" />
        <img src="/assets/m66.png" alt="Pay Group" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.8.4: Deleting a Pay Group */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.8.4 Deleting a Pay Group</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To remove a pay group from the system, follow these steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Pay Group page under Master Details.</li>
          <li>Locate the pay group you want to delete.</li>
          <li>Click the Delete button next to the pay group.</li>
          <li>A confirmation pop-up will appear.</li>
          <li>Click Yes to confirm the deletion or No to cancel.</li>
          <li>Once deleted, the pay group will no longer appear in the list.</li>
        </ul>
        <img src="/assets/m63.png" alt="Pay Group" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.8.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.8.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Pay Group Table:</strong> Displays existing pay groups and associated employee salary allocations.</li>
          <li><strong>Add New:</strong> Click + Add New, enter the pay group name, and click Create.</li>
          <li><strong>Update:</strong> Modify an existing pay group by clicking Update, making changes, and saving.</li>
          <li><strong>Delete:</strong> Remove any pay group by clicking Delete and confirming the action.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          By following these steps, HR teams can effectively manage employee pay groups in the system, ensuring accurate salary allocation and payroll classification.
        </p>
      </section>
      <br></br>
      {/* Section 2.1.1.9: Bank Type Management Module */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">2.1.1.9 Bank Type Management Module - User Guide</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Bank Type module in the HRIS system allows users to efficiently manage the types of banks available for employees' salary disbursements. This guide explains the user interface (UI) and provides detailed instructions on how to add, update, and delete bank types.
        </p>
      </section>
  
      {/* Section 2.1.1.9.1: User Interface Overview */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.9.1 User Interface Overview</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          The Bank Type page is located under the Master Details section in the HRIS system. Users can manage the different bank types such as Sampath Bank, HNB, BOC, Commercial Bank, and more. The interface consists of several key components, explained below:
        </p>
        <img src="/assets/m53.png" alt="Bank Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.9.1.1: Components of the Bank Type Interface */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.9.1.1 Components of the Bank Type Interface</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, the sidebar allows users to navigate between different modules of the HRIS system.</li>
          <li><strong>Bank Type Table:</strong> Displays a list of existing bank types. It includes:
            <ul className="list-inside pl-4">
              <li><strong>Bank ID:</strong> A unique identifier for each bank.</li>
              <li><strong>Bank:</strong> The name of the bank (e.g., Sampath Bank, HNB).</li>
              <li><strong>Actions:</strong> Buttons for updating or deleting a bank type.</li>
            </ul>
          </li>
          <li><strong>Action Buttons:</strong>
            <ul className="list-inside pl-4">
              <li><strong>Add New:</strong> Allows users to create a new bank type.</li>
              <li><strong>Update:</strong> Lets users modify a bank type.</li>
              <li><strong>Delete:</strong> Removes the selected bank type.</li>
            </ul>
          </li>
          <li><strong>Top Buttons:</strong>
            <ul className="list-inside pl-4">
              <li><strong>+ Add New:</strong> Opens the form to create a new bank type.</li>
              <li><strong>Update/Delete:</strong> Edit or remove an existing bank type.</li>
            </ul>
          </li>
        </ul>
        <img src="/assets/m53.png" alt="Bank Type" className="w-full mt-4" />
        <img src="/assets/m54.png" alt="Bank Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.9.2: Adding a New Bank Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.9.2 Adding a New Bank Type</h3>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          To add a new bank type, follow these simple steps:
        </p>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Bank Type page under Master Details.</li>
          <li>Click the + Add New button at the top-right of the screen.</li>
          <li>Fill in the form with the bank name (e.g., Sampath Bank, HNB).</li>
          <li>Click Create to save the new bank type.</li>
        </ul>
        <img src="/assets/m55.png" alt="Bank Type" className="w-full mt-4" />
        <img src="/assets/m56.png" alt="Bank Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.9.3: Updating an Existing Bank Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.9.3 Updating an Existing Bank Type</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Bank Type page under Master Details.</li>
          <li>Locate the bank type you want to update.</li>
          <li>Click the Update button next to the bank type.</li>
          <li>Modify the bank name as needed and click Update to save changes.</li>
        </ul>
        <img src="/assets/m57.png" alt="Bank Type" className="w-full mt-4" />
        <img src="/assets/m58.png" alt="Bank Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.9.4: Deleting a Bank Type */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.9.4 Deleting a Bank Type</h3>
        <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
          <li>Navigate to the Bank Type page under Master Details.</li>
          <li>Locate the bank type you want to delete.</li>
          <li>Click the Delete button next to the bank type.</li>
          <li>A confirmation pop-up will appear. Click Yes to delete, or No to cancel.</li>
        </ul>
        <img src="/assets/m57.png" alt="Bank Type" className="w-full mt-4" />
      </section>
  
      {/* Section 2.1.1.9.5: Summary */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-800 mt-4">2.1.1.9.5 Summary</h3>
        <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
          <li><strong>Bank Type Table:</strong> Displays existing bank types.</li>
          <li><strong>Add New:</strong> Click + Add New, enter the bank name, and click Create.</li>
          <li><strong>Update:</strong> Modify an existing bank type by clicking Update, making changes, and saving.</li>
          <li><strong>Delete:</strong> Remove any bank type by clicking Delete and confirming the action.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          By following these steps, HR teams can effectively manage bank types for employee salary disbursements in the system, ensuring accurate payroll processing.
        </p>
      </section>
  
{/* Section 2.1.1.10: Expense Type Management Module */}
<section className="mb-10">
  <h2 className="text-3xl font-semibold text-gray-800">
    <i className="fas fa-cogs mr-2"></i>Expense Type Management Module - User Guide
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Expense Type Management Module allows HR administrators to manage and categorize various expense types. 
    This module is critical for tracking employee reimbursements and deductions. It provides the ability to add 
    new expense types, update existing ones, and delete those that are no longer needed.
  </p>
</section>

{/* Section 2.1.1.10.1: User Interface Overview */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-desktop mr-2"></i>User Interface Overview
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Expense Type page is located under the Master Details section in the HRIS system. It enables users to categorize 
    expenses such as travel allowances, telephone deductions, or other expense categories. The interface consists of 
    several key components explained below:
  </p>
  <img src="/assets/m69.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.10.1.1: Components of the Expense Type Interface */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-puzzle-piece mr-2"></i>Components of the Expense Type Interface
  </h3>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, the sidebar provides easy navigation between different modules of the HRIS system.</li>
    <li><strong>Expense Type Table:</strong> Displays a list of existing expense types, with columns such as Expense Type ID, Expense Type, Pay Type, and Actions.</li>
    <li><strong>Action Buttons:</strong>
      <ul className="list-inside pl-4">
        <li><strong>Add New:</strong> Opens the form to create a new expense type.</li>
        <li><strong>Update:</strong> Lets users modify an existing expense type.</li>
        <li><strong>Delete:</strong> Removes an expense type from the system.</li>
      </ul>
    </li>
  </ul>
  <img src="/assets/m69.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m70.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.10.2: Adding a New Expense Type */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-plus-circle mr-2"></i>Adding a New Expense Type
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    To add a new expense type, follow these steps:
  </p>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li>Navigate to the Expense Type page under Master Details.</li>
    <li>Click the + Add New button located at the top-right corner of the screen.</li>
    <li>Fill in the form with the necessary details and click Create.</li>
  </ul>
  <img src="/assets/m71.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m72.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.10.3: Updating an Existing Expense Type */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-edit mr-2"></i>Updating an Existing Expense Type
  </h3>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li>Navigate to the Expense Type page under Master Details.</li>
    <li>Locate the expense type you wish to update.</li>
    <li>Click the Update button next to the expense type.</li>
    <li>Modify the details as necessary and click Update to save the changes.</li>
  </ul>
  <img src="/assets/m73.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m74.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.10.4: Deleting an Expense Type */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-trash-alt mr-2"></i>Deleting an Expense Type
  </h3>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li>Navigate to the Expense Type page under Master Details.</li>
    <li>Locate the expense type you wish to delete.</li>
    <li>Click the Delete button next to the expense type.</li>
    <li>Confirm the deletion by clicking Yes.</li>
  </ul>
  <img src="/assets/m73.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.10.5: Summary */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-clipboard-check mr-2"></i>Summary
  </h3>
  <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Expense Type Table:</strong> Displays existing expense types, including their descriptions and associated pay types (addition or deduction).</li>
    <li><strong>Add New:</strong> Click + Add New, enter the expense type description, select the pay type, and click Create.</li>
    <li><strong>Update:</strong> Modify an existing expense type by clicking Update, making changes, and saving.</li>
    <li><strong>Delete:</strong> Remove any expense type by clicking Delete and confirming the action.</li>
  </ul>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    By following these steps, HR teams can efficiently manage the different expense types in the system, ensuring accurate record-keeping and financial processing for employee reimbursements and deductions.
  </p>
</section>

{/* Section 2.1.1.11: Remaining Leave Type Management Module */}
<section className="mb-10">
  <h2 className="text-3xl font-semibold text-gray-800">
    <i className="fas fa-cogs mr-2"></i>Remaining Leave Type Management Module - User Guide
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Remaining Leave Type Management module is used to manage and track various types of leave in the HRIS system. It allows users to add, update, and delete different leave types, such as Annual, Casual, Short Leave, and more. This guide provides detailed instructions on how to manage these leave types efficiently.
  </p>
</section>

{/* Section 2.1.1.11.1: User Interface Overview */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-desktop mr-2"></i>User Interface Overview
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Remaining Leave Type module can be found under the Master Details section in the HRIS system. The interface contains several key components that allow for easy interaction with the system.
  </p>
  <img src="/assets/m75.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.11.1.1: Components of the Remaining Leave Type Interface */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-puzzle-piece mr-2"></i>Components of the Remaining Leave Type Interface
  </h3>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, this sidebar provides quick access to different modules of the HRIS system. To manage Remaining Leave Types, navigate to Master Details → Remaining Leave Type.</li>
    <li><strong>Leave Type Table:</strong> The main area of the screen displays a list of existing leave types. The table consists of the following columns:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong>Type ID:</strong> A unique identifier for each leave type.</li>
        <li><strong>Type:</strong> The name of the leave type (e.g., Annual, Casual).</li>
        <li><strong>Actions:</strong> Buttons for updating or deleting a leave type.</li>
      </ul>
    </li>
    <li><strong>Action Buttons:</strong>
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong><i className="fas fa-plus-circle"></i> Add New:</strong> Opens a form to add a new leave type.</li>
        <li><strong><i className="fas fa-edit"></i> Update:</strong> Each leave type in the list has an Update button to modify its details.</li>
        <li><strong><i className="fas fa-trash-alt"></i> Delete:</strong> Each leave type has a Delete button to remove it from the system.</li>
      </ul>
    </li>
  </ul>
  <img src="/assets/m75.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m76.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.11.2: Adding a New Leave Type */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-plus-circle mr-2"></i>Adding a New Leave Type
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    To add a new leave type to the system, follow the steps below:
  </p>
  <img src="/assets/m77.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m78.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.11.2.1: Steps to Add a New Leave Type */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to the Remaining Leave Type page under the Master Details section from the sidebar.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the + Add New button located at the top-right corner of the screen.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Complete the Leave Type Registration form:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong>Type Name:</strong> Enter the name of the leave type (e.g., "Annual", "Casual", "No Pay").</li>
      </ul>
    </li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Create button to save the new leave type.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>The new leave type will appear in the list of leave types on the Remaining Leave Type page.</li>
  </ul>
</section>

{/* Section 2.1.1.11.3: Updating an Existing Leave Type */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-edit mr-2"></i>Updating an Existing Leave Type
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    To update an existing leave type (e.g., changing the name or other details), follow these steps:
  </p>
  <img src="/assets/m79.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m80.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.11.3.1: Steps to Update a Leave Type */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to the Remaining Leave Type page under Master Details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Find the leave type you want to update.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Update button next to the leave type.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>The Leave Type Update form will appear with the current details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Modify the necessary fields (e.g., Type Name).</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Update button to save the changes.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>The updated leave type details will now appear in the leave type list.</li>
  </ul>
</section>

{/* Section 2.1.1.11.4: Deleting a Leave Type */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-trash-alt mr-2"></i>Deleting a Leave Type
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    To remove a leave type from the system, follow these steps:
  </p>
  <img src="/assets/m79.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.11.4.1: Steps to Delete a Leave Type */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to the Remaining Leave Type page under Master Details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Find the leave type you want to delete.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Delete button next to the leave type.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>A confirmation pop-up will appear asking you to confirm the deletion.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click Yes to confirm the deletion or No to cancel.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Once deleted, the leave type will no longer appear in the list.</li>
  </ul>
</section>

{/* Section 2.1.1.11.5: Summary */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-clipboard-check mr-2"></i>Summary
  </h3>
  <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Remaining Leave Type Table:</strong> Displays the existing leave types and their associated actions.</li>
    <li><strong>Add New:</strong> Click the + Add New button, fill in the Type Name, and click Create to add a new leave type.</li>
    <li><strong>Update:</strong> Modify an existing leave type by clicking Update, making the necessary changes, and saving.</li>
    <li><strong>Delete:</strong> Remove any leave type by clicking Delete and confirming the deletion.</li>
  </ul>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    By following these steps, HR teams can effectively manage leave types in the system, ensuring proper tracking and organization of different types of leave available to employees.
  </p>
</section>
{/* Section 2.1.1.13: Minimum Experience Management Module - User Guide */}
<section className="mb-10">
  <h2 className="text-3xl font-semibold text-gray-800">
    <i className="fas fa-cogs mr-2"></i>Minimum Experience Management Module - User Guide
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Minimum Experience module in the HRIS system allows users to efficiently manage the experience levels required for various roles. This guide explains the user interface (UI) and provides detailed instructions on how to add, update, and delete experience levels.
  </p>
</section>

{/* Section 2.1.1.13.1: User Interface Overview */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-desktop mr-2"></i>User Interface Overview
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Minimum Experience page is located under the Master Details section in the HRIS system. Users can manage different levels of experience required for employees. The interface consists of several key components, explained below:
  </p>
  <img src="/assets/m81.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.13.1.1: Components of the Minimum Experience Interface */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-puzzle-piece mr-2"></i>Components of the Minimum Experience Interface
  </h3>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Navigation Sidebar:</strong> Located on the left side of the page, this sidebar allows navigation between different modules of the HRIS system. To manage Minimum Experience levels, go to: Master Details → Minimum Experience.</li>
    <li><strong>Minimum Experience Table:</strong> The main area of the screen displays a list of existing minimum experience levels. The table consists of the following columns:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong>Experience ID:</strong> A unique identifier for each experience level.</li>
        <li><strong>Experience:</strong> The name or category of the experience (e.g., "Experienced", "Beginner", "Intermediate").</li>
        <li><strong>Actions:</strong> Buttons for updating or deleting an experience level.</li>
      </ul>
    </li>
    <li><strong>Action Buttons:</strong>
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong><i className="fas fa-plus-circle"></i> Add New:</strong> Allows users to create a new minimum experience level.</li>
        <li><strong><i className="fas fa-edit"></i> Update:</strong> Each experience level in the list has an Update button to modify its details.</li>
        <li><strong><i className="fas fa-trash-alt"></i> Delete:</strong> Each experience level has a Delete button to remove it from the system.</li>
      </ul>
    </li>
  </ul>
  <img src="/assets/m81.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m82.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.13.2: Adding a New Minimum Experience Level */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-plus-circle mr-2"></i>Adding a New Minimum Experience Level
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    To add a new experience level, follow these steps:
  </p>
  <img src="/assets/m83.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m84.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.13.2.1: Steps to Add a New Minimum Experience Level */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to the Minimum Experience page under the Master Details section from the sidebar.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the + Add New button at the top-right of the screen.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Complete the form:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong>Experience:</strong> Enter the name or category of the experience (e.g., "Experienced", "Beginner", "Intermediate").</li>
      </ul>
    </li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Create button to save the new experience level.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Once created, the new experience level will appear in the experience table.</li>
  </ul>
</section>

{/* Section 2.1.1.13.3: Updating an Existing Minimum Experience Level */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-edit mr-2"></i>Updating an Existing Minimum Experience Level
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    To modify an existing experience level, follow these steps:
  </p>
  <img src="/assets/m85.png" alt="Expense Type Management" className="w-full mt-4" />
  <img src="/assets/m86.png" alt="Expense Type Management" className="w-full mt-4" />
</section>

{/* Section 2.1.1.13.3.1: Steps to Update a Minimum Experience Level */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to the Minimum Experience page under Master Details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Locate the experience level you want to update.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Update button next to the experience level.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>The Minimum Experience Update form will open with the current details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Make the necessary changes (e.g., Experience).</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Update button to save the changes.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>The updated experience level details will now reflect in the experience table.</li>
  </ul>
</section>

{/* Section 2.1.1.13.4: Deleting a Minimum Experience Level */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-trash-alt mr-2"></i>Deleting a Minimum Experience Level
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    To remove a minimum experience level from the system, follow these steps:
  </p>
  <img src="/assets/m85.png" alt="Expense Type Management" className="w-full mt-4" />

</section>

{/* Section 2.1.1.13.4.1: Steps to Delete a Minimum Experience Level */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to the Minimum Experience page under Master Details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Locate the experience level you want to delete.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Delete button next to the experience level.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>A confirmation pop-up will appear.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click Yes to confirm the deletion or No to cancel.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Once deleted, the experience level will no longer appear in the list.</li>
  </ul>
</section>

{/* Section 2.1.1.13.5: Summary */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-clipboard-check mr-2"></i>Summary
  </h3>
  <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Minimum Experience Table:</strong> Displays existing experience levels and their details.</li>
    <li><strong>Add New:</strong> Click + Add New, enter the experience level, and click Create.</li>
    <li><strong>Update:</strong> Modify an existing experience level by clicking Update, making changes, and saving.</li>
    <li><strong>Delete:</strong> Remove any experience level by clicking Delete and confirming the action.</li>
  </ul>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    By following these steps, HR teams can efficiently manage Minimum Experience levels in the system, ensuring accurate experience classification and role assignments.
  </p>
</section>
{/* Section 2.1.1.14: Interview Assessment Form Management Module - User Guide */}
<section className="mb-10">
  <h2 className="text-3xl font-semibold text-gray-800">
    <i className="fas fa-file-alt mr-2"></i>Interview Assessment Form Management Module - User Guide
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Interview Assessment Form module in the HRIS system allows users to create and manage assessment forms for interview evaluations. This guide explains the interface and provides step-by-step instructions on adding, updating, and managing interview questions.
  </p>
</section>

{/* Section 2.1.1.14.1: User Interface Overview */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-desktop mr-2"></i>User Interface Overview
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Interview Assessment Form page is accessible under the Master Details section in the HRIS system. Users can create new assessment forms by adding multiple questions. The interface consists of the following key components:
  </p>
  <img src="/assets/m87.png" alt="User Interface Overview" className="w-full mt-4" />
</section>

{/* Section 2.1.1.14.1.1: Components of the Interview Assessment Form Interface */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-puzzle-piece mr-2"></i>Components of the Interview Assessment Form Interface
  </h3>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Navigation Sidebar:</strong> The left-side navigation menu allows users to navigate between different modules of the HRIS system. To access the Interview Assessment Form, go to: Master Details → Assessment Form.</li>
    <li><strong>Assessment Form Creation Panel:</strong> The main area of the screen displays the assessment form creation panel. Users can add multiple questions to the form, specify answer types, and mark required fields.</li>
    <li><strong>Form Fields:</strong> Each question field consists of:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong>Question:</strong> Text area to enter the interview question.</li>
        <li><strong>Answer Type:</strong> Dropdown menu to choose the response type (e.g., Text, Multiple Choice, Numeric).</li>
        <li><strong>Is Required:</strong> Checkbox to mark whether the question is mandatory.</li>
        <li><strong>Delete Button:</strong> Red trash icon to remove the question before submission.</li>
      </ul>
    </li>
    <li><strong>Action Buttons:</strong>
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong><i className="fas fa-plus-circle"></i> (+) Add New Question:</strong> Adds a new question field to the form.</li>
        <li><strong><i className="fas fa-check-circle"></i> Submit:</strong> Saves and submits the assessment form.</li>
      </ul>
    </li>
  </ul>
 
</section>

{/* Section 2.1.1.14.2: Adding a New Interview Assessment Form */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-plus-circle mr-2"></i>Adding a New Interview Assessment Form
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Users can create a new interview assessment form by adding multiple questions. Follow these steps:
  </p>
 
</section>

{/* Section 2.1.1.14.2.1: Steps to Add a New Assessment Form */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to Master Details → Assessment Form from the sidebar.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the <i className="fas fa-plus-circle"></i> "+" button to add a new question.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Fill in the fields:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><strong>Question:</strong> Type the interview question.</li>
        <li><strong>Answer Type:</strong> Select the answer format (e.g., text, multiple choice).</li>
        <li><strong>Is Required:</strong> Check this box if the question is mandatory.</li>
      </ul>
    </li>
    <li><i className="fas fa-arrow-right mr-2"></i>Repeat steps 2-3 to add multiple questions.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the <i className="fas fa-check-circle"></i> Submit button to save the form.</li>
  </ul>
</section>

{/* Section 2.1.1.14.2.1.1: Notes */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-info-circle mr-2"></i>After submitting, you cannot edit the existing questions. You can only add new ones.</li>
    <li><i className="fas fa-info-circle mr-2"></i>To remove a question before submission, click the <i className="fas fa-trash-alt"></i> Delete button (red trash icon).</li>
  </ul>
</section>

{/* Section 2.1.1.14.2.2: Updating an Assessment Form */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-edit mr-2"></i>Updating an Assessment Form
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Once an assessment form is submitted, it cannot be modified. However, users can add new questions if needed.
  </p>
 
</section>

{/* Section 2.1.1.14.2.2.1: Steps to Add a New Question to an Existing Form */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to Master Details → Assessment Form.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the <i className="fas fa-plus-circle"></i> "+" button to add a new question.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Fill in the new question details.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click <i className="fas fa-check-circle"></i> Submit to save the updated form.</li>
  </ul>
</section>

{/* Section 2.1.1.14.3: Deleting Questions from an Assessment Form */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-trash-alt mr-2"></i>Deleting Questions from an Assessment Form
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Before submitting the form, users can delete unnecessary questions.
  </p>
 
</section>

{/* Section 2.1.1.14.3.1: Steps to Delete a Question */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Navigate to Master Details → Assessment Form.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Locate the question you want to delete.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the <i className="fas fa-trash-alt"></i> Delete button (red trash icon).</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Confirm the deletion if prompted.</li>
  </ul>
</section>

{/* Section 2.1.1.14.3.2: Important Notes */}
<section className="mb-10">
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-info-circle mr-2"></i>You can only delete questions before submission.</li>
    <li><i className="fas fa-info-circle mr-2"></i>Once submitted, questions cannot be removed.</li>
  </ul>
</section>

{/* Section 2.1.1.14.4: Summary */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-clipboard-check mr-2"></i>Summary
  </h3>
  <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
    <li><strong>Assessment Form Table:</strong> Displays existing assessment forms.</li>
    <li><strong>Add Questions:</strong> Use the "+" button to add questions.</li>
    <li><strong>Submit:</strong> Finalizes the form.</li>
    <li><strong>Modify Questions:</strong> Once submitted, only new questions can be added, but existing ones cannot be modified or deleted.</li>
  </ul>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    By following these steps, HR teams can create structured interview assessment forms that streamline candidate evaluations.
  </p>
</section>

  
      </div>
    );
  };
  
  export default MasterDetailsModule;
  