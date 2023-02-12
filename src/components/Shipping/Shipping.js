import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useAuth from '../../Hooks/useAuth';
import { deleteShoppingCart, getItemFromLocalDb } from '../../utilities/fakedb';
import "./Shipping.css"

const Shipping = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const savedItems = getItemFromLocalDb();
        data.order = savedItems;
        // const url = `https://node-express-mongo-react-server.vercel.app/`;
        const url = `http://node-express-mongo-react-server.vercel.app/`;
        fetch(`${url}products/order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    deleteShoppingCart();
                    navigate("/shop");
                }

            })

    };

    const Img = styled.img`
    width: 40%;
    height: 100%;
    margin-left: 30%;
    margin-right: 30%;
    `;
    return (
        <> <Img src="https://chaldn.com/asset/Egg.Logistics.Fabric/Egg.Transport.GogoBangla/1.0.1+Deploy-Release-316/Default/resources/images/gif/landng-page.gif" alt="" />
            <div className="shipping-form">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Your Name" defaultValue={user.displayName} {...register("name")} />
                    <input placeholder="Your Email" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Your Address" {...register("address", { required: true })} />
                    {errors.address && <span className="error">This field is required</span>}
                    <input placeholder="Your City" {...register("city", { required: true })} />
                    {errors.city && <span className="error">This field is required</span>}
                    <input placeholder="Your Phone Number" {...register("phone", { required: true })} />
                    {errors.phone && <span className="error">This field is required</span>}
                    <input type="submit" value="Shipping" />
                </form>
            </div>
        </>


    );
};

export default Shipping;