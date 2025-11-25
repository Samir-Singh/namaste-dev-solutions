// Scenario is suppose you have to call 100 api's at one time so instead of calling all at the same time we can batch the promises by calling only 5 or 10 promises at a time

async function asyncFunction(status, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("Promise Resolved");
      } else {
        reject("Promise Rejected");
      }
    }, timer);
  });
}

async function batchApiCalls(apiCalls, chunkSize = 2) {
  let ans = [];
  for (let i = 0; i < apiCalls.length; i += chunkSize) {
    chunk = apiCalls.splice(0, chunkSize);

    const response = await Promise.allSettled(chunk.map((fn) => fn()));

    response.forEach((res) => {
      if (res.status === "fulfilled") {
        ans.push(res.value);
      } else {
        ans.push(res.reason);
      }
    });
  }
  return ans;
}

const apiCalls = [
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
  () => asyncFunction(true, 1000),
];

batchApiCalls(apiCalls, 3).then((res) => {
  console.log("All Api's settled");
  console.log(res);
});
