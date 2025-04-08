function mincost(arr) {
    if (arr.length <= 1) return 0;

    // Create a min-heap (priority queue)
    const heap = new MinPriorityQueue();

    // Add all the ropes into the heap
    for (let length of arr) {
        heap.enqueue(length);
    }

    let totalCost = 0;

    // Continue combining ropes until only one is left
    while (heap.size() > 1) {
        let rope1 = heap.dequeue().element;
        let rope2 = heap.dequeue().element;

        // Cost to combine the two ropes
        let cost = rope1 + rope2;
        totalCost += cost;

        // Add the new combined rope back into the heap
        heap.enqueue(cost);
    }

    return totalCost;
}