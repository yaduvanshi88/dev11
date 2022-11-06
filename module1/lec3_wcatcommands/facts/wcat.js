const fs=require("fs");
let data=fs.readFileSync("./f1.txt","utf8");
console.log(data);
function applysflag(data)
{
    let spaceincluded=false;
    let removedspace=[];
    let splitdata=data.split("\r\n");
    console.log(splitdata);
    for(let i=0;i<splitdata.length;i++)
    {
        if(splitdata[i]==""&&spaceincluded==false)
        {
          
            removedspace.push(splitdata[i]);
            spaceincluded=true;

        }else if(splitdata[i]!="")
        {
            removedspace.push(splitdata[i]);
            spaceincluded=false;

        }
     

    }
    let ans=removedspace.join("\r\n");
    return ans;


}
let a=applysflag(data);
console.log(a);


function applybflag(data)
   { //let spaceincluded=false;
    //let removedspace=[];
    let splitdata=data.split("\r\n");
    let count=1;
    //console.log(splitdata);
    for(let i=0;i<splitdata.length;i++)
    { if(splitdata[i]!="")
        {
            splitdata[i]=`${count}.${splitdata[i]}`;
            count++;

        }
       
     

    }
    let ans=splitdata.join("\r\n");
        return ans;
}
let b=applybflag(data);
console.log(b);
function applynflag(data)
   { //let spaceincluded=false;
    //let removedspace=[];
    let splitdata=data.split("\n");
    let count=1;
    //console.log(splitdata);
    for(let i=0;i<splitdata.length;i++)
    { 
        
            splitdata[i]=`${count}.${splitdata[i]}`;
            count++;

        
       
     

    }
    let ans=splitdata.join("\n");
        return ans;
}
let n=applynflag(data);
console.log(n);


