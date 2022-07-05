import React, { useEffect, useState } from 'react';
import useAuth from './../../Hooks/useAuth';
import axios from "axios";
import "./Orders.css";

const Orders = () => {
    const [order, setOrder] = useState([])
    const { user } = useAuth();
    useEffect(() => {

        axios.get('http://localhost:5000/products/order?email=' + user.email)
            .then(res => setOrder(res.data))

    }, [])
    const dataAndTimeHanlder = (dataAndTime) => {
        const date = new Date(dataAndTime);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let hours = date.getHours();
        hours = hours % 12 || 12;
        const ampm = (hours < 12 || hours === 24) ? "AM" : "PM";

        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return "Date: " + day + "/" + month + "/" + year + " Time: " + hours + ":" + minutes + ":" + seconds + " " + ampm;
    }
    return (
        <div style={{ margin: "20px", padding: "16px" }}>
            <h2> You Ordered {order.length} Items</h2>
            <div className="order-container">
                {
                    order.map(user =>
                        <div className="order-card">
                            <div className="order-card-header">
                                <div className="order-card-header-status">
                                    <h3 className="order-card-header-title"><strong>Name: </strong>{user.name}</h3>
                                    <p><strong>Email: </strong>{user.email}</p>
                                    <p><strong>Address: </strong>{user.address}</p>
                                    <p><strong>City: </strong>{user.city}</p>
                                    <p><strong>Phone: </strong>{user.phone}</p>
                                    <p className="order-card-header-date"><strong>Issue:: </strong>{dataAndTimeHanlder(user.createat)}</p>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Orders;