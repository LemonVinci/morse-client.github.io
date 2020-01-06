import { Component, OnInit } from '@angular/core';
import { morseService } from '../shared';


@Component({
  selector: 'app-morse-list',
  templateUrl: './morse-list.component.html',
  styleUrls: ['./morse-list.component.css'],
  providers: [morseService]
})
export class morseListComponent implements OnInit {
  morses: Array<any>;
  bin: any = "";
  interval;
  endOfInput: any = 0;
  isPressed:number = 0;
  speed:number = 300;
  
  constructor(private morseService: morseService) { }
  
  ngOnInit() {
    
  }

  requestMorseResult(binarycode:string) {
    this.morseService.getAllMorse(binarycode).subscribe(
      data => {
        this.morses = data;
       },
      error => console.log(error)
    )
  }

  playAudio(){
  let audio = new Audio();
  audio.src = "../../assets/beep.wav";
  audio.load();
  audio.play();
}


  observerTimer() {
          
          if(this.isPressed>0)
            this.isPressed=-1;
          
          if(this.endOfInput>12) this.bin = "";
          this.endOfInput=0;
          clearInterval(this.interval);
       
          this.interval = setInterval(() => {
            this.bin = this.bin + this.isPressed.toString();
            this.endOfInput++;
            if(this.isPressed.toString() == '1') this.playAudio();
            
            if(this.endOfInput>12){
                clearInterval(this.interval);
                 this.requestMorseResult(this.bin);
                 this.bin = this.bin + "fin";
            }  
          },this.speed)
    }
 
}
