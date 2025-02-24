import Link from "next/link";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer";

const Documentation = () => {
  return (
    <>
      <Navbar /> {/* ✅ Include Navbar */}

      {/* Page Content */}
      <div className="container mx-auto px-6 py-12 mt-20"> {/* Added mt-20 to avoid overlap with Navbar */}
        <h1 className="text-5xl font-extrabold text-black mb-6">Chriss HRIS Documentation</h1>

        {/* Overview Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-gray-600">
            Chriss HRIS is an advanced Human Resource Information System designed to automate employee management, streamline payroll, track attendance, and optimize HR functions for businesses of all sizes.
          </p>
        </section>

        {/* Installation Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Installation Guide</h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">System Requirements</h3>
          <ul className="list-disc ml-6 text-gray-600">
            <li>Operating System: Windows 10/11, macOS, Linux</li>
            <li>Node.js v16+ and npm</li>
            <li>Database: MySQL / PostgreSQL</li>
            <li>Python 3.x for backend automation (if applicable)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-700 mt-4">Installation Steps</h3>
          <pre className="bg-gray-100 p-4 rounded-md mt-2 text-gray-700">
            {`# Clone the repository
git clone https://github.com/chriss-hris.git

# Navigate to the project folder
cd chriss-hris

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Set up the database
# Ensure that MySQL/PostgreSQL is installed and configured correctly

# Start the application
npm run dev
            `}
          </pre>
        </section>

        {/* API Documentation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">API Documentation</h2>
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Get Employee List</h3>
          <pre className="bg-gray-100 p-4 rounded-md mt-2 text-gray-700">
            {`GET /api/employees
Headers:
  Authorization: Bearer <token>

Response:
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "position": "HR Manager",
      "department": "Human Resources",
      "salary": "$5000"
    }
  ]
}`}
          </pre>

          <h3 className="text-xl font-semibold text-gray-700 mt-4">Create New Employee</h3>
          <pre className="bg-gray-100 p-4 rounded-md mt-2 text-gray-700">
            {`POST /api/employees
Headers:
  Authorization: Bearer <token>
Body:
{
  "name": "Jane Smith",
  "position": "Software Developer",
  "department": "Engineering",
  "salary": "$4000"
}

Response:
{
  "status": "success",
  "message": "Employee created successfully"
}`}
          </pre>
        </section>

        {/* Attendance Tracking API */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Track Employee Attendance</h3>
          <pre className="bg-gray-100 p-4 rounded-md mt-2 text-gray-700">
            {`POST /api/attendance
Headers:
  Authorization: Bearer <token>
Body:
{
  "employee_id": 1,
  "date": "2024-05-01",
  "status": "Present"
}

Response:
{
  "status": "success",
  "message": "Attendance recorded successfully"
}`}
          </pre>
        </section>

        {/* Payroll API */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mt-4">Generate Payroll Report</h3>
          <pre className="bg-gray-100 p-4 rounded-md mt-2 text-gray-700">
            {`POST /api/payroll/generate
Headers:
  Authorization: Bearer <token>
Body:
{
  "employee_id": 1,
  "month": "2024-05",
  "gross_salary": "$5000",
  "deductions": "$500",
  "net_salary": "$4500"
}

Response:
{
  "status": "success",
  "message": "Payroll report generated successfully"
}`}
          </pre>
        </section>

        {/* FAQs Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">FAQs</h2>
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-gray-700">How do I reset my password?</h3>
            <p className="text-gray-600">
              Go to <Link href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password</Link> and enter your email to receive reset instructions.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Can I integrate third-party tools?</h3>
            <p className="text-gray-600">Yes! Chriss HRIS supports integrations with Slack, Google Calendar, and more.</p>
          </div>
        </section>
      </div>

      <Footer /> {/* ✅ Include Footer */}
    </>
  );
};

export default Documentation;
