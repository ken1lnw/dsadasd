



function Login() {
    return (
        <>
            <main className="form-signin w-50 w-md-75 m-auto mt-5">
                <form >
                    <img className="mb-4 img-fluid mx-auto d-block" src="https://archives.oarit.rmuti.ac.th/wp-content/uploads/2015/01/RMUTI_KORAT.png" alt="" width="100" height="150"/>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating mb-3 ">
                            <input type="email" className="form-control"  placeholder="name@example.com"/>
                                <label>Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control"  placeholder="Password"/>
                                <label>Password</label>
                        </div>

                
                        <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <button className="btn btn-warning w-100 mt-2 py-2" type="submit">Single Sign On</button>
                        <p className="mt-5 mb-3 text-body-secondary">© 2023 RMUTI Form Requester</p>
                </form>
            </main>
        </>
    );
}

export default Login;
