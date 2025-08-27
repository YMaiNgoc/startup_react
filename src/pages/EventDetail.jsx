import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase/supabase';

export default function EventDetail() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEventDetails() {
      setLoading(true);

      const { data: eventData, error: eventError } = await supabase
        .from('events')
        .select('*')
        .eq('id', eventId)
        .single();

      if (eventError) {
        console.error('Lỗi lấy event:', eventError);
        setLoading(false);
        return;
      }
      setEvent(eventData);
      setLoading(false);
    }

    fetchEventDetails();
  }, [eventId]);

  if (loading) return <div className="container mt-5">Đang tải...</div>;

  if (!event) return <div className="container mt-5">Không tìm thấy sự kiện</div>;

  return (
    <div className="container mt-5">
        <h1
            style={{
                color: '#0d6efd',
                fontWeight: 'bold',
                fontSize: '3rem',
                padding: '40px 0',      
                marginBottom: '20px',  
                borderRadius: '4px'     
            }}
            >
            {event.title || event.name}
        </h1>

      <p style={{ color: '#444', fontSize: '1.1rem' }}>{event.description}</p>
      <p style={{ fontWeight: '600', color: '#0a58ca' }}>
        Thời gian: {event.start_date} - {event.end_date}
      </p>

      <h3 className="mt-5 mb-4" style={{ borderBottom: '2px solid #0d6efd', paddingBottom: '10px', color: '#0d6efd',   textAlign: 'center', }}>
        Timeline chi tiết sự kiện
      </h3>

      {event.detail.length === 0 && <p>Không có chi tiết cho sự kiện này.</p>}

      <ul className="list-unstyled position-relative">
        {event.detail.map((detail, idx) => (
          <li
            key={detail.id}
            className="mb-5 position-relative ps-4"
            style={{ minHeight: '80px' }}
          >
            {/* Dot & Line */}
            <span
              style={{
                position: 'absolute',
                left: '0',
                top: '12px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#0d6efd',
                boxShadow: '0 0 6px rgba(13, 110, 253, 0.7)',
              }}
            ></span>
            {idx !== event.detail.length - 1 && (
              <span
                style={{
                  position: 'absolute',
                  left: '6px',
                  top: '34px',
                  width: '2px',
                  height: '100%',
                  backgroundColor: '#0d6efd',
                  opacity: 0.5,
                }}
              ></span>
            )}

            <div>
              <div
                className="d-flex justify-content-between align-items-center mb-1"
                style={{ gap: '1rem' }}
              >
                <h5
                  className="mb-0"
                  style={{
                    color: '#0a58ca',
                    fontWeight: '700',
                    fontSize: '1.4rem',
                    flex: 1,
                  }}
                >
                  {detail.title || detail.timeline || 'Không có tiêu đề'}
                </h5>
                <small
                  className="text-muted"
                  style={{ fontSize: '0.85rem', color: '#6c757d', whiteSpace: 'nowrap' }}
                >
                  {detail.date ? new Date(detail.date).toLocaleDateString() : 'Chưa có ngày'}
                </small>
              </div>
              {detail.place && (
                <p
                  className="mb-1"
                  style={{
                    fontStyle: 'italic',
                    color: '#3a8ee6',
                    fontSize: '0.95rem',
                    marginBottom: '0.3rem',
                  }}
                >
                  Địa điểm: {detail.place}
                </p>
              )}
              {detail.description && (
                <p
                  className="mb-0"
                  style={{ fontSize: '1rem', lineHeight: '1.4' }}
                >
                  {detail.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
