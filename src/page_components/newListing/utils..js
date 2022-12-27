import { v1 } from "uuid";

export const changeFileName = file => {
  const extension = file.name.split(".")[file.name.split(".").length - 1];
  var blob = file.slice(0, file.size, file.type);
  return new File([blob], v1() + `.${extension}`, { type: file.type });
}