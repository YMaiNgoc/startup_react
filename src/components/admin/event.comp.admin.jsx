import { useState } from 'react';
import EventComponentUI from '../ui/event.comp.ui';
import ButtonComponentAdmin from './button.comp.admin';

const EventComponentAdmin = ({ event }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        name: event.name,
        title: event.title,
        description: event.description,
        start_date: event.start_date,
        end_date: event.end_date,
    });

    const handleEditMode = () => {
        setIsEditing(true);
    }

    const EventEditingUI = ({ origin, setOrigin, setIsEditing }) => {
        const [editedData, setEditedData] = useState({
            name: origin.name,
            title: origin.title,
            description: origin.description,
            start_date: origin.start_date,
            end_date: origin.end_date,
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setEditedData((prev) => ({ ...prev, [name]: value }));
        };

        const handleSaveEditClick = async () => {
            setOrigin(editedData)
            setIsEditing(false);
        };

        const handleCancelEditClick = () => {
            setEditedData(origin)
            setIsEditing(false);
        }

        return (
            <div className="col-md-6 mb-3">
                <div className="card h-100 shadow-sm">
                    <div className="card-body text-start">
                        <h6 className="pt-1">Tên sự kiện</h6>
                        <input
                            type="text"
                            name="name"
                            className="form-control mb-2"
                            value={editedData.name}
                            onChange={handleChange}
                            placeholder="Tên sự kiện"
                        />
                        <h6 className="pt-1">Tiêu đề</h6>
                        <textarea
                            name="description"
                            className="form-control mb-2"
                            value={editedData.title}
                            onChange={handleChange}
                            placeholder="Mô tả sự kiện"
                        />
                        <h6 className="pt-1">Thông tin</h6>
                        <textarea
                            name="description"
                            className="form-control mb-2"
                            value={editedData.description}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Mô tả sự kiện"
                        />
                        <h6 className="pt-1">thời gian</h6>
                        <div className='d-flex justify-content-between gap-3' >
                            <input
                                type="date"
                                name="start_date"
                                className="form-control mb-2 w-50"
                                value={editedData.start_date}
                                onChange={handleChange}
                            />
                            <input
                                type="date"
                                name="end_date"
                                className="form-control mb-2 w-50"
                                value={editedData.end_date}
                                onChange={handleChange}
                            />
                        </div>
                        <ButtonComponentAdmin onCancel={handleCancelEditClick} onSave={handleSaveEditClick}/>
                    </div>

                </div>
            </div>
        );
    }

    // --- return ---
    return (
        <div className="container mt-3">
            <h1 className="mb-4 text-center">{isEditing ? "Thông tin sự kiện" : "Danh sách sự kiện"}</h1>
            <div className='d-flex justify-content-center'>
                {isEditing ?
                    <EventEditingUI
                        origin={editedData}
                        setOrigin={setEditedData}
                        setIsEditing={setIsEditing} />
                    :
                    <EventComponentUI 
                        event={editedData}
                        button={<ButtonComponentAdmin />}
                        action={handleEditMode} />
                }
            </div>
        </div>)
}

export default EventComponentAdmin