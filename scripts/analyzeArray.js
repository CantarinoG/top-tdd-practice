function analyzeArray(array) {
    let sum = 0;
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (array[i] < min) min = array[i];
        if (array[i] > max) max = array[i];
    }
    const average = sum / array.length;

    return {
        average: average,
        min: min,
        max: max,
        length: array.length
    };
   }
   
   module.exports = analyzeArray;

   /*
   test("Analyze Array Default test 2", () => {
    expect(analyzeArray([1,2,3,4,5])).toBe({
        average: 3,
        min: 1,
        max: 5,
        length: 5
      });
});
   */
