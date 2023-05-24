let vidarr = document.querySelectorAll(".style-scope  ytd-thumbnail-overlay-time-status-renderer>span");
let k = vidarr.length;
let counts = 0;
let countm = 0;
let counth = 0;
let str = "";
for(let i=0;i<k;i++){
    let s = vidarr[i].innerText;
    let sm = "";
    let ss = "";
    for(j=0;j<s.length;j++){
        if(s[j]==':'){
            break;
        }
        else{
            sm = sm + s[j];
        }
    }
    countm = countm + Number(sm);
    for(j=s.length-1;j>=0;j--){
        if(s[j]==':'){
            break;
        }
        else{
            ss = ss + s[j];
        }
    }
    counts = counts + Number(ss);
}
console.log(countm);
console.log(counts);
let extram=0;
while(counts>=60){
    extram = Math.floor(counts/60);
    counts = Math.floor(counts/60);
}
countm = countm+extram;
let extrah=0;
while(countm>=60){
    extrah = Math.floor(countm/60);
    countm = Math.floor(countm/60);
}
counth = counth + extrah;
console.log(counth+":"+countm+":"+counts);
