import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
const [certifications, setCertifications] = useState("");
const handleCertificationsChange = (event) => {
setCertifications(event.target.value);
};
const [courses, setCourses] = useState("");
const handleCoursesChange = (event) => {
setCourses(event.target.value);
};
const [toDoList, setToDoList] = useState([
{ task: "Task 1", priority: "High", completed: false },
{ task: "Task 2", priority: "Medium", completed: true },
{ task: "Task 3", priority: "Low", completed: false },
]);
const handleAddTask = () => {
const newTask = {
task: "New Task",
priority: "Low",
completed: false,
};
setToDoList([...toDoList, newTask]);
};
const handleTaskChange = (event, index) => {
const { name, value, type, checked } = event.target;
setToDoList((prevList) => {
const newList = [...prevList];
if (type === "checkbox") {
newList[index].completed = checked;
} else {
newList[index][name] = value;
}
return newList;
});
};
const handleFileUpload = (event) => {
const file = event.target.files[0];
const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
if (allowedTypes.includes(file.type)) {
// code to handle file upload
} else {
alert("Only JPG, PNG, and PDF files are allowed.");
}
};

return (

<div className="container-fluid">
<header className="bg-primary text-white d-flex align-items-center">
<img
src="https://static.theprint.in/wp-content/uploads/2022/06/UnADASDtitled-6220220615105941.jpg"
alt="Company Logo"
className="bg-primary"
style={{ height: '100px', width: '160px', marginRight: '20px' }}
/>
<h2 className="font-weight-bold">Admin Login</h2>
<input
type="text"
placeholder="Search"
className="form-control"
style={{ fontSize: '16px' }}
/>
<a href="logout.html" className="text-white ml-3">
<FaSignOutAlt /> Logout
</a>
</header>
<div className="row mt-3">
<div className="col-md-4">
<div className="card">
<h5 className="card-header font-weight-bold">User Profile</h5>
<div className="card-body d-flex flex-column align-items-center">
<img
src="https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png"
alt=""
style={{ height: '100px', width: '100px' }}
/>
<div className="my-3">
<div className="font-weight-bold">Employee ID: 12345</div>
<div className="font-weight-bold">admin Name: John Doe</div>
</div>
</div>
</div>
</div>
<div className="col-md-8">
<div className="card">
<div className="card-header font-weight-bold d-flex justify-content-between align-items-center">
<span>Certifications & Courses</span>
<button className="btn btn-primary" onClick={handleAddTask}>Add Task</button>
</div>
<div className="card-body">
<div className="form-group">
<label htmlFor="certifications">Certifications:</label>
<input type="text" className="form-control" id="certifications" value={certifications} onChange={handleCertificationsChange} />
</div>
<div className="form-group">
<label htmlFor="courses">Courses:</label>
<input type="text" className="form-control" id="courses" value={courses} onChange={handleCoursesChange} />
</div>
<table className="table">
<thead>
<tr>
<th scope="col">Task</th>
<th scope="col">Priority</th>
<th scope="col">Completed</th>
</tr>
</thead>
<tbody>
  {toDoList.map((task, index) => (
    <tr key={index}>
      <td>
        <input
          type="text"
          name="task"
          value={task.task}
          onChange={(event) => handleTaskChange(event, index)}
        />
      </td>
      <td>
        <select
          name="priority"
          value={task.priority}
          onChange={(event) => handleTaskChange(event, index)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </td>
      <td>
        <input
          type="checkbox"
          name="completed"
          checked={task.completed}
          onChange={(event) => handleTaskChange(event, index)}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            const newList = [...toDoList];
            newList.splice(index, 1);
            setToDoList(newList);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

</table>
<div className="form-group">
<label htmlFor="file-upload">Upload File:</label>
<input type="file" className="form-control-file" id="file-upload" onChange={handleFileUpload} />
<div className="d-flex justify-content-end">
  <button className="btn btn-primary" type="submit">
    Submit
  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}
export default Header;