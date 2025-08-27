// src/components/Header.jsx
export default function Header() {
  return (
    <header className="bg-white shadow fixed w-100 zindex-fixed">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <a href="/" className="text-primary fw-bold fs-4 text-decoration-none">
          Startup Event
        </a>

        {/* Menu */}
        <nav className="d-none d-md-flex gap-4">
          <a href="/" className="text-dark text-decoration-none hover-primary">Trang chủ</a>
          <a href="/events" className="text-dark text-decoration-none hover-primary">Sự kiện</a>
          <a href="/projects" className="text-dark text-decoration-none hover-primary">Dự án</a>
          {/* <a href="/startups" className="text-dark text-decoration-none hover-primary">Startups</a> */}
          <a href="/speakers" className="text-dark text-decoration-none hover-primary">Diễn giả</a>
        </nav>

        {/* Nút */}
        <a
          href="/contact"
          className="btn btn-primary"
        >
          Liên hệ
        </a>
      </div>
    </header>
  );
}
