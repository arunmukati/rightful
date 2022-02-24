import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rightful-task';
  stringInput = '';
  stringInput1='';
  stringInput2='';
  jsonObject1: any ;
  jsonObject2: any;
  constructor(private clipBoard:Clipboard,private snackbar: MatSnackBar){

  }

  stringProperties() {
    if(!this.stringInput.length){
      return this.showSnackBar("Input Can't be left empty");
    }
    this.jsonObject1 = {
      wordsCount: null,
      noOfUniqueWords: null,
      wordsDetails: []
    };
    let stringArray = this.stringInput.split(' ');
    this.jsonObject1.wordsCount = stringArray.length;
    let uniqueWords = this.findUniqueElements(stringArray);
    this.jsonObject1.noOfUniqueWords = uniqueWords.size;
    uniqueWords.forEach((word: any) => {
      let wordDetails = this.findWordDetails(word)
      this.jsonObject1.wordsDetails.push(wordDetails)
    })
  }
  findUniqueElements(ele: Array<any>) {
    let set = new Set();
    ele.forEach((el: any) => {
      set.add(el);
    })
    return set;
  }
  findWordDetails(ele:String){
    let wordLetters = ele.split('');
    let wordSummery:any={};
    let uniqueCharCount=0;
    wordLetters.forEach((letter:any)=>{
      if(wordSummery.hasOwnProperty(`${letter}`)){
        wordSummery[`${letter}`] +=1;
      }
      else{
        wordSummery[`${letter}`] =1; 
        uniqueCharCount+=1;
      }
    });
    return {
      word: ele,
      charCount: wordLetters.length,
      uniqueCharCount: uniqueCharCount,
      summary: wordSummery
    }
  }
  compareProperties(){
    if(!this.stringInput1.length || !this.stringInput2.length){
      return this.showSnackBar("Both input required*");
    }
    let input1=this.stringInput1.split(',');
    let input2 = this.stringInput2.split(',');
    let uniqueElementInput1 = this.findUniqueElements(input1);
    let uniqueElementInput2 = this.findUniqueElements(input2);
    this.jsonObject2 = {
      input1: {
        length: input1.length,
        uniqueElements: uniqueElementInput1.size
      },
      input2: {
        length: input2.length,
        uniqueElements: uniqueElementInput2.size
      },
      commonElements: this.findCommonElements([...uniqueElementInput1],[...uniqueElementInput2])
    };
  }
  findCommonElements(input1:Array<any>,input2: Array<any>){
    let commonElements;
      if(input1.length<input2.length){
          commonElements = input1.filter(el=> input2.includes(el));
      }
      else{
        commonElements = input2.filter(el=> input1.includes(el));
      }
      return{
        uniqueCommonCount: commonElements.length,
        uniqueCommonElements: commonElements
      }
  }
  copy(object:any){
    this.clipBoard.copy(JSON.stringify(object));
    this.showSnackBar("Copied!")
  }
  showSnackBar(msg:string){
    this.snackbar.open(msg,"", {
      duration: 3000
    });
  }
}
