There are many ways through which you can optimize your application's performance. One of them is Tree Shaking.

Picture your source code as a tree, where each leaf represents your code. Be it imports, CSS blocks, libraries, functions etc. Just like a real tree, there maybe some dead leaves which cause the tree to weigh down.

In order to maintain the tree it's essential to remove the dead leaves. Similarly, it’s important to remove unused code in our application too. The best way to remove that dead code is to shake it off the tree, so the tree remains with only good leaves (used code) which helps reducing the file size.

Tree Shaking allows you to do that. 
To implement the same, you can leverage tools like Webpack that provide the support. It examines your code to determine which styles are actively used and which are not. The unused styles are then stripped away, resulting in an efficient code bundle. 

This can be implemented for JavaScript as well as CSS.

Benefits
✅ Faster loading times and improved performance.
✅ Enhanced user experience
✅ Reduced code file size 
✅ More maintainable code