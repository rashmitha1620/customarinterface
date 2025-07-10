@@ .. @@
 const Header = ({ onSearchChange }) => {
   const { user, logout, isAuthenticated } = useAuth();
   const { getCartItemsCount, toggleCart } = useCart();
-  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState('');
   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
   const location = useLocation();
@@ .. @@
   const handleLogout = () => {
     logout();
     setIsUserMenuOpen(false);
-    setIsMenuOpen(false);
   };

@@ .. @@
       {/* Top bar */}
-      <div className="bg-emerald-600 text-white py-2 hidden md:block">
+      <div className="bg-emerald-600 text-white py-1 md:py-2 hidden sm:block">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-          <div className="flex items-center justify-between text-sm">
+          <div className="flex items-center justify-between text-xs md:text-sm">
             <div className="flex items-center space-x-2">
-              <MapPin className="w-4 h-4" />
+              <MapPin className="w-3 h-3 md:w-4 md:h-4" />
               <span>Delivering to Mumbai 400001</span>
             </div>
-            <div className="hidden md:flex items-center space-x-4">
+            <div className="hidden lg:flex items-center space-x-4">
               <span>🎉 Free delivery on orders above ₹999</span>
               <span>📞 Support: 1800-123-4567</span>
             </div>
@@ .. @@
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
-        <div className="flex items-center justify-between h-16">
+        <div className="flex items-center justify-between h-14 md:h-16">
           {/* Logo */}
           <div className="flex items-center">
             <Link to="/" className="flex-shrink-0">
-              <h1 className="text-2xl font-bold text-emerald-600">Grooso</h1>
-              <p className="text-xs text-gray-500 -mt-1">Shop Local</p>
+              <h1 className="text-xl md:text-2xl font-bold text-emerald-600">Grooso</h1>
+              <p className="text-xs text-gray-500 -mt-1 hidden sm:block">Shop Local</p>
             </Link>
           </div>

@@ .. @@
           {/* Search Bar */}
-          <div className="hidden lg:block flex-1 max-w-lg mx-8">
+          <div className="hidden md:block flex-1 max-w-lg mx-4 lg:mx-8">
             <div className="relative">
-              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
+              <Search className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
               <input
                 type="text"
                 placeholder="Smart Search"
                 value={searchQuery}
                 onChange={handleSearch}
-                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
+                className="w-full pl-8 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
               />
             </div>
           </div>

           {/* Right Side Actions */}
-          <div className="flex items-center space-x-4">
+          <div className="flex items-center space-x-2 md:space-x-4">
             {/* Wishlist Button */}
             {isAuthenticated && (
-              <button className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors">
-                <Heart className="w-6 h-6" />
+              <button className="relative p-1.5 md:p-2 text-gray-600 hover:text-emerald-600 transition-colors hidden sm:block">
+                <Heart className="w-5 h-5 md:w-6 md:h-6" />
               </button>
             )}

             {/* Cart Button */}
             <button
               onClick={toggleCart}
-              className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors"
+              className="relative p-1.5 md:p-2 text-gray-600 hover:text-emerald-600 transition-colors"
             >
-              <ShoppingCart className="w-6 h-6" />
+              <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
               {getCartItemsCount() > 0 && (
-                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
+                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center text-xs">
                   {getCartItemsCount()}
                 </span>
               )}
@@ .. @@
             <div className="relative">
               <button
                 onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
-                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
+                className="flex items-center space-x-1 md:space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
               >
-                <User className="w-6 h-6" />
+                <User className="w-5 h-5 md:w-6 md:h-6" />
                 {isAuthenticated && (
-                  <span className="hidden md:block text-sm font-medium">
+                  <span className="hidden lg:block text-sm font-medium">
                     {user?.name?.split(' ')[0]}
                   </span>
                 )}
@@ .. @@
               {/* User Dropdown Menu */}
               {isUserMenuOpen && (
-                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
+                <div className="absolute right-0 mt-2 w-44 md:w-48 bg-white rounded-md shadow-lg py-1 z-50 border">
                   {isAuthenticated ? (
                     <>
-                      <div className="px-4 py-2 text-sm text-gray-500 border-b">
+                      <div className="px-3 md:px-4 py-2 text-xs md:text-sm text-gray-500 border-b truncate">
                         {user?.email}
                       </div>
                       <Link 
                         to="/profile" 
-                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
+                        className="block px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50"
                         onClick={() => setIsUserMenuOpen(false)}
                       >
                         My Profile
                       </Link>
                       <Link 
                         to="/orders" 
-                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
+                        className="block px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50"
                         onClick={() => setIsUserMenuOpen(false)}
                       >
                         My Orders
                       </Link>
                       <Link 
                         to="/addresses" 
-                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
+                        className="block px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50"
                         onClick={() => setIsUserMenuOpen(false)}
                       >
                         My Addresses
                       </Link>
                       <button
                         onClick={handleLogout}
-                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
+                        className="block w-full text-left px-3 md:px-4 py-2 text-xs md:text-sm text-red-600 hover:bg-gray-50"
                       >
                         Logout
                       </button>
@@ .. @@
                     <>
                       <Link 
                         to="/login" 
-                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
+                        className="block px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50"
                         onClick={() => setIsUserMenuOpen(false)}
                       >
                         Login
                       </Link>
                       <Link 
                         to="/register" 
-                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
+                        className="block px-3 md:px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-50"
                         onClick={() => setIsUserMenuOpen(false)}
                       >
                         Register
@@ .. @@
                 </div>
               )}
             </div>
-
-            {/* Mobile Menu Button */}
-            <button
-              onClick={() => setIsMenuOpen(!isMenuOpen)}
-              className="md:hidden p-2 text-gray-600 hover:text-emerald-600"
-            >
-              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
-            </button>
           </div>
         </div>

         {/* Mobile Search */}
-        <div className="lg:hidden pb-4">
+        <div className="md:hidden pb-3 md:pb-4">
           <div className="relative">
-            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
+            <Search className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
             <input
               type="text"
               placeholder="Smart Search"
               value={searchQuery}
               onChange={handleSearch}
-              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
+              className="w-full pl-8 md:pl-10 pr-3 md:pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
             />
           </div>
         </div>
@@ .. @@
 };

 export default Header;