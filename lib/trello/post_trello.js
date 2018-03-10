module.exports = (trelloClient, trelloIDList, message) => {
  const userName = message.author.username;
  const content = message.content;
  const title = `${userName}: ${content}`;
  console.log(`Send Trello: ${title}`);
  return new Promise((resolve, reject) => {
    trelloClient.post("/1/cards", {idList: trelloIDList, name: title}, (err, data) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(data);
      }
    });
  });
};
