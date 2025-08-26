import { useState } from 'react';
import StartupComponentUI from "../ui/startup.comp.ui";
import ButtonComponentAdmin from './button.comp.admin';

const StartupComponentAdmin = ({ startups }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [startupData, setStartupDataData] = useState(startups);

    const handleEditMode = ({ index }) => {
        setEditingIndex(index);
        setIsEditing(true);
    };

    const handleSaveEdited = (updatedStartup) => {
        const updatedData = [...startupData];
        updatedData[editingIndex] = updatedStartup;
        setSpeakerData(updatedData);
        setIsEditing(false);
        setEditingIndex(null);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setEditingIndex(null);
    };

    const handleSaveData = () => {
        console.log("Handle Save Data")
    }

    const handleCancelSave = () => {
        console.log("Handle Cancel Save Data")
    }

    const StartupEditingUI = ({ startup, onSave, onCancel }) => {
        const [editedData, setEditedData] = useState(startup);

        const handleChange = (e) => {
            const { name, value } = e.target;
            setEditedData((prev) => ({ ...prev, [name]: value }));
        };

        return (
            <div className="row d-flex justify-content-center w-50">
                <div className="col-lg-12">
                    <div className="card h-100">
                        <img src={editedData.img} alt={editedData.name} className="card-img-top" style={{ maxHeight: '150px', objectFit: 'contain' }} />
                        <div className="card-body d-flex flex-column">
                            <h6 className='pt-3'>Tên dự án</h6>
                            <input
                                type="text"
                                name="name"
                                className="form-control mb-2"
                                onChange={handleChange}
                                value={editedData.name}
                                placeholder="Tên dự án"
                            />
                            <h6 className='pt-3'>Tiêu đề</h6>
                            <input
                                type="text"
                                name="title"
                                className="form-control mb-2"
                                onChange={handleChange}
                                value={editedData.title}
                                placeholder="Tên dự án"
                            />
                            <h6 className='pt-3'>Thông tin</h6>
                            <textarea
                                type="text"
                                name="description"
                                className="form-control mb-2"
                                onChange={handleChange}
                                value={editedData.description}
                                placeholder="Tên dự án"
                                rows={3}
                            />
                            <h6 className='pt-3'>Liên kết dự án</h6>
                            <input
                                type="text"
                                name="link"
                                className="form-control mb-2"
                                value={editedData.link}
                                onChange={handleChange}
                                placeholder="Liên kết dự án"
                            />
                            <ButtonComponentAdmin
                                onCancel={onCancel}
                                onSave={onSave}
                                paramOnSave={editedData}
                                cancelName={"Hủy bỏ"}
                                saveName={"Xong"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mt-3">
            <h1 className="mb-4 text-center">{isEditing ? "Thông tin Startup" : "Danh sách Startup"}</h1>
            {startupData.length === 0 && <p>Không có Startup nào.</p>}
            {isEditing && editingIndex !== null ? (
                <div className='d-flex justify-content-center'>
                    <StartupEditingUI
                        startup={startupData[editingIndex]}
                        onSave={handleSaveEdited}
                        onCancel={handleCancelEdit}
                    />
                </div>
            ) : (
                <div className="row"> {
                    startupData.map((startup, index) => (
                        <StartupComponentUI
                            key={startup.id || index}
                            startup={startup}
                            action={handleEditMode}
                            button={<ButtonComponentAdmin
                                onCancel={handleCancelSave}
                                onSave={handleSaveData}
                                paramOnSave={editedData}
                                cancelName={"Xóa"}
                                saveName={"Lưu trữ"}
                            />}
                            params={{ index }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default StartupComponentAdmin;