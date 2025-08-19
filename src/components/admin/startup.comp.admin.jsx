import { useEffect, useState } from 'react';
const Startup = ({ startups }) => {
    const [startupData, setstartupData] = useState(
        startups.map(e => ({
            ...e,
            isEditing: false,
            edited: {
                name: e.name,
                title: e.title,
                img: e.img,
                description: e.description,
                link: e.link,
            }
        }))
    );

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updataStartups = [...startupData];
        updataStartups[index].edited[name] = value;
        setstartupData(updataStartups);
    };

    const handleEditClick = (index) => {
        const updataStartups = [...startupData];
        updataStartups[index].isEditing = true;
        setstartupData(updataStartups);
    };

    const handleSaveClick = (index) => {
        const updataStartups = [...startupData];
        updataStartups[index].isEditing = false;
        setstartupData(updataStartups);
    };

    const handleDeleteClick = (index) => {
        const updataStartups = [...startupData];
        updataStartups.splice(index, 1);
        setstartupData(updataStartups);
    };

    const handleInsertClick = async (index) => {
        const dataToInsert = startupData[index].edited;
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
            <div className="row g-4">
                {startupData.map((e, index) => (
                    <div key={e.id || index} className="col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img src={e.edited.img} alt={e.edited.name} className="card-img-top"style={{ maxHeight: '150px', objectFit: 'cover' }}/>
                            <div className="card-body d-flex flex-column">
                                <h6 className='pt-3'>Tên dự án</h6>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control mb-2"
                                    onChange={(ev) => handleChange(index, ev)}
                                    value={e.edited.name}
                                    placeholder="Tên dự án"
                                    readOnly={!e.isEditing}
                                />
                                <h6 className='pt-3'>Tiêu đề</h6>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control mb-2"
                                    onChange={(ev) => handleChange(index, ev)}
                                    value={e.edited.title}
                                    placeholder="Tên dự án"
                                    readOnly={!e.isEditing}
                                />
                                <h6 className='pt-3'>Thông tin</h6>
                                <textarea
                                    type="text"
                                    name="description"
                                    className="form-control mb-2"
                                    onChange={(ev) => handleChange(index, ev)}
                                    value={e.edited.description}
                                    placeholder="Tên dự án"
                                    rows={5}
                                    readOnly={!e.isEditing}
                                />
                                <h6 className='pt-3'>Liên kết dự án</h6>
                                <input
                                    type="text"
                                    name="link"
                                    className="form-control mb-2"
                                    value={e.edited.link}
                                    onChange={(ev) => handleChange(index, ev)}
                                    placeholder="Liên kết dự án"
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
export default Startup