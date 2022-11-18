import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../DashBoard/Dashboard';
const Inventory = () => {
    return (
        <div>
            <Dashboard />
            <Outlet />
            {/* <InventoryProducts /> */}
        </div>
    );
};

export default Inventory;