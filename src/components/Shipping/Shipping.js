import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { deleteShoppingCart, getItemFromLocalDb } from '../../utilities/fakedb';
import "./Shipping.css"

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const savedItems = getItemFromLocalDb();
        data.order = savedItems;
        console.log("shipping: ", data)

        fetch("https://rugged-hot-springs-18854.herokuapp.com/products/order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                console.log("data: ", data);
                if (data.insertedId) {
                    reset();
                    deleteShoppingCart();
                }

            })

    };
    return (
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

    );
};

export default Shipping;