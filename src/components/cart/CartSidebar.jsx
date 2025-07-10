@@ .. @@
       {/* Sidebar */}
-      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl transform transition-transform">
+      <div className="fixed right-0 top-0 h-full w-full max-w-sm md:max-w-md bg-white z-50 shadow-xl transform transition-transform">
         <div className="flex flex-col h-full">
           {/* Header */}
-          <div className="flex items-center justify-between p-4 border-b">
-            <h2 className="text-lg font-semibold">Shopping Cart</h2>
+          <div className="flex items-center justify-between p-3 md:p-4 border-b">
+            <h2 className="text-base md:text-lg font-semibold">Shopping Cart</h2>
             <button
               onClick={() => setIsOpen(false)}
-              className="p-2 hover:bg-gray-100 rounded-full"
+              className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full"
             >
-              <X className="w-5 h-5" />
+              <X className="w-4 h-4 md:w-5 md:h-5" />
             </button>
           </div>

           {/* Cart Items */}
-          <div className="flex-1 overflow-y-auto p-4">
+          <div className="flex-1 overflow-y-auto p-3 md:p-4">
             {cart.length === 0 ? (
               <div className="flex flex-col items-center justify-center h-full text-gray-500">
-                <ShoppingBag className="w-16 h-16 mb-4" />
-                <p className="text-lg font-medium">Your cart is empty</p>
-                <p className="text-sm">Add some products to get started</p>
+                <ShoppingBag className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4" />
+                <p className="text-base md:text-lg font-medium">Your cart is empty</p>
+                <p className="text-xs md:text-sm text-center">Add some products to get started</p>
               </div>
             ) : (
             )
             }
-              <div className="space-y-4">
+              <div className="space-y-3 md:space-y-4">
                 {cart.map((item) => (
)
)
}
-                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
+                  <div key={item.id} className="flex items-center space-x-2 md:space-x-3 bg-gray-50 p-2 md:p-3 rounded-lg">
                     <img
                       src={item.image}
                       alt={item.name}
-                      className="w-16 h-16 object-cover rounded"
+                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded"
                     />
                     <div className="flex-1">
-                      <h4 className="font-medium text-sm">{item.name}</h4>
-                      <p className="text-gray-600 text-xs">{item.vendor}</p>
-                      <p className="font-semibold text-emerald-600">
+                      <h4 className="font-medium text-xs md:text-sm line-clamp-1">{item.name}</h4>
+                      <p className="text-gray-600 text-xs line-clamp-1">{item.vendor}</p>
+                      <p className="font-semibold text-emerald-600 text-sm">
                         {formatCurrency(item.price)}
                       </p>
                     </div>
-                    <div className="flex flex-col items-end space-y-2">
-                      <div className="flex items-center space-x-2">
+                    <div className="flex flex-col items-end space-y-1 md:space-y-2">
+                      <div className="flex items-center space-x-1 md:space-x-2">
                         <button
                           onClick={() => updateQuantity(item.id, item.quantity - 1)}
-                          className="p-1 hover:bg-gray-200 rounded"
+                          className="p-0.5 md:p-1 hover:bg-gray-200 rounded"
                         >
-                          <Minus className="w-4 h-4" />
+                          <Minus className="w-3 h-3 md:w-4 md:h-4" />
                         </button>
-                        <span className="font-medium w-8 text-center">{item.quantity}</span>
+                        <span className="font-medium w-6 md:w-8 text-center text-sm">{item.quantity}</span>
                         <button
                           onClick={() => updateQuantity(item.id, item.quantity + 1)}
-                          className="p-1 hover:bg-gray-200 rounded"
+                          className="p-0.5 md:p-1 hover:bg-gray-200 rounded"
                         >
-                          <Plus className="w-4 h-4" />
+                          <Plus className="w-3 h-3 md:w-4 md:h-4" />
                         </button>
                       </div>
                       <button
                         onClick={() => removeFromCart(item.id)}
-                        className="text-red-500 hover:text-red-700 text-xs"
+                        className="text-red-500 hover:text-red-700 text-xs"
                       >
                         Remove
                       </button>
@@ .. @@
           {/* Footer */}
           {cart.length > 0 && (
                       )
                       }
-            <div className="border-t p-4 space-y-4">
+            <div className="border-t p-3 md:p-4 space-y-3 md:space-y-4">
               <div className="flex justify-between items-center">
-                <span className="text-lg font-semibold">Total:</span>
-                <span className="text-xl font-bold text-emerald-600">
+                <span className="text-base md:text-lg font-semibold">Total:</span>
+                <span className="text-lg md:text-xl font-bold text-emerald-600">
                   {formatCurrency(getCartTotal())}
                 </span>
               </div>
-              <div className="space-y-2">
+              <div className="space-y-2 md:space-y-2">
                 <Link
                   to="/cart"
                   onClick={() => setIsOpen(false)}
-                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2"
+                  className="w-full bg-emerald-600 text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
                 >
                   <span>View Cart</span>
-                  <ArrowRight className="w-4 h-4" />
+                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                 </Link>
                 <button
                   onClick={clearCart}
-                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
+                  className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm md:text-base"
                 >
                   Clear Cart
                 </button>