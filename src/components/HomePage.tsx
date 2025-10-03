import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Issue Tracker
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Report New Issue</h2>
          <p className="text-gray-600 mb-4">
            Found a problem? Report it here and track its progress.
          </p>
          <Link 
            to="/create-issue"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
          >
            Report Issue
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">View All Issues</h2>
          <p className="text-gray-600 mb-4">
            Browse and search through all reported issues.
          </p>
          <Link 
            to="/issues" 
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-block"
          >
            View Issues
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;