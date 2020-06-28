function convertToRoman(num) {
  let numObj = {
    0: "",
    1: "p",
    2: "pp",
    3: "ppp",
    4: "pq",
    5: "q",
    6: "qp",
    7: "qpp",
    8: "qppp",
    9: "pr"
  };
  let romArr = [
    {p: "I", q: "V", r: "X"},
    {p: "X", q: "L", r: "C"},
    {p: "C", q: "D", r: "M"},
    {p: "M"}
  ];
  if (Number.isInteger(num) && num > 0 && num < 4000) {
    return num
    .toString()
    .split("")
    .reverse()
    .map(function(str, index) {
      return numObj[str].split("").map(s => romArr[index][s]);
    })
    .reverse()
    .join()
    .replace(/,/g, "");
  };
};
