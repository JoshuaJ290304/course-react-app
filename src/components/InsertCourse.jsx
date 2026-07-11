import React, { useState } from "react";
import axios from "axios";

const API_URL = "https://host-demo-app.onrender.com/api/add-course";

const InsertCourse = () => {
  const [input, setInput] = useState({
    course_name: "",
    duration: "",
    fee: "",
    mode: "",
    trainer: ""
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = () => {
    axios
      .post(API_URL, {
        course_name: input.course_name,
        duration: input.duration,
        fee: Number(input.fee),
        mode: input.mode,
        trainer: input.trainer
      })
      .then(() => {
        setMessage("Course added successfully.");
        setMessageType("success");

        setInput({
          course_name: "",
          duration: "",
          fee: "",
          mode: "",
          trainer: ""
        });
      })
      .catch((error) => {
        console.log(error);
        setMessage("Failed to add course.");
        setMessageType("danger");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-7">

          <div className="card shadow">

            <div className="card-header bg-primary text-white text-center">
              <h3>Insert Course</h3>
            </div>

            <div className="card-body">

              {message !== "" && (
                <div className={`alert alert-${messageType}`}>
                  {message}
                </div>
              )}

              <div className="mb-3">
                <label className="form-label">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="course_name"
                  value={input.course_name}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Duration</label>
                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  value={input.duration}
                  onChange={inputHandler}
                  placeholder="Eg: 7 Days"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Fee</label>
                <input
                  type="number"
                  className="form-control"
                  name="fee"
                  value={input.fee}
                  onChange={inputHandler}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mode</label>
                <select
                  className="form-select"
                  name="mode"
                  value={input.mode}
                  onChange={inputHandler}
                >
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Trainer</label>
                <input
                  type="text"
                  className="form-control"
                  name="trainer"
                  value={input.trainer}
                  onChange={inputHandler}
                />
              </div>

              <div className="d-grid">
                <button
                  className="btn btn-success"
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default InsertCourse;