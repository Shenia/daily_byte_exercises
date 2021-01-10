// 2021-01-09

function kClosestPoints(points, k) {
    if (points.length <= k) {
        return points;
    }

    let distances = [];
    for (let i = 0; i < points.length; i++) {
        let sumSquared = 0;
        for (let coordinate of points[i]) {
            sumSquared += coordinate * coordinate;
        }
        let distance = Math.sqrt(sumSquared);
        distances.push({distance: distance, order: i});
    }

    let retVal = [];
    for (let i = 0; i < k; i++) {
        let min = distances[i].distance;
        for (let j = i; j < distances.length; j++) {
            if (distances[j].distance < min) {
                let temp = distances[i];
                distances[i] = distances[j];
                distances[j] = temp;
            }
        }
        let order = distances[i].order;
        retVal.push([]);
        for (let coordinate of points[order]) {
            retVal[i].push(coordinate);
        }
    }
    return retVal;
}

console.log(kClosestPoints([[1, 1], [-2, -2], [0.5, 0.5]], 2));

// runtime: O(kn)
// space: O(n) can be O(k) if we store only the kth largest distance