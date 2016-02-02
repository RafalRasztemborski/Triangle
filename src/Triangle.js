/**
 * Created by rafalrasztemborski on 01/02/16.
 */
function Triangle(){
    // Three types of triangle.
    this.type = {
        Equilateral : "Equilateral",
        Isosceles : "Isosceles",
        Scalene : "Scalene"
    }
    // Exception messages.
    this.exception = {
        INVALID_INPUT : "One or more sides are empty or are not a number",
        NEGATIVE_NUMBER :"One or more sides are <= 0, therefore triangle can't be made.",
        INVALID_TRIANGLE :"Wrong length of a sides. Cannot form proper triangle."
    }
}

/**
 * Determines weather given input types form a type of equilateral, isosceles or scalene triangle.
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {type || exception}
 */
Triangle.prototype.defineType = function(a, b, c) {

    try{
        // Check for invalid inputs
        if((isNaN(a) || a === null || a === "") || (isNaN(b) || b === null || b === "") || (isNaN(c) || c === null || c == "")) {
            throw this.exception["INVALID_INPUT"]
        }
        a = Number(a)
        b = Number(b)
        c = Number(c)
        // Check for proper side lengths
        if(!this.checkProperLength(a, b, c)) {
            throw this.exception["NEGATIVE_NUMBER"]
        }
        // Check if sides follow triangle rule
        if(!this.checkTriangleCondition(a, b, c)) {
           throw this.exception["INVALID_TRIANGLE"]
        }
        // Check if triangle is equilateral
        if(a == b && b == c) {
            return this.type["Equilateral"]
        }
        // Check if triangle is isosceles
        else if(a == b || b == c || c == a) {
            return this.type["Isosceles"]
        }
        // If neither, then is scalene
        else {
            return this.type["Scalene"]
        }
    }catch(error){
        return error
    }
}

/**
 * Checks if given input types follow the rule of forming a triangle.
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {boolean}
 */
Triangle.prototype.checkTriangleCondition = function(a, b, c) {
    if ((a + b > c) && (a + c > b) && (b + c > a))
        return true
    return false
}

/**
 * Checks is any of given triangle sides are <= 0.
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @returns {boolean}
 */
Triangle.prototype.checkProperLength = function(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0)
        return false
    return true
}


