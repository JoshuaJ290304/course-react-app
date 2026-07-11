import React, { useState } from "react";
import axios from "axios";

const InsertCourse = () => {

  const [input, setInput] = useState({
    courseName: "",
    courseCode: "",
    courseDuration: "",
    courseFee: ""
  });

  const [message, setMessage] = useState("");

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const readValues = () => {

    axios.post(
      "YOUR_POST_API_URL",
      input
    )
    .then((response) => {
      setMessage("Course added successfully.");
    })
    .catch(() => {
      setMessage("Failed to add course.");
    });

  };

  return (
    <div className="container mt-5">
      <div className="card shadow">

        <div className="card-header bg-primary text-white text-center">
          <h3>Insert Course</h3>
        </div>

        <div className="card-body">

          {message && (
            <div className="alert alert-info">
              {message}
            </div>
          )}

          <div className="mb-3">
            <label>Course Name</label>
            <input
              className="form-control"
              name="courseName"
              value={input.courseName}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3">
            <label>Course Code</label>
            <input
              className="form-control"
              name="courseCode"
              value={input.courseCode}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3">
            <label>Course Duration</label>
            <input
              className="form-control"
              name="courseDuration"
              value={input.courseDuration}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3">
            <label>Course Fee</label>
            <input
              className="form-control"
              name="courseFee"
              value={input.courseFee}
              onChange={inputHandler}
            />
          </div>

          <button
            className="btn btn-success"
            onClick={readValues}
          >
            Submit
          </button>

        </div>

      </div>
    </div>
  );
};

export default InsertCourse;