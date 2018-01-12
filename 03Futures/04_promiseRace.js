Promise.race([
    Promise.resolve("Done."),
    new Promise((res) => setTimeout(res, 10000, 1))
  ])
  .then(console.log)
