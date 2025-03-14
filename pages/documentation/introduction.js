import React from "react"; 

const Introduction = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          <i className="fas fa-info-circle mr-2"></i>Introduction to Cirrus HRIS System
        </h1>

        {/* Section 1: Overview */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-clipboard mr-2"></i>Overview
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Welcome to the <strong>Cirrus HRIS System</strong>, a powerful and user-friendly 
            <strong> Human Resource Information System (HRIS)</strong> designed to simplify HR processes, 
            enhance workforce management, and optimize organizational efficiency. The system provides an 
            integrated approach to <strong>employee management, payroll processing, attendance tracking, 
            recruitment, and event management</strong>, ensuring a seamless experience for HR teams and employees alike.
          </p>
        </section>

        {/* Section 2: Purpose of HRIS System */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-bullseye mr-2"></i>Purpose of the HRIS System
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            The primary goal of the Cirrus HRIS System is to digitalize and streamline HR functions, 
            replacing manual paperwork and spreadsheets with an <strong>automated, secure, and scalable</strong> solution.
            The system ensures accuracy, compliance, and transparency while managing employee records, 
            attendance, salaries, recruitment, and organizational activities.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-check-circle mr-2"></i>Key Objectives:
          </h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><i className="fas fa-arrow-right mr-2"></i>Provide a <strong>centralized platform</strong> for all HR operations.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>Improve <strong>efficiency</strong> by automating repetitive HR tasks.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>Enhance <strong>accuracy</strong> in payroll, attendance, and employee data management.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>Facilitate <strong>real-time tracking</strong> of workforce activities.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>Support <strong>decision-making</strong> with data analytics and reports.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>Ensure <strong>compliance</strong> with labor laws and company policies.</li>
          </ul>
        </section>

        {/* Section 3: User Roles & Permissions */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-users-cog mr-2"></i>Who Can Use This System?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            The Cirrus HRIS System is designed for <strong>HR professionals, managers, and employees</strong> within 
            an organization. The system offers role-based access control, ensuring that users can access relevant 
            features based on their responsibilities.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-user-shield mr-2"></i>User Roles & Permissions:
          </h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><strong>HR Administrators:</strong> Full control over HR modules, including employee records, payroll, and system settings.</li>
            <li><strong>Recruiters:</strong> Manage job postings, candidate applications, and hiring processes.</li>
            <li><strong>Managers:</strong> Oversee department-wise employee details, attendance, leave requests, and reports.</li>
            <li><strong>Employees:</strong> Access personal profiles, submit leave requests, view payroll details, and update their information.</li>
          </ul>
        </section>

        {/* Section 4: Key Features */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-cogs mr-2"></i>Key Features of Cirrus HRIS System
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-user mr-2"></i>Employee Management
          </h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li>Maintain employee profiles, including personal details, contact information, and bank details.</li>
            <li>Track employment status (active, inactive, resigned, or terminated).</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-clipboard-check mr-2"></i>Recruitment & Candidate Management
          </h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li>Track candidate applications, interviews, and hiring status.</li>
            <li>Automate the creation and approval of offer letters.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-calendar-day mr-2"></i>Attendance & Leave Tracking
          </h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li>Monitor daily attendance records, check-in and check-out times.</li>
            <li>Enable employees to apply for leave and managers to approve/reject requests.</li>
          </ul>
        </section>

        {/* Section 5: System Navigation */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-map-signs mr-2"></i>System Navigation & User Guide
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            This guide covers step-by-step instructions for each module, such as Logging In, Dashboard Overview, Employee Records, Payroll Processing, etc.
          </p>
        </section>

        {/* Section 6: System Benefits */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-trophy mr-2"></i>System Benefits
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-users mr-2"></i>For HR Teams:
          </h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><strong>Saves Time:</strong> Automates tasks like payroll, recruitment, and leave tracking.</li>
            <li><strong>Enhances Decision-Making:</strong> Provides real-time analytics and HR insights.</li>
          </ul>
        </section>

        {/* Section 7: Conclusion */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-thumbs-up mr-2"></i>Conclusion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            The Cirrus HRIS System is designed to <strong>empower HR teams, simplify HR operations, and enhance employee engagement</strong>.
            By using this system, organizations can <strong>save time, improve accuracy, and ensure compliance</strong> with HR policies.
          </p>
        </section>
      </div>
    </>
  );
};

export default Introduction;
