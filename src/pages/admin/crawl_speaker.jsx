import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const init = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api');
        setSpeakers(response.data);
      } catch (error) {
        console.error('Error fetching speakers:', error);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    const speaker = speakers[index];
    setEditedData({ name: speaker.name, position: speaker.position });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = (index) => {
    setSpeakers((prevSpeakers) =>
      prevSpeakers.map((spk, i) =>
        i === index ? { ...spk, ...editedData } : spk
      )
    );
    setEditingIndex(null);
  };

  if (loading) return <div className="container mt-5">Đang tải diễn giả...</div>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Danh sách Diễn giả</h1>
      {speakers.length === 0 && <p>Chưa có diễn giả nào.</p>}
      <div className="row">
        {speakers.map((speaker, index) => (
          <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
            <div className="card h-100">
              {speaker.img && (
                <img
                  src={speaker.img}
                  className="card-img-top"
                  alt={speaker.name}
                />
              )}
              <div className="card-body">
                {editingIndex === index ? (
                  <>
                    <textarea
                      className="form-control mb-2"
                      name="name"
                      value={editedData.name}
                      onChange={handleChange}
                      rows={2}
                    />
                    <textarea
                      className="form-control mb-2"
                      name="position"
                      value={editedData.position}
                      onChange={handleChange}
                      rows={2}
                    />
                  </>
                ) : (
                  <>
                    <h5 className="card-title">{speaker.name}</h5>
                    <p className="card-text">{speaker.position}</p>
                  </>
                )}
              </div>
              <div className="card-footer text-center d-flex justify-content-between">
                {editingIndex === index ? (
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => handleSaveClick(index)}
                  >
                    Lưu
                  </button>
                ) : (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={
                    async () => {
                        const response = await axios.post("http://localhost:8800/api/speaker/insert", speaker )
                        if (response.status == 200) {
                            alert(`insert success ${speaker.name}`)
                        }
                        console.log(`Insert clicked for index: ${index}`)
                        console.log(response);

                    }
                    
                }
                >
                  Insert
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}