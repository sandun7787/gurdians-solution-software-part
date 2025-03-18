const RecruitingModuleDocumentation = () => {
    return (
      <>
    <div className="flex flex-col min-h-screen container mx-auto px-6 py-12">
  <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
    <i className="fas fa-users mr-2"></i>Recruiting Module - User Guide
  </h1>

   {/* Section 4: Recruiting Module */}
<section className="mb-10">
  <h2 className="text-3xl font-semibold text-gray-800">
    <i className="fas fa-briefcase mr-2"></i>Recruiting Module Overview
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Recruiting Module is designed to help HR teams manage job openings, applications, and candidate selection effectively. It consists of two main sections:
  </p>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Job Openings</li>
    <li><i className="fas fa-check-circle mr-2"></i>Candidates</li>
  </ul>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    This guide will focus on Job Openings, including creating, updating, and viewing job openings.
  </p>
</section>

{/* Section 4.1: Job Openings Subcategory */}
<section className="mb-10">
  <h3 className="text-2xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-briefcase mr-2"></i>Job Openings Subcategory
  </h3>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Recruiting Module helps HR teams manage job openings and candidate applications efficiently. This guide focuses on the Job Openings subcategory, detailing how to create, update, and view job postings.
  </p>
</section>

{/* Section 4.1.1: User Interface Overview */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-desktop mr-2"></i>User Interface Overview
  </h4>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The interface is divided into different sections to provide an easy navigation experience.
  </p>
  <img src="/assets/m98.png" alt="Recruiting Module Overview" className="w-full mt-4" />
</section>

{/* Section 4.1.1.1: Left Navigation Panel */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-bars mr-2"></i>Left Navigation Panel
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Dashboard – Overview of the system.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Employees – Manage employee records.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Recruiting (Main Module):</li>
    <ul className="list-inside pl-4">
      <li><i className="fas fa-circle mr-2"></i>Job Openings (Currently active section)</li>
      <li><i className="fas fa-circle mr-2"></i>Candidates (Manage applications from candidates)</li>
    </ul>
    <li><i className="fas fa-check-circle mr-2"></i>Payroll, Reports, Master Details, Add/Deduct, Event Calendar, Profile, Inbox – Other functional modules.</li>
  </ul>
</section>

{/* Section 4.1.1.2: Job Openings List View */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-table mr-2"></i>Job Openings List View
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Upon accessing Job Openings, users are presented with a structured table containing:
  </p>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Candidates – Displays the number of applicants, with "NEW" highlighting fresh applications.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Job Title – The name of the job position, e.g., Software Developer, HR Executive.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Hiring Lead – The person managing the recruitment process for that position.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Created Date – The date when the job posting was created.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Status – The current job status (e.g., Open, Closed).</li>
    <li><i className="fas fa-check-circle mr-2"></i>Action Button (Arrow Icon →) – Clicking this directs users to the Update Job Opening Page.</li>
  </ul>
</section>

{/* Section 4.1.1.3: Top Navigation for Job Openings */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-arrow-right mr-2"></i>Top Navigation for Job Openings
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>“Add Job Opening” Button – Allows the user to create a new job posting.</li>
    <li><i className="fas fa-check-circle mr-2"></i>“View Careers Page” – Redirects to the company’s external job listing site (if integrated).</li>
  </ul>
</section>

{/* Section 4.1.2: Adding a New Job Opening */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-plus-circle mr-2"></i>Adding a New Job Opening
  </h4>
  <img src="/assets/m99.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <img src="/assets/m100.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-arrow-right mr-2"></i>Navigating to the Add Job Page
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Click on the “Add Job Opening” button at the top-right.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>A New Job Opening Form will appear.</li>
  </ul>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-cogs mr-2"></i>Job Creation Form User Interface
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The form consists of multiple sections.
  </p>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-briefcase mr-2"></i>Job Details Section
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Title – Select the job title from a predefined list.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Job Status – Choose between Open and Closed.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Hiring Lead – Select the HR or team leader responsible for hiring.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Job Location – Specify if the position is remote, onsite, or hybrid.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Employment Type – Choose between full-time, part-time, contract, etc.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Compensation – Enter salary details.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Minimum Experience – Select the required experience level (e.g., Entry-Level, Experienced).</li>
    <li><i className="fas fa-check-circle mr-2"></i>Job Description – Use the rich text editor to write an in-depth job description.</li>
  </ul>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-paperclip mr-2"></i>Application Details Section
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Resume Requirement – Choose if candidates must submit a resume.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Address & Cover Letter – Specify if these fields are mandatory.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Desired Salary & LinkedIn URL – Optional candidate input fields.</li>
  </ul>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-question-circle mr-2"></i>Extra Questions Section
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Users can add custom questions for applicants, such as:</li>
    <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
      <li><i className="fas fa-circle mr-2"></i>"How many years of experience do you have?"</li>
      <li><i className="fas fa-circle mr-2"></i>"What programming languages are you proficient in?"</li>
    </ul>
    <li><i className="fas fa-check-circle mr-2"></i>Note: Once a job is created, existing questions cannot be deleted. Only new ones can be added.</li>
  </ul>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-paper-plane mr-2"></i>Posting the Job
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Once all fields are completed, click “Create” to publish the job.</li>
  </ul>
</section>

{/* Section 4.1.3: Updating a Job Opening */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-edit mr-2"></i>Updating a Job Opening
  </h4>
  <img src="/assets/m101.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <img src="/assets/m102.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-arrow-right mr-2"></i>Navigating to the Update Page
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Locate the job in the Job Openings List View.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the Arrow Icon (→) next to the job.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>This opens the Job Opening Update Page.</li>
  </ul>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-pencil-alt mr-2"></i>Update Job Opening Form
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Users can edit:</li>
    <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
      <li><i className="fas fa-circle mr-2"></i>Job title</li>
      <li><i className="fas fa-circle mr-2"></i>Status (Open/Closed)</li>
      <li><i className="fas fa-circle mr-2"></i>Job description</li>
      <li><i className="fas fa-circle mr-2"></i>Compensation details</li>
      <li><i className="fas fa-circle mr-2"></i>Experience level</li>
    </ul>
    <li><i className="fas fa-check-circle mr-2"></i>Users cannot remove previously added questions but can add new ones.</li>
  </ul>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-save mr-2"></i>Saving Changes
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Click “Update” to save modifications.</li>
  </ul>
</section>

{/* Section 4.1.4: Viewing a Job Opening (Public View) */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-eye mr-2"></i>Viewing a Job Opening (Public View)
  </h4>
  <img src="/assets/m103.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <img src="/assets/m104.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-arrow-right mr-2"></i>Navigating to the Public View
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>On the Job Opening Update Page, locate the "View this opening" button on the right side.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Click the button to open the public job posting page.</li>
  </ul>
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-arrow-right mr-2"></i>Public Job Posting View
  </h5>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Job Title & Category – Displays the position title and category.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Job Description – Full details of the position.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Job Requirements – Experience level, employment type, and location.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Apply Now Button – Allows candidates to submit their applications.</li>
  </ul>
</section>

{/* Section 4.1.5: Managing Job Openings Efficiently */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-tasks mr-2"></i>Managing Job Openings Efficiently
  </h4>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-check-circle mr-2"></i>Posting New Jobs – HR can create job openings as needed.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Updating Job Openings – Modify job details whenever required.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Viewing Job Openings – Check how the job appears to applicants.</li>
    <li><i className="fas fa-check-circle mr-2"></i>Tracking Applications – Monitor the number of new and total candidates.</li>
  </ul>
</section>

{/* Section 4.1.6: Summary of Actions */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-list-check mr-2"></i>Summary of Actions
  </h4>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Add New Job: Click Add Job Opening → Fill out the form → Click Create</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Update Job: Click Arrow Icon (→) → Modify details → Click Update</li>
    <li><i className="fas fa-arrow-right mr-2"></i>View Job Posting: Click View this opening on the update page</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Monitor Applications: Check Candidates column in the Job Openings list</li>
  </ul>
</section>

{/* Section 4.1.7: Conclusion */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-clipboard-check mr-2"></i>Conclusion
  </h4>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    This guide outlines the full process of managing job openings in the Recruiting Module. The system provides a structured and user-friendly experience for HR professionals to post, update, and track job listings efficiently.
  </p>
</section>

            {/* Section 4.2: Candidates Submodule User Guide */}
<section className="mb-10">
  <h4 className="text-xl font-semibold text-gray-800 mt-4">
    <i className="fas fa-users mr-2"></i>Candidates Submodule User Guide
  </h4>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Candidates Submodule is designed to help recruiters manage job applicants and streamline the hiring process. It allows easy tracking of candidates' statuses, reviewing their profiles, and taking actions like commenting, rating, and offering jobs.
  </p>
</section>

{/* Section 4.2.1: Main Interface Overview */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-th-list mr-2"></i>Main Interface Overview
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Location: Located under the Recruiting Module, the Candidates section allows recruiters to manage all applicants.
  </p>
  <img src="/assets/m105.png" alt="Recruiting Module Overview" className="w-full mt-4" />
</section>

{/* Section 4.2.1.1: Components */}
<section className="mb-10">
  <h6 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-cogs mr-2"></i>Components
  </h6>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-search mr-2"></i>Search Bar: At the top of the candidates' list, the search bar allows recruiters to search for a specific candidate by name or other criteria.</li>
    <li><i className="fas fa-filter mr-2"></i>Filter by Job Openings Dropdown:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>This dropdown enables the user to filter candidates by the job opening they applied for, such as Software Developer, HR Executive, etc.</li>
        <li><i className="fas fa-circle mr-2"></i>Search within the dropdown: If there are many job openings, you can search by job title to make the filtering faster.</li>
      </ul>
    </li>
    <li><i className="fas fa-table mr-2"></i>Candidates Table:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>Name: The name of the candidate.</li>
        <li><i className="fas fa-circle mr-2"></i>Job Opening: The job role the candidate applied for.</li>
        <li><i className="fas fa-circle mr-2"></i>Rating: The rating assigned to the candidate (can be starred from 1 to 5).</li>
        <li><i className="fas fa-circle mr-2"></i>Status: The current status of the candidate (e.g., New, Reviewed, Hired, etc.).</li>
        <li><i className="fas fa-circle mr-2"></i>Applied Date: The date when the candidate applied for the job.</li>
      </ul>
    </li>
  </ul>
</section>

{/* Section 4.2.2: Detailed Candidate Profile */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-id-card mr-2"></i>Detailed Candidate Profile
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    When you click the arrow icon next to a candidate’s name, the system redirects you to the candidate's detailed profile page, where you can see more information and take specific actions.
  </p>
  
</section>

{/* Section 4.2.2.1: Sections in the Candidate Profile */}
<section className="mb-10">
  <h6 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-folder-open mr-2"></i>Sections in the Candidate Profile
  </h6>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-circle mr-2"></i>Overview Tab:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>Displays basic candidate information, such as:</li>
        <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
          <li><i className="fas fa-circle mr-2"></i>Job Title: Position the candidate applied for.</li>
          <li><i className="fas fa-circle mr-2"></i>Application Status: Rating, job opening, and application status.</li>
          <li><i className="fas fa-circle mr-2"></i>Personal Info: Contact information like mobile number, email, LinkedIn URL, etc.</li>
        </ul>
      </ul>
    </li>
    <li><i className="fas fa-star mr-2"></i>Rating Section: You can rate the candidate on a scale of 1 to 5 stars. The rating system is useful for tracking the candidate’s performance in interviews or during the screening process.</li>
    <li><i className="fas fa-briefcase mr-2"></i>Job Title & Status: The job title (position applied for) and status (such as "New" or "Reviewed") of the candidate are displayed here.</li>
  </ul>
</section>

{/* Section 4.2.3: Tabs in Candidate Profile */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-book mr-2"></i>Tabs in Candidate Profile
  </h5>
  <img src="/assets/m107.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-circle mr-2"></i>Overview Tab: This tab shows the essential details of the candidate, such as:</li>
    <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
      <li><i className="fas fa-circle mr-2"></i>Personal Information</li>
      <li><i className="fas fa-circle mr-2"></i>Job Position Applied For</li>
      <li><i className="fas fa-circle mr-2"></i>Rating</li>
      <li><i className="fas fa-circle mr-2"></i>Application Status</li>
    </ul>
    <li><i className="fas fa-comment mr-2"></i>Comments Tab:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>Here, you can add internal comments about the candidate.</li>
        <li><i className="fas fa-circle mr-2"></i>These comments might include feedback from interviews, qualifications, or anything the recruiter feels is important to note.</li>
        <li><i className="fas fa-circle mr-2"></i>After writing a comment, you can click Submit to add it to the candidate's profile.</li>
      </ul>
    </li>
    <li><i className="fas fa-file-signature mr-2"></i>Offers Tab:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>This tab shows the history of offer letters sent to the candidate.</li>
        <li><i className="fas fa-circle mr-2"></i>If no offer has been made, you’ll see a message like "Offer letters history is empty."</li>
        <li><i className="fas fa-circle mr-2"></i>Create Offer Letter button: If an offer needs to be sent, click this button to generate the offer letter.</li>
      </ul>
    </li>
    <li><i className="fas fa-clipboard-list mr-2"></i>Assessment Form Tab:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>This tab allows you to schedule an interview first before filling out the assessment form.</li>
        <li><i className="fas fa-circle mr-2"></i>The system will prompt you with a message: "Schedule an interview first to fill the assessment form."</li>
      </ul>
    </li>
  </ul>
</section>

{/* Section 4.2.4: Create Offer Letter */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-file-alt mr-2"></i>Create Offer Letter
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    This section allows recruiters to send official job offer letters to candidates.
  </p>
  <img src="/assets/m108.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <img src="/assets/m109.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <h6 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-arrow-right mr-2"></i>Steps to Create an Offer Letter:
  </h6>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-arrow-right mr-2"></i>Click the "Create Offer Letter" Button: Located in the candidate’s profile, click this button to open the offer letter generation form.</li>
    <li><i className="fas fa-arrow-right mr-2"></i>Offer Letter Form:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>Candidate Name: Automatically filled in with the candidate's name.</li>
        <li><i className="fas fa-circle mr-2"></i>Designation: Select the position the candidate is being offered.</li>
        <li><i className="fas fa-circle mr-2"></i>Start Date & Expiry Date: Set the candidate’s start date and the offer expiration date.</li>
        <li><i className="fas fa-circle mr-2"></i>Salary & Pay Group: Set the salary and pay group.</li>
        <li><i className="fas fa-circle mr-2"></i>The form auto-generates a formal offer letter.</li>
      </ul>
    </li>
    <li><i className="fas fa-arrow-right mr-2"></i>Send for Approval: Once all details are entered, you can send the letter for approval.</li>
  </ul>
</section>

{/* Section 4.2.4.2: Rating Candidates */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-star mr-2"></i>Rating Candidates
  </h5>
  <img src="/assets/m110.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Recruiters can assign a rating to each candidate based on their qualifications, skills, interview performance, etc.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The rating system uses a 5-star scale (1 to 5 stars). This helps in easily categorizing candidates based on their skills and qualifications.
  </p>
</section>

{/* Section 4.2.4.3: Application Details */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-address-card mr-2"></i>Application Details
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Displays additional application details:
  </p>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-circle mr-2"></i>Mobile Number</li>
    <li><i className="fas fa-circle mr-2"></i>Email Address</li>
    <li><i className="fas fa-circle mr-2"></i>Desired Salary</li>
    <li><i className="fas fa-circle mr-2"></i>LinkedIn URL (if provided)</li>
    <li><i className="fas fa-circle mr-2"></i>Job title applying for</li>
  </ul>
</section>

{/* Section 4.2.4.4: Candidate Status Updates */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-sync-alt mr-2"></i>Candidate Status Updates
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    Status: The status of the candidate can be updated from the following options:
  </p>
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-circle mr-2"></i>New</li>
    <li><i className="fas fa-circle mr-2"></i>Reviewed</li>
    <li><i className="fas fa-circle mr-2"></i>Hired</li>
    <li><i className="fas fa-circle mr-2"></i>Rejected</li>
  </ul>
</section>

{/* Section 4.2.5: Filtering and Sorting */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-filter mr-2"></i>Filtering and Sorting
  </h5>
  <img src="/assets/m111.png" alt="Recruiting Module Overview" className="w-full mt-4" />
  <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
    <li><i className="fas fa-circle mr-2"></i>Filter by Job Opening: This dropdown helps you filter candidates based on the job role they applied for (e.g., Software Developer, Accountant, HR Executive, etc.).</li>
    <li><i className="fas fa-circle mr-2"></i>Sorting: You can sort candidates by the following attributes:
      <ul className="list-inside pl-4 mt-2 text-lg text-gray-700">
        <li><i className="fas fa-circle mr-2"></i>Name</li>
        <li><i className="fas fa-circle mr-2"></i>Job Opening</li>
        <li><i className="fas fa-circle mr-2"></i>Rating</li>
        <li><i className="fas fa-circle mr-2"></i>Status</li>
        <li><i className="fas fa-circle mr-2"></i>Applied Date</li>
      </ul>
    </li>
  </ul>
</section>

{/* Section 4.2.6: Conclusion */}
<section className="mb-10">
  <h5 className="text-lg font-semibold text-gray-800 mt-4">
    <i className="fas fa-check mr-2"></i>Conclusion
  </h5>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    The Candidates Submodule within the Recruiting Module is essential for efficiently managing applicants throughout the hiring process. By using this submodule, recruiters can easily track applications, rate candidates, and streamline the process of offering and onboarding new talent.
  </p>
  <p className="text-lg text-gray-700 leading-relaxed text-justify">
    By following the steps outlined in this guide, you will be able to fully utilize the features of the Candidates Submodule to effectively recruit, review, and manage job applicants.
  </p>
</section>


      </div>

      </>
    );
  };
  
  export default RecruitingModuleDocumentation;
  