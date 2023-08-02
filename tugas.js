let waktu = [2, 2, 3, 3, 1, 4, 5]
let totalBermain = 0;
let totalWaktu = 0;

for(let i = 0; i < waktu.length; i++){
    totalBermain += waktu[i];

    if(waktu[i] > 2){
        totalWaktu++;
    }
}

console.log(`Total waktu bermain game keseluruhan : ${totalBermain}`, "jam");
console.log(`Total melebihi batas waktu bermain : ${totalWaktu} hari`); 