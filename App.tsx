
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { PersonnelList } from './pages/PersonnelList';
import { PersonnelDetail } from './pages/PersonnelDetail';
import { Approvals } from './pages/Approvals';
import { Login } from './pages/Login';
import { MyProfile } from './pages/MyProfile';
import { Templates } from './pages/Templates';
import { SharedForms } from './pages/SharedForms';
import { UnitAssignments } from './pages/UnitAssignments';

// Higher order component for route protection
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <Layout>{children}</Layout>;
};

// Redirect component for Home Page
const HomeRedirect: React.FC = () => {
    const { role } = useAuth();
    
    // Personnel cannot see Dashboard, send them to My Profile
    if (role === 'PERSONNEL') {
        return <Navigate to="/my-profile" replace />;
    }
    
    // Others see Dashboard
    return <Dashboard />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute><HomeRedirect /></ProtectedRoute>} />
          
          <Route path="/my-profile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />

          <Route path="/personnel" element={<ProtectedRoute><PersonnelList /></ProtectedRoute>} />
          <Route path="/personnel/:id" element={<ProtectedRoute><PersonnelDetail /></ProtectedRoute>} />
          <Route path="/approvals" element={<ProtectedRoute><Approvals /></ProtectedRoute>} />
          <Route path="/unit-assignments" element={<ProtectedRoute><UnitAssignments /></ProtectedRoute>} />
          <Route path="/templates" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
          <Route path="/shared-forms" element={<ProtectedRoute><SharedForms /></ProtectedRoute>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
