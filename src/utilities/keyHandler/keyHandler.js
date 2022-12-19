const keyHandler = (sidebarRef, sideBar, dispatch, handleSidebarState) => {
    window.addEventListener("keyup", (event) => {
        if (event.key === "Escape") {
            dispatch(handleSidebarState());
            if (sideBar) {
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

