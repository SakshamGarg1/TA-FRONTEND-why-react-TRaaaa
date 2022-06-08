function Article(props){
 return(
     <li>
         <figure>
             <img
             src={props.urlToImage}
             alt={props.title} 
             />
         </figure>
         <figcaption>
             <h3>{props.title}</h3>
         </figcaption>
         <figure>
         <p>
                 {props.description}
        </p>
             <a href={props.url}>Visit Website</a>
        </figure>
     </li>
 )
}
export default Article;