import type { PropsWithChildren } from "react";

type props = PropsWithChildren<{
    className: string,
}>
const Card: React.FC<props> = ({ className, children }) => {
    const classes = "card " + className + " " + "max-w-sm ml-2 mb-2 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 flex flex-col";

    return (
            <div className={classes}>
                {children}
            </div>
    );
}

export default Card;