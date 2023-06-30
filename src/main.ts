import './style.css'
import { SHA256 } from 'crypto-js'
import  stringify   from 'json-stable-stringify'


export   function calcHash(jsonDocumentation: string, ignoraCaps: boolean) : string{
  try {
    var documentationUnordered = JSON.parse(jsonDocumentation);

    var toHash: string = stringify(documentationUnordered);

    if(ignoraCaps) 
      toHash = toHash.toLowerCase();

    return SHA256(toHash).toString();
 
  } catch (error: any) {
    return error.toString();
  }
}



document.getElementById("btnCalcHash")!.addEventListener("click", function(){
  var jsonDocumentation: string = (document.getElementById('txtInput') as HTMLInputElement).value;
  var ignoraCaps: boolean = (document.getElementById('checkIgnoraCaps') as HTMLInputElement).checked;
  (document.getElementById('txtOutput') as HTMLInputElement).innerHTML = calcHash(jsonDocumentation, ignoraCaps);
});