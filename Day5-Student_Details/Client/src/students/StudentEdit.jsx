import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../PageHeader/NavBar";
import axios from 'axios'
function StudentEdit() {
    const [student, setStudent] = useState({id:'',name:'',usn:'',branch:''});
    const params= useParams();
    const navigate = useNavigate();
    const txtBoxOnChange = event => {
        const updatableStudent = {...student};
        updatableStudent[event.target.id] = event.target.value;
        setStudent(updatableStudent);
    };
    const readById = async () => {
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.get(`${baseUrl}/students/${params.id}`)
            const queriedStudent = response.data;
            setStudent(queriedStudent);
        } catch(error) {
            alert('Server Error');
        }
    };
    const updateStudent = async () => {
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.put(`${baseUrl}/students/${params.id}`,{...student})
            const updatedStudent = response.data.student;
            setStudent(updatedStudent);
            alert(response.data.message)
            navigate('/students/list')
        } catch(error) {
            alert('Server Error');
        }
    };
    useEffect(() => {
        readById();
    },[]);
    return(
        <>
          <NavBar/>
            <div className="container mt-5">
                <h3 className="mb-4 text-center">Edit Student</h3>
                <div className="card p-4 shadow-lg border-0">
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
                    <button className="btn btn-success"
                        onClick={updateStudent}>Update Student</button>
                </div>
                <div className="d-flex justify-content-start mt-3">
                    <a href="/students/list" className="btn btn-outline-secondary">Go Back</a>
                </div>
            </div>
        </>
    );
}

export default StudentEdit;