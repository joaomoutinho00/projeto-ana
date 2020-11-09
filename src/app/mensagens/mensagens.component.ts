import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ''
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "assets/audio/Vestibular.m4a";
    audio.load();
    audio.play();

  }

  playAudio2() {
    let audio = new Audio();
    audio.src = "assets/audio/Desanimo.m4a";
    audio.load();
    audio.play();

  }

  playAudio3() {
    let audio = new Audio();
    audio.src = "assets/audio/Dia-Ruim.m4a";
    audio.load();
    audio.play();

  }

  playAudio4() {
    let audio = new Audio();
    audio.src = "assets/audio/Saudade.m4a";
    audio.load();
    audio.play();

  }

  playAudio5() {
    let audio = new Audio();
    audio.src = "assets/audio/Te amo-bbzinho.m4a";
    audio.load();
    audio.play();

  }
  playAudio6() {
    let audio = new Audio();
    audio.src = "assets/audio/Vontade.m4a";
    audio.load();
    audio.play();

  }
  playAudio7() {
    let audio = new Audio();
    audio.src = "assets/audio/Tristinha.m4a";
    audio.load();
    audio.play();

  }
  playAudio8() {
    let audio = new Audio();
    audio.src = "assets/audio/Baixa autoestima.m4a";
    audio.load();
    audio.play();

  }
  playAudio9() {
    let audio = new Audio();
    audio.src = "assets/audio/Conquista.m4a";
    audio.load();
    audio.play();

  }
  playAudio10() {
    let audio = new Audio();
    audio.src = "assets/audio/Treino.m4a";
    audio.load();
    audio.play();

  }
  playAudio11() {
    let audio = new Audio();
    audio.src = "assets/audio/Morte.m4a";
    audio.load();
    audio.play();

  }
}
