import { Routes, Route } from 'react-router-dom';
import EmployeeIntro from './components/Home/Home';
import Certifications from './components/Certifications';
import SoftSkillsForm from './components/softskills';
import SkillsAssessment from './components/SkillsAssessment';
import TrainingDevelopment from './components/TrainingDevelopment';
import ProjectsAchievements from './components/ProjectsAchievements';
import EmployeeDetailsForm from './components/personaldetails';
import AddUser from './components/Admin/AddUser';
import AdminHome from './components/Admin/AdminHome';
import EditUser from './components/Admin/EditUser';
import { ProtRouteAdmin } from './components/auth/ProtRouteAdmin';
import { ProtRouteUser } from './components/auth/ProtRouteUser';
import { AuthProvider } from './components/AuthRouter';
import SignUp from './components/SignUp/SignUpForm';
import EmployeeDashboard from './components//Home/EmployeeDashboard'; // Import your dashboard component


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtRouteUser><EmployeeIntro/></ProtRouteUser>}>
          <Route path="dashboard" element={<EmployeeDashboard />} /> {/* Dashboard route */}
          <Route path="certifications" element={<Certifications />} />
          <Route path="soft" element={<SoftSkillsForm />} />
          <Route path="skills-assessment" element={<SkillsAssessment />} />
          <Route path="training-development" element={<TrainingDevelopment />} />
          <Route path="projects-achievements" element={<ProjectsAchievements />} />
          <Route path="details" element={<EmployeeDetailsForm />} />
          <Route path="*" element={<h1>No page available</h1>} />
        </Route>
        <Route path='/admin' element={<ProtRouteAdmin><AdminHome /></ProtRouteAdmin>} />
        <Route path='/admin/addUser' element={<ProtRouteAdmin><AddUser /></ProtRouteAdmin>} />
        <Route path='/admin/editUser' element={<ProtRouteAdmin><EditUser /></ProtRouteAdmin>} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
