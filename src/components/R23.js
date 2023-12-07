
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
        // Add your logic value valuem submission here
    };

    return (
        <>





            {/* <div className="container text-center"> */}


            <h1>คำร้องขอลาป่วย/ลากิจ</h1>


            <div className="row g-0">

                <div className="col-12 ">


                    <div className=" col-md-3 valuem-floating mb-3 ms-auto">
                        <input type="date"
                            className="valuem-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <label>วันที่</label>
                    </div>







                    <div className=" col-md-12 valuem-floating mb-3">
                        <input
                            type="text"
                            className="valuem-control"
                            value={toWhom}
                            onChange={(e) => setToWhom(e.target.value)}
                        />
                        <label>เรียน อาจารย์ผู้สอนประจำวิชา</label>
                    </div>



                    <div className="row gx-1">

                        <div className="col-md-1 valuem-floating mb-3">
                            <select
                                className="valuem-select"
                                defaultValue={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                            >
                                <option value="นาย">นาย</option>
                                <option value="นาง">นาง</option>
                                <option value="นางสาว">นางสาว</option>
                            </select>
                            <label>คำนำหน้า</label>
                        </div>

                        <div className=" col-md-4 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label>ชื่อ</label>
                        </div>

                        <div className=" col-md-4 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label>นามสกุล</label>
                        </div>


                        <div className=" col-md-3 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={studentID}
                                onChange={(e) => setStudentID(e.target.value)}
                            />
                            <label>รหัสนักศึกษา</label>
                        </div>

                    </div>







                    <div className="row gx-1">

                        <div className="col-md-2 valuem-floating mb-3">
                            <select
                                className="valuem-select"
                                defaultValue={educationLevel}
                                onChange={(e) => setEducationLevel(e.target.value)}
                            >
                                <option value="ปวช">ปวช.</option>
                                <option value="ปวส">ปวส.</option>
                                <option value="ปริญญาตรี">ปริญญาตรี</option>
                                <option value="ปริญญาโท">ปริญญาโท</option>
                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                            </select>
                            <label>ระดับการศึกษา</label>
                        </div>

                        <div className=" col-md-5 valuem-floating mb-3">
                            <select
                                className="valuem-select"
                                defaultValue={faculty}
                                onChange={(e) => setFaculty(e.target.value)}
                            >
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                            </select>
                            <label>คณะ</label>
                        </div>

                        <div className=" col-md-5 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={major}
                                onChange={(e) => setMajor(e.target.value)}
                            />
                            <label>สาขาวิชา</label>
                        </div>

                    </div>




                    <div className="row gx-1">


                        <div className=" col-md-2 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                            <label>ชั้นปีที่</label>
                        </div>

                        <div className=" col-md-2 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={yearleft}
                                onChange={(e) => setYearLeft(e.target.value)}
                            />
                            <label>ระยะเวลาศึกษา(ปี)</label>
                        </div>


                        <div className="col-md-2 valuem-floating mb-3">
                            <select
                                className="valuem-select"
                                defaultValue={studyPeriod}
                                onChange={(e) => setStudyPeriod(e.target.value)}
                            >
                                <option value="ภาคปกติ">ปกติ</option>
                                <option value="ภาคสมทบ">สมทบ</option>
                            </select>
                            <label>ภาค</label>
                        </div>

                    </div>




                    <div className="row gx-1 mb-5">


                        <div className=" col-md-6 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <label>เบอร์โทรติดต่อนักศึกษา</label>
                        </div>

                        <div className=" col-md-6 valuem-floating mb-3">
                            <input
                                type="email"
                                className="valuem-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <label>อีเมลติดต่อนักศึกษา</label>
                        </div>

                    </div>







                    <div className="row gx-1">


                        <div className=" col-md-12  ms-2 mb-3">
                            <label>มีความประสงค์ขอ</label>
                        </div>



                        <div className=" col-md-2 valuem-floating mb-3">
                            <select
                                className="valuem-select"
                                defaultValue={leaveType}
                                onChange={(e) => setLeaveType(e.target.value)}
                            >
                                <option value="ปวช">ลาป่วย</option>
                                <option value="ปวส">ลากิจ</option>
                            </select>
                            <label>ความประสงค์</label>
                        </div>

                        <div className=" col-md-2 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={leaveDuration}
                                onChange={(e) => setLeaveDuration(e.target.value)}

                            />
                            <label>มีกำหนดระยะเวลา(วัน)</label>
                        </div>

                        <div className=" col-md-2 valuem-floating mb-3">
                            <input
                                type="date"
                                className="valuem-control"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}

                            />
                            <label>ตั้งแต่วันที่</label>
                        </div>

                        <div className=" col-md-2 valuem-floating mb-3">
                            <input
                                type="date"
                                className="valuem-control"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}

                            />
                            <label>ถึงวันที่</label>
                        </div>

                    </div>

                    <div className=" col-md-12 valuem-floating mb-3">
                        <input
                            type="text"
                            className="valuem-control"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}

                        />
                        <label>เนื่องจาก</label>
                    </div>


                    <div className=" col-md-12 mb-3">
                        <label className="valuem-label">อัพโหลดไฟล์ที่เกี่ยวข้อง (1 ไฟล์)</label>
                        <input
                            className="valuem-control"
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>



                    <div className="d-grid gap-2 col-md-6 my-3 mx-auto ">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>ส่งคำร้อง</button>
                    </div>



                </div>

            </div>


            {/* </div> */}






        </>
    );
}

export default R23;
