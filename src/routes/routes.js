import Signup from '../auth/signup.jsx';
import Login  from '../auth/Login.jsx'
import DashboardLayout from '../components/DashboardLayout.jsx'
const routes = [
  // Example protected route
  // { path: '/dashboard', component: <Dashboard />, protected: true },
  { path: '/signup', component: <DashboardLayout />, protected: false },
  { path: "/login", component: <Login />, protected: false },
];

export default routes;
