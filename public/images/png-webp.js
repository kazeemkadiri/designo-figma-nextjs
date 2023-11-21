import { exec } from "node:child_process";

exec("cwebp -q 90 -lossless card-one-mobile.png -o card-one-mobile.webp");

exec("cwebp -q 90 -lossless card-two-mobile.png -o card-two-mobile.webp");

exec("cwebp -q 90 -lossless card-three-mobile.png -o card-three-mobile.webp");

exec("cwebp -q 90 -lossless card-four-mobile.png -o card-four-mobile.webp");

exec("cwebp -q 90 -lossless card-five-mobile.png -o card-five-mobile.webp");

exec("cwebp -q 90 -lossless card-six-mobile.png -o card-six-mobile.webp");

//exec("cwebp -q 70 -lossless section-two-desktop.jpg -o section-two-desktop.webp");

//exec("cwebp -q 70 -lossless single-oval-text-bg.png -o single-oval-text-bg.webp");

console.log("Done...");
