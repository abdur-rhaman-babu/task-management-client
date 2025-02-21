

const SectionTitle = ({ title }) => {
    return (
        <div className="bg-gradient-to-r from-primary to-accent w-full flex items-center justify-center py-5 mt-1">
            <h1 className="font-bold text-3xl text-white">
                {title}
            </h1>
           
        </div>
    );
};

export default SectionTitle;
