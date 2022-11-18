import React, { useEffect, useState } from 'react';
// import BootstrapTable from 'react-bootstrap-table-next';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import useAuth from './../../Hooks/useAuth';
import axios from "axios";
import "./Orders.css";
import { useNavigate } from 'react-router-dom';
import useProductsContext from '../../Hooks/useProductContext';

const Orders = () => {
    const [order, setOrder] = useState([])
    const [products] = useProductsContext();
    // console.log("Products in order ", products);



    const navigate = useNavigate();
    const { user } = useAuth();
    useEffect(() => {
        axios.get('http://localhost:5000/products/order?email=' + user.email, {
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('IDtoken')
            }
        })
            .then(res => setOrder(res.data))
            .catch(err => navigate("/login"))

    }, [])


    const tableDataHandler = (order) => {
        let objectKey = Object.keys(order)
        const tableData = [];
        let total
        let shipping
        let tax
        let grandTotal
        let TotalQuantity

        if (objectKey.length > 0) {
            for (let i = 0; i < objectKey.length; i++) {
                const element = objectKey[i];
                const product = products.find(product => product._id === element);
                if (product) {
                    tableData.push({
                        _id: product._id,
                        img: <img src={product.img} style={{ height: "60px", margin: "0 auto" }} alt="" />,
                        name: product.name,
                        price: product.price,
                        quantity: order[element],
                    })
                    total = tableData.reduce((previous, current) => previous + current.price * current.quantity, 0);
                    shipping = total > 0 ? 55 : 0;
                    tax = (total + shipping) * .15;
                    grandTotal = total + shipping + tax;
                    TotalQuantity = tableData.reduce((previous, current) => {
                        return previous + current.quantity;
                    }
                        , 0);
                }
            }
        }
        else {
            total = 0;
            shipping = 0;
            tax = 0;
            grandTotal = 0;
            TotalQuantity = 0;
        }


        const ammount = [{
            total: total.toFixed(2),
            shipping: shipping.toFixed(2),
            tax: tax.toFixed(2),
            grandTotal: grandTotal.toFixed(2),
            TotalQuantity: parseInt(TotalQuantity)
        }]
        console.log("Total Quantity ", ammount);
        return [tableData, ammount];
    }


    // const data = [{
    //     _id: 1,
    //     name: 'Product 1',
    //     price: 120,
    //     quantity: 1,
    // }, {
    //     _id: 2,
    //     name: 'Product 2',
    //     price: 80,
    //     quantity: 3,
    // }];

    const columns = [{
        text: 'Product ID',
    },
    {
        text: 'Product',
    }, {
        text: 'Product Name',
    }, {
        text: 'qty',
    }, {
        text: 'Product Price',
    },

    {
        text: 'Total Price',
    }
    ];

    // const col = window.innerWidth > 600 ? columns : columns.slice(1, 4);


    const dataAndTimeHanlder = (dataAndTime) => {
        const date = new Date(dataAndTime);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        let hours = date.getHours();
        hours = hours % 12 || 12;
        const ampm = hours >= 12 ? "AM" : "PM";

        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return "Date: " + day + "/" + month + "/" + year + " Time: " + hours + ":" + minutes + ":" + seconds + " " + ampm;
    }
    return (
        <div className="order-container-box">
            <h2> You Ordered {order.length} Items</h2>
            <div className="order-container">
                {
                    order.slice(0).reverse().map(user =>
                        <div key={user.createat} className="order-card">
                            <div className="order-card-header">
                                <div className="order-card-header-status">
                                    <h3 className="order-card-header-title"><strong>Invoice: </strong>{user._id}</h3>
                                    <p><strong>Name: </strong>{user.name}</p>
                                    <p><strong>Email: </strong>{user.email}</p>
                                    <p><strong>Address: </strong>{user.address}</p>
                                    <p><strong>City: </strong>{user.city}</p>
                                    <p><strong>Phone: </strong>{user.phone}</p>
                                    <p className="order-card-header-date"><strong>Issue:: </strong>{dataAndTimeHanlder(user.createat)}</p>

                                </div>
                            </div>
                            <hr />
                            <h2 style={{ textAlign: 'center' }}>Order Details</h2>
                            <hr />
                            {/* <BootstrapTable keyField='id' data={tableDataHandler(user?.order)} columns={columns} filter={filterFactory()} /> */}

                            <table class="responstable">

                                <tr>
                                    {columns.map(column => <th>{column.text}</th>)}
                                </tr>
                                {tableDataHandler(user?.order)[0].map(data =>
                                    <tr>
                                        <td>{data._id}</td>
                                        <td>{data.img}</td>
                                        <td>{data.name}</td>
                                        <td>{data.quantity}</td>
                                        <td>{data.price}</td>
                                        <td>{data.price * data.quantity}</td>
                                    </tr>
                                )}

                            </table>
                            {tableDataHandler(user?.order)[1].map(data =>
                                <div className="order-card-footer">
                                    <div className="order-card-footer-ammount">
                                        <p><strong>Total Quantity: </strong>{data.TotalQuantity}</p>
                                        <hr></hr>
                                        <p><strong>Total Price: </strong>{data.total}</p>
                                        <hr></hr>
                                        <p><strong>Shipping: </strong>{data.shipping}</p>
                                        <hr></hr>
                                        <p><strong>Tax: </strong>{data.tax}</p>
                                        <hr></hr>
                                        <p><strong>Grand Total: </strong>{data.grandTotal}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Orders;