import React from "react";

export default function Content(props) {

    return <>

        <div className="max-w-screen-lg m-auto mb-10">

            {props.children}

        </div>

    </>

}