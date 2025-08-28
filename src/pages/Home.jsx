import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const { data: eventsData } = await axios.get("http://localhost:8800/api/event?limit=3")
      const { data: projectsData  } = await axios.get("http://localhost:8800/api/startup?limit=3")
      const { data: speakersData} = await axios.get("http://localhost:8800/api/speaker?limit=3")

        setEvents(eventsData.events || []);
        setProjects(projectsData.startups || []);
        setSpeakers(speakersData.speakers || []);

        setLoading(false);
      }


    fetchData();
  }, []);

  // Hàm lọc dữ liệu theo search
  const filterData = (list) => {
    if (!search.trim()) return list;
    return list.filter(item =>
      (item.title || item.name || '')
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      (item.description || '')
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <p>Đang tải dữ liệu...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
      {/* <img
        src=""
        alt="Startup Event"
        style={{ marginBottom: '15px' }}
      /> */}
      <h1 className="mb-4" style={{ fontWeight: '700', color: '#0d6efd' }}>
        Chào mừng đến với Startup Event
      </h1>
    </div>
      {/* Thanh tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"  style={{ maxWidth: '600px' }}
          placeholder="Tìm kiếm sự kiện, dự án, diễn giả..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Sự kiện nổi bật */}
      <section className="mb-5">
        <h2 className="mb-3">Sự kiện nổi bật</h2>
        <div className="row">
          {filterData(events).map(event => (
            <div key={event.id} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">{event.title || event.name}</h5>
                  <p className="card-text">{event.description?.slice(0, 100)}...</p>
                  <p><strong>Thời gian:</strong> {event.start_date} - {event.end_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dự án tiêu biểu */}
      <section className="mb-5">
        <h2 className="mb-3">Dự án tiêu biểu</h2>
        <div className="row">
          {filterData(projects).map(project => (
            <div key={project.id} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                {project.img && (
                  <img src={project.img} className="card-img-top" alt={project.name} />
                )}
                <div className="card-body">
                  <h5 className="card-title text-success">{project.title || project.name}</h5>
                  <p className="card-text">{project.description?.slice(0, 100)}...</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Xem thêm
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Diễn giả */}
      <section className="mb-5">
        <h2 className="mb-3">Diễn giả</h2>
        <div className="row">
          {filterData(speakers).map(speaker => (
            <div key={speaker.id} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                {speaker.img && (
                  <img src={speaker.img} className="card-img-top" alt={speaker.name} />
                )}
                <div className="card-body">
                  <h5 className="card-title text-warning">{speaker.name}</h5>
                  <p className="card-text">{speaker.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
