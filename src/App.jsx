import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-teal-600 text-white py-5 px-7 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-semibold">
            <span className="text-white">R</span>
            <span className="text-amber-400">esort</span>
          </span>
          <span className="text-xs ml-1 text-gray-100">BEACH CLUB & RESORT</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-amber-300">Home</a>
          <a href="#" className="hover:text-amber-300">About</a>
          <a href="#" className="hover:text-amber-300">Reservation</a>
          <a href="#" className="hover:text-amber-300">Pages </a>
          <a href="#" className="hover:text-amber-300">Contact Us</a>
        </div>
        
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded text-sm">
          RESERVE NOW
        </button>
      </nav>
      
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-cover bg-center h-[500px]" style={{backgroundImage: "url('/demo9.JPG')"}}>
          <div className="absolute inset-0 bg-black bg-opacity-30">
            <div className="container mx-auto px-6 md:px-12 py-16 text-white max-w-screen-xl">
              <div className="flex flex-col md:flex-row items-center">
                {/* Left Side - Hero Text */}
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <h1 className="text-3xl md:text-5xl font-serif mb-4">Get to The Beach<br />and Have Fun!</h1>
                  <p className="text-sm mb-6 max-w-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                  </p>
                  <div className="flex space-x-3">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-2 rounded">
                      BOOK NOW
                    </button>
                    <button className="rounded-full bg-white bg-opacity-20 p-2 flex items-center justify-center w-10 h-10">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Right Side - Booking Form */}
                <div className="md:w-1/2 md:ml-auto">
                  <div className="bg-teal-600 bg-opacity-90 p-6 rounded-md max-w-md ml-auto bg-transparent/50">
                    <h3 className="text-white text-xl mb-4 text-center">Booking Now & Enjoy it !</h3>
                    
                    <form className="space-y-4">
                      <input 
                        type="text" 
                        placeholder="Guest" 
                        className="w-full p-2 rounded border border-gray-300"
                      />
                      <input 
                        type="text" 
                        placeholder="Choose a Lounge" 
                        className="w-full p-2 rounded border border-gray-300"
                      />
                      <input 
                        type="date" 
                        placeholder="Check In" 
                        className="w-full p-2 rounded border border-gray-300"
                      />
                      <input 
                        type="date" 
                        placeholder="Check out" 
                        className="w-full p-2 rounded border border-gray-300"
                      />
                      <button className="w-full bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded uppercase">
                        Booking Now
                      </button>
                      <p className="text-xs text-center text-white">
                        We have more Best Lounges! <a href="#" className="text-amber-300">Find it Here</a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-amber-500 text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Beach Club</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
              </p>
              
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-amber-500 text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Resort</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
              </p>
            
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-amber-500 text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Service</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div>
              <img src="/demo3.JPG" alt="Resort" className="rounded-lg shadow-lg w-full h-auto object-cover" />
            </div>
            
            {/* Right Content */}
            <div>
              <span className="text-amber-500 font-medium text-sm">About Resort</span>
              <h2 className="text-3xl font-serif mb-4 mt-2">Resort is Beach Club & Resort With Beautiful Beaches</h2>
              <p className="text-gray-600 text-sm mb-4">
                About Resort ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam tincidunt massa, varius aliquam magna, placerat velit.
              </p>
              <p className="text-gray-600 text-sm mb-6">
                Resort ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis. Aenean commodo ligula eget dolor. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nullam quis risus.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Discount Section */}
      <div className=" py-8 mb-12 ">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-black pr-10">
              <h2 className="text-2xl md:text-3xl font-serif mb-3">Get a Discount</h2>
              <p className="text-sm text-stone-700 text-opacity-80 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded text-sm">
                CONTACT US NOW
              </button>
            </div>
            
            {/* Right Image */}
            <div className="hidden md:block">
              <img src="/demo4.JPG" alt="Couples" className="rounded-lg w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
<div className="bg-teal-500 bg-opacity-90 py-12 text-white">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <div className="grid grid-cols-4 gap-4 text-center">
      {/* Stat 1 */}
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 rounded-full p-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold">120<sup>+</sup></h3>
        <p className="text-sm">Available Menus</p>
      </div>
      
      {/* Stat 2 */}
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 rounded-full p-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold">98<span className="text-2xl">%</span></h3>
        <p className="text-sm">Positive Reviews</p>
      </div>
      
      {/* Stat 3 */}
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 rounded-full p-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold">39<sup>+</sup></h3>
        <p className="text-sm">Professional Staff</p>
      </div>
      
      {/* Stat 4 */}
      <div className="flex flex-col items-center">
        <div className="bg-amber-500 rounded-full p-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-3xl font-semibold">79<sup>+</sup></h3>
        <p className="text-sm">Rooms Available</p>
      </div>
    </div>
  </div>
</div>

