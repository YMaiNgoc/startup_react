const SpeakerComponentUI = ({ speaker, button, action, params }) => {
    return (
        <div key={speaker.id} className="col-md-3 mb-4 crawl-hover" onClick={() => { if (action) {action(params)} }}>
            <div className="card h-100 shadow-sm">
                {speaker.img && <img src={speaker.img} className="card-img-top" alt={speaker.name} style={{ maxHeight: '150px', objectFit: 'contain' }} />}
                <div className="card-body">
                    <h6 className="card-title">{speaker.name}</h6>
                    <p className="card-text " style={{fontSize: "12px"}}>{speaker.position}</p>
                    {button}
                </div>
            </div>
        </div>
    );
};

export default SpeakerComponentUI;