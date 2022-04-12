interface Nodo {
    value: Number,
    left: Nodo | null,
    right: Nodo | null
}

function createNodo(value: Number, left: Nodo | null, right: Nodo | null): Nodo {
    return {
        value,
        left,
        right
    }
}

function createTree(): Nodo {
    var n1 = createNodo(7, null, null);
    var n2 = createNodo(10, null, null);
    var n3 = createNodo(5, n1, n2);

    var n4 = createNodo(19, null, null);
    var n5 = createNodo(13, n4, null);

    var root = createNodo(8, n3, n5);
    return root;
}

function findLca(root: Nodo, n1: number, n2: number): Nodo | null {
    if (root == null)
        return null;

    if (root.value == n1 || root.value == n2)
        return root;

    var left = findLca(root.left, n1, n2);
    var right = findLca(root.right, n1, n2);

    if (left == null && right == null)
        return null;
    else if (left != null && right != null)
        return root;
    else if (left != null)
        return left;
    return right;
}

function findLevel(root: Nodo, n1: number, level: number): number {
    if(root == null)
        return  -1;

    if(root.value == n1)
        return level;

    var left = findLevel(root.left, n1, level + 1);
    if(left != -1)
        return left;
    
    return findLevel(root.right, n1, level + 1);
}

function start(n1: number, n2: number) {
    var root = createTree();

    var lca = findLca(root, n1, n2);

    if(lca != null){
        var l1 = findLevel(lca, n1, 0);
        var l2 = findLevel(lca, n2, 0);

        console.log('distance', (l1 + l2));
    }
    else
        console.log('no node found');
}

start(1, 20);