import { useState } from "react";
import NavBar from "../PageHeader/NavBar";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function StudentCreate() {
    const [student, setStudent] = useState({id:'',name:'',usn:'',branch:''});
    const navigate = useNavigate();
    const txtBoxOnChange = event => {
        const updatableStudent = {...student};
        updatableStudent[event.target.id] = event.target.value; //updatableStudent['type'] = event.target.value;
        setStudent(updatableStudent);
    };
    const createStudent = async () => {
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.post(`${baseUrl}/students`,{...student})
            const createdStudent = response.data.student;
            setStudent(createdStudent);
            alert(response.data.message)
            navigate('/students/list')
        } catch(error) {
            alert('Server Error');
        }
    };
    
    return(
        <>
            <NavBar/>            
            <div className="container mt-5">
                <h3 className="mb-4 text-center">Add Student</h3>
                <div className="card p-4 shadow-sm">
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" 
                            placeholder="Please Enter Student Name"
                            value={student.name} 
                            onChange={txtBoxOnChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="usn" className="form-label">USN:</label>
                        <input type="text" className="form-control" id="usn" 
                            placeholder="Please Enter Student USN"
                            value={student.usn} 
                            onChange={txtBoxOnChange}/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="branch" className="form-label">Branch:</label>
                        <input type="text" className="form-control" id="branch" 
                            placeholder="Please Enter Student Branch"
                            value={student.branch} 
                            onChange={txtBoxOnChange}/>
                    </div>
                    <button className="btn btn-primary"
                        onClick={createStudent}>Create Student</button>
                </div>
                <div className="d-flex justify-content-start mt-3">
                    <a href="/students/list" className="btn btn-outline-secondary">Go Back</a>
                </div>
            </div>
        </>
    );
}

export default StudentCreate;