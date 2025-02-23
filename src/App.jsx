
import React, { useState, useEffect } from 'react';
import GalleryCarousel from './components/Carousel'


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      if (currentScrollPos < 100) {
        setVisible(true);
        setPrevScrollPos(currentScrollPos);
        return;
      }

      const isScrollingUp = prevScrollPos > currentScrollPos;
      setVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className={`
        fixed w-full z-[100] transition-all duration-300
        ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}>
        <nav className="backdrop-blur-sm bg-black/10 border-white/20">
          <div className="mx-auto max-w-7xl px-7 py-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col md:flex-row md:items-baseline">
                <span className="text-2xl font-semibold text-white">Sea Beach Fort</span>
                <span className="text-[10px] md:text-xs md:ml-2 text-white/80 mt-1 md:mt-0">FORT AND CAMPING</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                <a href="#stats" className="text-white hover:text-white/80 transition">About</a>
                <a href="#gallery" className="text-white hover:text-white/80 transition">Gallery</a>
                <a href="#facility" className="text-white hover:text-white/80 transition">Facility</a>
                <a href="#callus" className="text-white hover:text-white/80 transition">Map</a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden px-5 py-4 text-white hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsSidebarOpen(true)}
              >
                Menu
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Side Drawer for Mobile */}
      <div 
        className={`
          fixed top-0 right-0 h-full w-64 
          backdrop-blur-md bg-black/20
          z-[110] transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="p-5">
          <button 
            className="mb-6 px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsSidebarOpen(false)}
          >
            Close
          </button>
          
          <div className="flex flex-col space-y-4">
            <a 
              href="#stats" 
              className="text-white hover:bg-white/10 p-3 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              About
            </a>
            <a 
              href="#gallery" 
              className="text-white hover:bg-white/10 p-3 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#facility" 
              className="text-white hover:bg-white/10 p-3 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              Facility
            </a>
            <a 
              href="#callus" 
              className="text-white hover:bg-white/10 p-3 rounded-lg transition-colors"
              onClick={() => setIsSidebarOpen(false)}
            >
              Map
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[105]"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Hero Section */}
      <div className="relative z-0">
        <div
          className="bg-cover bg-center h-screen flex items-center"
          style={{ backgroundImage: "url('/demo9.JPG')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center pt-16">
            <div className="container mx-auto px-4 md:px-12 text-white max-w-screen-xl">
              <h1 className="text-3xl md:text-5xl font-serif mb-4 leading-tight text-center">
                Get to The Beach and Have Fun!
              </h1>
              <p className="text-sm md:text-base mb-6 max-w-md mx-auto text-center">
                Enjoy BBQs, bonfires, games, DJ nights, movies, and unlimited food at our scenic beach fort!
              </p>
            </div>
          </div>
        </div>
      </div>
      
 {/* stats */}
      <div className="bg-[#002A2F]/10 py-16" id="stats">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#0077B6] flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#002A2F]">Beachside Camping</h3>
              <p className="text-gray-700 text-sm">
                Experience breathtaking views and cozy bonfires by the sea.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#0077B6] flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#002A2F]">Luxury Stay</h3>
              <p className="text-gray-700 text-sm">
                Comfortable accommodations with top-notch amenities and services.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#0077B6] flex items-center justify-center mb-4 shadow-md">
                <span className="text-white text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#002A2F]">Gourmet Dining</h3>
              <p className="text-gray-700 text-sm">
                Relish a variety of delicious meals with unlimited food options.
              </p>
            </div>
          </div>
        </div>
      </div>
      





<div id="gallery">
<GalleryCarousel ></GalleryCarousel>

</div>



<div className="py-16 bg-[#002A2F]/5">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Side - About Resort & Facilities */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-[#0077B6]">About Our Resort</h3>
        <p className="text-gray-700 text-sm mb-4">
          Escape to a serene beachside paradise with breathtaking ocean views, exciting activities, and world-class hospitality. Whether you're looking for adventure or relaxation, we’ve got you covered.
        </p>
        <p className="text-gray-700 text-sm mb-6">
          Indulge in beachside BBQ, unwind with bonfire nights, or enjoy live music under the stars. Every moment here is designed to make your stay special.
        </p>

        <div className="border-l-4 border-[#0077B6] pl-4 my-6">
          <h3 className="text-lg font-serif text-[#002A2F]">A Perfect Getaway</h3>
        </div>

        <p className="text-gray-700 text-sm mb-6">
          Enjoy beach games, outdoor movie nights, and unlimited dining—all in one beautiful coastal location.
        </p>

        <h3 className="text-xl font-bold mt-8 mb-4 text-[#0077B6]">Resort Facilities</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-[#0077B6] font-semibold mb-2">Food & Dining</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Beachside BBQ</li>
              <li>Unlimited Food</li>
            </ul>
          </div>

          <div>
            <p className="text-[#0077B6] font-semibold mb-2">Evening Activities</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Bonfire Nights</li>
              <li>DJ & Live Music</li>
            </ul>
          </div>

          <div>
            <p className="text-[#0077B6] font-semibold mb-2">Entertainment</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Outdoor Movie Screenings</li>
            </ul>
          </div>

          <div>
            <p className="text-[#0077B6] font-semibold mb-2">Recreation</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>Beach Games</li>
            </ul>
          </div>
        </div>

       
      </div>

      {/* Right Side - Resort Image */}
      <div>
        <img src="/demo3.JPG" alt="Resort" className="rounded-lg shadow-lg w-full h-auto object-cover" />
      </div>
      <div className="bg-white p-4 rounded shadow-sm border border-gray-100 mt-6">
          <p className="text-center text-[#0077B6] font-medium">
            Book your stay now and experience the best of beachfront luxury!
          </p>
        </div>
    </div>
  </div>
</div>

{/* Features Banners */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-0" id='facility'>
        {/* Banner 1 */}
       
   
        
        {/* Banner 2 - Keeping original image and overlay */}
        <div className="relative h-72 overflow-hidden">
          <img src="/demo15.JPG" alt="Summer Party" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-20 p-8 flex flex-col h-full justify-center text-white">
            <h3 className="text-2xl font-serif mb-3">Never Ending Summer</h3>
            <p className="text-sm mb-4 text-white text-opacity-90">Beach parties from dusk till dawn</p>
            
          </div>
        </div>
        
        {/* Banner 3 - Keeping original image and overlay */}
        <div className="relative h-72 overflow-hidden">
          <img src="/demo12.JPG" alt="Cocktails" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-20 p-8 flex flex-col h-full justify-center text-white">
            <h3 className="text-2xl font-serif mb-3">Relax & Unwind</h3>
            <p className="text-sm mb-4 text-white text-opacity-90">Signature cocktails in paradise</p>
           
          </div>
        </div>
      </div>


    {/* Stay Information Section */}
<div className="py-16 bg-white" id="callus">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-serif">Stay at Our Beach Resort</h2>
      <p className="text-gray-600 text-sm max-w-3xl mx-auto mt-2">
        Experience a relaxing getaway at our beautiful resort in Alibaug. Enjoy comfortable accommodations with all-inclusive food options.
      </p>
    </div>

    <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-[#0077B6]">₹1000 per night</h3>
      <p className="text-gray-600 mt-2">Includes food and accommodation costs.</p>
      <p className="text-lg text-gray-500 mt-4">For more information, call at <br/><a href='tel:8888111654' className='font-semibold'>+91 8888111654</a></p>
    </div>
  </div>
</div>

{/* Map Section */}
<div className="bg-white py-12">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <div className="text-center mb-6">
      <h2 className="text-3xl font-serif">Visit Us in Alibaug</h2>
      <p className="text-gray-600 mt-2">Find our resort at this beautiful coastal destination.</p>
    </div>
    <div className="rounded-md shadow-lg overflow-hidden">
      <iframe
        className="w-full h-96"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.673450464601!2d72.87298827499782!3d18.641400066295607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8e983d1b7c2f1%3A0x5b03725b38e5b1f6!2sAlibaug%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708420912345!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>



    
<footer className="bg-[#1a6284] text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <nav className="text-sm space-y-2 md:space-y-0 md:space-x-6 flex flex-col md:flex-row">
            <a href="#stats" className="hover:text-amber-300 transition">About</a>
            <a href="#gallery" className="hover:text-amber-300 transition">Gallery</a>
            <a href="#facility" className="hover:text-amber-300 transition">Facility</a>
            <a href="#callus" className="hover:text-amber-300 transition">Map</a>
          </nav>

          {/* Address and Contact */}
          <div className="text-center md:text-right text-sm mt-4 md:mt-0">
            <p>📍 Alibaug, Revdanda Agarkot Fort</p>
            <p className="mt-1">📞 Call: <a href="tel:8888111654" className="hover:text-amber-300 transition">+91 8888111654</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;