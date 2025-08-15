import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Speakers() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSpeakers() {
      setLoading(true);
      const { data, error } = await supabase
        .from('speakers')
        .select('*');

      if (error) {
        console.error('Lỗi khi tải dữ liệu diễn giả:', error);
      } else {
        setSpeakers(data);
      }
      setLoading(false);
    }
    fetchSpeakers();
  }, []);

  if (loading) return <div className="container mt-5">Đang tải diễn giả...</div>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Danh sách Diễn giả</h1>
      <div className="row">
        {speakers.length === 0 && <p>Chưa có diễn giả nào.</p>}
        {speakers.map(speaker => (
          <div key={speaker.id} className="col-md-4 mb-3">
            <div className="card h-100">
              {speaker.img && <img src={speaker.img} className="card-img-top" alt={speaker.name} />}
              <div className="card-body">
                <h5 className="card-title">{speaker.name}</h5>
                <p className="card-text">{speaker.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
