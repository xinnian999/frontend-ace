export default [
  {
    key: 'javascript',
    tab: 'Javascript',
    children: [
      {
        id: '1',
        title: 'js基本数据类型有哪些及它们的区别?',
        desc: 'JavaScript共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。',
        content:
          'JavaScript共有八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。\n' +
          '其中 Symbol 和 BigInt 是ES6 中新增的数据类型：\n' +
          '\n' +
          'Symbol 代表创建后独一无二且不可变的数据类型，它主要是为了解决可能出现的全局变量冲突的问题。\n' +
          'BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了 Number 能够表示的安全整数范围。\n' +
          '\n' +
          '这些数据可以分为原始数据类型和引用数据类型：\n' +
          '\n' +
          '栈：原始数据类型（Undefined、Null、Boolean、Number、String、Symbol、BigInt）\n' +
          '堆：引用数据类型（对象、数组和函数）\n' +
          '\n' +
          '两种类型的区别在于存储位置的不同：\n' +
          '\n' +
          '原始数据类型直接存储在栈（stack）中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；\n' +
          '引用数据类型存储在堆（heap）中的对象，占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。\n' +
          '\n' +
          '堆和栈的概念存在于数据结构和操作系统内存中，在数据结构中：\n' +
          '\n' +
          '在数据结构中，栈中数据的存取方式为先进后出。\n' +
          '堆是一个优先队列，是按优先级来进行排序的，优先级可以按照大小来规定。\n' +
          '\n' +
          '在操作系统中，内存被分为栈区和堆区：\n' +
          '\n' +
          '栈区内存由编译器自动分配释放，存放函数的参数值，局部变量的值等。其操作方式类似于数据结构中的栈。\n' +
          '堆区内存一般由开发着分配释放，若开发者不释放，程序结束时可能由垃圾回收机制回收。\n' +
          '\n' +
          '作者：程序员吴铭\n' +
          '链接：https://juejin.cn/post/7330065707358208010\n' +
          '来源：稀土掘金\n' +
          '著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。'
      }
    ]
  },
  {
    key: 'vue',
    tab: 'Vue',
    children: []
  },
  {
    key: 'react',
    tab: 'React',
    children: []
  }
]
