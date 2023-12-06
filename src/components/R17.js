
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
        // Add your logic for form submission here
    };

    return (
        <>





            {/* <div class="container text-center"> */}

            <h1>คำร้องเปิดรายวิชาเรียน</h1>


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


                    <div class=" col-md-4 form-floating mb-3">
                        <select
                            class="form-select"
                            id="floatingSelectGrid"
                            value={faculty1}
                            onChange={(e) => setFaculty1(e.target.value)}
                        >
                            <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                        </select>
                        <label for="floatingInput">เรียน คณบดีคณะ</label>
                    </div>




                    {/* <div class=" col-md-12 form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" />
                        <label for="floatingInput">เรียน อาจารย์ผู้สอนประจำวิชา</label>
                    </div> */}



                    <div class="row gx-1">

                        {/* <div class=" col-md-12  ms-2 mb-3">
                            <label for="เรียนอาจารย์ประจำรายวิชา" >เรียนอาจารย์ประจำรายวิชา</label>
                        </div> */}

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


                        <div class="col-md-2 form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={year1}
                                onChange={(e) => setYear1(e.target.value)}
                            />
                            <label for="floatingInput">ชั้นปีที่</label>
                        </div>

                        <div class=" col-md-4 form-floating mb-3">
                            <select
                                class="form-select"
                                id="floatingSelectGrid"
                                value={faculty2}
                                onChange={(e) => setFaculty2(e.target.value)}
                            >
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                            </select>
                            <label for="floatingSelectGrid">คณะ</label>
                        </div>

                        <div class=" col-md-4 form-floating mb-3">
                            <input
                                type="text"
                                class="form-control"
                                id="floatingInput"
                                value={major2}
                                onChange={(e) => setMajor2(e.target.value)}
                            />
                            <label for="floatingInput">สาขาวิชา</label>
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
                            <label for="กรณีเปิดรายวิชา" >กรณีเปิดรายวิชา</label>
                        </div>


                        <div class=" col-md-12 form-floating mb-3">
                            <select
                                class="form-select"
                                id="floatingSelectGrid"
                                value={courseCase}
                                onChange={(e) => setCourseCase(e.target.value)}
                            >
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">เป็นรายวิชาที่นักศึกษาขอเปิด และคณะเป็นผู้กำกับดูแลตามหลักสูตร</option>
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">เป็นรายวิชาที่นักศึกษาขอเปิด และเป็นรายวิชาเรียนข้ามคณะ</option>
                            </select>
                            <label for="floatingSelectGrid">กรณีเปิดรายวิชา</label>
                        </div>
                    </div>



                    <div class="row gx-1">


                        <div class=" col-md-12  ms-2 mb-3">
                            <label for="มีความประสงค์ลงทะเบียนเทียบรายวิชาใน" >มีความประสงค์ขอเปิดรายวิชาเรียน</label>
                        </div>




                        <div class="row gx-1 mb-5">


                            <div class=" col-md-6 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={desiredCourseCode}
                                    onChange={(e) => setDesiredCourseCode(e.target.value)}
                                />
                                <label for="floatingInput">ในรหัสวิชา</label>
                            </div>

                            <div class=" col-md-6 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={desiredCourseName}
                                    onChange={(e) => setDesiredCourseName(e.target.value)}
                                />
                                <label for="floatingInput">ชื่อวิชา</label>
                            </div>

                            <div class=" col-md-12  ms-2 mb-3">
                                <label for="จำนวนหน่วยกิต" >จำนวนหน่วยกิต</label>
                            </div>

                            <div class=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={creditHoursPractice}
                                    onChange={(e) => setCreditHoursPractice(e.target.value)}
                                />
                                <label for="floatingInput">ภาคปฏิบัติ</label>
                            </div>

                            <div class=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={creditHoursTheory}
                                    onChange={(e) => setCreditHoursTheory(e.target.value)}
                                />
                                <label for="floatingInput">ภาคทฤษฎี</label>
                            </div>
                            <div class=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={totalCreditHours}
                                    onChange={(e) => setTotalCreditHours(e.target.value)}
                                />
                                <label for="floatingInput">รวม</label>
                            </div>






                            <div class=" col-md-12  ms-2 mb-3">
                                <label for="มีความประสงค์ลงทะเบียนเทียบรายวิชาใน" >เวลาเรียน/สัปดาห์</label>
                            </div>

                            <div class=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={studyHoursTheory}
                                    onChange={(e) => setStudyHoursTheory(e.target.value)}
                                />
                                <label for="floatingInput">ภาคทฤษฎี(ชั่วโมง/สัปดาห์)</label>
                            </div>

                            <div class=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={studyHoursPractice}
                                    onChange={(e) => setStudyHoursPractice(e.target.value)}
                                />
                                <label for="floatingInput">ภาคปฏิบัติ(ชั่วโมง/สัปดาห์)</label>
                            </div>

                            <div class=" col-md-2 form-floating mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="floatingInput"
                                    value={totalStudyHours}
                                    onChange={(e) => setTotalStudyHours(e.target.value)}
                                />
                                <label for="floatingInput">รวม(ชั่วโมง/สัปดาห์)</label>
                            </div>







                            <div class=" col-md-12  ms-2 mb-3">
                                <label for="มีความประสงค์ลงทะเบียนเทียบรายวิชาใน" >ซึ่งเป็นรายวิชาตามแผนการเรียนใน</label>
                            </div>

                            <div class="row gx-1">
                                <div class=" col-md-2 form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        value={enrolledYear}
                                        onChange={(e) => setEnrolledYear(e.target.value)}
                                    />
                                    <label for="floatingInput">ชั้นปีที่</label>
                                </div>

                                <div class=" col-md-2 form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        value={enrolledSemester}
                                        onChange={(e) => setEnrolledSemester(e.target.value)}
                                    />
                                    <label for="floatingInput">ภาคการศึกษาที่</label>
                                </div>

                                <div class=" col-md-12 form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        value={enrollmentReason}
                                        onChange={(e) => setEnrollmentReason(e.target.value)}
                                    />
                                    <label for="floatingInput">เนื่องจาก</label>
                                </div>
                            </div>



                            <div class=" col-md-12  ms-2 mb-3">
                                <label for="มีความประสงค์ลงทะเบียนเทียบรายวิชาใน" >และรายวิชานี้เป็นของ</label>
                            </div>

                            <div class="row gx-1">
                                <div class=" col-md-4 form-floating mb-3">
                                    <select
                                        class="form-select"
                                        id="floatingSelectGrid"
                                        value={courseOwnershipFaculty}
                                        onChange={(e) => setCourseOwnershipFaculty(e.target.value)}
                                    >
                                        <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                                    </select>
                                    <label for="floatingSelectGrid">คณะ</label>
                                </div>

                                <div class=" col-md-6 form-floating mb-3">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="floatingInput"
                                        value={courseOwnershipMajor}
                                        onChange={(e) => setCourseOwnershipMajor(e.target.value)}
                                    />
                                    <label for="floatingInput">สาขาวิชา</label>
                                </div>


                            </div>







                        </div>

                    </div>








                    <div class="d-grid gap-2 col-md-6 my-3 mx-auto ">
                        <button class="btn btn-primary" type="button" onClick={handleSubmit} >ส่งคำร้อง</button>
                    </div>









                </div>

            </div >

            {/* </div> */}






        </>
    );
}

export default R17;