{/* Gallery Section */}
<div className="py-16 bg-white relative bg-[url('/demo8.JPG')] bg-cover bg-fixed bg-opacity-10">
  <div className="absolute inset-0 bg-white bg-opacity-80"></div>
  <div className="container mx-auto px-6 max-w-screen-xl relative z-10">
    <div className="text-center mb-12">
      <span className="text-amber-500 text-sm">Take a Look Our Gallery</span>
      <h2 className="text-3xl font-serif mt-2">Check Out The Luxury at Our<br />Resort & Beach Club</h2>
      <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm">
        Our Gallery does vel amet consectetur adipiscing elit nec et accu elit vestibulum.
      </p>
    </div>
    
    {/* Gallery Grid */}
    <div className="grid grid-cols-12 gap-4 mt-8">
      <div className="col-span-3 row-span-2">
        <img src="/demo6.JPG" alt="Resort" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="col-span-3 row-span-1">
        <img src="/demo2.JPG" alt="Resort" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="col-span-6 row-span-3">
        <img src="/demo7.JPG" alt="Resort" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="col-span-3 row-span-1">
        <img src="/demo8.JPG" alt="Resort" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="col-span-3 row-span-1">
        <img src="/demo9.JPG" alt="Resort" className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="col-span-3 row-span-1">
        <img src="/demo5.JPG" alt="Resort" className="w-full h-full object-cover rounded-md" />
      </div>
    </div>
    
    {/* Divider */}
    <div className="border-t border-gray-200 my-16 max-w-xl mx-auto"></div>
    
    {/* Testimonial */}
    <div className="text-center max-w-3xl mx-auto">
      <div className="text-amber-500 text-4xl font-serif mb-6">"</div>
      <p className="text-gray-600 italic mb-8">
        Aliquam fringilla diam et sapien cursus, ut sollicitudin mi iaculis. Donec ac ullamcorper arcu, quis hendrerit sapien. Maecenas ut turpis quis prem volutpat venenatis. Vestibulum ullamcorper magna facilisi, malesuada nisi acium massa volutpat. Nunc magna niador nibh et eleifend velit est quis ac diam cumvalla auctor quis el netus. Cras sagittis suscipit velit eu gravida risus congue ut. Pellentesque quis scelerisque eid ut eleismod justo. Phasellus maxmus sapittis tincidunt.
      </p>
      <div className="flex items-center justify-center">
     
      </div>
    </div>
  </div>
</div>




