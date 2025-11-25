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
  let result = [];

  for (let i = 0; i < promiseArray.length; i += chunkSize) {
    let chunk = promiseArray.slice(i, i + chunkSize);
    let res = await Promise.allSettled(chunk.map((fn) => fn()));

    res.forEach((item) => {
      if (item.status === "fulfilled") {
        result.push({
          status: "fulfilled",
          value: item.value,
        });
      } else {
        result.push({
          status: "rejected",
          reason: item.reason,
        });
      }
    });
  }

  return result;
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
