const values = {
  "PENNY": 1, "NICKEL": 5, "DIME": 10,
  "QUARTER": 25, "ONE": 100, "FIVE": 500,
  "TEN": 1000, "TWENTY": 2000, "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  let original = [];
  for (let v of cid) {
    original.push([...v])
  }
  cid = cid.reverse();
  let solution = [];
  cash -= price;
  cash *= 100;
  for (let v of cid) {
    let base_value = values[v[0]];
    if (base_value <= cash) {
      let value_needed = Math.floor(cash/base_value);
      let real_value = Math.floor(v[1] * 100/base_value);
      let takeaway = Math.min(value_needed, real_value) * base_value;
      if (takeaway) {
        cash -= takeaway;
        v[1] -= takeaway/100;
        solution.push([v[0], takeaway/100]);
      }
    }
  }
  if (cash === 0) {
    let still_open = !(cid.every(v => v[1] === 0));
    if (still_open) {
      return {status: "OPEN", change: solution}
    } else {
      return {status: "CLOSED", change: original}
    }
  } else {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
}
