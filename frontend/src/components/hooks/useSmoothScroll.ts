import { type MouseEvent, useCallback } from "react";

export const useSmoothScroll = () => {
    const scrollTo = useCallback((targetId: string) => {
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, []);

    const getClickHandler = useCallback(
        (targetId: string) => {
            return (e: MouseEvent<HTMLElement>) => {
                e.preventDefault();
                scrollTo(targetId);
            };
        },
        [scrollTo]
    );

    return { getClickHandler };
};
