// import React from 'react';

// const BeerInfo = () => {
//   return (
//     <div className="flex flex-col md:flex-row bg-white p-4 rounded-lg shadow-md w-full h-[430px] m-auto ">
//       {/* Left side - Beer Information */}
//       <div className="md:w-1/2 p-4">
//         <h2 className="text-2xl font-bold mb-4">Beer Name</h2>
//         <p className="text-gray-700 mb-4">
//           This is a detailed description of the beer. It includes information about the flavor, origin, alcohol content, and other relevant details that beer enthusiasts would find interesting.
//         </p>
//         <p className="text-gray-700">
//           <strong>Type:</strong> Lager
//         </p>
//         <p className="text-gray-700">
//           <strong>Alcohol Content:</strong> 5.0%
//         </p>
//         <p className="text-gray-700">
//           <strong>Brewery:</strong> Brewery Name
//         </p>
//       </div>

//       {/* Right side - Beer Image */}
//       <div className=" flex justify-center items-center bg-red-950 h-full ">
//         <img 
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_OVhLIPVRueLhsj7-JzFPEXcZI19dI02gw&s"
//           alt="Beer"
//           className="rounded-lg shadow-lg w-[60%] h-[400px]"
//         />
//       </div>
//     </div>
//   );
// };

// export default BeerInfo;


import React from 'react';

const BeerInfo = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg shadow-lg overflow-hidden w-[90%] m-auto h-auto md:h-[450px] mt-5">
      {/* Left side - Beer Information */}
      <div className="w-full md:w-1/2 p-6 bg-white flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Golden Lager</h2>
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
          Experience the rich and crisp taste of our Golden Lager. Brewed with the finest ingredients, it offers a perfect balance of smoothness and flavor that lingers on your palate. A true delight for beer enthusiasts.
        </p>
        <div className="text-gray-700 text-sm md:text-base space-y-2">
          <p className='text-blue-600'><strong className='text-red-600'>Type:</strong> Lager</p>
          <p className='text-blue-600'><strong className='text-red-600'>Alcohol Content:</strong> 5.0%</p>
          <p className='text-blue-600'><strong className='text-red-600'>Brewery:</strong> Golden Brewery Co.</p>
        </div>
      </div>

      {/* Right side - Beer Image */}
      <div className="w-full md:w-1/2 bg-cover bg-center h-[250px] md:h-auto" style={{ backgroundImage: "url('https://i.pinimg.com/originals/94/97/30/9497308a5f38aaf14a8a098dedc06453.jpg')" }}>
        {/* The image is set as a background to cover the entire right side */}
      </div>
    </div>
  );
};

export default BeerInfo;

