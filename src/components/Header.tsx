import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600">
              Issue Tracker
            </Link>
            <p className="text-gray-600">Report and track issues efficiently</p>
          </div>
          <div className="flex gap-4">
            <Link to="/issues" className="text-blue-600 hover:text-blue-800">
              View Issues
            </Link>
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Login
            </Link>
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;