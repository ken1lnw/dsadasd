import React, { useState } from 'react';



function R01() {


  // Declare state variables for each input field
  const [date, setDate] = useState('');
  const [subject, setSubject] = useState('');
  const [toWhom, setToWhom] = useState('');
  const [prefix, setPrefix] = useState('นาย');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [educationLevel, setEducationLevel] = useState('ปริญญาตรี');
  const [faculty, setFaculty] = useState('วิศวกรรมศาสตร์และเทคโนโลยี');
  const [major, setMajor] = useState('');
  const [intention, setIntention] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    // Add your logic for form submission here using the state values
    console.log({
      date,
      subject,
      toWhom,
      prefix,
      firstName,
      lastName,
      studentID,
      educationLevel,
      faculty,
      major,
      intention,
      contactNumber,
      email,
    });
  };


  return (
    <>







      {/* <div class="container text-center"> */}

      <h1> คำร้องทั่วไป</h1>


      <div class="row">

        <div class="col-12 ">


          <div class=" col-md-3 form-floating mb-3 ms-auto">
            <input
              type="date"
              class="form-control"
              id="floatingInput"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label for="floatingInput">วันที่</label>
          </div>



          <div class=" col-md-12 form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <label for="floatingInput">เรื่อง</label>
          </div>



          <div class=" col-md-12 form-floating mb-3">
            <input type="text"
              class="form-control"
              id="floatingInput"
              value={toWhom}
              onChange={(e) => setToWhom(e.target.value)}
            />
            <label for="floatingInput">เรียน</label>
          </div>



          <div class="row gx-1">

            <div class="col-md-1 form-floating mb-3">
              <select class="form-select"
                id="floatingSelectGrid"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
              >
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
              <label for="floatingSelectGrid">คำนำหน้า</label>
            </div>

            <div class=" col-md-4 form-floating mb-3">
              <input type="text"
                class="form-control"
                id="floatingInput"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <label for="floatingInput">ชื่อ</label>
            </div>

            <div class=" col-md-4 form-floating mb-3">
              <input type="text"
                class="form-control"
                id="floatingInput"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label for="floatingInput">นามสกุล</label>
            </div>


            <div class=" col-md-3 form-floating mb-3">
              <input type="text"
                class="form-control"
                id="floatingInput"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
              <label for="floatingInput">รหัสนักศึกษา</label>
            </div>

          </div>







          <div class="row gx-1">

            <div class="col-md-2 form-floating mb-3">
              <select
                class="form-select"
                id="floatingSelectGrid"
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
              >
                <option value="ปวช">ปวช.</option>
                <option value="ปวส">ปวส.</option>
                <option selected value="ปริญญาตรี">ปริญญาตรี</option>
                <option value="ปริญญาโท">ปริญญาโท</option>
                <option value="ปริญญาเอก">ปริญญาเอก</option>
              </select>
              <label for="floatingSelectGrid">ระดับการศึกษา</label>
            </div>

            <div class=" col-md-5 form-floating mb-3">
              <select
                class="form-select"
                id="floatingSelectGrid"
                value={faculty}
                onChange={(e) => setFaculty(e.target.value)}
              >
                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
              </select>
              <label for="floatingSelectGrid">คณะ</label>
            </div>

            <div class=" col-md-5 form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
              <label for="floatingInput">สาขาวิชา</label>
            </div>

          </div>





          <div class=" col-md-12 form-floating mb-3">
            <textarea
              class="form-control"
              id="floatingTextarea"
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
            ></textarea>
            <label for="floatingTextarea">มีความประสงค์</label>
          </div>




          <div class="row gx-1">


            <div class=" col-md-6 form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <label for="floatingInput">เบอร์โทรติดต่อนักศึกษา</label>
            </div>

            <div class=" col-md-6 form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">อีเมลติดต่อนักศึกษา</label>
            </div>

          </div>




          <div class="d-grid gap-2 col-md-6 my-3 mx-auto ">
            <button class="btn btn-primary" type="button" onClick={handleSubmit} >ส่งคำร้อง</button>
          </div>






        </div>

      </div>
      {/* </div> */}






    </>
  );
}

export default R01;
