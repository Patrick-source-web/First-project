
import Services from "./Components/Services"
import OurServices from "./Components/OurServices"
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"
import image4 from "./assets/image4.jpg"
import image5 from "./assets/image5.jpg"
import image6 from "./assets/image6.jpg"
import Client from "./Components/Client"
import ds from "./assets/ds.jpg"
function App() {
  

  return (
    <div>
      <div>
    
      <Services />
      </div>
      <h2 className="text-center text-4xl mt-8 mb-8">Our Services</h2>
      <div className="grid grid-cols-3 justify-center- mx-auto w-10/12 gap-4">
      <div>
        <OurServices
        title="General House Cleaning"
        description="Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning"
        image={image1}
         />
      </div>
      
      <div>
        <OurServices
        title="Deep Cleaning"
        description="Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning"
        image={image2}
         />
      </div>
      <div>
        <OurServices
        title="Move-In/Move-Out Cleaning"
        description="Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning"
        image={image3}
        />
      </div>
      <div>
        <OurServices
        title="Post-Construction Cleaning"
        description="Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning"
        image={image4}
        />
      </div>
      <div>
        <OurServices
        title="Carpet and Upholstery Cleaning"
        description="Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning"
        image={image5}
        />
      </div>
      <div>
        <OurServices
        title="Window Cleaning"
        description="Routine cleaning of living spaces, including dusting, vacuuming, and surface cleaning"
        image={image6}
        />
      </div>
    </div>
    <div>
      <Client 
      Image={ds}
      name="Stella Hudson"
      reaction="Amazing service! I hired for a deep cleaning of my home, and they exceeded my expectations. The team was professional, punctual, and paid attention to every detail. My kitchen and bathrooms have never looked this spotless, and even the hard-to-reach areas were thoroughly cleaned. I also appreciated their use of eco-friendly products, which is important to me. Highly recommend them for anyone looking for reliable and high-quality cleaning services!"
      />
    </div>
    </div>
  )
}

export default App
