import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color : 'black',
        backgroundColor : 'white',
        border : '1px solid white'
    })

    const [btntext, setBtnText] = useState("Enable Dark Mode")

    const toggleButton = ()=> {
        if(myStyle.color === "black"){
            setMyStyle({
                color : 'white',
                backgroundColor : 'black'
            })
            setBtnText("Enable Light Mode")
        }
        else {
            setMyStyle({
                color : 'black',
                backgroundColor : 'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }

return (
    
<div className="container" style={myStyle}>
    <h1 className='my-2'>About Us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<b>About our Application</b>
    </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
    </div>

    <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><b>
About our Company</b>
    </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
    </div>

    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><b>
About our Website</b>
    </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
    <div className="accordion-body" style={myStyle}>
    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
    </div>
    </div>
    </div>
    </div>
    <div className="container my-2">
        <button onClick= {toggleButton} type="button" className="btn btn-primary ">{btntext}</button>
    </div>
</div>
)
}
