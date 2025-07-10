@@ .. @@
 // Layout Component
 const Layout = ({ children, onSearchChange }) => {
   return (
-    <div className="min-h-screen bg-gray-50 flex flex-col pb-16 md:pb-0">
+    <div className="min-h-screen bg-gray-50 flex flex-col pb-14 md:pb-0">
       <Header onSearchChange={onSearchChange} />
       <main className="flex-1">
         {children}