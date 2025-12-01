// Question: https://namastedev.com/practice/get-result-by-path

function getResultByPath(path, obj) {
  //write your implementation here
  path = path.replaceAll("[", ".").replaceAll("]", "").split(".");

  let ans = obj;

  for (let i = 0; i < path.length; i++) {
    if (!ans) return ans;
    ans = ans[path[i]];
  }

  return ans;
}

const path = "data.results[1].status[0].type.done";
const obj = {
  data: {
    results: [
      {
        status: "completed",
        error: "",
      },
      {
        status: [{ type: "done" }, { type: "start" }],
        error: "",
      },
    ],
  },
};
getResultByPath(path, obj);
module.exports = getResultByPath;
