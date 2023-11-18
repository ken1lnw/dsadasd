



function R01() {
  return (
    <>





      {/* <div class="container text-center"> */}

      <h1> คำร้องทั่วไป</h1>


      <div class="row">

        <div class="col-12 ">


          <div class=" col-md-3 form-floating mb-3 ms-auto">
            <input type="date" class="form-control" id="floatingInput" />
            <label for="floatingInput">วันที่</label>
          </div>



          <div class=" col-md-12 form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">เรื่อง</label>
          </div>



          <div class=" col-md-12 form-floating mb-3">
            <input type="text" class="form-control" id="floatingInput" />
            <label for="floatingInput">เรียน</label>
          </div>



          <div class="row gx-1">

            <div class="col-md-1 form-floating mb-3">
              <select class="form-select" id="floatingSelectGrid">
                <option value="นาย">นาย</option>
                <option value="นาง">นาง</option>
                <option value="นางสาว">นางสาว</option>
              </select>
              <label for="floatingSelectGrid">คำนำหน้า</label>
            </div>

            <div class=" col-md-4 form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" />
              <label for="floatingInput">ชื่อ</label>
            </div>

            <div class=" col-md-4 form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" />
              <label for="floatingInput">นามสกุล</label>
            </div>


            <div class=" col-md-3 form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" />
              <label for="floatingInput">รหัสนักศึกษา</label>
            </div>

          </div>







          <div class="row gx-1">

            <div class="col-md-2 form-floating mb-3">
              <select class="form-select" id="floatingSelectGrid">
                <option value="ปวช">ปวช.</option>
                <option value="ปวส">ปวส.</option>
                <option selected value="ปริญญาตรี">ปริญญาตรี</option>
                <option value="ปริญญาโท">ปริญญาโท</option>
                <option value="ปริญญาเอก">ปริญญาเอก</option>
              </select>
              <label for="floatingSelectGrid">ระดับการศึกษา</label>
            </div>

            <div class=" col-md-5 form-floating mb-3">
              <select class="form-select" id="floatingSelectGrid">
                <option value="วิศวกรรมศาสตร์และเทคโนโลยี">วิศวกรรมศาสตร์และเทคโนโลยี</option>
              </select>
              <label for="floatingSelectGrid">คณะ</label>
            </div>

            <div class=" col-md-5 form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" />
              <label for="floatingInput">สาขาวิชา</label>
            </div>

          </div>





          <div class=" col-md-12 form-floating mb-3">
            <textarea class="form-control" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">มีความประสงค์</label>
          </div>




          <div class="row gx-1">


            <div class=" col-md-6 form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" />
              <label for="floatingInput">เบอร์โทรติดต่อนักศึกษา</label>
            </div>

            <div class=" col-md-6 form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" />
              <label for="floatingInput">อีเมลติดต่อนักศึกษา</label>
            </div>

          </div>




          <div class="d-grid gap-2 col-md-6 my-3 mx-auto ">
            <button class="btn btn-primary" type="button">ส่งคำร้อง</button>
          </div>






        </div>

      </div>
      {/* </div> */}






    </>
  );
}

export default R01;
