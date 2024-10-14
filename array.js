function analyzeArray(arr) {
    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    const average = sum / arr.length;

    console.log("Sum:", sum);
    console.log("Average:", average);
    console.log("Min:", min);
    console.log("Max:", max);
}

analyzeArray([5, 3, 8, 1, 2]);
