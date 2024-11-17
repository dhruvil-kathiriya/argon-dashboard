export default function () {
    return (
        <>

            <div className="min-height-300 bg-dark position-absolute w-100"></div>
            <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
                    <a className="navbar-brand m-0" href="#" target="_blank">
                        <img src="../assets/img/logo-ct-dark.png" width="26px" height="26px" className="navbar-brand-img h-100" alt="main_logo"/>
                            <span className="ms-1 font-weight-bold">Creative Tim</span>
                    </a>
                </div>
                <hr className="horizontal dark mt-0"/>
                    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link " href="#">
                                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="ni ni-tv-2 text-dark text-sm opacity-10"></i>
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">
                                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="ni ni-calendar-grid-58 text-dark text-sm opacity-10"></i>
                                    </div>
                                    <span className="nav-link-text ms-1">Tables</span>
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
                                <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account pages</h6>
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
                            <img className="w-50 mx-auto" src="../assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration"/>
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
                                <li className="breadcrumb-item text-sm text-white active" aria-current="page">Tables</li>
                            </ol>
                            <h6 className="font-weight-bolder text-white mb-0">Tables</h6>
                        </nav>
                        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                                <div className="input-group">
                                    <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true"></i></span>
                                    <input type="text" className="form-control" placeholder="Type here..."/>
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
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm  me-3 "/>
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
                                                        <img src="../assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm bg-gradient-dark  me-3 "/>
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
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0">
                                    <h6>Authors table</h6>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                                                    <th className="text-secondary opacity-7"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">John Michael</h6>
                                                                <p className="text-xs text-secondary mb-0">john@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Manager</p>
                                                        <p className="text-xs text-secondary mb-0">Organization</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="badge badge-sm bg-gradient-success">Online</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-3.jpg" className="avatar avatar-sm me-3" alt="user2"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Alexa Liras</h6>
                                                                <p className="text-xs text-secondary mb-0">alexa@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Programator</p>
                                                        <p className="text-xs text-secondary mb-0">Developer</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">11/01/19</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3" alt="user3"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Laurent Perrier</h6>
                                                                <p className="text-xs text-secondary mb-0">laurent@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Executive</p>
                                                        <p className="text-xs text-secondary mb-0">Projects</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="badge badge-sm bg-gradient-success">Online</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">19/09/17</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-3.jpg" className="avatar avatar-sm me-3" alt="user4"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Michael Levi</h6>
                                                                <p className="text-xs text-secondary mb-0">michael@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Programator</p>
                                                        <p className="text-xs text-secondary mb-0">Developer</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="badge badge-sm bg-gradient-success">Online</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">24/12/08</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user5"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Richard Gran</h6>
                                                                <p className="text-xs text-secondary mb-0">richard@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Manager</p>
                                                        <p className="text-xs text-secondary mb-0">Executive</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">04/10/21</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                            <div>
                                                                <img src="../assets/img/team-4.jpg" className="avatar avatar-sm me-3" alt="user6"/>
                                                            </div>
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">Miriam Eric</h6>
                                                                <p className="text-xs text-secondary mb-0">miriam@creative-tim.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Programtor</p>
                                                        <p className="text-xs text-secondary mb-0">Developer</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <a href="#" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                                            Edit
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card mb-4">
                                <div className="card-header pb-0">
                                    <h6>Projects table</h6>
                                </div>
                                <div className="card-body px-0 pt-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center justify-content-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-spotify.svg" className="avatar avatar-sm rounded-circle me-2" alt="spotify"/>
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">Spotify</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">$2,500</p>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">working</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">60%</span>
                                                            <div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-link text-secondary mb-0">
                                                            <i className="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-invision.svg" className="avatar avatar-sm rounded-circle me-2" alt="invision"/>
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">Invision</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">$5,000</p>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">done</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">100%</span>
                                                            <div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-jira.svg" className="avatar avatar-sm rounded-circle me-2" alt="jira"/>
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">Jira</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">$3,400</p>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">canceled</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">30%</span>
                                                            <div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style="width: 30%;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-slack.svg" className="avatar avatar-sm rounded-circle me-2" alt="slack"/>
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">Slack</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">$1,000</p>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">canceled</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">0%</span>
                                                            <div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style="width: 0%;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-webdev.svg" className="avatar avatar-sm rounded-circle me-2" alt="webdev"/>
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">Webdev</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">$14,000</p>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">working</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">80%</span>
                                                            <div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style="width: 80%;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                            <div>
                                                                <img src="../assets/img/small-logos/logo-xd.svg" className="avatar avatar-sm rounded-circle me-2" alt="xd"/>
                                                            </div>
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">Adobe XD</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">$2,300</p>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">done</span>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">100%</span>
                                                            <div>
                                                                <div className="progress">
                                                                    <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                                                            <i className="fa fa-ellipsis-v text-xs"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer pt-3  ">
                        <div className="container-fluid">
                            <div className="row align-items-center justify-content-lg-between">
                                <div className="col-lg-6 mb-lg-0 mb-4">
                                    <div className="copyright text-center text-sm text-muted text-lg-start">
                                        © <script>
                                            document.write(new Date().getFullYear())
                                        </script>,
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
                    <hr className="horizontal dark my-1"/>
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
                                    <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)"/>
                                </div>
                            </div>
                            <hr className="horizontal dark my-sm-4"/>
                                <div className="mt-2 mb-5 d-flex">
                                    <h6 className="mb-0">Light / Dark</h6>
                                    <div className="form-check form-switch ps-0 ms-auto my-auto">
                                        <input className="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)"/>
                                    </div>
                                </div>
                                <a className="btn bg-gradient-dark w-100" href="#">Free Download</a>
                                <a className="btn btn-outline-dark w-100" href="#">View documentation</a>
                                <div className="w-100 text-center">
                                    <a className="github-button" href="#" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/argon-dashboard on GitHub">Star</a>
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
    )
}