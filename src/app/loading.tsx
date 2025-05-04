import DNLoader from "@/components/loaders/DN";
// import GlobeLoader from "@/components/loaders/globe";
// import SolarLoader from "@/components/loaders/solar";

const loading = () => {
    return (
        <div className="grid place-items-center">
            {/* <SolarLoader />
            <GlobeLoader /> */}
            <DNLoader />
        </div>
    );
};

export default loading;