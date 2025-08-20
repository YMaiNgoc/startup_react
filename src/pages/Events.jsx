import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase/supabase';
import { Link } from 'react-router-dom';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      setLoading(true);
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('start_date', { ascending: false });

      if (error) {
        console.error('Lỗi khi tải dữ liệu sự kiện:', error);
      } else {
        setEvents(data);
      }
      setLoading(false);
    }
    fetchEvents();
  }, []);

  if (loading) return <div className="container mt-5">Đang tải sự kiện...</div>;

  return (
    
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Danh sách Sự kiện</h1>
      {events.length === 0 ? (
        <p className="text-center">Chưa có sự kiện nào.</p>
      ) : (
        <div className="row g-4">
          {events.map(event => (
            <div key={event.id} className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                {/* Nếu có ảnh thì hiển thị ảnh, còn không thì bỏ qua hoặc dùng placeholder */}
                {/* <img src={event.img || 'https://via.placeholder.com/400x200'} className="card-img-top" alt={event.name} /> */}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{event.title || event.name}</h5>
                  <p className="card-text flex-grow-1">{event.description?.slice(0, 120)}...</p>
                  <p className="mb-2">
                    <strong>Thời gian:</strong> {event.start_date} - {event.end_date}
                  </p>
                  <Link to={`/events/${event.id}`} className="btn btn-primary mt-auto">
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
