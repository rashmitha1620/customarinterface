@@ .. @@
   return (
     <div className="min-h-screen bg-white">
       {/* Main Content */}
-      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 md:pb-4">
+      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-3 md:pt-4 pb-6 md:pb-8">
         {/* Special Offer Banner */}
-        <div className="relative rounded-2xl mb-6 overflow-hidden">
+        <div className="relative rounded-xl md:rounded-2xl mb-4 md:mb-6 overflow-hidden">
           {/* Carousel Container */}
-          <div className="relative w-full h-48 md:h-64 lg:h-72">
+          <div className="relative w-full h-40 sm:h-48 md:h-64 lg:h-72">
             {/* Slides */}
             <div 
               className="flex transition-transform duration-300 ease-in-out h-full"
@@ .. @@
                   {/* Slide Content */}
                   <div className="relative z-10 p-4 md:p-6 h-full flex justify-between items-start">
                     {/* Left Content */}
                     <div className="flex flex-col justify-between h-full">
                       <div>
-                        <h2 className="text-white text-sm md:text-lg font-bold mb-2">{slide.title}</h2>
-                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
+                        <h2 className="text-white text-xs sm:text-sm md:text-lg font-bold mb-1 md:mb-2">{slide.title}</h2>
+                        <h1 className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                           {slide.subtitle.split('\n').map((line, lineIndex) => (
                             <span key={lineIndex}>
                               {line}
@@ .. @@
                       </div>
                       
                       {/* Pagination Dots */}
-                      <div className="flex space-x-2 mt-4">
+                      <div className="flex space-x-1.5 md:space-x-2 mt-3 md:mt-4">
                         {bannerSlides.map((_, dotIndex) => (
                           <button
                             key={dotIndex}
                             onClick={() => goToSlide(dotIndex)}
-                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
+                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-200 ${
                               dotIndex === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                             }`}
                           />
@@ .. @@
                     </div>

                     {/* Right Content - Product Images */}
-                    <div className="flex flex-col space-y-2 md:space-y-3">
+                    <div className="flex flex-col space-y-1.5 md:space-y-2 lg:space-y-3">
                       {slide.products.map((product, productIndex) => (
                         <img
                           key={productIndex}
                           src={product.image}
                           alt={product.alt}
                           className={`object-cover rounded-lg shadow-lg ${
-                            productIndex === 0 ? 'w-16 h-16 md:w-20 md:h-20' :
-                            productIndex === 1 ? 'w-12 h-12 md:w-16 md:h-16' :
-                            'w-10 h-10 md:w-12 md:h-12'
+                            productIndex === 0 ? 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20' :
+                            productIndex === 1 ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16' :
+                            'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12'
                           }`}
                         />
                       ))}
@@ .. @@
             {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
             <button
               onClick={prevSlide}
               disabled={isTransitioning}
-              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-200 disabled:opacity-50 hidden md:block"
+              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-1.5 md:p-2 transition-all duration-200 disabled:opacity-50 hidden lg:block"
             >
-              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
               </svg>
             </button>
             <button
               onClick={nextSlide}
               disabled={isTransitioning}
-              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-2 transition-all duration-200 disabled:opacity-50 hidden md:block"
+              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full p-1.5 md:p-2 transition-all duration-200 disabled:opacity-50 hidden lg:block"
             >
-              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
+              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
             </button>
@@ .. @@
         </div>

         {/* Service Categories */}
-        <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
+        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 mb-4 md:mb-6 lg:mb-8">
           <Link
             to="/dineout"
-            className="flex flex-col items-center p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
+            className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl hover:bg-gray-100 transition-colors group"
           >
-            <Zap className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
-            <span className="text-sm md:text-base font-medium text-gray-900">Express</span>
+            <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-600 mb-1.5 md:mb-2 lg:mb-3 group-hover:scale-110 transition-transform" />
+            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">Express</span>
           </Link>
           <Link
             to="/instamart"
-            className="flex flex-col items-center p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
+            className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl hover:bg-gray-100 transition-colors group"
           >
-            <Globe className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
-            <span className="text-sm md:text-base font-medium text-gray-900">Nationwide</span>
+            <Globe className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-600 mb-1.5 md:mb-2 lg:mb-3 group-hover:scale-110 transition-transform" />
+            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">Nationwide</span>
           </Link>
           <Link
             to="/food-delivery"
-            className="flex flex-col items-center p-4 md:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
+            className="flex flex-col items-center p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg md:rounded-xl hover:bg-gray-100 transition-colors group"
           >
-            <Store className="w-8 h-8 md:w-10 md:h-10 text-emerald-600 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
-            <span className="text-sm md:text-base font-medium text-gray-900">City Mart</span>
+            <Store className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-emerald-600 mb-1.5 md:mb-2 lg:mb-3 group-hover:scale-110 transition-transform" />
+            <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900">City Mart</span>
           </Link>
         </div>

         {/* Recommended Products */}
-        <div className="mb-6 md:mb-8">
-          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
+        <div className="mb-4 md:mb-6 lg:mb-8">
+          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
             Recommended Products
           </h2>

@@ .. @@
             </div>
           ) : (
-            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
+            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
               {featuredProducts.map((product) => (
-                <div key={product.id} className="bg-white rounded-lg p-3 md:p-4 hover:shadow-lg transition-shadow">
+                <div key={product.id} className="bg-white rounded-lg p-2 sm:p-3 md:p-4 hover:shadow-lg transition-shadow">
                   <img
                     src={product.image}
                     alt={product.name}
-                    className="w-full h-24 md:h-32 lg:h-36 object-cover rounded-lg mb-3"
+                    className="w-full h-20 sm:h-24 md:h-32 lg:h-36 object-cover rounded-lg mb-2 md:mb-3"
                   />
-                  <h3 className="font-medium text-sm md:text-base text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
-                  <div className="flex items-center space-x-1 mb-2">
+                  <h3 className="font-medium text-xs sm:text-sm md:text-base text-gray-900 mb-1 md:mb-2 line-clamp-2">{product.name}</h3>
+                  <div className="flex items-center space-x-0.5 md:space-x-1 mb-1 md:mb-2">
                     {product.rating === 5.0 ? (
                       <div className="flex space-x-1">
                         {renderStars(5)}
                       </div>
                     ) : (
                       <>
-                        <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
-                        <span className="text-xs md:text-sm text-gray-600">{product.rating.toFixed(1)}</span>
+                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-yellow-400 fill-current" />
+                        <span className="text-xs text-gray-600">{product.rating.toFixed(1)}</span>
                       </>
                     )}
                   </div>
-                  <p className="text-sm md:text-base font-bold text-gray-900">{formatCurrency(product.price)}</p>
+                  <p className="text-sm md:text-base font-bold text-gray-900">{formatCurrency(product.price)}</p>
                 </div>
               ))}
             </div>
@@ .. @@
         {/* Flash Deals */}
         <div>
           <div className="flex items-center justify-between mb-4 md:mb-6">
-            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Flash Deals</h2>
-            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
+            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Flash Deals</h2>
+            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-400" />
           </div>

-          <div className="grid grid-cols-3 gap-3 md:gap-6">
-            <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-xl p-4 md:p-6 text-white flex flex-col items-center hover:shadow-lg transition-shadow">
-              <Zap className="w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-3" />
-              <span className="text-sm md:text-base font-medium">Flash Deals</span>
+          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6">
+            <div className="bg-gradient-to-r from-red-400 to-red-500 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 text-white flex flex-col items-center hover:shadow-lg transition-shadow">
+              <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-1.5 md:mb-2 lg:mb-3" />
+              <span className="text-xs sm:text-sm md:text-base font-medium text-center">Flash Deals</span>
             </div>
-            <div className="bg-gray-50 rounded-xl p-4 md:p-6 flex flex-col items-center hover:bg-gray-100 transition-colors">
-              <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 mb-2 md:mb-3" />
-              <span className="text-sm md:text-base font-medium text-gray-900">Grocery</span>
+            <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center hover:bg-gray-100 transition-colors">
+              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-emerald-600 mb-1.5 md:mb-2 lg:mb-3" />
+              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 text-center">Grocery</span>
             </div>
-            <div className="bg-gray-50 rounded-xl p-4 md:p-6 flex flex-col items-center hover:bg-gray-100 transition-colors">
-              <Coffee className="w-6 h-6 md:w-8 md:h-8 text-emerald-600 mb-2 md:mb-3" />
-              <span className="text-sm md:text-base font-medium text-gray-900">Skincare</span>
+            <div className="bg-gray-50 rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center hover:bg-gray-100 transition-colors">
+              <Coffee className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-emerald-600 mb-1.5 md:mb-2 lg:mb-3" />
+              <span className="text-xs sm:text-sm md:text-base font-medium text-gray-900 text-center">Skincare</span>
             </div>
           </div>
         </div>