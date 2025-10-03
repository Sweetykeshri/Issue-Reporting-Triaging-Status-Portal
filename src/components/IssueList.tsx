import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { issueAPI } from '../services/api';

function IssueList() {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      setLoading(true);
      const response = await issueAPI.getAllIssues();
      setIssues(response.data);
      setError('');
    } catch (err) {
      setError('Failed to load issues');
      console.error('Error fetching issues:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Loading issues...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Issues</h1>
      
      <div className="space-y-4">
        {issues.map((issue: any) => (
          <div key={issue.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {issue.title}
                </h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-gray-500">
                    #{issue.id}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    issue.status === 'Open' ? 'bg-blue-100 text-blue-800' :
                    issue.status === 'In Progress' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {issue.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    issue.priority === 'High' ? 'bg-red-100 text-red-800' :
                    issue.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {issue.priority}
                  </span>
                  <span className="text-sm text-gray-500">
                    {issue.createdAt}
                  </span>
                </div>
              </div>
              <Link 
                to={`/issues/${issue.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IssueList;