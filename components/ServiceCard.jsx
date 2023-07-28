export default function ServiceCard({ title, info, img }) {
    return (
        <div className="bg-white shadow-md w-[350px] z-10 rounded-xl p-9 min-h-[320px]">
            <div className="flex flex-col items-start justify-center gap-4">
                <img className="w-[90px]" src={img} alt="ServiceCard" />
                <h3 className="font-bold text-2xl">{title}</h3>
                <p className="text-gray-600">{info}</p>
            </div>
        </div>
    );
}
