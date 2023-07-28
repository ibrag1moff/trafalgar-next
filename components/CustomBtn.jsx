export default function CustomBtn({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 border-2 border-main text-main hover:bg-main hover:text-white transition-all duration-100 font-bold py-2 px-9 rounded-3xl"
        >
            {children}
        </button>
    );
}
