// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-5">
        <div className="row">
          
          {/* Cột 1 */}
          <div className="col-md-4 mb-4">
            <h2 className="h5 fw-bold">Startup Event</h2>
            <p className="small">
              Nền tảng kết nối startup, quỹ đầu tư, dự án và diễn giả.
            </p>
          </div>

          {/* Cột 2 */}
          <div className="col-md-4 mb-4">
            <h2 className="h5 fw-bold">Liên kết</h2>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Trang chủ</a></li>
              <li><a href="/events" className="text-light text-decoration-none">Sự kiện</a></li>
              <li><a href="/projects" className="text-light text-decoration-none">Dự án</a></li>
              <li><a href="/startups" className="text-light text-decoration-none">Startups</a></li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className="col-md-4 mb-4">
            <h2 className="h5 fw-bold">Liên hệ</h2>
            <p>Email: contact@startupevent.com</p>
            <p>Địa chỉ: 26 Lê Quang Sung, Cẩm Lệ, Đà Nẵng</p>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-center py-3">
        <small>© {new Date().getFullYear()} Startup Event. All rights reserved.</small>
      </div>
    </footer>
  );
}
