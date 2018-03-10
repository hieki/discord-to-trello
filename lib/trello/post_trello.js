module.exports = (trelloClient, trelloIDList, message) => {
  const userName = message.author.username;
  const content = message.content;
  const title = `${userName}: ${content}`;
  console.log(`Send Trello: ${title}`);
  trelloClient.post("/1/cards", {idList: trelloIDList, name: title}, (err, data) => {
    if (err) {
      console.log(`FAILED!: ${err}`);
      return err;
    } else {
      console.log(`SUCCESS!: ${JSON.stringify(data)}`);
      return data;
    }
  });
};
