
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Example function to handle logout
  const handleLogout = () => {
    // Clear any authentication tokens or user data
    localStorage.removeItem('token');
    // Redirect to the login page
    navigate('/signin');
  };

  return (
    <div>
      <h1>Welcome to your Dashboard!</h1>
      <p>This is a protected route. Only authenticated users can access this page.</p>
      
      {/* Example of user-specific content */}
      <div>
        <h2>Your Profile</h2>
        <p>Email: user@example.com</p>
        <p>Role: User</p>
        {/* Add more user-specific information as needed */}
      </div>

      {/* Logout button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
