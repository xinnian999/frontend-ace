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
  }
]
