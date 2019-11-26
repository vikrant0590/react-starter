export const amount = value => {
  if (value.length === 1 && value[0] === ".") {
    value = "0.";
  }
  return value.replace(/[^0-9\.]/g, "");
};

export const amountWithdrawCheckCrypto = (value, previousValue, allValues) => {
  if (value.length === 1 && value[0] === ".") {
    value = "0.";
  }
  value.replace(/[^0-9\.]/g, "");
  if (!(value.indexOf(".") == -1)) {
    if ((value.toString().split(".")[1].length || 0) > 8) {
      return previousValue;
    } else {
      return value;
    }
  }
  return value;
};

export const amountWithdrawCheckUsd = (value, previousValue, allValues) => {
  if (value.length === 1 && value[0] === ".") {
    value = "0.";
  }
  value.replace(/[^0-9\.]/g, "");
  if (!(value.indexOf(".") == -1)) {
    if ((value.toString().split(".")[1].length || 0) > 3) {
      return previousValue;
    } else {
      return value;
    }
  }
  return value;
};
