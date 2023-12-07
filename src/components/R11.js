
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





            {/* <div className="container text-center"> */}

            <h1>คำร้องขอลงทะเบียนเรียนเทียบรายวิชา</h1>


            <div className="row g-0">

                <div className="col-12 ">


                    <div className=" col-md-3 form-floating mb-3 ms-auto">
                        <input type="date"
                            className="form-control"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        <label>วันที่</label>
                    </div>







                    <div className=" col-md-12 form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            value={toWhom}
                            onChange={(e) => setToWhom(e.target.value)}
                        />
                        <label>เรียน คณบดีคณะ</label>
                    </div>



                    <div className="row gx-1">

                        <div className="col-md-1 form-floating mb-3">
                            <select
                                className="form-select"
                                value={prefix}
                                onChange={(e) => setPrefix(e.target.value)}
                            >
                                <option value="นาย">นาย</option>
                                <option value="นาง">นาง</option>
                                <option value="นางสาว">นางสาว</option>
                            </select>
                            <label>คำนำหน้า</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <label>ชื่อ</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                            <label>นามสกุล</label>
                        </div>


                        <div className=" col-md-3 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={studentID}
                                onChange={(e) => setStudentID(e.target.value)}
                            />
                            <label>รหัสนักศึกษา</label>
                        </div>

                    </div>







                    <div className="row gx-1">

                        <div className="col-md-2 form-floating mb-3">
                            <select
                                className="form-select"
                                value={educationLevel}
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

                        <div className=" col-md-5 form-floating mb-3">
                            <select
                                className="form-select"
                                value={faculty}
                                onChange={(e) => setFaculty(e.target.value)}
                            >
                                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
                            </select>
                            <label>คณะ</label>
                        </div>

                        <div className=" col-md-5 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={major}
                                onChange={(e) => setMajor(e.target.value)}
                            />
                            <label>สาขาวิชา</label>
                        </div>

                    </div>




                    <div className="row gx-1 mb-5">


                        <div className=" col-md-6 form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={contactNumber}
                                onChange={(e) => setContactNumber(e.target.value)}
                            />
                            <label>เบอร์โทรติดต่อนักศึกษา</label>
                        </div>

                        <div className=" col-md-6 form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            <label>อีเมลติดต่อนักศึกษา</label>
                        </div>

                    </div>







                    <div className="row gx-1">


                        <div className=" col-md-12  ms-2 mb-3">
                            <label>มีความประสงค์ลงทะเบียนเทียบรายวิชาใน</label>
                        </div>



                        <div className=" col-md-3 form-floating mb-3">
                            <input
                                className="form-control"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                            />
                            <label>ภาคการศึกษาที่</label>
                        </div>

                        <div className=" col-md-3 form-floating mb-3">
                            <input
                                className="form-control"
                                value={academicYear}
                                onChange={(e) => setAcademicYear(e.target.value)}
                            />
                            <label>ปีการศึกษาที่</label>
                        </div>

                    </div>








                    <div className="row gx-1">

                        <div className=" col-md-12 ms-2 mb-3">
                            <label>โครงสร้างหลักสูตรนักศึกษา</label>
                        </div>


                        <div className=" col-md-3 form-floating mb-3">
                            <input
                                className="form-control"
                                value={courseCode}
                                onChange={(e) => setCourseCode(e.target.value)}
                            />
                            <label>รหัสวิชา</label>
                        </div>

                        <div className=" col-md-7 form-floating mb-3">
                            <input
                                className="form-control"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                            />
                            <label>ชื่อวิชา</label>
                        </div>

                        <div className=" col-md-2 form-floating mb-3">
                            <input
                                className="form-control"
                                value={credit}
                                onChange={(e) => setCredit(e.target.value)}
                            />
                            <label>หน่วยกิต</label>
                        </div>

                    </div>







                    <div className="row gx-1">

                        <div className=" col-md-12 ms-2 mb-3">
                            <label >โครงสร้างหลักสูตรที่ต้องการลงทะเบียนเรียน</label>
                        </div>


                        <div className=" col-md-3 form-floating mb-3">
                            <input
                                className="form-control"
                                value={desiredCourseCode}
                                onChange={(e) => setDesiredCourseCode(e.target.value)}
                            />
                            <label>รหัสวิชา</label>
                        </div>

                        <div className=" col-md-7 form-floating mb-3">
                            <input
                                className="form-control"
                                value={desiredCourseName}
                                onChange={(e) => setDesiredCourseName(e.target.value)}
                            />
                            <label>ชื่อวิชา</label>
                        </div>

                        <div className=" col-md-2 form-floating mb-3">
                            <input
                                className="form-control"
                                value={classGroup}
                                onChange={(e) => setClassGroup(e.target.value)}
                            />
                            <label>กลุ่มเรียน</label>
                        </div>

                        <div className=" col-md-4 form-floating mb-3">
                            <input
                                className="form-control"
                                value={teacher}
                                onChange={(e) => setTeacher(e.target.value)}
                            />
                            <label>อาจารย์ผู้สอน</label>
                        </div>

                    </div>










                    <div className="d-grid gap-2 col-md-6 my-3 mx-auto ">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit} >ส่งคำร้อง</button>
                    </div>







                </div>

            </div>

            {/* </div> */}






        </>
    );
}

export default R11;
