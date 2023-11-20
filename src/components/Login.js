



function Login() {
    return (
        <>
            <main class="form-signin w-50 w-md-75 m-auto mt-5">
                <form >
                    <img class="mb-4 img-fluid mx-auto d-block" src="https://archives.oarit.rmuti.ac.th/wp-content/uploads/2015/01/RMUTI_KORAT.png" alt="" width="100" height="150"/>
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                        <div class="form-floating mb-3 ">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                        </div>

                
                        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        <button class="btn btn-warning w-100 mt-2 py-2" type="submit">Single Sign On</button>
                        <p class="mt-5 mb-3 text-body-secondary">© 2023 RMUTI Form Requester</p>
                </form>
            </main>
        </>
    );
}

export default Login;
