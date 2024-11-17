export default function Home() {
    return (
        <>
            <div className="min-height-300 bg-dark position-absolute w-100"></div>
<aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4" id="sidenav-main">
    <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a className="navbar-brand m-0" href="#" target="_blank">
            <img src="@/assets/img/logo-ct-dark.png" width="26px" height="26px" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold">Creative Tim</span>
        </a>
    </div>
    <hr className="horizontal dark mt-0" />
    <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-calendar-grid-58 text-dark text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Tables</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="#">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-credit-card text-dark text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Billing</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-app text-dark text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Virtual Reality</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-world-2 text-dark text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">RTL</span>
                </a>
            </li>
            <li className="nav-item mt-3">
                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Profile</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-single-copy-04 text-dark text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Sign In</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                        <i className="ni ni-collection text-dark text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Sign Up</span>
                </a>
            </li>
        </ul>
    </div>
    <div className="sidenav-footer mx-3">
        <div className="card card-plain shadow-none" id="sidenavCard">
            <img className="w-50 mx-auto" src="@/assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration" />
            <div className="card-body text-center p-3 w-100 pt-0">
                <div className="docs-info">
                    <h6 className="mb-0">Need help?</h6>
                    <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
                </div>
            </div>
        </div>
        <a href="#" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
        <a className="btn btn-primary btn-sm mb-0 w-100" href="#" type="button">Upgrade to pro</a>
    </div>
</aside>


            <main className="main-content position-relative border-radius-lg ">
                <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                    <div className="container-fluid py-1 px-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-sm text-white active" aria-current="page">Billing</li>
                            </ol>
                            <h6 className="font-weight-bolder text-white mb-0">Billing</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group">
                                    <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" placeholder="Type here@." />
                                </div>
                            </div>
                            <ul className="navbar-nav  justify-content-end">
                                <li className="nav-item d-flex align-items-center">
                                    <a href="#" className="nav-link text-white font-weight-bold px-0">
                                        <i className="fa fa-user me-sm-1"></i>
                                        <span className="d-sm-inline d-none">Sign In</span>
                                    </a>
                                </li>
                                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                                    <a href="#" className="nav-link text-white p-0" id="iconNavbarSidenav">
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
                                    <a href="#" className="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-bell cursor-pointer"></i>
                                    </a>
                                    <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                        <li className="mb-2">
                                            <a className="dropdown-item border-radius-md" href="#">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="@/assets/img/team-2.jpg" className="avatar avatar-sm  me-3 " />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New message</span> from Laur
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
                                            <a className="dropdown-item border-radius-md" href="#">
                                                <div className="d-flex py-1">
                                                    <div className="my-auto">
                                                        <img src="@/assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 " />
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="text-sm font-weight-normal mb-1">
                                                            <span className="font-weight-bold">New album</span> by Travis Scott
                                                        </h6>
                                                        <p className="text-xs text-secondary mb-0">
                                                            <i className="fa fa-clock me-1"></i>
                                                            1 day
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item border-radius-md" href="#">
                                                <div className="d-flex py-1">
                                                    <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                        {/* <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                            <title>credit-card</title>
                                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                                    <g transform="translate(1716.000000, 291.000000)">
                                                                        <g transform="translate(453.000000, 454.000000)">
                                                                            <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                            <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
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
                                                            <i className="fa fa-clock me-1"></i>
                                                            2 days
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
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-xl-6 mb-xl-0 mb-4">
                                    <div className="card bg-transparent shadow-xl">
                                        {/* <div className="overflow-hidden position-relative border-radius-xl" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg');">
                                            <span className="mask bg-gradient-dark"></span>
                                            <div className="card-body position-relative z-index-1 p-3">
                                                <i className="fas fa-wifi text-white p-2"></i>
                                                <h5 className="text-white mt-4 mb-5 pb-2">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                                                <div className="d-flex">
                                                    <div className="d-flex">
                                                        <div className="me-4">
                                                            <p className="text-white text-sm opacity-8 mb-0">Card Holder</p>
                                                            <h6 className="text-white mb-0">Jack Peterson</h6>
                                                        </div>
                                                        <div>
                                                            <p className="text-white text-sm opacity-8 mb-0">Expires</p>
                                                            <h6 className="text-white mb-0">11/22</h6>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto w-20 d-flex align-items-end justify-content-end">
                                                        <img className="w-60 mt-2" src="@/assets/img/logos/mastercard.png" alt="logo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card">
                                                <div className="card-header mx-4 p-3 text-center">
                                                    <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                                                        <i className="fas fa-landmark opacity-10"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 p-3 text-center">
                                                    <h6 className="text-center mb-0">Salary</h6>
                                                    <span className="text-xs">Belong Interactive</span>
                                                    <hr className="horizontal dark my-3" />
                                                    <h5 className="mb-0">+$2000</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mt-md-0 mt-4">
                                            <div className="card">
                                                <div className="card-header mx-4 p-3 text-center">
                                                    <div className="icon icon-shape icon-lg bg-gradient-primary shadow text-center border-radius-lg">
                                                        <i className="fab fa-paypal opacity-10"></i>
                                                    </div>
                                                </div>
                                                <div className="card-body pt-0 p-3 text-center">
                                                    <h6 className="text-center mb-0">Paypal</h6>
                                                    <span className="text-xs">Freelance Payment</span>
                                                    <hr className="horizontal dark my-3" />
                                                    <h5 className="mb-0">$455.00</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-lg-0 mb-4">
                                    <div className="card mt-4">
                                        <div className="card-header pb-0 p-3">
                                            <div className="row">
                                                <div className="col-6 d-flex align-items-center">
                                                    <h6 className="mb-0">Payment Method</h6>
                                                </div>
                                                <div className="col-6 text-end">
                                                    <a className="btn bg-gradient-dark mb-0" href="#"><i className="fas fa-plus"></i>&nbsp;&nbsp;Add New Card</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body p-3">
                                            <div className="row">
                                                <div className="col-md-6 mb-md-0 mb-4">
                                                    <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                                        <img className="w-10 me-3 mb-0" src="@/assets/img/logos/mastercard.png" alt="logo" />
                                                        <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                                                        <i className="fas fa-pencil-alt ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Card"></i>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                                        <img className="w-10 me-3 mb-0" src="@/assets/img/logos/visa.png" alt="logo" />
                                                        <h6 className="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;5248</h6>
                                                        <i className="fas fa-pencil-alt ms-auto text-dark cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Card"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card h-100">
                                <div className="card-header pb-0 p-3">
                                    <div className="row">
                                        <div className="col-6 d-flex align-items-center">
                                            <h6 className="mb-0">Invoices</h6>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className="btn btn-outline-primary btn-sm mb-0">View All</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body p-3 pb-0">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="mb-1 text-dark font-weight-bold text-sm">March, 01, 2020</h6>
                                                <span className="text-xs">#MS-415646</span>
                                            </div>
                                            <div className="d-flex align-items-center text-sm">
                                                $180
                                                <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="text-dark mb-1 font-weight-bold text-sm">February, 10, 2021</h6>
                                                <span className="text-xs">#RV-126749</span>
                                            </div>
                                            <div className="d-flex align-items-center text-sm">
                                                $250
                                                <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="text-dark mb-1 font-weight-bold text-sm">April, 05, 2020</h6>
                                                <span className="text-xs">#FB-212562</span>
                                            </div>
                                            <div className="d-flex align-items-center text-sm">
                                                $560
                                                <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="text-dark mb-1 font-weight-bold text-sm">June, 25, 2019</h6>
                                                <span className="text-xs">#QW-103578</span>
                                            </div>
                                            <div className="d-flex align-items-center text-sm">
                                                $120
                                                <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="text-dark mb-1 font-weight-bold text-sm">March, 01, 2019</h6>
                                                <span className="text-xs">#AR-803481</span>
                                            </div>
                                            <div className="d-flex align-items-center text-sm">
                                                $300
                                                <button className="btn btn-link text-dark text-sm mb-0 px-0 ms-4"><i className="fas fa-file-pdf text-lg me-1"></i> PDF</button>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7 mt-4">
                            <div className="card">
                                <div className="card-header pb-0 px-3">
                                    <h6 className="mb-0">Billing Information</h6>
                                </div>
                                <div className="card-body pt-4 p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="mb-3 text-sm">Oliver Liam</h6>
                                                <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Viking Burrito</span></span>
                                                <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">oliver@burrito.com</span></span>
                                                <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                                            </div>
                                            <div className="ms-auto text-end">
                                                <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="#"><i className="far fa-trash-alt me-2"></i>Delete</a>
                                                <a className="btn btn-link text-dark px-3 mb-0" href="#"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="mb-3 text-sm">Lucas Harper</h6>
                                                <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Stone Tech Zone</span></span>
                                                <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">lucas@stone-tech.com</span></span>
                                                <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                                            </div>
                                            <div className="ms-auto text-end">
                                                <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="#"><i className="far fa-trash-alt me-2"></i>Delete</a>
                                                <a className="btn btn-link text-dark px-3 mb-0" href="#"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg">
                                            <div className="d-flex flex-column">
                                                <h6 className="mb-3 text-sm">Ethan James</h6>
                                                <span className="mb-2 text-xs">Company Name: <span className="text-dark font-weight-bold ms-sm-2">Fiber Notion</span></span>
                                                <span className="mb-2 text-xs">Email Address: <span className="text-dark ms-sm-2 font-weight-bold">ethan@fiber.com</span></span>
                                                <span className="text-xs">VAT Number: <span className="text-dark ms-sm-2 font-weight-bold">FRB1235476</span></span>
                                            </div>
                                            <div className="ms-auto text-end">
                                                <a className="btn btn-link text-danger text-gradient px-3 mb-0" href="#"><i className="far fa-trash-alt me-2"></i>Delete</a>
                                                <a className="btn btn-link text-dark px-3 mb-0" href="#"><i className="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Edit</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 mt-4">
                            <div className="card h-100 mb-4">
                                <div className="card-header pb-0 px-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h6 className="mb-0">Your Transaction's</h6>
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-end align-items-center">
                                            <i className="far fa-calendar-alt me-2"></i>
                                            <small>23 - 30 March 2020</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-4 p-3">
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder mb-3">Newest</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-icon-only btn-rounded btn-outline-danger mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-down"></i></button>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Netflix</h6>
                                                    <span className="text-xs">27 March 2020, at 12:30 PM</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold">
                                                - $ 2,500
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Apple</h6>
                                                    <span className="text-xs">27 March 2020, at 04:30 AM</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                                + $ 2,000
                                            </div>
                                        </li>
                                    </ul>
                                    <h6 className="text-uppercase text-body text-xs font-weight-bolder my-3">Yesterday</h6>
                                    <ul className="list-group">
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Stripe</h6>
                                                    <span className="text-xs">26 March 2020, at 13:45 PM</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                                + $ 750
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">HubSpot</h6>
                                                    <span className="text-xs">26 March 2020, at 12:30 PM</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                                + $ 1,000
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-icon-only btn-rounded btn-outline-success mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-arrow-up"></i></button>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Creative Tim</h6>
                                                    <span className="text-xs">26 March 2020, at 08:30 AM</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center text-success text-gradient text-sm font-weight-bold">
                                                + $ 2,500
                                            </div>
                                        </li>
                                        <li className="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                                            <div className="d-flex align-items-center">
                                                <button className="btn btn-icon-only btn-rounded btn-outline-dark mb-0 me-3 btn-sm d-flex align-items-center justify-content-center"><i className="fas fa-exclamation"></i></button>
                                                <div className="d-flex flex-column">
                                                    <h6 className="mb-1 text-dark text-sm">Webflow</h6>
                                                    <span className="text-xs">26 March 2020, at 05:00 AM</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center text-dark text-sm font-weight-bold">
                                                Pending
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
                                        {/* © <script>
                                            document.write(new Date().getFullYear())
                                        </script>, */}
                                        made with <i className="fa fa-heart"></i> by
                                        <a href="#" className="font-weight-bold" target="_blank">Creative Tim</a>
                                        for a better web.
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link text-muted" target="_blank">Creative Tim</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link text-muted" target="_blank">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link text-muted" target="_blank">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link pe-0 text-muted" target="_blank">License</a>
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
                        <a href="#" className="switch-trigger background-color">
                            <div className="badge-colors my-2 text-start">
                                <span className="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                                <span className="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
                            </div>
                        </a>
                        <div className="mt-3">
                            <h6 className="mb-0">Sidenav Type</h6>
                            <p className="text-sm">Choose between 2 different sidenav types.</p>
                        </div>
                        <div className="d-flex">
                            <button className="btn bg-gradient-primary w-100 px-3 mb-2 active me-2" data-className="bg-white" onclick="sidebarType(this)">White</button>
                            <button className="btn bg-gradient-primary w-100 px-3 mb-2" data-className="bg-default" onclick="sidebarType(this)">Dark</button>
                        </div>
                        <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
                        <div className="d-flex my-3">
                            <h6 className="mb-0">Navbar Fixed</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)" />
                            </div>
                        </div>
                        <hr className="horizontal dark my-sm-4" />
                        <div className="mt-2 mb-5 d-flex">
                            <h6 className="mb-0">Light / Dark</h6>
                            <div className="form-check form-switch ps-0 ms-auto my-auto">
                                <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)" />
                            </div>
                        </div>
                        <a className="btn bg-gradient-dark w-100" href="#">Free Download</a>
                        <a className="btn btn-outline-dark w-100" href="#">View documentation</a>
                        <div className="w-100 text-center">
                            <a className="github-button" href="https://github.com/creativetimofficial/argon-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/argon-dashboard on GitHub">Star</a>
                            <h6 className="mt-3">Thank you for sharing!</h6>
                            <a href="#" className="btn btn-dark mb-0 me-2" target="_blank">
                                <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                            </a>
                            <a href="#" className="btn btn-dark mb-0 me-2" target="_blank">
                                <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
