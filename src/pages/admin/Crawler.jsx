import { React, useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col } from "react-bootstrap";

import Event from "../../components/admin/Event"
import Speaker from "../../components/admin/Speaker"
import Startup from "../../components/admin/Startup"


const Crawler = ({firstPage = 0}) => {

    const [index, setIndex] = useState(firstPage);
    const [data, setData]  =useState({title: "", speakers : "", startups: "" });

    const renders = [
        <List currentIndex={index} nextIndex={setIndex} />,
        <Loading currentIndex={index} nextIndex={setIndex} setData={setData} />,
        <Event currentIndex={index} nextIndex={setIndex} event={data.title}/>,
        <Speaker currentIndex={index} nextIndex={setIndex} speakers= {data.speakers}/>, 
        <Startup currentIndex={index} nextIndex={setIndex} startups={data.startups}/>
    ]

    return (renders[index]);
};

const List = ({currentIndex, nextIndex}) => {

    const cards = [
        { title: "SURF DANANG", text: "Quản lý người dùng", img: "https://surfdanang.zone/uploads/images/logo/1571565409806-SURF%202019%20-%20COLOR-01%201.png" },
        { title: "DAVAS", text: "Theo dõi đơn hàng", img: "https://davas.vc/uploads/images/logo/LOGO-DAVAS-b.svg" },
        { title: "Startup Wheel", text: "Doanh thu tháng này", img: "https://startupwheel.vn/wp-content/uploads/2025/02/sw_logo.svg" },
        { title: "Web3 Builder's Submit", text: "Báo cáo thống kê", img: "https://www.web3builderssummit.com/img/logo.png" },
    ];

    return (
        <Row className="g-4">
            {cards.map((item, index) => (
                <Col key={index} md={2} sm={6} xs={12} >
                    <Card
                        className="shadow h-100 px-3 bg-body-secondary crawl-hover"
                        onClick={async () => {
                            console.log("hello");
                            nextIndex(currentIndex + 1)
                        }}
                    >
                        {/* Ảnh */}
                        <br />
                        <Card.Img variant="top" src={item.img} alt={item.title} />

                        {/* Nội dung */}
                        <Card.Body>
                            <br />
                            <Card.Title>{item.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

const Loading = ({currentIndex, nextIndex, setData}) => {

    const [loading, setLoading] = useState(false);
    const crawl = async () => {
        try {
            const response = await axios.get('http://localhost:8800/api/crawler/surfdanang');
            setData(response.data);
            nextIndex(currentIndex + 1);
        } catch (error) {
            console.error('Error fetching speakers:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        crawl()
    })

    if (loading) return <div className="container mt-5">Đang crawl dữ liệu...</div>;

    return ( <div className="container mt-5"> --- Hoàn tất ---  </div> )
}


export default Crawler
