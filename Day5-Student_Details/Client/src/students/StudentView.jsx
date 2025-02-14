import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../PageHeader/NavBar";
import axios from 'axios'
function StudentView() {
    const [student, setStudent] = useState({id:'',name:'',usn:'',branch:''});
    const params= useParams();
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
    useEffect(() => {
        readById();
    },[]);
    return(
        <>
            <NavBar/>
            <div className="container mt-5">
                <h3 className="mb-4 text-center">View Student</h3>
                <div className="card p-4 shadow-lg border-0">
                    <div className="form-group mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <div className="form-control" id="name">{student.name}</div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="usn" className="form-label">USN:</label>
                        <div className="form-control" id="usn">{student.usn}</div>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="branch" className="form-label">Branch:</label>
                        <div className="form-control" id="branch">{student.branch}</div>
                    </div>
                </div>
                <div className="d-flex justify-content-start mt-3">
                    <a href="/students/list" className="btn text-dark btn-info">Go Back</a>
                </div>
            </div>
        </>
    );
}

export default StudentView;