"use client"

import { usePathname } from "next/navigation";
import { smoothScroll } from "@/utils/smoothScroll";

export default function ScrollAnchor({children, idToScrollTo}) {
    const currentPath = usePathname();
    const handleScrollLink = (targetId = null) => {
            smoothScroll(targetId);
            if (!targetId) {
                history.pushState(null, '', `${currentPath}`);
                return;
            }
            history.pushState(null, '', `${currentPath}#${targetId}`);
            return;
    }

    return (
        <div className="cursor-pointer" onClick={() => {handleScrollLink(idToScrollTo)}}>
            {children}
        </div>
    )
}