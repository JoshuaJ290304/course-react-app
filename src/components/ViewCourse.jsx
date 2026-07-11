import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://host-demo-app.onrender.com/api/courses";

const ViewCourse = () => {
  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-success text-white">
          <h3 className="text-center mb-0">
            View All Courses
          </h3>
        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-striped table-hover">

              <thead className="table-dark">

                <tr>
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Fee</th>
                  <th>Mode</th>
                  <th>Trainer</th>
                  <th>Created At</th>
                </tr>

              </thead>

              <tbody>

                {courses.map((course) => (

                  <tr key={course.id}>
                    <td>{course.course_name}</td>
                    <td>{course.duration}</td>
                    <td>₹{course.fee}</td>
                    <td>{course.mode}</td>
                    <td>{course.trainer}</td>
                    <td>{new Date(course.created_at).toLocaleString()}</td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ViewCourse;