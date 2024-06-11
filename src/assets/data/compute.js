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
    title: '实现数组冒泡排序',
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
  }
]
