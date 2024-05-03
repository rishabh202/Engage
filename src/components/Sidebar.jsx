const Sidebar = ({selectedTab, setSelectedTab}) => {

    return (
      
      <div className="d-flex flex-column flex-shrink-0 p-3 sidebar bg-dark" style={{ width: "230px" }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4 text-white">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" 
          onClick={() => {
          setSelectedTab("Home");
          }}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Home" && "active"}`} aria-current="page">
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
            Home
          </a>
        </li>
        <li onClick={() => {
          setSelectedTab("Create Post");
          }}>
          <a href="#" className={`nav-link text-white ${selectedTab === "Create Post" && "active"}`}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home" /></svg>
            Create Post
          </a>
        </li>
       
      </ul>
      <hr />
  
    </div>
    
    );
};

export default Sidebar;