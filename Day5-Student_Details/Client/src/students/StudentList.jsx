import { useEffect, useState } from "react";
import NavBar from "../PageHeader/NavBar";
import axios from 'axios'
function StudentList() {
    const [students, setStudents]= useState([{id:'',name:'',usn:'',branch:''}])
    const readAllStudents = async () => {
        try {
            const baseUrl = 'http://localhost:8080';
            const response = await axios.get(`${baseUrl}/students`);
            const queriedStudents = response.data;
            setStudents(queriedStudents);
        } catch(error) {
            alert('Server Error');
        }
    };
    

    const deleteStudent = async (id) => {
        if(!confirm("Are you sure to delete?")) {
            return;
        }
        const baseUrl = "http://localhost:8080"
        try {
            const response = await axios.delete(`${baseUrl}/students/${id}`)
            alert(response.data.message)
            await readAllStudents();
        } catch(error) {
            alert('Server Error');
        }
    };
    
    useEffect(()=>{
        readAllStudents();
    },[]);
    return (
        <>
        <NavBar/>
        <h3 className="text-center text-2xl font-bold text-indigo-700 mt-4">List of Students</h3>
        <div className="container mt-4">
            <table className="table table-success table-striped table-hover table-bordered border-dark shadow-lg">
                <thead className="table-dark text-center">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Usn</th>
                        <th scope="col">Branch</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {(students && students.length > 0) ? students.map((student, index) => {
                        return (
                            <tr key={student.id} className={`text-center align-middle ${index === 0 ? 'first-row' : ''}`}>
                                <th scope="row">{student.id}</th>
                                <td>{student.name}</td>
                                <td>{student.usn}</td>
                                <td>{student.branch}</td>
                                <td>
                                    <a href={`/students/view/${student.id}`} className="btn btn-success shadow-sm">View</a>
                                    &nbsp;
                                    <a href={`/students/edit/${student.id}`} className="btn btn-warning shadow-sm">Edit</a>
                                    &nbsp;
                                    <button className="btn btn-danger shadow-sm" onClick={() => deleteStudent(student.id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    }) : <tr><td colSpan="5" className="text-center text-danger font-semibold">No Data Found</td></tr>}
                </tbody>
            </table>
        </div>
    </>

    );
}

export default StudentList;