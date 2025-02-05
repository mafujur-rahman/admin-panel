

const AdminDashboard = () => {
    return (
        <div className="bg-[#FEA4A5] flex justify-center items-center">
            <div className="container min-h-screen flex ">

                {/* Sidebar */}
                <div className="w-1/5 bg-[#EE4E5B] p-5 ">
                    <h1 className="text-white font-bold text-lg">Sidebar</h1>
                </div>

                {/* Main Content */}
                <div className="w-4/5 bg-white p-5">
                    <h1 className="text-gray-800 font-bold text-lg">Main Content</h1>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboard;
