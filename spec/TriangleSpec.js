describe("Triangle", function() {

  var triangle;

  describe("Detect invalid input types for the triangle", function() {
    var invalidInputs = [
      ['a', 2, 3],
      [1, 'b', 3],
      [1, 2, '3  c'],
      ['a', 'b', 3],
      [1, 'b', 'c'],
      [5, '44', '3      b'],
      ['a', 2, null],
      ['a', , 'c'],
      ['%', 1, 3],
      ['+', '', 3],
      [1, '-' ],
      [, , ],
      [null, 1, 2],
      [null, null, null],
      [null, 1, ''],
      ['1,']
    ]

    for(var input in invalidInputs) {
      triangle = new Triangle();
      runTest(invalidInputs[input], triangle.exception["INVALID_INPUT"])
    }
  });

  describe("Detect negative inputs for the triangle", function() {
    var invalidInputs = [
        [-1, 1, 2],
        [1, -1, 2],
        [1, 1, -2],
        [-1 , -1, 1],
        [-1, 2, -1],
        [1, -2, -3],
        [-1, -3, -2]
    ]

    for(var input in invalidInputs) {
      triangle = new Triangle();
      runTest(invalidInputs[input], triangle.exception["NEGATIVE_NUMBER"])
    }
  })


  describe("Detect invalid lengths for the triangle ", function(){
    var invalidInputs = [
      [1, 2, 3],
      [3, 2, 1],
      [2, 1, 3],
      [2, 3, 1],
      [10, 11, 100 ],
      [50, 49, 100 ],
      [49, 50, 100 ]

    ]

    for(var input in invalidInputs) {
      triangle = new Triangle();
      runTest(invalidInputs[input], triangle.exception["INVALID_TRIANGLE"])
    }
  });

  describe("Detect equilateral triangle ", function(){
    var invalidInputs = [
      [1, 1, 1],
      [10, '10', 10],
      ['15', 15, '15'],
      [45, 45, 45],
      [105, 105, 105]
    ]

    for(var input in invalidInputs) {
      triangle = new Triangle();
      runTest(invalidInputs[input], triangle.type["Equilateral"])
    }
  });

  describe("Detect isosceles triangle ", function(){
    var invalidInputs = [
      [15, 11, 15],
      [11, 11, 15],
      [11, 15, 15],
      ['33','33', 15],
      [15, 11, 15]
    ]

    for(var input in invalidInputs) {
      triangle = new Triangle();
      runTest(invalidInputs[input], triangle.type["Isosceles"])
    }
  });

  describe("Detect scalene triangle ", function(){
    var invalidInputs = [
      [13, 11, 15],
      [13, 21, 11]
    ]

    for(var input in invalidInputs) {
      triangle = new Triangle();
      runTest(invalidInputs[input], triangle.type["Scalene"])
    }
  });

  // Main generic, testing function
  function runTest(data, error) {
    it("Triangle [" + data[0] + ", " + data[1] + ", " + data[2] + "] ", function() {
      var t = triangle.defineType(data[0], data[1], data[2]);
      expect(t).toEqual(error)
    });
  }
});
