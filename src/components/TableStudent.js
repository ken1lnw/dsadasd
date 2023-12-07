



function TableStudent() {
  return (
    <>




      <div className="row justify-content-end my-2 g-0">
        <div className="col-md-3 g-0">
          <input className="form-control  bg-dark-subtle g-0" type="search" placeholder="Search" aria-label="Search" />
        </div>
      </div>


      <div className="overflow-x-auto">

        <table className="table table-primary table-hover table-bordered ">
          <thead className="table table-dark ">
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">คำร้อง</th>
              <th scope="col">รหัสนักศึกษา</th>
              <th scope="col">ชื่อ-นามสกุล</th>
              <th scope="col">สาขา</th>
              <th scope="col">สถานะ</th>
              <th scope="col">จัดการ</th>
            </tr>
          </thead>
          <tbody>



            <tr>
              <th scope="row">1</th>
              <td>R.01 คำร้องทั่วไป</td>
              <td>62172110041-1</td>
              <td>ภูมินันท์ อนันตึก</td>
              <td>วิศวกรรมคอมพิวเตอร์</td>
              <td >
                รออาจารย์อนุมัติ
              </td>

              <td>

                <button type="button" className="btn btn-primary text-light me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </button>

                <button type="button" className="btn btn-danger ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></path>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
                  </svg>
                </button>
              </td>

            </tr>


            <tr>
              <th scope="row">2</th>
              <td>R.18 คำร้องขอเพิ่มที่นั่ง</td>
              <td>62172110041-1</td>
              <td>ภูมินันท์ อนันตึก</td>
              <td>วิศวกรรมคอมพิวเตอร์</td>
              <td >
                รออาจารย์อนุมัติ
              </td>

              <td>

                <button type="button" className="btn btn-primary text-light me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </button>

                <button type="button" className="btn btn-danger ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></path>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
                  </svg>
                </button>
              </td>

            </tr>





            <tr>
              <th scope="row">3</th>
              <td>R.15 คำร้องขอลาป่วย/ลากิจ</td>
              <td>62172110041-1</td>
              <td>ภูมินันท์ อนันตึก</td>
              <td>วิศวกรรมคอมพิวเตอร์</td>
              <td >
                รออาจารย์อนุมัติ
              </td>

              <td>

                <button type="button" className="btn btn-primary text-light me-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </button>

                <button type="button" className="btn btn-danger ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer-fill" viewBox="0 0 16 16">
                    <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"></path>
                    <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
                  </svg>
                </button>
              </td>

            </tr>




          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination ิเ">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active" aria-current="page">
              <a className="page-link" href="#">2</a>
            </li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>





    </>
  );
}

export default TableStudent;
