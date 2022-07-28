const fs = require('fs');

//reading file

//fs.readFile('./doc/blog1.txt',(err,data)=>{
   // if(err){
     //   console.log(err);
    //}
    //console.log(data.toString());
//})
//console.log('last line');


//writing in a file

//fs.writeFile('./doc/blog1.txt','mala ray maalem bro',()=>{
   
  //      console.log('file was written');
  
//});

//directories

//if(!fs.existsSync('./assests')){
//fs.mkdir('./assests',(err)=>{
  //  if(err){
      //  console.log(err);
    //}
    //console.log('folder created');
//});
//} else {
  //  fs.rmdir('./assests',(err)=>{
    //    if(err){
      //      console.log(err)
       // }
        //console.log('folder deleted');

    //})
//}

//deleting file 

//if(fs.existsSync('./doc/deleteme.txt')){
  //  fs.unlink('./doc/deleteme.txt',(err)=>{
//if(err){
  //  console.log(err)
//}
//console.log('file deleted');
  //  })
//}