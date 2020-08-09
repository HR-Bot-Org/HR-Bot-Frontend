import React from 'react'

const UserInfo = () =>{

    return (
        <div className="user-bio" >
            <div className="user-photo">
                <img className="user-photo img-rounded img-responsive" alt="Mohamed Salah" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mohamed_Salah_2018.jpg/200px-Mohamed_Salah_2018.jpg " />
            </div>
            <div className="user-info">
                {/* <!-- role --> */}
                <small className="role">Job Seeker</small>
                <hr/>
                
                <div>
                    {/* <!-- email --> */}
                    <small><i className="fas fa-envelope">&nbsp;</i></small>mosalah@example.test
                    <br />
                    {/* <!-- CV --> */}
                    <small><i className="fas fa-file-pdf">&nbsp;</i></small><a href="#">Resume</a>
                    <br />
                    {/* <!-- joined at--> */}
                    <small><i className="fas fa-calendar">&nbsp;</i>joined at : June 02, 1988&nbsp;</small>
                </div>
            </div>
        </div>
    )
}


export default UserInfo