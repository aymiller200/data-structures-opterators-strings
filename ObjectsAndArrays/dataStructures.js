/* 
!Data structure overview

  !Sources of Data: 
    ? 1) From the program itself: Data written directly in source code(status messages)
    ? 2) From the UI: data input from the user or data written in DOM (tasks in a todo app)
    ? 3) From external sources: Data fetched for example from a web API(Application Programming Interface) (recipe objects)

    * We store these sources of data in collections of data with data structures
        ? If we have just a simple list => Arrays or sets (vlaue without any descriptions)
        ? Key/value pairs => Objects or maps (keys allow us to describe values)

    *Other built in data structures: 
        ? WeakMap
        ? WeakSet
    *Data structures not built in to Javascript: 
        ? Stacks
        ? Queues
        ? Linked Lists
        ? Trees
        ? Hash tables

    !Arrays vs Sets: Used for simple lists of values where we don't need to describe the values
      *Arrays: 
          ? Use when you need ORDERED list of values (might contain duplicates)
          ? Use when you need to MANIPULATE data
      *Sets: 
          ? Use when you need to work with UNIQUE vales
          ? Use when high-performance is really important
          ? Use to remove duplicates from arrays.

    !Objects vs. Maps: Used when we need to describe the values using keys
        *Objects: 
          ? More traditional key/value store
          ? Easier to write and access values with '.' and '[]'
          ? Use when you need to include functions (methods)
          ? Use when working with JSON (can convert to map)
        *Maps: 
          ? Better performance
          ? Keys can have any data type
          ? Easy to iterate
          ? East to compute size.
          ? Use when you simply need to map key to values
          ? Use when you need keys that are NOT strings
*/