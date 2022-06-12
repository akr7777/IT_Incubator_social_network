import React from "react";

const Profile = () => {
    return (
        <div className={"profile"}>
            <div className={"high-image"}>
                <img className={"high-image"}
                     src={"https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
            </div>
            <div className={"avatar-photo"}>
                <img className={"avatar-photo"}
                     src={"https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130?b=1&k=20&m=1226886130&s=612x612&w=0&h=POIRcyGpS6RfNP-NLG7lvnqx5stn11diDBQnQE4sDkM="}/>
            </div>
            <div className={"avatar-description"}>
                <div>Name: -------</div>
                <div>Birthdate: -----</div>
            </div>
            <div className={"posts"}>
                <div>My posts:</div>
                <div><input/></div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
}

export default Profile;