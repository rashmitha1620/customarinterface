@@ .. @@
   return (
-    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg">
-      <div className="flex items-center justify-around py-2 px-1">
+    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 shadow-lg safe-area-bottom">
+      <div className="flex items-center justify-around py-1.5 px-1">
         {navItems.map((item) => {
           const IconComponent = item.icon;
           return (
             <Link
               key={item.name}
               to={item.path}
-              className={`flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-colors min-w-0 flex-1 ${
+              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg transition-colors min-w-0 flex-1 ${
                 item.active
                   ? 'text-emerald-600'
                   : 'text-gray-500 hover:text-emerald-600'
               }`}
             >
-              <div className="relative inline-block mb-1">
-                <IconComponent className="w-6 h-6" />
+              <div className="relative inline-block mb-0.5">
+                <IconComponent className="w-5 h-5" />
                 {item.badge && item.badge > 0 && (
-                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
+                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center leading-none">
                     {item.badge > 9 ? '9+' : item.badge}
                   </span>
                 )}
               </div>
-              <span className="text-xs font-medium text-center leading-tight truncate max-w-full">
+              <span className="text-xs font-medium text-center leading-tight truncate max-w-full">
                 {item.name}
               </span>
             </Link>