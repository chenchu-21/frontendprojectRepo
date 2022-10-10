
import React from "react";
import Base from "./Base";
import ganesh1 from "./ganesh1.jpg" ;
import ganesh2 from "./ganesh2.jpg" ;
import ganesh3 from "./ganesh3.jpg" ;
import child1 from "./child1.jpg" ;
import child2 from "./child2.jpg" ;
import child3 from "./child3.jpg" ;
import Nature1 from "./Nature1.jpg" ;
import Nature2 from "./Nature2.jpg" ;
import Nature from "./Nature.jpg" ;

const Blog = () => {

 return(

<Base>  
<br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
                     <h1> Best Arts are found on ArtShop</h1>
                     <br></br>

                     <h4> Recapture the memories of childhood with these Arts</h4>
                        <br></br>

                        <img src={child1} width="20%" height="10%"/>
           
                        <img src={child2} width="20%" height="10%"/>
                        <img src={child3} width="20%" height="10%"/>

                        <br></br>

                        <h5>Childhood is the most fun and memorable time in anyone’s life. It’s the first stage of life which we enjoy in whatever way we like. Besides, this is the time that shapes up the future. The parents love and care for their children and the children to the same too. Moreover, it’s the golden period of life in which we can teach children everything.</h5>
                            <br></br>
                            <br></br>
                     <h4>Ganesh paintings of 2022</h4>
                     <br></br>
                            
                     <div>





           <img src={ganesh1} width="20%" height="10%"/>
           
           <img src={ganesh2} width="20%" height="10%"/>
           <img src={ganesh3} width="20%" height="10%"/>
           <br></br>

           <h5>
           GANESHA PAINTINGS

With Ganesh Chaturthi around the corner,
 people are excited to celebrate one of the most awaited festivals. At some places, the celebration is for 3 days while some continue even for 10 days. Idols of Ganesha will be brought into houses and everyone will worship them before immersing them in water for good luck.
           </h5>

</div>


<br></br>
   <h4> Connection Between Art And Nature</h4>
      <br></br>
                      
      <img src={Nature1} width="20%" height="10%"/>
           
           <img src={Nature2} width="20%" height="10%"/>
           <img src={Nature} width="20%" height="10%"/>
           <br></br>

           <br></br>
           <h5> There seems to be a close relationship between nature and art.
             Nature has become a central theme in many famous artists’ artworks. Nature has proven to be one of the most treasured muses known to man. It provides endless inspiration to artists, where they can bring life to nature in their paintings. Many famous artists like Van Gogh and Monet celebrated nature in their artworks. Nature in art is glorified for its sublime and picturesque manifestation on canvas. It is cherished for its intricacy and beauty. </h5>
            <h5> “Art not only imitates nature but also completes its deficiencie"</h5>

       

 </Base>



    );



};



export default Blog;