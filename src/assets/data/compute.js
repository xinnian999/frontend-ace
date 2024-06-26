export default [
  {
    id: '1',
    title: '根据ID获取树节点信息',
    description:
      '给定一个表示树结构的对象数组，每个节点有一个唯一的 id 和一个可选的 children 属性，表示它的子节点。请编写一个函数 findNodeById，根据给定的 id 查找对应的节点信息。如果找不到该节点，则返回 null。',
    body: `const tree = [
    {
        id: 1,
        name: "root1",
        children: [
            {
                id: 2,
                name: "child1",
                children: [
                    {
                        id: 3,
                        name: "child1.1"
                    },
                    {
                        id: 4,
                        name: "child1.2"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "root2",
        children: [
            {
                id: 6,
                name: "child2"
            }
        ]
    }
];

function findNodeById(tree, id) {
    // 实现代码

}

console.log(findNodeById(tree, 4)); 
// 输出: { id: 4, name: "child1.2" }

console.log(findNodeById(tree, 7)); 
// 输出: null
`,
    answer: `const tree = [
    {
        id: 1,
        name: "root1",
        children: [
            {
                id: 2,
                name: "child1",
                children: [
                    {
                        id: 3,
                        name: "child1.1"
                    },
                    {
                        id: 4,
                        name: "child1.2"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "root2",
        children: [
            {
                id: 6,
                name: "child2"
            }
        ]
    }
];

function findNodeById(tree, id) {
    // 实现代码
    // 使用递归来遍历树结构
    for (let node of tree) {
        if (node.id === id) {
            return node;
        }
        if (node.children) {
            const result = findNodeById(node.children, id);
            if (result) {
                return result;
            }
        }
    }
    return null;
}

console.log(findNodeById(tree, 4)); 
// 输出: { id: 4, name: "child1.2" }

console.log(findNodeById(tree, 7)); 
// 输出: null
`
  },
  {
    id: '2',
    title: '数组冒泡排序',
    description:
      '请实现一个函数 bubbleSort，对一个给定的数组进行冒泡排序。冒泡排序是一种简单的排序算法，它重复地遍历要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。遍历数列的工作是重复进行的，直到没有再需要交换，也就是说该数列已经排序完成。',
    body: `function bubbleSort(arr) {
    // 实现代码
}
console.log(bubbleSort([5, 1, 4, 2, 8]));
// 输出: [1, 2, 4, 5, 8]

console.log(bubbleSort([3, 0, -2, 6, 2, 5]));
// 输出: [-2, 0, 2, 3, 5, 6]
`,
    answer: `function bubbleSort(arr) {
    // 实现代码
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                // 交换元素
                [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                swapped = true;
            }
        }
        // 每经过一轮，最后一个元素已经是最大的，不需要再比较
        n--;
    } while (swapped);
    return arr;
}
console.log(bubbleSort([5, 1, 4, 2, 8]));
// 输出: [1, 2, 4, 5, 8]

console.log(bubbleSort([3, 0, -2, 6, 2, 5]));
// 输出: [-2, 0, 2, 3, 5, 6]
`
  },
  {
    id: '3',
    title: '列表转成树',
    description:
      '在JavaScript中，将列表（数组）转换为树形结构是一个常见的任务。通常，列表中的每个对象都有一个表示其父级对象的字段（例如，parentId）。以下是一个简单的示例，展示如何实现这种转换',
    body: `const listToTree = (list) => {  
   //实现代码：
}  
  
// 示例数据  
const list = [  
    { id: 1, name: 'Node 1', parentId: null },  
    { id: 2, name: 'Node 1.1', parentId: 1 },  
    { id: 3, name: 'Node 1.2', parentId: 1 },  
    { id: 4, name: 'Node 2', parentId: null },  
    { id: 5, name: 'Node 2.1', parentId: 4 },  
    { id: 6, name: 'Node 2.2', parentId: 4 },  
    { id: 7, name: 'Node 2.1.1', parentId: 5 },  
];  
  

console.log(listToTree(list));
`,
    answer: `const listToTree = (list) => {
  // 创建一个函数来递归构建树
  const buildTree = (node) => {
    //先筛选出当前节点的子节点，再递归找出子节点的子节点
    return list
      .filter(item => item.parentId === node.id)
      .map(item => ({ ...item, children: buildTree(item) }))
  }

  // 找出根节点，并对每个根节点调用递归函数
  const tree = list
    .filter(item => item.parentId === null)
    .map(item => ({...item, children: buildTree(item) }))

  return tree
}

// 示例数据
const list = [
  { id: 1, name: 'Node 1', parentId: null },
  { id: 2, name: 'Node 1.1', parentId: 1 },
  { id: 3, name: 'Node 1.2', parentId: 1 },
  { id: 4, name: 'Node 2', parentId: null },
  { id: 5, name: 'Node 2.1', parentId: 4 },
  { id: 6, name: 'Node 2.2', parentId: 4 },
  { id: 7, name: 'Node 2.1.1', parentId: 5 }
]

console.log(listToTree(list))
`
  },
  {
    id: '4',
    title: '数组去重',
    description:
      '请编写一个函数 unique，该函数接收一个数组作为参数，并返回一个新数组，其中包含原数组中所有不重复的元素。',
    body: `function unique(arr) {
    // 实现代码
}

console.log(unique([1, 2, 2, 3, 4, 4, 5]));
// 输出: [1, 2, 3, 4, 5]

console.log(unique(['a', 'b', 'a', 'c', 'b']));
// 输出: ['a', 'b', 'c']
`,
    answer: `function unique(arr) {
    // 实现代码
     return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(unique([1, 2, 2, 3, 4, 4, 5]));
// 输出: [1, 2, 3, 4, 5]

console.log(unique(['a', 'b', 'a', 'c', 'b']));
// 输出: ['a', 'b', 'c']
`
  },
  {
    id: '5',
    title: '手写深拷贝函数',
    description:
      '请编写一个通用深拷贝函数 deepCopy，该函数接收一个对象或数组作为参数，并返回该参数的深拷贝。',
    body: `function deepCopy(obj) {
    //实现代码
   
}


const originalObject = { a: 1, b: { c: 2 } };
const copiedObject = deepCopy(originalObject);

console.log(copiedObject); 
// 输出: { a: 1, b: { c: 2 } }

console.log(originalObject === copiedObject); 
// 输出: false

console.log(originalObject.b === copiedObject.b); 
// 输出: false
`,
    answer: `function deepCopy(obj) {
    //实现代码
    if (Array.isArray(obj)) {
        // 如果是数组，进行数组深拷贝
        return obj.map(item => deepCopy(item));
    } else if (typeof obj === 'object' && obj !== null) {
        // 如果是对象，进行对象深拷贝
        const result = {};
        for (let key in obj) {
            result[key] = deepCopy(obj[key]);
        }
        return result;
    } else {
        // 基本类型直接返回
        return obj;
    }
}


const originalObject = { a: 1, b: { c: 2 } };
const copiedObject = deepCopy(originalObject);

console.log(copiedObject); 
// 输出: { a: 1, b: { c: 2 } }

console.log(originalObject === copiedObject); 
// 输出: false

console.log(originalObject.b === copiedObject.b); 
// 输出: false
`
  },
  {
    id: '6',
    title: '手写防抖函数',
    description:
      '请编写一个防抖函数debounce，该函数接受两个参数：要防抖的函数 func 和延迟时间 delay。它返回一个新的函数',
    body: `function debounce(func, delay) {
    //实现代码：
}

// 示例用法
function saveInput() {
    console.log('Input saved');
}

const debouncedSaveInput = debounce(saveInput, 500);

// 当连续输入时，只有在停止输入后 500ms 才会触发 saveInput 函数
debouncedSaveInput();
debouncedSaveInput();
debouncedSaveInput();
// 500ms 后，'Input saved' 会被输出到控制台
`,
    answer: `function debounce(func, delay) {
    let timeoutId;

    return function(...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// 示例用法
function saveInput() {
    console.log('Input saved');
}

const debouncedSaveInput = debounce(saveInput, 500);

// 当连续输入时，只有在停止输入后 500ms 才会触发 saveInput 函数
debouncedSaveInput();
debouncedSaveInput();
debouncedSaveInput();
// 500ms 后，'Input saved' 会被输出到控制台

`
  },
  {
    id: '7',
    title: '将对象拍平为键值对数组',
    description: '请编写一个函数flatObj，该函数接受一个对象。它返回一个将对象拍平后的数组',
    body: `function flatObj(obj) {
    //实现代码
}

const obj={
  name:'hyl',
  color:['blue','red','green'],
  detail:{
    age:25,
    color:['blue','red','green'],
    detail:{
        age:25,
        color:['blue','red','green'],
    }
  }
}

console.log(flatObj(obj));
// 输出: ['name_hyl','color_0_blue','color_0_red','color_0_green','detail_age_25','detail_color_0_blue','detail_color_1_red','detail_color_2_green','detail_detail_age_25','detail_detail_color_0_blue','detail_detail_color_1_red','detail_detail_color_2_green']
`,
    answer: `function flatObj(obj, parentKey = '') {
    //实现代码
     return Object.entries(obj).reduce((result, [key, value]) => {
        let newKey = parentKey ? \`\${parentKey}_\${key}\` : key;
        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                result = result.concat(flatObj({ [index]: item }, newKey));
            });
        } else if (typeof value === 'object' && value !== null) {
            result = result.concat(flatObj(value, newKey));
        } else {
            result.push(\`\${newKey}_\${value}\`);
        }
        return result;
    }, []);
}

const obj={
  name:'hyl',
  color:['blue','red','green'],
  detail:{
    age:25,
    color:['blue','red','green'],
    detail:{
        age:25,
        color:['blue','red','green'],
    }
  }
}

console.log(flatObj(obj));
// 输出: ['name_hyl','color_0_blue','color_0_red','color_0_green','detail_age_25','detail_color_0_blue','detail_color_1_red','detail_color_2_green','detail_detail_age_25','detail_detail_color_0_blue','detail_detail_color_1_red','detail_detail_color_2_green']`
  },
  {
    id: '8',
    title: '将对象键值对数组,转化为对象',
    description: '请编写一个函数unFlatObj，该函数接受一个键值对数组。它返回一个对象',
    body: `function unFlatObj(arr) {
    //实现代码
}

const arr = [
    'name_hyl',
    'color_0_blue',
    'color_1_red',
    'color_2_green',
    'detail_age_25',
    'detail_color_0_blue',
    'detail_color_1_red',
    'detail_color_2_green',
    'detail_detail_age_25',
    'detail_detail_color_0_blue',
    'detail_detail_color_1_red',
    'detail_detail_color_2_green'
];

console.log(unFlatObj(arr));
//{
//   name:'hyl',
//   color:['blue','red','green'],
//   detail:{
//   age:25,
//     color:['blue','red','green'],
//     detail:{
//     age:25,
//       color:['blue','red','green'],
//   }
// }
// }`,
    answer: `function unFlatObj(arr) {
    //实现代码
   return arr.reduce((result, item) => {
        let parts = item.split('_');
        let value = parts.pop();
        parts.reduce((acc, key, index) => {
            key = isNaN(key) ? key : parseInt(key);
            if (index === parts.length - 1) {
                acc[key] = isNaN(value) ? value : parseFloat(value);
            } else {
                if (!acc[key]) {
                    acc[key] = isNaN(parts[index + 1]) ? {} : [];
                }
            }
            return acc[key];
        }, result);
        return result;
    }, {});
}

const arr = [
    'name_hyl',
    'color_0_blue',
    'color_1_red',
    'color_2_green',
    'detail_age_25',
    'detail_color_0_blue',
    'detail_color_1_red',
    'detail_color_2_green',
    'detail_detail_age_25',
    'detail_detail_color_0_blue',
    'detail_detail_color_1_red',
    'detail_detail_color_2_green'
];

console.log(unFlatObj(arr));
//{
//   name:'hyl',
//   color:['blue','red','green'],
//   detail:{
//   age:25,
//     color:['blue','red','green'],
//     detail:{
//     age:25,
//       color:['blue','red','green'],
//   }
// }
// }
`
  }
]
