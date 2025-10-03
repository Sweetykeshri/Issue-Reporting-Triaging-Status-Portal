import { useParams, Link } from 'react-router-dom';

function IssueDetail() {
  const { id } = useParams();
  
  const issue = {
    id: 'ISS-001',
    title: 'Login page not loading properly',
    description: 'When I try to login, the page shows a white screen after entering credentials. This happens consistently across different browsers.',
    status: 'Open',
    priority: 'High',
    severity: 'Critical',
    reportedBy: 'john.doe@email.com',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-16'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        to="/issues" 
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block"
      >
        ← Back to Issues
      </Link>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="border-b pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {issue.title}
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-lg font-mono text-gray-500">
              #{issue.id}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              {issue.status}
            </span>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              {issue.priority}
            </span>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Description</h3>
          <p className="text-gray-700 leading-relaxed">{issue.description}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Reported By</p>
            <p className="font-medium">{issue.reportedBy}</p>
          </div>
          <div>
            <p className="text-gray-500">Created</p>
            <p className="font-medium">{issue.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueDetail;