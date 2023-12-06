
import React, { useState } from 'react';



function R23() {

    const [date, setDate] = useState('');
    const [toWhom, setToWhom] = useState('');
    const [prefix, setPrefix] = useState('นาย');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [educationLevel, setEducationLevel] = useState('ปริญญาตรี');
    const [faculty, setFaculty] = useState('วิศวกรรมศาสตร์และเทคโนโลยี');
    const [major, setMajor] = useState('');
    const [year, setYear] = useState('');
    const [yearleft, setYearLeft] = useState('');
    const [studyPeriod, setStudyPeriod] = useState('ภาคปกติ');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [leaveType, setLeaveType] = useState('ลาป่วย');
    const [leaveDuration, setLeaveDuration] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reason, setReason] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = () => {
        console.log({
            date,
            toWhom,
            prefix,
            firstName,
            lastName,
            studentID,
            educationLevel,
            faculty,
            major,
            year,
            yearleft,
            studyPeriod,
            contactNumber,
            email,
            leaveType,
            leaveDuration,
            startDate,
            endDate,
            reason,
            file,
        });
        // Add your logic for form submission here
    };

    return (
        <>





            {/* <div class="container text-center"> */}


            <h1>คำร้องขอลาป่วย/ลากิจ</h1>


            <div class="row g-0">

                <div class="col-12 ">


                    <div class=" col-md-3 form-floating mb-3 ms-auto">
                        <input type="date"
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
                            value={toWhom}
                            onChange={(e) => setToWhom(e.target.value)}
                        />
                        <label for="floatingInput">เรียน อาจารย์ผู้สอนประจำวิชา</label>
                    </div>



                    <div class="row gx-1">

                        <div class="col-md-1 form-floating mb-3">
                            <select
                                class="form-select"
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
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label for="floatingInput">ชื่อ</label>
                        </div>

                        <div class=" col-md-4 form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label for="floatingInput">นามสกุล</label>
                        </div>


                        <div class=" col-md-3 form-floating mb-3">
                            <input
                                type="text"
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




                    <div class="row gx-1">


                        <div class=" col-md-2 form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <label for="floatingInput">ชั้นปีที่</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={yearleft}
                                onChange={(e) => setYearLeft(e.target.value)}
                            />
                            <label for="floatingInput">ระยะเวลาศึกษา(ปี)</label>
                        </div>


                        <div class="col-md-2 form-floating mb-3">
                            <select
                                class="form-select"
                                id="floatingSelectGrid"
                                value={studyPeriod}
                                onChange={(e) => setStudyPeriod(e.target.value)}
                            >
                                <option value="ภาคปกติ">ปกติ</option>
                                <option value="ภาคสมทบ">สมทบ</option>
                            </select>
                            <label for="floatingSelectGrid">ภาค</label>
                        </div>

                    </div>




                    <div class="row gx-1 mb-5">


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







                    <div class="row gx-1">


                        <div class=" col-md-12  ms-2 mb-3">
                            <label for="มีความประสงค์ลงทะเบียนเทียบรายวิชาใน" >มีความประสงค์ขอ</label>
                        </div>



                        <div class=" col-md-2 form-floating mb-3">
                            <select
                                class="form-select"
                                id="floatingSelectGrid"
                                value={leaveType}
                                onChange={(e) => setLeaveType(e.target.value)}
                            >
                                <option value="ปวช">ลาป่วย</option>
                                <option value="ปวส">ลากิจ</option>
                            </select>
                            <label for="floatingSelectGrid">ความประสงค์</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={leaveDuration}
                                onChange={(e) => setLeaveDuration(e.target.value)}

                            />
                            <label for="floatingInput">มีกำหนดระยะเวลา(วัน)</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input
                                type="date"
                                class="form-control"
                                id="floatingInput"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}

                            />
                            <label for="floatingInput">ตั้งแต่วันที่</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input
                                type="date"
                                class="form-control"
                                id="floatingInput"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}

                            />
                            <label for="floatingInput">ถึงวันที่</label>
                        </div>

                    </div>

                    <div class=" col-md-12 form-floating mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="floatingInput"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}

                        />
                        <label for="floatingInput">เนื่องจาก</label>
                    </div>


                    <div class=" col-md-12 mb-3">
                        <label for="formFile" class="form-label">อัพโหลดไฟล์ที่เกี่ยวข้อง (1 ไฟล์)</label>
                        <input
                            className="form-control"
                            type="file"
                            id="formFile"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>



                    <div class="d-grid gap-2 col-md-6 my-3 mx-auto ">
                        <button class="btn btn-primary" type="button" onClick={handleSubmit}>ส่งคำร้อง</button>
                    </div>



                </div>

            </div>


            {/* </div> */}






        </>
    );
}

export default R23;
