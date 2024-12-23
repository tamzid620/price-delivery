import React from 'react';

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-12 h-12 border-8 border-t-[#70c494] border-gray-300 rounded-full animate-spin"></div>
        </div>
    );
};

export default loading;