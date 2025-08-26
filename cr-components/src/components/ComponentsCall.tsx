import React from "react";

import CrLayout from "./layout/layout";
import CButton from "./buttons/button";
import CDropdown from "./dropdown/dropdown";
// import CDropdown from "./dropdown/dropdown";

function ComponentsCall() {

    const userMenu = [
        { label: "Profile", href: "/profile" },
        { label: "Settings", href: "/settings" },
        { label: "Logout", href: "/logout" },
    ];

    return (
        <>
            {/* Component Title */}
            <CrLayout
                title="Component Name: Dropdown"
                body={
                    <>
                        <CDropdown items={userMenu} label="User Menu"
                        // placement="top-left"
                        // its size and scroll position of dropdown menu ???????????????
                        />
                    </>
                }
            />
        </>
    );
}

export default ComponentsCall;
