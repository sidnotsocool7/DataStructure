/**
 * Problem - Use stack to convert a anumber from one base to another base.
 * Algorithm - Given a number n which we want to convert to another base b
 *             1. The rightmost digit of n is is n % b. Push this digit onto the stack.
 *             2. Replace n with n / b.
 *             3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
 *             4. Build the converted number string by popping the stack until the stack is empty.
 * This algorithm will work only with bases 2 through 9.
 * */

function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    num = Math.floor((num /= base));
  } while (num > 0);
  var converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}
