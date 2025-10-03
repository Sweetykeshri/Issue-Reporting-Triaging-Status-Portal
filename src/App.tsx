import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import CreateIssue from './components/CreateIssue';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/issues" element={<IssueList />} />
          <Route path="/issues/:id" element={<IssueDetail />} />
          <Route path="/create-issue" element={<CreateIssue />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;