function PinkSection({ children }) {
    return (
        <section className="bg-[#d82370] min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-6 py-20">
                {children}
            </div>
        </section>
    );
}

export default PinkSection;