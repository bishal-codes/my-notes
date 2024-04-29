const isPalindrome = (str) => {
  if (!str) return null;
  if (str.length === 0) return null;
  if (typeof str === "number") {
    str = Math.abs(str).toString();
  }
  if (typeof str !== "string") return null;

  str = str.toLowerCase().trim();

  if (str.includes(" ")) return null;

  if (str.length > 10) return null;
  if (str.length === 1) return true;

  const reversed = str.split("").reverse().join("");
  return str === reversed;
};

module.exports = isPalindrome;
