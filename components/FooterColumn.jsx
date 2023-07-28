export default function FooterColumn({
    title,
    linkOne,
    linkTwo,
    linkThree,
    linkFour,
}) {
    return (
        <div className="flex flex-col items-center gap-4">
            <h3 className="font-semibold text-white text-xl">{title}</h3>

            <ul className="flex flex-col gap-4 text-center text-white">
                <li>
                    <a className="hover:underline" href="#">
                        {linkOne}
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="#">
                        {linkTwo}
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="#">
                        {linkThree}
                    </a>
                </li>
                <li>
                    <a className="hover:underline" href="#">
                        {linkFour}
                    </a>
                </li>
            </ul>
        </div>
    );
}
