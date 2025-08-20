const ButtonComponentAdmin = ({onCancel, onSave, paramOnCancel, paramOnSave}) => {
    const handleCancelSave = (e) => {
        e.stopPropagation();
        if (onCancel) {onCancel(paramOnCancel)};
    };

    const handleSaveData = (e) => {
        e.stopPropagation();
        if (onSave) {onSave(paramOnSave)};
    };

    return (
        <div className="card-footer d-flex justify-content-between">
            <button className="btn btn-danger btn-adm-act" style={{ fontSize: "12px" }} onClick={handleCancelSave}> Hủy Bỏ </button>
            <button className="btn btn-success btn-adm-act" style={{ fontSize: "12px" }} onClick={handleSaveData}> Lưu Trữ </button>
        </div>
    );
};

export default ButtonComponentAdmin
