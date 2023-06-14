import LoadingIcon from "../../base-components/LoadingIcon";


const Loading = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-transparent absolute inset-0 z-50">

            <LoadingIcon title="Processing..." icon="oval"  className="text-primary text-2xl" />

        </div>
    );
}

export default Loading;