
import Nav from "./Nav";
const Base=({title="welcome to website",children})=>{

    return(

        <div className="container-fluid">

            <Nav/>

            {children}

           



        </div>

    );

};

export default Base;