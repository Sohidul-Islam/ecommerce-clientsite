import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import "./Shipping.css"

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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