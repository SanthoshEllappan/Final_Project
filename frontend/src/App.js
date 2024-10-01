import { Routes, Route } from 'react-router-dom';
import EmployeeIntro from './components/Home/Home';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';
import SkillsAssessment from './components/SkillsAssessment';
import TrainingDevelopment from './components/TrainingDevelopment';
import ProjectsAchievements from './components/ProjectsAchievements';
import AdditionalSkills from './components/AdditionalSkills';
import AddUser from './components/Admin/AddUser';
import AdminHome from './components/Admin/AdminHome';
import EditUser from './components/Admin/EditUser';
import { ProtRouteAdmin } from './components/auth/ProtRouteAdmin';
import { ProtRouteUser } from './components/auth/ProtRouteUser';
import { AuthProvider } from './components/AuthRouter';
import SignUp from './components/SignUp/SignUpForm';
const App = () => {
  return (
    <AuthProvider>
      <Routes>
             {/* <Route path='/login' element={<SignIn />} /> */}
      <Route path='/signup' element={<SignUp />} />
        <Route path="/" element={<ProtRouteUser><EmployeeIntro/></ProtRouteUser>}>
          <Route path="certifications" element={<Certifications />} />
          <Route path="work-experience" element={<WorkExperience />} />
          <Route path="skills-assessment" element={<SkillsAssessment />} />
          <Route path="training-development" element={<TrainingDevelopment />} />
          <Route path="projects-achievements" element={<ProjectsAchievements />} />
          <Route path="additional-skills" element={<AdditionalSkills />} />
        <Route path='*' element={<h1>No page avialable</h1>} />
        </Route>
     
          <Route path='/admin' element={<ProtRouteAdmin><AdminHome /></ProtRouteAdmin>} />
        <Route path='/admin/addUser' element={<ProtRouteAdmin><AddUser /></ProtRouteAdmin>} />
        <Route path='/admin/editUser' element={<ProtRouteAdmin><EditUser /></ProtRouteAdmin>} />
      </Routes>
      
      </AuthProvider>
  );
};

export default App;

