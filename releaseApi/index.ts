import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/plugins', (req: Request, res: Response) => {
  res.json({
    base: "https://raw.githubusercontent.com/theSoberSobber/AlertBot-Plugins/main/plugins",
    // nah download from releases
    plugins: [
      {
        name: "abcd.zip",
        sha256: "yufvbgihnoj"
      }
      // this array is sorted on basis of plugins.name
    ]
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// JSON FOR PLUGINS?
//
// {
//   base: "https://raw.githubusercontent.com/theSoberSobber/AlertBot-Plugins/main/plugins",
//   plugins: [
//     {
//       name: "abcd.zip",
//       sha256: "yufvbgihnoj"
//     }
//     // this array is sorted on basis of plugins.name
//   ]
// }
// 
// OR
//
// {
//   base: "https://raw.githubusercontent.com/theSoberSobber/AlertBot-Plugins/main/plugins",
//   plugins: {
//     sortedKeyName: {
//       name: "sortedKeyName",
//       fileTree: [
//         [
//           "parsers", [
//             "parser1", "parser2", "parser3"
//           ]
//         ],
//         "getUpdates.js",
//         "map.js",
//         "updateHandler.js"
//       ]
//     }
//   }
// }