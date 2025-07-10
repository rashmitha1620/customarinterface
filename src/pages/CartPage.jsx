@@ .. @@
   if (cart.length === 0) {
     return (
-      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
+      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
         <div className="text-center">
-          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
-          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
-          <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
+          <ShoppingBag className="w-16 h-16 md:w-24 md:h-24 text-gray-300 mx-auto mb-4 md:mb-6" />
+          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Your cart is empty</h2>
+          <p className="text-gray-600 mb-6 md:mb-8">Looks like you haven't added anything to your cart yet.</p>
           <Link
             to="/"
-            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
+            className="inline-flex items-center space-x-2 bg-emerald-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-emerald-700 transition-colors text-sm md:text-base"
           >
             <ArrowLeft className="w-4 h-4" />
             <span>Continue Shopping</span>
@@ .. @@
   }

   return (
-    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
+    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8">
       {/* Header */}
-      <div className="flex items-center justify-between mb-8">
+      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 space-y-2 sm:space-y-0">
         <div>
-          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
-          <p className="text-gray-600 mt-1">{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
+          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Shopping Cart</h1>
+          <p className="text-sm md:text-base text-gray-600 mt-1">{cart.length} item{cart.length !== 1 ? 's' : ''} in your cart</p>
         </div>
         <Link
           to="/"
-          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700"
+          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 text-sm md:text-base"
         >
           <ArrowLeft className="w-4 h-4" />
           <span>Continue Shopping</span>
@@ .. @@
       </div>

-      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
+      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
         {/* Cart Items */}
         <div className="lg:col-span-2">
           <div className="bg-white rounded-lg shadow-sm border">
-            <div className="p-6 border-b">
+            <div className="p-4 md:p-6 border-b">
               <div className="flex items-center justify-between">
-                <h2 className="text-lg font-semibold">Cart Items</h2>
+                <h2 className="text-base md:text-lg font-semibold">Cart Items</h2>
                 <button
                   onClick={() => {
                     clearCart();
                     toast.success('Cart cleared');
                   }}
-                  className="text-red-600 hover:text-red-700 text-sm font-medium"
+                  className="text-red-600 hover:text-red-700 text-xs md:text-sm font-medium"
                 >
                   Clear Cart
                 </button>
@@ .. @@
             <div className="divide-y divide-gray-200">
               {cart.map((item) => (
-                <div key={item.id} className="p-6">
-                  <div className="flex items-start space-x-4">
+                <div key={item.id} className="p-4 md:p-6">
+                  <div className="flex items-start space-x-3 md:space-x-4">
                     <img
                       src={item.image}
                       alt={item.name}
-                      className="w-20 h-20 object-cover rounded-lg"
+                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0"
                     />
                     
                     <div className="flex-1">
                       <div className="flex items-start justify-between">
                         <div>
-                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
-                          <p className="text-sm text-gray-600 mt-1">{item.vendor}</p>
-                          <p className="text-sm text-gray-500 mt-1">{item.category}</p>
+                          <h3 className="text-base md:text-lg font-medium text-gray-900 line-clamp-2">{item.name}</h3>
+                          <p className="text-xs md:text-sm text-gray-600 mt-1 line-clamp-1">{item.vendor}</p>
+                          <p className="text-xs md:text-sm text-gray-500 mt-1">{item.category}</p>
                         </div>
                         <button
                           onClick={() => handleRemoveItem(item.id, item.name)}
-                          className="text-red-500 hover:text-red-700 p-1"
+                          className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
                         >
                           <Trash2 className="w-4 h-4" />
                         </button>
                       </div>

-                      <div className="flex items-center justify-between mt-4">
-                        <div className="flex items-center space-x-3">
+                      <div className="flex items-center justify-between mt-3 md:mt-4">
+                        <div className="flex items-center space-x-2 md:space-x-3">
                           <button
                             onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
-                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
+                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-50 flex-shrink-0"
                           >
                             <Minus className="w-4 h-4" />
                           </button>
-                          <span className="font-medium w-8 text-center">{item.quantity}</span>
+                          <span className="font-medium w-6 md:w-8 text-center text-sm md:text-base">{item.quantity}</span>
                           <button
                             onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
-                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
+                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-50 flex-shrink-0"
                           >
                             <Plus className="w-4 h-4" />
                           </button>
                         </div>

                         <div className="text-right">
-                          <div className="text-lg font-semibold text-gray-900">
+                          <div className="text-base md:text-lg font-semibold text-gray-900">
                             {formatCurrency(item.price * item.quantity)}
                           </div>
                           {item.originalPrice && item.originalPrice > item.price && (
-                            <div className="text-sm text-gray-500 line-through">
+                            <div className="text-xs md:text-sm text-gray-500 line-through">
                               {formatCurrency(item.originalPrice * item.quantity)}
                             </div>
                           )}
@@ .. @@
           </div>

           {/* Coupon Section */}
-          <div className="bg-white rounded-lg shadow-sm border mt-6 p-6">
+          <div className="bg-white rounded-lg shadow-sm border mt-4 md:mt-6 p-4 md:p-6">
             <div className="flex items-center space-x-3">
               <Tag className="w-5 h-5 text-emerald-600" />
-              <h3 className="text-lg font-semibold">Apply Coupon</h3>
+              <h3 className="text-base md:text-lg font-semibold">Apply Coupon</h3>
             </div>
-            <div className="flex space-x-3 mt-4">
+            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-3 md:mt-4">
               <input
                 type="text"
                 placeholder="Enter coupon code"
-                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
+                className="flex-1 px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
               />
-              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
+              <button className="bg-emerald-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm md:text-base">
                 Apply
               </button>
             </div>
@@ .. @@
         {/* Order Summary */}
         <div className="lg:col-span-1">
-          <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-4">
-            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
+          <div className="bg-white rounded-lg shadow-sm border p-4 md:p-6 sticky top-4">
+            <h2 className="text-base md:text-lg font-semibold mb-4">Order Summary</h2>
             
-            <div className="space-y-3">
+            <div className="space-y-2 md:space-y-3">
               <div className="flex justify-between">
-                <span className="text-gray-600">Subtotal ({cart.length} items)</span>
-                <span className="font-medium">{formatCurrency(subtotal)}</span>
+                <span className="text-sm md:text-base text-gray-600">Subtotal ({cart.length} items)</span>
+                <span className="text-sm md:text-base font-medium">{formatCurrency(subtotal)}</span>
               </div>
               
               <div className="flex justify-between">
-                <span className="text-gray-600">Delivery Fee</span>
-                <span className="font-medium">
+                <span className="text-sm md:text-base text-gray-600">Delivery Fee</span>
+                <span className="text-sm md:text-base font-medium">
                   {deliveryFee === 0 ? (
                     <span className="text-emerald-600">FREE</span>
                   ) : (
@@ .. @@
               </div>
               
               <div className="flex justify-between">
-                <span className="text-gray-600">Taxes & Fees</span>
-                <span className="font-medium">{formatCurrency(tax)}</span>
+                <span className="text-sm md:text-base text-gray-600">Taxes & Fees</span>
+                <span className="text-sm md:text-base font-medium">{formatCurrency(tax)}</span>
               </div>
               
-              <div className="border-t pt-3">
+              <div className="border-t pt-2 md:pt-3">
                 <div className="flex justify-between">
-                  <span className="text-lg font-semibold">Total</span>
-                  <span className="text-lg font-bold text-emerald-600">{formatCurrency(total)}</span>
+                  <span className="text-base md:text-lg font-semibold">Total</span>
+                  <span className="text-base md:text-lg font-bold text-emerald-600">{formatCurrency(total)}</span>
                 </div>
               </div>
             </div>

             {/* Delivery Info */}
-            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
+            <div className="mt-4 md:mt-6 p-3 md:p-4 bg-emerald-50 rounded-lg">
               <div className="text-sm">
                 <div className="font-medium text-emerald-800 mb-1">Free Delivery</div>
                 <div className="text-emerald-700">
@@ .. @@
             {/* Checkout Button */}
             <Link
               to="/checkout"
-              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 mt-6"
+              className="w-full bg-emerald-600 text-white py-2.5 md:py-3 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 mt-4 md:mt-6 text-sm md:text-base"
             >
               <span>Proceed to Checkout</span>
               <ArrowRight className="w-4 h-4" />
@@ .. @@
             {/* Security Info */}
             <div className="mt-4 text-center">
-              <div className="text-xs text-gray-500">
+              <div className="text-xs text-gray-500">
                 🔒 Secure checkout with 256-bit SSL encryption
               </div>
             </div>