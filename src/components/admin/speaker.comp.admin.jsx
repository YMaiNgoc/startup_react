import { useState } from 'react';
import SpeakerComponentUI from "../ui/speaker.comp.ui";
import ButtonComponentAdmin from "./button.comp.admin";
import axios from 'axios';

const SpeakerComponentAdmin = ({ speakers }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [speakerData, setSpeakerData] = useState(speakers);

    // --- Change Mode View -> Edit ---
    const handleEditMode = ({ index }) => {
        setEditingIndex(index);
        setIsEditing(true);
    };

    // --- Function For Edit ---
    const handleSaveEdited = (updatedSpeaker) => {
        const updatedData = [...speakerData];
        updatedData[editingIndex] = updatedSpeaker;
        setSpeakerData(updatedData);
        setIsEditing(false);
        setEditingIndex(null);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditingIndex(null);
    };

    // --- Function For Save ---
    const handleSaveData = async (speaker) => {
        const {data} = await axios.get("http://localhost:8800/api/speaker?name=" + speaker.name);
        if (data.speakers == []){
            console.log("not exit")
        } else {
            console.log(console.log({"id" : data.speakers[0].id}))
        }
        // const data = await axios.post("http://localhost:8800/api/speaker", { speaker})
        // console.log(response)
    }

    const handleCancelSave = () => {
        console.log("Handle Cancel Save Data")
    }

    // --- UI ---
    const SpeakerEditingUI = ({ speaker, onSave, onCancel }) => {
        const [editedData, setEditedData] = useState(speaker);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setEditedData((prev) => ({ ...prev, [name]: value }));
        };

        return (
            <div className="col-md-4 mb-3">
                <div className="card h-100">
                    <img
                        src={editedData.img}
                        className="card-img-top"
                        alt={editedData.name}
                        style={{ maxHeight: '150px', objectFit: 'contain' }}
                    />
                    <div className="card-body">
                        <h6 className="pt-1">Tên diễn giả</h6>
                        <input
                            type="text"
                            name="name"
                            className="form-control mb-2"
                            value={editedData.name}
                            onChange={handleChange}
                            placeholder="Tên diễn giả"
                        />
                        <h6 className="pt-1">Chức vụ</h6>
                        <textarea
                            name="position"
                            className="form-control mb-2"
                            value={editedData.position}
                            rows={3}
                            onChange={handleChange}
                            placeholder="Chức vụ"
                        />
                    </div>
                    <ButtonComponentAdmin
                        onCancel={onCancel}
                        onSave={onSave}
                        paramOnSave={editedData}
                        cancelName={"Hủy bỏ"}
                        saveName={"Xong"}
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="container mt-3">
            <h1 className="mb-4 text-center">Danh sách Diễn giả</h1>
            <div className="row d-flex justify-content-center">
                {speakerData.length === 0 && <p>Chưa có diễn giả nào.</p>}
                {isEditing && editingIndex !== null ? (
                    <SpeakerEditingUI
                        speaker={speakerData[editingIndex]}
                        onSave={handleSaveEdited}
                        onCancel={handleCancelEdit}
                    />
                ) : (
                    speakerData.map((speaker, index) => (
                        <SpeakerComponentUI
                            key={speaker.id || index}
                            speaker={speaker}
                            action={handleEditMode}
                            button={
                                <ButtonComponentAdmin
                                    onCancel={handleCancelSave}
                                    onSave={handleSaveData}
                                    paramOnSave={speaker}
                                    saveName={"Lưu trữ"}
                                    cancelName={"Xóa"}
                                />
                            }
                            params={{ index }}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default SpeakerComponentAdmin;
