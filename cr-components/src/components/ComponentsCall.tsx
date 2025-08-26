import React from "react";

import CrLayout from "./layout/layout";
import CSectionTitle from "./sectiontitle/sectiontitle";
import CButton from "./buttons/button";

function ComponentsCall() {
    return (
        <>
            {/* Component Title */}
            <CrLayout
                // title="Heading Title"
                body={
                    <>
                        <CSectionTitle title="Heading Title" description="lorem ipsum dolor sit amet" rightsec={<>
                            <CButton label="Button" size="sm" variant="light" />
                        </>} />
                    </>
                }
            />
        </>
    );
}

export default ComponentsCall;
