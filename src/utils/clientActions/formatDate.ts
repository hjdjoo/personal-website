

// JS date takes care of parsing from human to machine format, so just focuses on converting yyyy-mm-dd format to mm-dd-yyyy US format.
export default function formatDate(date: string) {

  const newDate = date.replace(/[T].*/, "");

  const dateArr = newDate.split("-");

  [dateArr[0], dateArr[1], dateArr[2]] = [dateArr[1], dateArr[2], dateArr[0]];

  return dateArr.join("/").replace(/^0/, "");

}