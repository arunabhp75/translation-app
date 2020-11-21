import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variable = "Nothing";
  title = 'Simple Translate';
  doSomething(val){
    document.getElementById("lblName").innerHTML = val;
    //console.log("Hello World");
    var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="
              + (<HTMLInputElement>document.getElementById("sl")).value + "&tl=" + (<HTMLInputElement>document.getElementById("tl")).value + "&dt=t&q=" + encodeURI(val);
    //console.log(url);
    fetch(url,{method: 'POST'})
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      //console.log(data[0][0][0]);
      document.getElementById("lblName").innerHTML = data[0][0][0];
    })
    .catch(error => console.log('Error'));
    //console.log(res);

    /*
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    console.log(xhr.send());
    */
  }
}
