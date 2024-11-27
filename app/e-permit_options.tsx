export default function EPermit() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">e-Permit Your Classes</h1>
      <p className="text-lg text-gray-600 mb-8">
        Request an e-Permit to take courses at another CUNY campus with ease.
      </p>
      <form className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="student-name"
            className="block text-sm font-medium text-gray-700"
          >
            Student Name
          </label>
          <input
            type="text"
            id="student-name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="course-name"
            className="block text-sm font-medium text-gray-700"
          >
            Course Name
          </label>
          <input
            type="text"
            id="course-name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter course name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="campus"
            className="block text-sm font-medium text-gray-700"
          >
            Target Campus
          </label>
          <input
            type="text"
            id="campus"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter target campus"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit e-Permit Request
        </button>
      </form>
    </div>
  );
}
