import React from 'react'
import Nav from './components/Nav'
import SideBar from './components/SideBar'

function Wrapper(props) {
    return (
        <>
            <Nav />
            <div className="wrapper">
                <div className="left-content">
                    <SideBar />
                </div>

                <div className="right-content">
                    {props.children}
                </div>

            </div>
        </>
    )
}

export default Wrapper
