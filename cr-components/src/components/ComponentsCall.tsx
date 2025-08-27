import React from "react";

import CrLayout from "./layout/layout";
import CDropdown from "./dropdown/dropdown";
// import CDropdown from "./dropdown/dropdown";

function ComponentsCall() {

    const userMenu = [
        { label: "Profile", href: "#" },
        { label: "Settings", href: "#" },
        { label: "Logout", href: "#" },
    ];

    return (
        <>
            {/* Component Title */}
            <CrLayout
                title="Component Name: Dropdown"
                body={
                    <>
                        <CDropdown items={userMenu} label="User Menu"
                        // size="lg"
                        />
                    </>
                }
            />
        </>
    );
}

export default ComponentsCall;
