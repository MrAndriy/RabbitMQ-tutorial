#!/usr/bin/env node

const amqp = require('amqplib/callback_api');

//To send, we must declare a queue for us to send to; then we can publish a message to the queue:
amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }

  //Next we create a channel, which is where most of the API for getting things done resides:
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    const queue = 'task_queue';

    let msg = process.argv.slice(2).join(' ') || 'Hello World!';

    channel.assertQueue(queue, {
      durable: true,
    });

    channel.sendToQueue(queue, Buffer.from(msg), {
      persistent: true,
    });

    console.log(' [x] Sent %s', msg);
  });

  setTimeout(function () {
    connection.close();
    process.exit(0);
  }, 500);
});
