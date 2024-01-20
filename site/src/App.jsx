import Footer from './components/Footer'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import ImageSlider from './components/ImageSlider'



const App = () => {
  
  return (
    <div className="container">
      <Header/>
      <HeroBanner/>
      <ImageSlider />
      <Footer/>
    </div>
  )
}

export default App
