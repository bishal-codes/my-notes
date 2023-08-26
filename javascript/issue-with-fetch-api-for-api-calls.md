💡Issue with using fetch API for making API calls💡

Take a look at the below code:

```js
𝘧𝘦𝘵𝘤𝘩('𝘩𝘵𝘵𝘱𝘴://𝘫𝘴𝘰𝘯𝘱𝘭𝘢𝘤𝘦𝘩𝘰𝘭𝘥𝘦𝘳.𝘵𝘺𝘱𝘪𝘤𝘰𝘥𝘦.𝘤𝘰𝘮/𝘵𝘰𝘥𝘰𝘴/𝟦')
.𝘵𝘩𝘦𝘯(𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦 => 𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦.𝘫𝘴𝘰𝘯())
.𝘵𝘩𝘦𝘯(𝘳𝘦𝘴𝘶𝘭𝘵 => 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨('𝘴𝘶𝘤𝘤𝘦𝘴𝘴:',𝘳𝘦𝘴𝘶𝘭𝘵))
.𝘤𝘢𝘵𝘤𝘩(𝘦𝘳𝘳𝘰𝘳 => 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨('𝘦𝘳𝘳𝘰𝘳:', 𝘦𝘳𝘳𝘰𝘳));
```

Here, we’re making an API call to get a todo with id 4 and it will work because there is todo with id 4.

But what If the id does not exist or the server throws an error like 404 or 500 or any other error?

```js
𝘧𝘦𝘵𝘤𝘩('𝘩𝘵𝘵𝘱𝘴://𝘫𝘴𝘰𝘯𝘱𝘭𝘢𝘤𝘦𝘩𝘰𝘭𝘥𝘦𝘳.𝘵𝘺𝘱𝘪𝘤𝘰𝘥𝘦.𝘤𝘰𝘮/𝘵𝘰𝘥𝘰𝘴𝘴𝘴𝘴𝘴/𝟦')
.𝘵𝘩𝘦𝘯(𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦 => 𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦.𝘫𝘴𝘰𝘯())
.𝘵𝘩𝘦𝘯(𝘳𝘦𝘴𝘶𝘭𝘵 => 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨('𝘴𝘶𝘤𝘤𝘦𝘴𝘴:',𝘳𝘦𝘴𝘶𝘭𝘵))
.𝘤𝘢𝘵𝘤𝘩(𝘦𝘳𝘳𝘰𝘳 => 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨('𝘦𝘳𝘳𝘰𝘳:', 𝘦𝘳𝘳𝘰𝘳));
```

Here, we have used /𝘁𝗼𝗱𝗼𝘀𝘀𝘀𝘀𝘀 instead of /𝘁𝗼𝗱𝗼𝘀 which does not exist. But if you execute in the browser console, you will see that a success message is printed even though it’s clearly a 404 error as can be seen in console.

Ideally, the .𝗰𝗮𝘁𝗰𝗵 handler should be executed If the resource you're looking for does not exist but that does not happen in the case of fetch.

fetch only goes into .𝗰𝗮𝘁𝗰𝗵 handler when it fails to make the request for example when the network is not available or the domain does not exist.

This is the reason, you will find code for fetch written like this:

```js
𝘧𝘦𝘵𝘤𝘩('𝘩𝘵𝘵𝘱𝘴://𝘫𝘴𝘰𝘯𝘱𝘭𝘢𝘤𝘦𝘩𝘰𝘭𝘥𝘦𝘳.𝘵𝘺𝘱𝘪𝘤𝘰𝘥𝘦.𝘤𝘰𝘮/𝘵𝘰𝘥𝘰𝘴/𝟦')
.𝘵𝘩𝘦𝘯((𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦) => {
𝘪𝘧 (𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦.𝘰𝘬) {
𝘳𝘦𝘵𝘶𝘳𝘯 𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦.𝘫𝘴𝘰𝘯();
}
𝘳𝘦𝘵𝘶𝘳𝘯 𝘗𝘳𝘰𝘮𝘪𝘴𝘦.𝘳𝘦𝘫𝘦𝘤𝘵(𝘳𝘦𝘴𝘱𝘰𝘯𝘴𝘦);
})
.𝘵𝘩𝘦𝘯((𝘳𝘦𝘴𝘶𝘭𝘵) => {
𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨(𝘳𝘦𝘴𝘶𝘭𝘵);
})
.𝘤𝘢𝘵𝘤𝘩((𝘦𝘳𝘳𝘰𝘳) => {
𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨('𝘚𝘰𝘮𝘦𝘵𝘩𝘪𝘯𝘨 𝘸𝘦𝘯𝘵 𝘸𝘳𝘰𝘯𝘨.', 𝘦𝘳𝘳𝘰𝘳);
});
```

where inside the .𝘁𝗵𝗲𝗻 handler, we're checking if the response is ok. If the response is ok, we're calling a method that will send the result to the next handler.

If the response is not ok, then we're rejecting the promise so it will call the .catch handler to print the actual error.

So If have large application and you don't want to write a lot of extra code to handle the errors and display different error messages for different http status codes then use 𝗮𝘅𝗶𝗼𝘀 or 𝘀𝘂𝗽𝗲𝗿𝗮𝗴𝗲𝗻𝘁 or any other library instead of fetch.

If you're using axios/superagent instead of fetch then always .𝗰𝗮𝘁𝗰𝗵 handler will be executed if there is any error.