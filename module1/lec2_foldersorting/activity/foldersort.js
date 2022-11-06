let fs=require("fs");
let extensionmapping=require("./util.js");
console.log(extensionmapping);
let testfolder="F:\downloads";
let allfiles=fs.readdirSync(testfolder);
console.log(allfiles);
for(let i=0;i<allfiles.length;i++)
{
    sortfile(allfiles[i]);
}
function checkextensionfolder(extension)
{
    let extensionfoldername=testfolder;
    for(let key in extensionmapping)
    {
        let extensions=extensionmapping[key];
        if(extensions.includes(extension))
        {
            extensionfoldername=extensionfoldername+"/"+key;
            break;
        }
    }
    let isfolderexist=fs.existsSync(extensionfoldername);
    if(!isfolderexist)
    {
        fs.mkdirSync(extensionfoldername);
    }
    return extensionfoldername;


}

function getextension(file)
{
    file=file.split(".");
    return file[1];
    
}

function sortfile(file)
{
     let extension=getextension(file);
     let foldername=checkextensionfolder(extension);
     movefile(file,foldername);
}
function movefile(file,foldername)
{
    let sourcefile=testfolder+"/"+file;
    let destinationfile=foldername+"/"+file;
    fs.copyFileSync(sourcefile,destinationfile);
    fs.unlinkSync(sourcefile);

}


