import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";

import EventComponentAdmin from "../../components/admin/event.comp.admin"
import SpeakerComponentAdmin from "../../components/admin/speaker.comp.admin"
import StartupComponentAdmin from "../../components/admin/startup.comp.admin"


const Crawler = () => {

    const [index, setIndex] = useState(0);
    const [data, setData] = useState({ title: "", speakers: "", startups: "" });
    const [api, setApi] = useState(false);

    const renders = [
        <List nextIndex={1} goNextIndex={setIndex} source={setApi} />,
        <Loading nextIndex={2} goNextIndex={setIndex} source={api} setData={setData} />,
        <EventComponentAdmin nextIndex={3} goNextIndex={setIndex} event={data.title} />,
        <SpeakerComponentAdmin nextIndex={4} goNextIndex={setIndex} speakers={data.speakers} />,
        <StartupComponentAdmin nextIndex={5} goNextIndex={setIndex} startups={data.startups} />
    ]

    return (
        <div>
            <div className="d-flex justify-content-center gap-3 py-3">
                <button className="btn btn-primary btn-adm-act" onClick={() => setIndex(0)}>Danh sách</button>
                <button className="btn btn-primary" onClick={() => setIndex(2)}> Sư kiện </button>
                <button className="btn btn-primary" onClick={() => setIndex(3)} >Diễn giả</button>
                <button className="btn btn-primary" onClick={() => setIndex(4)} >Startup</button>
            </div>
            <div className="d-flex justify-content-center">
                {renders[index]}
            </div>
        </div>
    );
};

const List = ({ goNextIndex, nextIndex, source }) => {

    const cards = [
        {
            name: "SURF DANANG",
            img: "https://surfdanang.zone/uploads/images/logo/1571565409806-SURF%202019%20-%20COLOR-01%201.png",
            api: "http://localhost:8800/api/crawler/surfdanang"
        },
        {
            name: "DAVAS",
            img: "https://davas.vc/uploads/images/logo/LOGO-DAVAS-b.svg",
            api: "http://localhost:8800/api/crawler/davas"
        },
        {
            name: "Startup Wheel",
            img: "https://startupwheel.vn/wp-content/uploads/2025/02/sw_logo.svg",
            api: 'http://localhost:8800/api/crawler/startupwwheel'
        },
        {
            name: "Web3 Builder's Submit",
            img: "https://www.web3builderssummit.com/img/logo.png",
            api: "http://localhost:8800/api/crawler/web3builderssubmit"
        }
    ];

    return (
        <Row className="g-4">
            {cards.map((item, index) => (
                <Col key={index} md={2} sm={6} xs={12} >
                    <Card
                        className="shadow h-100 px-3 bg-body-secondary crawl-hover"
                        onClick={async () => {
                            console.log("hello");
                            source(item.api);
                            goNextIndex(nextIndex)
                        }}
                    >
                        {/* Ảnh */}
                        <br />
                        <Card.Img variant="top" src={item.img} alt={item.title} />

                        {/* Nội dung */}
                        <Card.Body>
                            <br />
                            <Card.Title>{item.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

const Loading = ({ goNextIndex, nextIndex, source, setData }) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const crawl = async () => {
        if (!source) return goNextIndex(nextIndex - 1)
        try {
            const response = await axios.get(source);
            setData(response.data);
            setLoading(false)
            goNextIndex(nextIndex);
        } catch (error) {
            console.error('Error fetching speakers:', error);
            setLoading(false)
            setError(error);
        }
    }



    useEffect(() => {
        crawl()
    })

    if (loading) return <h3 className="container mt-5">Đang crawl dữ liệu...</h3>;
    if (error) return (<div>
        x_x Đã xảy ra lỗi khi crawl dữ liệu
        <p>{error.message}</p>
    </div>)

}
export default Crawler