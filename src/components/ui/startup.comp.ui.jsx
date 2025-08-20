const StartupComponentUI = ({startup,  button, action, params }) => {
    return (
        <div key={startup.id} className="col-lg-3 mb-3 crawl-hover" onClick={() => {if (action) action(params)}}>
            <div className="card h-100 shadow-sm">
                <img src={startup.img} alt={startup.name} className="card-img-top" style={{ objectFit: "cover", height: "200px" }}/>
                <div className="card-body">
                    <h5 className="card-title">{startup.name.length > 20 ? startup.name.slice(0, 20) + " ...": startup.name} </h5>
                    <h5 className="card-title">{ startup.title} </h5>
                    <p className="card-text flex-grow-1" style={{fontSize: "12px"}}> {startup.description?.slice(0, 60) || ""} ...</p>
                    {button}
                </div>
            </div>
        </div>

    );
};

export default StartupComponentUI;