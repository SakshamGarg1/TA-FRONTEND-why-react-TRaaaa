import Articles from "./Articles"
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

function App(){
  return <> 
    <Header/>
   <main className="wraper">
     <Hero/>
     <Articles/>
   </main>
   <Footer/>
   </>
}

export default App;