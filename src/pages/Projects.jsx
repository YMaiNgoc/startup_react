// src/pages/Projects.jsx
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase/supabase";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Lỗi khi tải dữ liệu dự án:", error);
      } else {
        setProjects(data);
        setFilteredProjects(data);
      }
      setLoading(false);
    }
    fetchProjects();
  }, []);

  // Xử lý tìm kiếm
  useEffect(() => {
    let filtered = projects;

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        (p.title || p.name || "").toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, projects]);

  if (loading) return <div className="container mt-5">Đang tải dự án...</div>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Danh sách Dự án</h1>

      {/* Thanh tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm dự án..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-center">Không tìm thấy dự án nào.</p>
      ) : (
        <div className="row g-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.name}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title || project.name}</h5>
                  <p className="card-text flex-grow-1">
                    {project.description?.slice(0, 120) || ""}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-auto"
                    >
                      Xem chi tiết
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
