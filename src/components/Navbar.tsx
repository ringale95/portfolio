export default function Navbar() {
  return (
    <>
      <header
        className="p-3 mb-3 border-bottom"
        style={{ backgroundColor: "rgb(246, 230, 224)" }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            ></a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/" className="nav-link px-2 link-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="projects" className="nav-link px-2 link-body-emphasis">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  About Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
