import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import Header from "./Header";
import Technologies from "./Technologies";

const App = () => {
    return (
        <div className={"app-wrapper"}>
            <header className={"header"}>
                <img height={100} width={200}
                     src={"https://img.freepik.com/psd-gratis/logomodel-op-grijze-muur_35913-2122.jpg?w=2000"}/>
            </header>
            <nav className={"nav"}>
                <div>Profiles</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className={"content"}>
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
        </div>

        /*<div>
          <Header />
          <Technologies/>
          <div>Article 1</div>
          <Rating value={2}/>
          <div>Article 2</div>
          <Rating value={3}/>
          <Accordion titleValue={"This is ACC1"} collapsed={false}/>
          <p></p>
          <Accordion titleValue={"This is ACC number 2"} collapsed={true}/>

        </div>*/
    );
}


export default App;
