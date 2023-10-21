
const ErrorPage = () => {
    return (
        <div className="flex flex-col text-center items-center justify-center h-screen">
            <h2 className="text-6xl font-bold text-red-500">404 Error</h2>
            <p className="text-4xl font-semibold text-slate-900">You are in wrong route</p>
        </div>
    );
};

export default ErrorPage;