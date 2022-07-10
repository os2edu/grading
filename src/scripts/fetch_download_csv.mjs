import fetch from 'node-fetch'
import { createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util'

const streamPipeline = promisify(pipeline);

fetch("https://classroom.github.com/classrooms/19380377-2022-training-comp-on-open-source-os/assignments/lab0-0-setup-env-run-os1/download_grades", {
  "headers": {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
    "if-none-match": "W/\"91c8c819008d409c96ac22f96ff4029d\"",
    "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": "_octo=GH1.1.980811440.1655977492; logged_in=yes; dotcom_user=july-12; color_mode=%7B%22color_mode%22%3A%22auto%22%2C%22light_theme%22%3A%7B%22name%22%3A%22light%22%2C%22color_mode%22%3A%22light%22%7D%2C%22dark_theme%22%3A%7B%22name%22%3A%22dark_dimmed%22%2C%22color_mode%22%3A%22dark%22%7D%7D; tz=Asia%2FShanghai; preferred_color_mode=light; _github_classroom_session=exejpR%2BWDTupP8l3%2BCUr1XwrdBUtM7NTGI8UhGQUBxNsin2Tu8tTjt2mfyPH302l80%2F7%2BfBY0KKWvIDA5s03BGtb%2F0OXXgZL2u7aUxDp19slpfPXYPiP%2FZWIoVwbAQwGbzhMsx0xk3mgyW%2BfbwuuPskydJW0UVBTrG3XV%2BE8Ou1hFNPC0IIxNyQNRUOSHi74lDTHR6w27r7MxfX70HzaeyhfhfDJxt76wm4AcOuzNycXN6U1KzM%2BOcca9m7n8IOWCxLFcP5gEaLreMfnK44OmRu9vsFYk%2BylbzmwW8ukQfUe9MVfFsjIWQ8numYkwvOU0Ksv6qupSg9VcI9Obyj48QHI8Ezu7mUu05%2B%2BmRpxhCngF9EwS57%2BECdpSbld3m29lJe%2BAqeT2hnsfTJDSariWWRzM409nMXt%2FlUHRCoRSD98jpK381mKm1z13TqCz31hDnwJp3PHUGGC%2BSpFSGzn3zW1JWO42EUaTozD8hWJSnW7--70oVkSTvM5NGI5Py--J%2Bg2Fv8Gk0NQusz5n3GcZA%3D%3D"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET"
}).then(async function (response) {
  // console.log(response)
  await streamPipeline(response.body, createWriteStream('./src/scripts/assignments/1.csv'));
});

