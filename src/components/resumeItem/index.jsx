import React from "react";

export default function ResumeItem(props) {

    return <>
    
        <div className="flex flex-col p-4 sm:items-center w-full">

            <div className="text-sm md:text-base text-center">
                {props.title}
            </div>

            <div className={`${props.color} text-center text-sm md:text-base font-bold`}>

                R${props.value.toFixed(2)}
            </div>

        </div>

    </>
}