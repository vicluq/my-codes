const notifier = require("node-notifier");

notifier.notify(
  {
    message: "This is node notifier",
    open: "https://www.npmjs.com/package/node-notifier",
    sound: true,
  },
  (err, resp) => {}
);
