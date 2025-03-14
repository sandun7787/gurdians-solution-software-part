const LoggingInDocumentation = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
          <i className="fas fa-sign-in-alt mr-2"></i>USER GUIDE FOR LOGIN & DASHBOARD
        </h1>
        
        {/* 1.1 Logging In Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-key mr-2"></i>1.1 Apply Login Credentials and Login
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Learn how to apply your login credentials and access the system.
          </p>
          <img
            src="/assets/log.png"
            alt="Login Page"
            className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">
            <i className="fas fa-arrow-right mr-2"></i>Steps to Login:
          </h3>
          <ul className="list-decimal pl-6 mt-2 text-lg text-gray-700">
            <li><i className="fas fa-arrow-right mr-2"></i>Open your web browser and navigate to the Cirrus HRIS login page.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>Enter your Username and Password.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>(Optional) Check the <strong>Remember Me</strong> box to stay logged in.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>Click <strong>Login</strong> to access your dashboard.</li>
            <li><i className="fas fa-arrow-right mr-2"></i>If you forget your password, click on <strong>Forgot Password?</strong> and follow the recovery steps.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-desktop mr-2"></i>1.1.2 Login Page Overview
          </h3>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><i className="fas fa-user mr-2"></i><strong>Username Field:</strong> Enter your registered username.</li>
            <li><i className="fas fa-lock mr-2"></i><strong>Password Field:</strong> Enter your secure password.</li>
            <li><i className="fas fa-check-square mr-2"></i><strong>Remember Me Checkbox:</strong> Allows you to stay signed in.</li>
            <li><i className="fas fa-sign-in-alt mr-2"></i><strong>Login Button:</strong> Click to authenticate and enter the system.</li>
          </ul>
        </section>

        {/* 1.2 Dashboard Overview */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-tachometer-alt mr-2"></i>1.2 Dashboard Overview
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            The dashboard provides a quick overview of HR metrics and activities.
          </p>
          <img src="/assets/m1.png" alt="Dashboard Overview" className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg" />
          
          {/* 1.2.1 Total Staff & Labour Overview */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-6">
            <i className="fas fa-users mr-2"></i>1.2.1 Total Staff & Labour Overview
          </h3>
          <p className="text-lg text-gray-700 mt-2">
            The Total Staff & Labour Overview section provides insights into the workforce distribution in the company. This section includes:
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><i className="fas fa-users mr-2"></i><strong>Total Staff Count:</strong> Displays the total number of employees currently working in the company.</li>
            <li><i className="fas fa-user-check mr-2"></i><strong>Active Employees:</strong> The number of employees who are currently working and engaged in their respective roles.</li>
            <li><i className="fas fa-user-times mr-2"></i><strong>Inactive Employees:</strong> Employees who are not currently active due to reasons such as leave, resignation, or termination.</li>
            <li><i className="fas fa-users mr-2"></i><strong>Total Labour Count:</strong> Shows the total number of workforce personnel, including contract and temporary workers.</li>
            <li><i className="fas fa-user-check mr-2"></i><strong>Active Labour:</strong> Labour personnel currently assigned to projects or actively engaged in work.</li>
            <li><i className="fas fa-user-times mr-2"></i><strong>Inactive Labour:</strong> Labour personnel who are not engaged in any active work or are on hold.</li>
            <li><i className="fas fa-user-plus mr-2"></i><strong>New & Hired Candidates:</strong> Tracks recently added candidates and their hiring status.</li>
            <li><i className="fas fa-sign-out-alt mr-2"></i><strong>Resignations:</strong> Monitors the number of employees who have resigned in the current month.</li>
            <li><i className="fas fa-calendar-day mr-2"></i><strong>Leave Tracking:</strong> Shows the number of leaves taken by employees on a given day.</li>
            <li><i className="fas fa-birthday-cake mr-2"></i><strong>Upcoming Birthdays & Events:</strong> Lists employee birthdays and scheduled HR events.</li>
            <li><i className="fas fa-users mr-2"></i><strong>Employee Gender & Religious Distribution:</strong> Visual representation of employee diversity.</li>
          </ul>
        </section>

        {/* 1.2.2 Calendar and Event Tracking */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-calendar-alt mr-2"></i>1.2.2 Calendar and Event Tracking
          </h2>
          <img src="/assets/m2.png" alt="Calendar Tracking" className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg" />
          <p className="text-lg text-gray-700 mt-2">
            The Event Calendar helps track employee activities, including leaves, holidays, and interviews.
          </p>
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><i className="fas fa-circle mr-2"></i><strong>Color Indicators:</strong></li>
            <ul className="list-disc pl-10">
              <li><i className="fas fa-circle mr-2"></i><strong>Orange:</strong> Represents employee leaves.</li>
              <li><i className="fas fa-circle mr-2"></i><strong>Blue:</strong> Represents company holidays.</li>
              <li><i className="fas fa-circle mr-2"></i><strong>Red:</strong> Represents interview schedules.</li>
            </ul>
            <li><i className="fas fa-arrow-right mr-2"></i>Users can navigate through months and view upcoming events.</li>
            <li><i className="fas fa-eye mr-2"></i>Clicking on <strong>View Your Month</strong> provides a detailed breakdown of the events.</li>
          </ul>
        </section>

        {/* 1.3 Employee Demographics and Analytics */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-chart-pie mr-2"></i>1.3 Employee Demographics and Analytics
          </h2>
          
          {/* 1.3.1 Gender Distribution */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-mars mr-2"></i>1.3.1 Gender Distribution
          </h3>
          <p className="text-lg text-gray-700 mt-2">Gender Distribution: Pie chart displaying the percentage of male, female, and unspecified employees.</p>
          <img src="/assets/m3.png" alt="Gender Distribution" className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg" />
          
          {/* 1.3.2 Religious Distribution */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-praying-hands mr-2"></i>1.3.2 Religious Distribution
          </h3>
          <p className="text-lg text-gray-700 mt-2">Religious Distribution: Breakdown of employee religious affiliations.</p>
          <img src="/assets/m4.png" alt="Religious Distribution" className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg" />
          
          {/* 1.3.3 Birthdays List */}
          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            <i className="fas fa-birthday-cake mr-2"></i>1.3.3 Birthdays List
          </h3>
          <p className="text-lg text-gray-700 mt-2">Birthdays List: Displays upcoming employee birthdays along with names, positions, and contact numbers.</p>
          <img src="/assets/m5.png" alt="Birthdays List" className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg" />
        </section>

        {/* 1.4 Navigation Panel */}
        <section className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            <i className="fas fa-bars mr-2"></i>1.4 Navigation Panel
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            The left sidebar is the primary navigation tool within Cirrus HRIS, allowing users to access different system modules efficiently.
          </p>
          <img src="/assets/m6.png" alt="Navigation Panel" className="w-full max-w-lg mx-auto mt-4 shadow-lg rounded-lg" />
          <ul className="list-disc pl-6 mt-2 text-lg text-gray-700">
            <li><i className="fas fa-tachometer-alt mr-2"></i><strong>Dashboard:</strong> Provides an overview of HR metrics, staff statistics, and key company events.</li>
            <li><i className="fas fa-users mr-2"></i><strong>Employees:</strong> Manage employee records, including hiring, role assignments, and status updates.</li>
            <li><i className="fas fa-user-plus mr-2"></i><strong>Recruiting:</strong> Track the hiring process, view candidate applications, and manage interview schedules.</li>
            <li><i className="fas fa-dollar-sign mr-2"></i><strong>Payroll:</strong> Handle employee salary management, deductions, and benefits.</li>
            <li><i className="fas fa-chart-line mr-2"></i><strong>Reports:</strong> Generate and analyze workforce reports related to attendance, payroll, and employee demographics.</li>
            <li><i className="fas fa-cogs mr-2"></i><strong>Master Details:</strong> Maintain essential employee details, including job roles, departments, and contact information.</li>
            <li><i className="fas fa-plus-circle mr-2"></i><strong>Add/Deduct:</strong> Adjust payroll elements such as bonuses, deductions, and reimbursements.</li>
            <li><i className="fas fa-calendar-alt mr-2"></i><strong>Event Calendar:</strong> View and manage important HR events, including leaves, holidays, and interviews.</li>
            <li><i className="fas fa-envelope mr-2"></i><strong>Inbox:</strong> Receive HR notifications, messages, and important system alerts.</li>
          </ul>
        </section>

        <div className="mt-10 text-center"></div>
      </div>
    </>
  );
};

export default LoggingInDocumentation;
