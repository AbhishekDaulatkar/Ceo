import './App.css';
import ShowAllEmp from './Employee/ShowAllEmp';
import AddEmployee from './Employee/AddEmployee';
import AddCeo from './Ceo/AddCeo';
import ShowAllCeo from './Ceo/ShowAllCeo';
import UpdateCeo from './Ceo/UpdateCeo';
import DeleteCeo from './Ceo/DeleteCeo';
import ShowSpecificCeo from './Ceo/ShowSpecificCeo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UpdateEmployee from './Employee/UpdateEmployee';
import DeleteEmployee from './Employee/DeleteEmployee';
import ShowSpecificEmployee from './Employee/ShowSpecificEmployee';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Form } from 'react-bootstrap';

function App() {
  return (
   <>
    <BrowserRouter>
    <div className="App">
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/ShowAllEmp'>All Employees</Nav.Link>
            <Nav.Link href="Contactus">Contactus</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="AddEmployee">Add new</Nav.Link>
            <Nav.Link href="UpdateEmployee">Update Employee</Nav.Link>
            <Nav.Link href="DeleteEmployee">Delete Employee</Nav.Link>
            <Nav.Link href="ShowSpecificEmployee">ShowSpecificEmployee</Nav.Link>
            <Nav.Link href="AddCeo">Add Ceo</Nav.Link>
            <Nav.Link href="ShowAllCeo">ShowAllCeo</Nav.Link>
            <Nav.Link href="UpdateCeo">UpdateCeo</Nav.Link>
            <Nav.Link href="DeleteCeo">DeleteCeo</Nav.Link>
            <Nav.Link href="ShowSpecificCeo">ShowSpecificCeo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/ShowAllEmp' element={<ShowAllEmp/>}></Route>
        <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
        <Route path='/UpdateEmployee' element={<UpdateEmployee/>}></Route>
        <Route path='/DeleteEmployee' element={<DeleteEmployee/>}></Route>
        <Route path='/ShowSpecificEmployee' element={<ShowSpecificEmployee/>}></Route>
        <Route path='/AddCeo' element={<AddCeo/>}></Route>
        <Route path='/ShowAllCeo' element={<ShowAllCeo/>}></Route>
        <Route path='/UpdateCeo' element={<UpdateCeo/>}></Route>
        <Route path='/DeleteCeo' element={<DeleteCeo/>}></Route>
        <Route path='/ShowSpecificCeo' element={<ShowSpecificCeo/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
    </>
  );
}

export default App;