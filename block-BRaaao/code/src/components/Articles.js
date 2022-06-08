import Article from "./Article";
import allarticles from "../components/data/articles";

function Articles(){
 return(
     <section className = 'articles'  id ='articles'>
         <ul>
         {allarticles.map((article)=>(
             <Article key={article.publishedAt} {...article}/>

         ))}

        </ul>

     </section>
 )
}

export default Articles;