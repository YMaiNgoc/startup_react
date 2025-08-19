import axios from 'axios';
import { useEffect, useState } from 'react';

const Speaker = ({ speakers }) => {
    const [speakerData, setspeakerData] = useState(
        speakers.map(e => ({
            ...e,
            isEditing: false,
            edited: {
                name: e.name,
                position: e.position,
                img: e.img,
            }
        }))
    );

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedSpeakers = [...speakerData];
        updatedSpeakers[index].edited[name] = value;
        setspeakerData(updatedSpeakers);
    };

    const handleEditClick = (index) => {
        const updatedSpeakers = [...speakerData];
        updatedSpeakers[index].isEditing = true;
        setspeakerData(updatedSpeakers);
    };

    const handleSaveClick = (index) => {
        const updatedSpeakers = [...speakerData];
        updatedSpeakers[index].isEditing = false;
        setspeakerData(updatedSpeakers);
    };

    const handleDeleteClick = (index) => {
        const updatedSpeakers = [...speakerData];
        updatedSpeakers.splice(index, 1);
        setspeakerData(updatedSpeakers);
    };

    const handleInsertClick = async (index) => {
        const dataToInsert = speakerData[index].edited;
        console.log("Insert clicked for event:", dataToInsert);
        try {
            const response = await axios.post("http://localhost:8800/api/event/insert", dataToInsert);
            console.log(response.data);
        } catch (err) {
            console.error("Error inserting event:", err);
        }
    };


    return (
        <div className="container mt-5">
            <h1 className="mb-4">Danh sách Diễn giả</h1>
            <div className="row">
                {speakers.length === 0 && <p>Chưa có diễn giả nào.</p>}
                {speakerData.map( (e, index) => (
                    <div key={e.id || index} className="col-md-3 mb-3">
                        <div className="card h-100">
                            {e.edited.img && <img src={e.edited.img} className="card-img-top" alt={e.edited.name} style={{ maxHeight: '150px', objectFit: 'contain' }} />}
                            <div className="card-body">
                                <h6 className="pt-1">Tên diễn giả</h6>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control mb-2"
                                    value={e.edited.name}
                                    placeholder="Tên diễn giả"
                                    readOnly={true}
                                />
                                <h6 className="pt-1">Chức vụ</h6>
                                <textarea
                                    type="text"
                                    name="position"
                                    className="form-control mb-2"
                                    value={e.edited.position}
                                    rows={3}
                                    onChange={(ev) => handleChange(index, ev)}
                                    placeholder="Tên diễn giả"
                                    readOnly={!e.isEditing}
                                />
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                <button className="btn btn-success" onClick={ () => handleSaveClick(index)} style={{ display: e.isEditing ? "block" : "none" }} >Xong</button>
                                <button className="btn btn-danger" onClick={  () => handleDeleteClick(index)} style={{ display: e.isEditing ? "block" : "none" }} >Loại bỏ</button>
                                <button className="btn btn-primary" onClick={ () => handleEditClick(index)} style={{ display: !e.isEditing ? "block" : "none" }}>Chỉnh sửa</button>
                                <button className="btn btn-success" onClick={ () => handleInsertClick(index)} style={{ display: !e.isEditing ? "block" : "none" }}>Lưu Trữ</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Speaker