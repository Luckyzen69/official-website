import React from "react";
import { Link } from "react-router-dom";

export default function Poetry(){
    return <>
    <div className=" text-white font-mono text-xl text-center pt-10">
    <Link to="/" className="absolute top-4 left-5 text-5xl text-grey font-serif">LT</Link>

        <h1>Poetry</h1>
        <p className="pt-10">In the binary ballet, 1s and 0s entwine,<br />
Syntax whispers, a coder's design. <br />
Through loops and branches, logic takes flight, <br />
In the coding realm, where ideas ignite.</p> <br />
        <hr />
        <p className="blur">A bloom untouched, <br /> a rose unseen, <br />
In gardens where affection's gleaned. <br />
Yet, my heart beats an unsung song, <br />
For a love that may not belong.</p>
<br />
<hr />
    </div>
    </>
}