
import React, { useState } from 'react';


function R17() {

    const [date, setDate] = useState('');
    const [prefix, setPrefix] = useState('นาย');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [educationLevel, setEducationLevel] = useState('ปริญญาตรี');
    const [faculty1, setFaculty1] = useState('วิศวกรรมศาสตร์และเทคโนโลยี');
    const [year1, setYear1] = useState('');
    const [faculty2, setFaculty2] = useState('วิศวกรรมศาสตร์และเทคโนโลยี');
    const [major2, setMajor2] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [courseCase, setCourseCase] = useState('เป็นรายวิชาที่นักศึกษาขอเปิด และคณะเป็นผู้กำกับดูแลตามหลักสูตร');
    const [desiredCourseCode, setDesiredCourseCode] = useState('');
    const [desiredCourseName, setDesiredCourseName] = useState('');
    const [creditHoursPractice, setCreditHoursPractice] = useState('');
    const [creditHoursTheory, setCreditHoursTheory] = useState('');
    const [totalCreditHours, setTotalCreditHours] = useState('');
    const [studyHoursTheory, setStudyHoursTheory] = useState('');
    const [studyHoursPractice, setStudyHoursPractice] = useState('');
    const [totalStudyHours, setTotalStudyHours] = useState('');
    const [enrolledYear, setEnrolledYear] = useState('');
    const [enrolledSemester, setEnrolledSemester] = useState('');
    const [enrollmentReason, setEnrollmentReason] = useState('');
    const [courseOwnershipFaculty, setCourseOwnershipFaculty] = useState('วิศวกรรมศาสตร์และเทคโนโลยี');
    const [courseOwnershipMajor, setCourseOwnershipMajor] = useState('');

    const handleSubmit = () => {
        console.log({
            date,
            prefix,
            firstName,
            lastName,
            studentID,
            educationLevel,
            faculty1,
            year1,
            faculty2,
            major2,
            contactNumber,
            email,
            courseCase,
            desiredCourseCode,
            desiredCourseName,
            creditHoursPractice,
            creditHoursTheory,
            totalCreditHours,
            studyHoursTheory,
            studyHoursPractice,
            totalStudyHours,
            enrolledYear,
            enrolledSemester,
            enrollmentReason,
            courseOwnershipFaculty,
            courseOwnershipMajor,
        });
        // Add your logic value valuem submission here
    };

    return (
        <>





            {/* <div className="container text-center"> */}

            <h1>คำร้องเปิดรายวิชาเรียน</h1>


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


                    <div className=" col-md-4 valuem-floating mb-3">
                        <select
                            className="valuem-select"
                            defaultValue={faculty1}
                            onChange={(e) => setFaculty1(e.target.value)}
                        >
                            <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                        </select>
                        <label>เรียน คณบดีคณะ</label>
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


                        <div className="col-md-2 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={year1}
                                onChange={(e) => setYear1(e.target.value)}
                            />
                            <label>ชั้นปีที่</label>
                        </div>

                        <div className=" col-md-4 valuem-floating mb-3">
                            <select
                                className="valuem-select"
                                defaultValue={faculty2}
                                onChange={(e) => setFaculty2(e.target.value)}
                            >
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                            </select>
                            <label>คณะ</label>
                        </div>

                        <div className=" col-md-4 valuem-floating mb-3">
                            <input
                                type="text"
                                className="valuem-control"
                                value={major2}
                                onChange={(e) => setMajor2(e.target.value)}
                            />
                            <label>สาขาวิชา</label>
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
                            <label>กรณีเปิดรายวิชา</label>
                        </div>


                        <div className=" col-md-12 valuem-floating mb-3">
                            <select
                                className="valuem-select"
                                defaultValue={courseCase}
                                onChange={(e) => setCourseCase(e.target.value)}
                            >
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">เป็นรายวิชาที่นักศึกษาขอเปิด และคณะเป็นผู้กำกับดูแลตามหลักสูตร</option>
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">เป็นรายวิชาที่นักศึกษาขอเปิด และเป็นรายวิชาเรียนข้ามคณะ</option>
                            </select>
                            <label>กรณีเปิดรายวิชา</label>
                        </div>
                    </div>



                    <div className="row gx-1">


                        <div className=" col-md-12  ms-2 mb-3">
                            <label>มีความประสงค์ขอเปิดรายวิชาเรียน</label>
                        </div>




                        <div className="row gx-1 mb-5">


                            <div className=" col-md-6 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={desiredCourseCode}
                                    onChange={(e) => setDesiredCourseCode(e.target.value)}
                                />
                                <label>ในรหัสวิชา</label>
                            </div>

                            <div className=" col-md-6 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={desiredCourseName}
                                    onChange={(e) => setDesiredCourseName(e.target.value)}
                                />
                                <label>ชื่อวิชา</label>
                            </div>

                            <div className=" col-md-12  ms-2 mb-3">
                                <label>จำนวนหน่วยกิต</label>
                            </div>

                            <div className=" col-md-2 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={creditHoursPractice}
                                    onChange={(e) => setCreditHoursPractice(e.target.value)}
                                />
                                <label>ภาคปฏิบัติ</label>
                            </div>

                            <div className=" col-md-2 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={creditHoursTheory}
                                    onChange={(e) => setCreditHoursTheory(e.target.value)}
                                />
                                <label>ภาคทฤษฎี</label>
                            </div>
                            <div className=" col-md-2 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={totalCreditHours}
                                    onChange={(e) => setTotalCreditHours(e.target.value)}
                                />
                                <label>รวม</label>
                            </div>






                            <div className=" col-md-12  ms-2 mb-3">
                                <label>เวลาเรียน/สัปดาห์</label>
                            </div>

                            <div className=" col-md-2 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={studyHoursTheory}
                                    onChange={(e) => setStudyHoursTheory(e.target.value)}
                                />
                                <label>ภาคทฤษฎี(ชั่วโมง/สัปดาห์)</label>
                            </div>

                            <div className=" col-md-2 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={studyHoursPractice}
                                    onChange={(e) => setStudyHoursPractice(e.target.value)}
                                />
                                <label>ภาคปฏิบัติ(ชั่วโมง/สัปดาห์)</label>
                            </div>

                            <div className=" col-md-2 valuem-floating mb-3">
                                <input
                                    type="text"
                                    className="valuem-control"
                                    value={totalStudyHours}
                                    onChange={(e) => setTotalStudyHours(e.target.value)}
                                />
                                <label>รวม(ชั่วโมง/สัปดาห์)</label>
                            </div>







                            <div className=" col-md-12  ms-2 mb-3">
                                <label>ซึ่งเป็นรายวิชาตามแผนการเรียนใน</label>
                            </div>

                            <div className="row gx-1">
                                <div className=" col-md-2 valuem-floating mb-3">
                                    <input
                                        type="text"
                                        className="valuem-control"
                                        value={enrolledYear}
                                        onChange={(e) => setEnrolledYear(e.target.value)}
                                    />
                                    <label>ชั้นปีที่</label>
                                </div>

                                <div className=" col-md-2 valuem-floating mb-3">
                                    <input
                                        type="text"
                                        className="valuem-control"
                                        value={enrolledSemester}
                                        onChange={(e) => setEnrolledSemester(e.target.value)}
                                    />
                                    <label>ภาคการศึกษาที่</label>
                                </div>

                                <div className=" col-md-12 valuem-floating mb-3">
                                    <input
                                        type="text"
                                        className="valuem-control"
                                        value={enrollmentReason}
                                        onChange={(e) => setEnrollmentReason(e.target.value)}
                                    />
                                    <label>เนื่องจาก</label>
                                </div>
                            </div>



                            <div className=" col-md-12  ms-2 mb-3">
                                <label>และรายวิชานี้เป็นของ</label>
                            </div>

                            <div className="row gx-1">
                                <div className=" col-md-4 valuem-floating mb-3">
                                    <select
                                        className="valuem-select"
                                        def={courseOwnershipFaculty}
                                        onChange={(e) => setCourseOwnershipFaculty(e.target.value)}
                                    >
                                        <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                                    </select>
                                    <label>คณะ</label>
                                </div>

                                <div className=" col-md-6 valuem-floating mb-3">
                                    <input
                                        type="text"
                                        className="valuem-control"
                                        value={courseOwnershipMajor}
                                        onChange={(e) => setCourseOwnershipMajor(e.target.value)}
                                    />
                                    <label>สาขาวิชา</label>
                                </div>


                            </div>







                        </div>

                    </div>








                    <div className="d-grid gap-2 col-md-6 my-3 mx-auto ">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit} >ส่งคำร้อง</button>
                    </div>









                </div>

            </div >

            {/* </div> */}






        </>
    );
}

export default R17;
