import React, { useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import Account from "../pages/admin/Account";
import Crawler from "../pages/admin/Crawler";
import Dashboard from "../pages/admin/Dashboard";

const AdminLayout = () => {
    const [activePage, setActivePage] = useState("Dashboard");
    const [children, setChildren] = useState(<Dashboard />)

    const menuItems = [
        { label: "Dashboard", key: "Dashboard", children: <Dashboard /> },
        { label: "Crawler", key: "Crawler", children: <Crawler/> },
        { label: "Account", key: "Account", children: <Account /> },
        { label: "Logout", key: "Logout", children: <h1>Logout</h1> },
    ];

    const handleMenuClick = (key, children) => {
        setActivePage(key);
        setChildren(children)
    };

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="bg-dark text-white p-3 vh-100" style={{ width: "270px" }}>
                <h4 className="mb-4 justify-content-center">Admin</h4>
                <div className="d-flex flex-column gap-2">
                    {menuItems.map((item) => (
                        <Button
                            key={item.key}
                            variant={activePage === item.key ? "primary" : "outline-light"}
                            className="text-start"
                            onClick={() => handleMenuClick(item.key, item.children)}
                        >
                            {item.label}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Main area */}
            <div  className="fluid flex-grow-1 overflow-auto vh-100">
                {/* Header */}
                <Navbar bg="light" expand="lg" className="px-3 shadow-sm">
                    <Container fluid>
                        <Navbar.Brand>{<h3>{activePage}</h3>}</Navbar.Brand>
                    </Container>
                </Navbar>
                <br />
                {/* Content */}
                <Container fluid>
                    {children}
                </Container>
            </div>
        </div>
    );
};

export default AdminLayout;