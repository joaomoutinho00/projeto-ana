import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musicas',
  templateUrl: './musicas.component.html',
  styleUrls: ['./musicas.component.css']
})
export class MusicasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  playAudio() {
    let audio = new Audio();
    audio.src = "assets/audio/amar.m4a";
    audio.load();
    audio.play();

  }

  playAudio2() {
    let audio = new Audio();
    audio.src = "assets/audio/bil.m4a";
    audio.load();
    audio.play();

  }

  playAudio3() {
    let audio = new Audio();
    audio.src = "assets/audio/eu-sei.m4a";
    audio.load();
    audio.play();

  }

  playAudio4() {
    let audio = new Audio();
    audio.src = "assets/audio/hist.m4a";
    audio.load();
    audio.play();

  }

  playAudio5() {
    let audio = new Audio();
    audio.src = "assets/audio/palacios-castelos.m4a";
    audio.load();
    audio.play();

  }
  playAudio6() {
    let audio = new Audio();
    audio.src = "assets/audio/restrt.m4a";
    audio.load();
    audio.play();

  }
  playAudio7() {
    let audio = new Audio();
    audio.src = "assets/audio/rede.m4a";
    audio.load();
    audio.play();

  }
  playAudio8() {
    let audio = new Audio();
    audio.src = "assets/audio/um-bj.m4a";
    audio.load();
    audio.play();

  }
  playAudio9() {
    let audio = new Audio();
    audio.src = "assets/audio/me-odeio.m4a";
    audio.load();
    audio.play();

  }
  playAudio10() {
    let audio = new Audio();
    audio.src = "assets/audio/razoes.m4a";
    audio.load();
    audio.play();

  }
  playAudio11() {
    let audio = new Audio();
    audio.src = "assets/audio/fada.m4a";
    audio.load();
    audio.play();

  }
}
