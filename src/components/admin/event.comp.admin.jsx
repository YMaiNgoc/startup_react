import { useEffect, useState } from 'react';
import EventComponentUI from '../ui/event.comp.ui';

const EventComponentAdmin = ({ event }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({
        name: event.name,
        description: event.description,
        start_date: event.start_date,
        end_date: event.end_date,
    });

    const handleCancelClick = () => {}


    const ButtonUI = () => {

    }

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleInsertClick = async () => {
        console.log("Insert clicked for event:", editedData);
        const response = await axios.post("http://localhost:8800/api/event/insert", editedData);
        console.log(response)
    };

    // return (
    //     <section className="mb-4 text-center">
    //         <h2 className="mb-3">Thông tin sự kiện</h2>
    //         <div className="row justify-content-center">
    //             <div key={event.id} className="col-md-4 mb-3">
    //                 <div className="card h-100 shadow-sm mx">
    //                     <div className="card-body text-start">
    //                         <h6 className="pt-1">Tên sự kiện</h6>
    //                         <input
    //                             type="text"
    //                             name="name"
    //                             className="form-control mb-2"
    //                             value={editedData.name}
    //                             onChange={handleChange}
    //                             placeholder="Tên sự kiện"
    //                             readOnly={true}
    //                         />
    //                         <h6 className="pt-1">Thông tin</h6>
    //                         <textarea
    //                             name="description"
    //                             className="form-control mb-2"
    //                             value={editedData.description}
    //                             onChange={handleChange}
    //                             rows={10}
    //                             placeholder="Mô tả sự kiện"
    //                             readOnly={isEditing}
    //                         />
    //                         <h6 className="pt-1">Ngày bắt đầu</h6>
    //                         <input
    //                             type="date"
    //                             name="start_date"
    //                             className="form-control mb-2"
    //                             value={editedData.start_date}
    //                             onChange={handleChange}
    //                             readOnly={isEditing}
    //                         />
    //                         <h6 className="pt-1">Ngày kết thúc</h6>
    //                         <input
    //                             type="date"
    //                             name="end_date"
    //                             className="form-control mb-2"
    //                             value={editedData.end_date}
    //                             onChange={handleChange}
    //                             readOnly={isEditing}
    //                         />
    //                     </div>
    //                     <div className="card-footer d-flex justify-content-between ">
    //                         {isEditing ? (
    //                             <button className="btn btn-primary w-20" onClick={handleSaveClick}>
    //                                 Chỉnh sửa
    //                             </button>
    //                         ) : (
    //                             <button className="btn btn-success w-20" onClick={handleEditClick}>
    //                                 Xong
    //                             </button>
    //                         )}
    //                         <button className="btn btn-secondary w-20" onClick={handleInsertClick} style={{ display: !isEditing ? "none" : "block" }}>
    //                             Lưu Trữ
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );

    return (
        <>
            <EventComponentUI event={event}/>
            <div className="card-footer d-flex justify-content-between ">
                <button className="btn btn-danger" onClick={handleCancelClick}>Hủy Bỏ </button>
                <button className="btn btn-success" onClick={handleSaveClick}>Lưu Trữ</button>
            </div>
        </>
    )
}




export default EventComponentAdmin