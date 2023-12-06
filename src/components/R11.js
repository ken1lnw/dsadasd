
import React, { useState } from 'react';


function R11() {

    const [date, setDate] = useState('');
    const [toWhom, setToWhom] = useState('');
    const [prefix, setPrefix] = useState('นาย');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentID, setStudentID] = useState('');
    const [educationLevel, setEducationLevel] = useState('ปริญญาตรี');
    const [faculty, setFaculty] = useState('วิศวกรรมศาสตร์และเทคโนโลยี');
    const [major, setMajor] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [term, setTerm] = useState('');
    const [academicYear, setAcademicYear] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [credit, setCredit] = useState('');
    const [desiredCourseCode, setDesiredCourseCode] = useState('');
    const [desiredCourseName, setDesiredCourseName] = useState('');
    const [classGroup, setClassGroup] = useState('');
    const [teacher, setTeacher] = useState('');

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
            contactNumber,
            email,
            term,
            academicYear,
            courseCode,
            courseName,
            credit,
            desiredCourseCode,
            desiredCourseName,
            classGroup,
            teacher,
        });
        // Add your logic for form submission here
    };


    return (
        <>





            {/* <div class="container text-center"> */}

            <h1>คำร้องขอลงทะเบียนเรียนเทียบรายวิชา</h1>


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
                        <label for="floatingInput">เรียน คณบดีคณะ</label>
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
                            <label for="มีความประสงค์ลงทะเบียนเทียบรายวิชาใน" >มีความประสงค์ลงทะเบียนเทียบรายวิชาใน</label>
                        </div>



                        <div class=" col-md-3 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                            />
                            <label for="floatingInput">ภาคการศึกษาที่</label>
                        </div>

                        <div class=" col-md-3 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={academicYear}
                                onChange={(e) => setAcademicYear(e.target.value)}
                            />
                            <label for="floatingInput">ปีการศึกษาที่</label>
                        </div>

                    </div>








                    <div class="row gx-1">

                        <div class=" col-md-12 ms-2 mb-3">
                            <label for="โครงสร้างหลักสูตรนักศึกษา" >โครงสร้างหลักสูตรนักศึกษา</label>
                        </div>


                        <div class=" col-md-3 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={courseCode}
                                onChange={(e) => setCourseCode(e.target.value)}
                            />
                            <label for="floatingInput">รหัสวิชา</label>
                        </div>

                        <div class=" col-md-7 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                            <label for="floatingInput">ชื่อวิชา</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={credit}
                                onChange={(e) => setCredit(e.target.value)}
                            />
                            <label for="floatingInput">หน่วยกิต</label>
                        </div>

                    </div>







                    <div class="row gx-1">

                        <div class=" col-md-12 ms-2 mb-3">
                            <label for="โครงสร้างหลักสูตรที่ต้องการลงทะเบียนเรียน" >โครงสร้างหลักสูตรที่ต้องการลงทะเบียนเรียน</label>
                        </div>


                        <div class=" col-md-3 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={desiredCourseCode}
                                onChange={(e) => setDesiredCourseCode(e.target.value)}
                            />
                            <label for="floatingInput">รหัสวิชา</label>
                        </div>

                        <div class=" col-md-7 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={desiredCourseName}
                                onChange={(e) => setDesiredCourseName(e.target.value)}
                            />
                            <label for="floatingInput">ชื่อวิชา</label>
                        </div>

                        <div class=" col-md-2 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={classGroup}
                                onChange={(e) => setClassGroup(e.target.value)}
                            />
                            <label for="floatingInput">กลุ่มเรียน</label>
                        </div>

                        <div class=" col-md-4 form-floating mb-3">
                            <input
                                class="form-control"
                                id="floatingInput"
                                value={teacher}
                                onChange={(e) => setTeacher(e.target.value)}
                            />
                            <label for="floatingInput">อาจารย์ผู้สอน</label>
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

export default R11;
