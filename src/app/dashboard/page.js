export default function () {
    return (
        <>
            <div className="min-height-300 bg-dark position-absolute w-100"></div>
            <aside
                className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
                id="sidenav-main"
            >
                <div className="sidenav-header">
                    <i
                        className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                        aria-hidden="true"
                        id="iconSidenav"
                    ></i>
                    <a
                        className="navbar-brand m-0"
                        href="#"
                        target="_blank"
                    >
                        <img
                            src="../assets/img/logo-ct-dark.png"
                            width="26px"
                            height="26px"
                            className="navbar-brand-img h-100"
                            alt="main_logo"
                        />
                        <span className="ms-1 font-weight-bold">Creative Tim</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0" />
                <div
                    className="collapse navbar-collapse  w-auto "
                    id="sidenav-collapse-main"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-tv-2 text-dark text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-credit-card text-dark text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Billing</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-app text-dark text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Virtual Reality</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-world-2 text-dark text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">RTL</span>
                            </a>
                        </li>
                        <li className="nav-item mt-3">
                            <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                                Account pages
                            </h6>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Profile</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-single-copy-04 text-dark text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Sign In</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="ni ni-collection text-dark text-sm opacity-10"></i>
                                </div>
                                <span className="nav-link-text ms-1">Sign Up</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sidenav-footer mx-3 ">
                    <div className="card card-plain shadow-none" id="sidenavCard">
                        <img
                            className="w-50 mx-auto"
                            src="../assets/img/illustrations/icon-documentation.svg"
                            alt="sidebar_illustration"
                        />
                        <div className="card-body text-center p-3 w-100 pt-0">
                            <div className="docs-info">
                                <h6 className="mb-0">Need help?</h6>
                                <p className="text-xs font-weight-bold mb-0">
                                    Please check our docs
                                </p>
                            </div>
                        </div>
                    </div>
                    <a
                        href="#"
                        target="_blank"
                        className="btn btn-dark btn-sm w-100 mb-3"
                    >
                        Documentation
                    </a>
                    <a
                        className="btn btn-primary btn-sm mb-0 w-100"
                        href="#"
                        type="button"
                    >
                        Upgrade to pro
                    </a>
                </div>
            </aside>
            <main className="main-content position-relative border-radius-lg ">
                <nav
                    className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
                    id="navbarBlur"
                    data-scroll="false"
                >
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm">
                                    <a className="opacity-5 text-white" href="#">
                                        Pages
                                    </a>
                                </li>
                                <li
                                    className="breadcrumb-item text-sm text-white active"
                                    aria-current="page"
                                >
                                    Dashboard
                                </li>
                            </ol>
                            <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
                        </nav>
                        <div
                            className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                            id="navbar"
                        >
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group">
                                    <span className="input-group-text text-body">
                                        <i className="fas fa-search" aria-hidden="true"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Type here..."
                                    />
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <a
                                        href="#"
                                        className="nav-link text-white font-weight-bold px-0"
                                    >
                                        <i className="fa fa-user me-sm-1"></i>
                                        <span className="d-sm-inline d-none">Sign In</span>
                                    </a>
                                </li>
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a
                                        href="#"
                                        className="nav-link text-white p-0"
                                        id="iconNavbarSidenav"
                                    >
                                        <div className="sidenav-toggler-inner">
                                            <i className="sidenav-toggler-line bg-white"></i>
                                            <i className="sidenav-toggler-line bg-white"></i>
                                            <i className="sidenav-toggler-line bg-white"></i>
                                        </div>
                                    </a>
                                </li>
                                <li className="nav-item px-3 d-flex align-items-center">
                                    <a href="#" className="nav-link text-white p-0">
                                        <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown pe-2 d-flex align-items-center">
                                    <a
                                        href="#"
                                        className="nav-link text-white p-0"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i className="fa fa-bell cursor-pointer"></i>
                                    </a>
                                    <ul
                                        className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <li className="mb-2">
                                            <a
                                                className="dropdown-item border-radius-md"
                                                href="#"
                                            >
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img
                                                            src="../assets/img/team-2.jpg"
                                                            className="avatar avatar-sm  me-3 "
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New message</span>{" "}
                                                            from Laur
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            13 minutes ago
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mb-2">
                                            <a
                                                className="dropdown-item border-radius-md"
                                                href="#"
                                            >
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img
                                                            src="../assets/img/small-logos/logo-spotify.svg"
                                                            className="avatar avatar-sm bg-gradient-dark  me-3 "
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New album</span> by
                                                            Travis Scott
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item border-radius-md"
                                                href="#"
                                            >
                                                <div className="d-flex py-1">
                                                    <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        {/* <svg
                                                            width="12px"
                                                            height="12px"
                                                            viewBox="0 0 43 36"
                                                            version="1.1"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                        >
                                                            <title>credit-card</title>
                                                            <g
                                                                stroke="none"
                                                                stroke-width="1"
                                                                fill="none"
                                                                fill-rule="evenodd"
                                                            >
                                                                <g
                                                                    transform="translate(-2169.000000, -745.000000)"
                                                                    fill="#FFFFFF"
                                                                    fill-rule="nonzero"
                                                                >
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path
                                                                                className="color-background"
                                                                                d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                                opacity="0.593633743"
                                                                            ></path>
                                                                            <path
                                                                                className="color-background"
                                                                                d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                            ></path>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </svg> */}
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            Payment successfully completed
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>2 days
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                    Today's Money
                                                </p>
                                                <h5 className="font-weight-bolder">$53,000</h5>
                                                <p className="mb-0">
                                                    <span className="text-success text-sm font-weight-bolder">
                                                        +55%
                                                    </span>
                                                    since yesterday
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                                                <i
                                                    className="ni ni-money-coins text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                    Today's Users
                                                </p>
                                                <h5 className="font-weight-bolder">2,300</h5>
                                                <p className="mb-0">
                                                    <span className="text-success text-sm font-weight-bolder">
                                                        +3%
                                                    </span>
                                                    since last week
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                                                <i
                                                    className="ni ni-world text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                    New Clients
                                                </p>
                                                <h5 className="font-weight-bolder">+3,462</h5>
                                                <p className="mb-0">
                                                    <span className="text-danger text-sm font-weight-bolder">
                                                        -2%
                                                    </span>
                                                    since last quarter
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                                                <i
                                                    className="ni ni-paper-diploma text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="numbers">
                                                <p className="text-sm mb-0 text-uppercase font-weight-bold">
                                                    Sales
                                                </p>
                                                <h5 className="font-weight-bolder">$103,430</h5>
                                                <p className="mb-0">
                                                    <span className="text-success text-sm font-weight-bolder">
                                                        +5%
                                                    </span>{" "}
                                                    than last month
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-4 text-end">
                                            <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                                                <i
                                                    className="ni ni-cart text-lg opacity-10"
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-7 mb-lg-0 mb-4">
                            <div className="card z-index-2 h-100">
                                <div className="card-header pb-0 pt-3 bg-transparent">
                                    <h6 className="text-capitalize">Sales overview</h6>
                                    <p className="text-sm mb-0">
                                        <i className="fa fa-arrow-up text-success"></i>
                                        <span className="font-weight-bold">4% more</span> in 2021
                                    </p>
                                </div>
                                <div className="card-body p-3">
                                    <div className="chart">
                                        <canvas
                                            id="chart-line"
                                            className="chart-canvas"
                                            height="300"
                                        ></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            {/* <div className="card card-carousel overflow-hidden h-100 p-0">
                                <div
                                    id="carouselExampleCaptions"
                                    className="carousel slide h-100"
                                    data-bs-ride="carousel"
                                >
                                    <div className="carousel-inner border-radius-lg h-100">
                                        <div
                                            className="carousel-item h-100 active"
                                            style="background-image: url('../assets/img/carousel-1.jpg');
      background-size: cover;"
                                        >
                                            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                                <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                    <i className="ni ni-camera-compact text-dark opacity-10"></i>
                                                </div>
                                                <h5 className="text-white mb-1">Get started with Argon</h5>
                                                <p>
                                                    There’s nothing I really wanted to do in life that I
                                                    wasn’t able to get good at.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="carousel-item h-100"
                                            style="background-image: url('../assets/img/carousel-2.jpg');
      background-size: cover;"
                                        >
                                            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                                <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                    <i className="ni ni-bulb-61 text-dark opacity-10"></i>
                                                </div>
                                                <h5 className="text-white mb-1">
                                                    Faster way to create web pages
                                                </h5>
                                                <p>
                                                    That’s my skill. I’m not really specifically talented
                                                    at anything except for the ability to learn.
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="carousel-item h-100"
                                            style="background-image: url('../assets/img/carousel-3.jpg');
      background-size: cover;"
                                        >
                                            <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                                <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                                    <i className="ni ni-trophy text-dark opacity-10"></i>
                                                </div>
                                                <h5 className="text-white mb-1">
                                                    Share with us your design tips!
                                                </h5>
                                                <p>
                                                    Don’t be afraid to be wrong because you can’t learn
                                                    anything from a compliment.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev w-5 me-3"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="prev"
                                    >
                                        <span
                                            className="carousel-control-prev-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next w-5 me-3"
                                        type="button"
                                        data-bs-target="#carouselExampleCaptions"
                                        data-bs-slide="next"
                                    >
                                        <span
                                            className="carousel-control-next-icon"
                                            aria-hidden="true"
                                        ></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-7 mb-lg-0 mb-4">
                            <div className="card ">
                                <div className="card-header pb-0 p-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-2">Sales by Country</h6>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center ">
                                        <tbody>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div>
                                                            <img
                                                                src="../assets/img/icons/flags/US.png"
                                                                alt="Country flag"
                                                            />
                                                        </div>
                                                        <div className="ms-4">
                                                            <p className="text-xs font-weight-bold mb-0">
                                                                Country:
                                                            </p>
                                                            <h6 className="text-sm mb-0">United States</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                        <h6 className="text-sm mb-0">2500</h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                        <h6 className="text-sm mb-0">$230,900</h6>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                        <h6 className="text-sm mb-0">29.9%</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div>
                                                            <img
                                                                src="../assets/img/icons/flags/DE.png"
                                                                alt="Country flag"
                                                            />
                                                        </div>
                                                        <div className="ms-4">
                                                            <p className="text-xs font-weight-bold mb-0">
                                                                Country:
                                                            </p>
                                                            <h6 className="text-sm mb-0">Germany</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                        <h6 className="text-sm mb-0">3.900</h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                        <h6 className="text-sm mb-0">$440,000</h6>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                        <h6 className="text-sm mb-0">40.22%</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div>
                                                            <img
                                                                src="../assets/img/icons/flags/GB.png"
                                                                alt="Country flag"
                                                            />
                                                        </div>
                                                        <div className="ms-4">
                                                            <p className="text-xs font-weight-bold mb-0">
                                                                Country:
                                                            </p>
                                                            <h6 className="text-sm mb-0">Great Britain</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                        <h6 className="text-sm mb-0">1.400</h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                        <h6 className="text-sm mb-0">$190,700</h6>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                        <h6 className="text-sm mb-0">23.44%</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30">
                                                    <div className="d-flex px-2 py-1 align-items-center">
                                                        <div>
                                                            <img
                                                                src="../assets/img/icons/flags/BR.png"
                                                                alt="Country flag"
                                                            />
                                                        </div>
                                                        <div className="ms-4">
                                                            <p className="text-xs font-weight-bold mb-0">
                                                                Country:
                                                            </p>
                                                            <h6 className="text-sm mb-0">Brasil</h6>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Sales:</p>
                                                        <h6 className="text-sm mb-0">562</h6>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Value:</p>
                                                        <h6 className="text-sm mb-0">$143,960</h6>
                                                    </div>
                                                </td>
                                                <td className="align-middle text-sm">
                                                    <div className="col text-center">
                                                        <p className="text-xs font-weight-bold mb-0">Bounce:</p>
                                                        <h6 className="text-sm mb-0">32.14%</h6>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card">
                                <div className="card-header pb-0 p-3">
                                    <h6 className="mb-0">Categories</h6>
                                </div>
                                <div className="card-body p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                                    <i className="ni ni-mobile-button text-white opacity-10"></i>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Devices</h6>
                                                    <span className="text-xs">
                                                        250 in stock,{" "}
                                                        <span className="font-weight-bold">346+ sold</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                                    <i className="ni ni-bold-right" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                                    <i className="ni ni-tag text-white opacity-10"></i>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Tickets</h6>
                                                    <span className="text-xs">
                                                        123 closed,{" "}
                                                        <span className="font-weight-bold">15 open</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                                    <i className="ni ni-bold-right" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                                    <i className="ni ni-box-2 text-white opacity-10"></i>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Error logs</h6>
                                                    <span className="text-xs">
                                                        1 is active,{" "}
                                                        <span className="font-weight-bold">40 closed</span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                                    <i className="ni ni-bold-right" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <div className="icon icon-shape icon-sm me-3 bg-gradient-dark shadow text-center">
                                                    <i className="ni ni-satisfied text-white opacity-10"></i>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Happy users</h6>
                                                    <span className="text-xs font-weight-bold">+ 430</span>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <button className="btn btn-link btn-icon-only btn-rounded btn-sm text-dark icon-move-right my-auto">
                                                    <i className="ni ni-bold-right" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer pt-3  ">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <div className="copyright text-center text-sm text-muted text-lg-start">
                                        {/* © <script>document.write(new Date().getFullYear())</script>, */}
                                        made with <i className="fa fa-heart"></i> by
                                        <a
                                            href="#"
                                            className="font-weight-bold"
                                            target="_blank"
                                        >
                                            Creative Tim
                                        </a>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a
                                                href="#"
                                                className="nav-link text-muted"
                                                target="_blank"
                                            >
                                                Creative Tim
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#"
                                                className="nav-link text-muted"
                                                target="_blank"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#"
                                                className="nav-link text-muted"
                                                target="_blank"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="#"
                                                className="nav-link pe-0 text-muted"
                                                target="_blank"
                                            >
                                                License
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
            <div className="fixed-plugin">
                <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
                    <i className="fa fa-cog py-2"> </i>
                </a>
                <div className="card shadow-lg">
                    <div className="card-header pb-0 pt-3 ">
                        <div className="float-start">
                            <h5 className="mt-3 mb-0">Argon Configurator</h5>
                            <p>See our dashboard options.</p>
                        </div>
                        <div className="float-end mt-4">
                            <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                    </div>
                    <hr className="horizontal dark my-1" />
                    <div className="card-body pt-sm-3 pt-0 overflow-auto">
                        <div>
                            <h6 className="mb-0">Sidebar Colors</h6>
                        </div>
                        <a
                            href="#"
                            className="switch-trigger background-color"
                        >
                            <div className="badge-colors my-2 text-start">
                                <span
                                    className="badge filter bg-gradient-primary active"
                                    data-color="primary"
                                    onclick="sidebarColor(this)"
                                ></span>
                                <span
                                    className="badge filter bg-gradient-dark"
                                    data-color="dark"
                                    onclick="sidebarColor(this)"
                                ></span>
                                <span
                                    className="badge filter bg-gradient-info"
                                    data-color="info"
                                    onclick="sidebarColor(this)"
                                ></span>
                                <span
                                    className="badge filter bg-gradient-success"
                                    data-color="success"
                                    onclick="sidebarColor(this)"
                                ></span>
                                <span
                                    className="badge filter bg-gradient-warning"
                                    data-color="warning"
                                    onclick="sidebarColor(this)"
                                ></span>
                                <span
                                    className="badge filter bg-gradient-danger"
                                    data-color="danger"
                                    onclick="sidebarColor(this)"
                                ></span>
                            </div>
                        </a>
                        <div className="mt-3">
                            <h6 className="mb-0">Sidenav Type</h6>
                            <p className="text-sm">Choose between 2 different sidenav types.</p>
                        </div>
                        <div className="d-flex">
                            <button
                                className="btn bg-gradient-primary w-100 px-3 mb-2 active me-2"
                                data-className="bg-white"
                                onclick="sidebarType(this)"
                            >
                                White
                            </button>
                            <button
                                className="btn bg-gradient-primary w-100 px-3 mb-2"
                                data-className="bg-default"
                                onclick="sidebarType(this)"
                            >
                                Dark
                            </button>
                        </div>
                        <p className="text-sm d-xl-none d-block mt-2">
                            You can change the sidenav type just on desktop view.
                        </p>
                        <div className="d-flex my-3">
                            <h6 className="mb-0">Navbar Fixed</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input
                                    className="form-check-input mt-1 ms-auto"
                                    type="checkbox"
                                    id="navbarFixed"
                                    onclick="navbarFixed(this)"
                                />
                            </div>
                        </div>
                        <hr className="horizontal dark my-sm-4" />
                        <div className="mt-2 mb-5 d-flex">
                            <h6 className="mb-0">Light / Dark</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input
                                    className="form-check-input mt-1 ms-auto"
                                    type="checkbox"
                                    id="dark-version"
                                    onclick="darkMode(this)"
                                />
                            </div>
                        </div>
                        <a
                            className="btn bg-gradient-dark w-100"
                            href="#"
                        >
                            Free Download
                        </a>
                        <a
                            className="btn btn-outline-dark w-100"
                            href="#"
                        >
                            View documentation
                        </a>
                        <div className="w-100 text-center">
                            <a
                                className="github-button"
                                href="#"
                                data-icon="octicon-star"
                                data-size="large"
                                data-show-count="true"
                                aria-label="Star creativetimofficial/argon-dashboard on GitHub"
                            >
                                Star
                            </a>
                            <h6 className="mt-3">Thank you for sharing!</h6>
                            <a
                                href="#"
                                className="btn btn-dark mb-0 me-2"
                                target="_blank"
                            >
                                <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                            </a>
                            <a
                                href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/argon-dashboard"
                                className="btn btn-dark mb-0 me-2"
                                target="_blank"
                            >
                                <i className="fab fa-facebook-square me-1" aria-hidden="true"></i>{" "}
                                Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