{/* Resort Lounges Section */}
<div className="bg-gray-50 py-16">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <div className="text-center mb-6">
      <span className="text-amber-500 text-sm">Our Venues</span>
      <h2 className="text-3xl font-serif mt-2">Located Close to The Sea & Beautiful Scenery</h2>
      <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm">
        Our Venue ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam tincidunt massa, varius aliquam magna, placerat velit.
      </p>
    </div>

    {/* Main Venue */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
      <div>
        <img src="/demo.jpeg" alt="Seaside Lounge" className="rounded-md w-full h-auto object-cover" />
        <div className="bg-teal-100 p-4 rounded-md mt-2">
          <h3 className="text-xl font-medium mb-2">Seaside Lounge</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-amber-500 font-medium text-sm mb-2">Our Facility:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Charging</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Restaurant Ordering</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Refreshing</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-amber-500 font-medium text-sm mb-2">Value Add-On:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Charging</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Restaurant Ordering</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Refreshing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pl-8">
        <div className="border-l-4 border-amber-500 pl-4 mb-6">
          <h3 className="text-2xl font-serif">Located Close to The Sea & Beautiful Scenery</h3>
        </div>
        <p className="text-gray-600 mb-6 text-sm">
          Our Venue ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam tincidunt massa, varius aliquam magna, placerat velit.
        </p>
        <p className="text-gray-600 mb-8 text-sm">
          Resort is ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nullam tincidunt massa, varius aliquam magna, placerat velit.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded">
          SEE ALL VENUE
        </button>
      </div>
    </div>

    {/* Other Lounges */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Sunrise Lounge */}
      <div className="bg-teal-100 rounded-md overflow-hidden">
        <img src="/demo.jpeg" alt="Sunrise Lounge" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium mb-2">Sunrise Lounge</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-amber-500 font-medium text-sm mb-2">Our Facility:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Charging</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Restaurant Ordering</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Refreshing</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-amber-500 font-medium text-sm mb-2">Value Add-On:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Charging</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Restaurant Ordering</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Refreshing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Rooftop Lounge */}
      <div className="bg-teal-100 rounded-md overflow-hidden">
        <img src="/demo.jpeg" alt="Rooftop Lounge" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-medium mb-2">Rooftop Lounge</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-amber-500 font-medium text-sm mb-2">Our Facility:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Charging</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Restaurant Ordering</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Refreshing</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-amber-500 font-medium text-sm mb-2">Value Add-On:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Charging</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Restaurant Ordering</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Refreshing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Menu Section */}
<div className="py-16 bg-white">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <div className="text-center mb-12">
      <span className="text-amber-500 text-sm">Our Menu</span>
      <h2 className="text-3xl font-serif mt-2 mb-4">Enjoy With The Favorite Foods & Drinks<br />at Resort Bar</h2>
      <p className="text-gray-600 text-sm max-w-3xl mx-auto">
        Our menu is ipsum dolor sit amet consectetur adipisicing elit. Nulla a sit amet a consectetur.
      </p>
    </div>

    {/* Menu Categories */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div>
        <h3 className="text-xl font-serif mb-4 border-b pb-2">Foods</h3>
        
        {/* Menu Items */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Traditional Burger</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$26</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Jersy Burger</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$28</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Crispy Chicken Sandwich</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$28</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Pork Roll, Egg & Cheese</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$20</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-serif mb-4 border-b pb-2">Snack</h3>
        
        {/* Menu Items */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Mozzarella Sticks</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$16</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Wings Boneless</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$23</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Nachos</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$18</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Bavarian Pretzel Sticks</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$15</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-serif mb-4 border-b pb-2">Drink</h3>
        
        {/* Menu Items */}
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Frozen Margarita</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$18</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Espresso Martini</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$20</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Aperol Spritz</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$17</span>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-medium">Special Mojito</h4>
              <p className="text-sm text-gray-500 mt-1">
                Aliquot tempet solor varius augue ut dignissim sit amet vivamus lacus nec.
              </p>
            </div>
            <span className="font-medium">$13</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* Features Banners */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-0">
  {/* Banner 1 */}
  <div className="relative h-72 bg-amber-500 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 z-10"></div>
    <img src="/demo.jpeg" alt="Entertainment" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40" />
    <div className="relative z-20 p-8 flex flex-col h-full justify-center text-white">
      <h3 className="text-2xl font-serif mb-3">Awesome With Live music</h3>
      <p className="text-sm mb-4 text-white text-opacity-90">Music, drinks, and the perfect summer night</p>
      <a href="#" className="text-sm font-medium hover:underline inline-flex items-center">
        READ MORE
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
  
  {/* Banner 2 */}
  <div className="relative h-72 overflow-hidden">
    <img src="/demo.jpeg" alt="Summer Party" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-20 p-8 flex flex-col h-full justify-center text-white">
      <h3 className="text-2xl font-serif mb-3">Never Ending Summer</h3>
      <p className="text-sm mb-4 text-white text-opacity-90">Beach parties from dusk till dawn</p>
      <a href="#" className="text-sm font-medium hover:underline inline-flex items-center">
        READ MORE
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
  
  {/* Banner 3 */}
  <div className="relative h-72 overflow-hidden">
    <img src="/demo.jpeg" alt="Cocktails" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <div className="relative z-20 p-8 flex flex-col h-full justify-center text-white">
      <h3 className="text-2xl font-serif mb-3">Relax & Unwind</h3>
      <p className="text-sm mb-4 text-white text-opacity-90">Signature cocktails in paradise</p>
      <a href="#" className="text-sm font-medium hover:underline inline-flex items-center">
        LEARN MORE
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</div>

{/* Newsletter Section */}
<div className="bg-white py-12">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img src="/demo.jpeg" alt="Subscribe" className="rounded-md shadow-lg" />
      </div>
      <div className="md:w-2/3 md:pl-12">
        <span className="text-amber-500 text-sm">Newsletter</span>
        <h2 className="text-3xl font-serif mt-2 mb-4">Subscribe Our Newsletter Now!</h2>
        <p className="text-gray-600 mb-6 max-w-lg">
          Sign up to receive email updates on new product announcements, special promotions, sales and more.
        </p>
        
        <h3 className="font-medium mb-3">Subscribe Our Newsletter</h3>
        <div className="flex">
          <input 
            type="email" 
            placeholder="Email..." 
            className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-l"
          />
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-r focus:outline-none">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

    {/* Footer */}
    <footer className="bg-teal-600 text-white pt-12">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
            {/* Column 1 - Logo & Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-semibold">
                  <span className="text-white">R</span>
                  <span className="text-amber-400">esort</span>
                </span>
              </div>
              <p className="text-sm text-gray-200 mb-4">
                Resort is ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
              <p className="text-sm text-gray-200 mb-1">TEL: +123-456-7890</p>
              <p className="text-sm text-gray-200 mb-4">EMAIL: info@resortexample.com</p>
              <p className="text-sm text-gray-200">Resort Address: Placeholder Site, Somewhere Beach</p>
              <p className="text-sm text-gray-200">Open: 24/7, Just call us first</p>
            </div>

            {/* Column 2 - Contact Us */}
            <div>
              <h3 className="text-lg font-medium mb-4">Contact Us</h3>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-300">Rooms</a></li>
                  <li><a href="#" className="hover:text-amber-300">About Us</a></li>
                  <li><a href="#" className="hover:text-amber-300">Reservation</a></li>
                  <li><a href="#" className="hover:text-amber-300">Contact</a></li>
                </ul>
              </nav>
            </div>

            {/* Column 3 - Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Links</h3>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-amber-300">Home</a></li>
                  <li><a href="#" className="hover:text-amber-300">About</a></li>
                  <li><a href="#" className="hover:text-amber-300">Reservation</a></li>
                  <li><a href="#" className="hover:text-amber-300">Gallery</a></li>
                  <li><a href="#" className="hover:text-amber-300">Menu</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      </div>
  );

}

export default App;