import net from "node:net";

export const ping = () => {
  const starTime = process.hrtime();
  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    return { time: process.hrtime(starTime), ip };
  });

  client.on("error", (error) => {
    throw error;
    client.end();
  });

};

ping("midu.dev", (err, info) => {
    if (err) console.log(err);
    console.log(info);
  });