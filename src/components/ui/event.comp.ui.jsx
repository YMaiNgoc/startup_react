const EventComponentUI = ({event, button}) => {
    return (
        <div key={event.id} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h4 className="card-title text-primary">{event.name || event.name}</h4>
                    <h6 className="card-title">{event.title?.slice(0, 45)} ...</h6>
                    <p className="card-text">{event.description?.slice(0, 120)}...</p>
                    <p><strong>Thời gian:</strong> {event.start_date} - {event.end_date}</p>
                    {button}
                </div>
            </div>
        </div>)
}

export default EventComponentUI