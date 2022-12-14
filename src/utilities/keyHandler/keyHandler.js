const keyHandler = (sidebarRef) => {
    window.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
            if (sidebarRef?.current?.classList.contains("sidebar-close")) {
                sidebarRef?.current?.classList.remove("sidebar-close");
                sidebarRef?.current?.classList.add("sidebar-open");
            } else {
                sidebarRef?.current?.classList.remove("sidebar-open");
                sidebarRef?.current?.classList.add("sidebar-close");
            }
        }
    });
}

export default keyHandler;

