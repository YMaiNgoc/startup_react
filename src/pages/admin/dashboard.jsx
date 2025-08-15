import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Events() {
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true);
 const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: event.name,
    description: event.description,
    start_date: event.start_date,
    end_date: event.end_date,
  });

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/crawler/surfdanang');
        setEditedData(response.data.title);
      } catch (error) {
        console.error('Error fetching speakers:', error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  if (loading) return <div className="container mt-5">Đang tải sự kiện...</div>;

const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // TODO: bạn có thể thêm API call để lưu dữ liệu ở đây
    setIsEditing(false);
  };

  const handleInsertClick = async () => {
    console.log("Insert clicked for event:", editedData);
    const response = await axios.post("http://localhost:8800/api/event/insert", editedData);
    console.log(response)
  };

  return (
    <section className="mb-5 text-center">
      <h2 className="mb-3">Thông tin sự kiện</h2>
      <div className="row justify-content-center">
        <div key={event.id} className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm mx-auto">
            <div className="card-body text-start">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    value={editedData.name}
                    onChange={handleChange}
                    placeholder="Tên sự kiện"
                  />
                  <textarea
                    name="description"
                    className="form-control mb-2"
                    value={editedData.description}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Mô tả sự kiện"
                  />
                  <input
                    type="date"
                    name="start_date"
                    className="form-control mb-2"
                    value={editedData.start_date}
                    onChange={handleChange}
                  />
                  <input
                    type="date"
                    name="end_date"
                    className="form-control mb-2"
                    value={editedData.end_date}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <h5 className="card-title text-primary">{editedData.name}</h5>
                  <p className="card-text">{editedData.description}</p>
                  <p>
                    <strong>Thời gian:</strong> {editedData.start_date} - {editedData.end_date}
                  </p>
                </>
              )}
            </div>
            <div className="card-footer d-flex justify-content-between">
              {isEditing ? (
                <button className="btn btn-success btn-sm" onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <button className="btn btn-primary btn-sm" onClick={handleEditClick}>
                  Edit
                </button>
              )}
              <button className="btn btn-secondary btn-sm" onClick={handleInsertClick}>
                Insert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
