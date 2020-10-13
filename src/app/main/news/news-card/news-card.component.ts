import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  News;
  a = 0;
  constructor() { }

  ngOnInit(): void {
    this.News = [
      { id: 1, name: 'PRODEUS V2020.09.25', description: 'Prodeus — is a cool, bloody first-person shooter inspired by Doom. Here you will find a sea of enemies, bloodthirsty creatures, blood, and insane carnage.', descriptionFull: 'Prodeus — is a cool, bloody first-person shooter inspired by Doom. Here you will find a sea of enemies, bloodthirsty creatures, blood, and insane carnage. Unfortunately, the developers do not say anything about the plot of the game, but even without this it is clear that the game offers to go into a gloomy and scary environment and fight against numerous enemies that are overflowing with locations. Here, as the main character, you will have to explore spacious corridor locations, fight bloodthirsty monsters, look for keys and develop your skills, and do much, much more. In general, nothing fundamentally new.' },
      { id: 2, name: 'VERNAL EDGE V2020.1.1', description: 'Vernal Edge — is a mix of 2D side-scrolling platformer, metroidvania game, slasher and adventure. Here you will find insane battles, dozens of locations, fierce opponents and much more.', descriptionFull: 'Vernal Edge — is a mix of 2D side-scrolling platformer, metroidvania game, slasher and adventure. Here you will find insane battles, dozens of locations, fierce opponents and much more. The events of the game take place in a huge fantasy world, the plot revolves around the girl who lost her father and now wants revenge. Well, you will just go with her in search of revenge and offenders. To do this, you will have to go to a huge island soaring in the sky, fight there with a huge number of enemies, and more. In general, it will be really interesting.' },
      { id: 3, name: 'BEYOND A STEEL SKY V1.2.27386 PATCH 3', description: 'A bright, action-packed adventure where you play the role of Robert Foster’s disadvantaged dad. According to the plot, a child was stolen from a man, but he does not know where to look and, most importantly, whom.', descriptionFull: 'A bright, action-packed adventure where you play the role of Robert Foster’s disadvantaged dad. According to the plot, a child was stolen from a man, but he does not know where to look and, most importantly, whom. The unhappy father is full of revenge and intends to use all the opportunities that open up to return his beloved baby home. Well, the first clue is there the footprints of the robbers lead to the huge modern metropolis of Union City. It turns out that the town remained the only one on the whole Earth where a more or less stable situation and order remains. In general, a long-term political crisis reigns in the world, which has led to a number of armed clashes and wars. As a result of the latter, a once prosperous civilization was almost completely destroyed.' },
      { id: 4, name: 'LEFT 4 DEAD 2 THE LAST STAND V2.2.0.1 - CHRONOS', description: 'Left 4 Dead 2 — invites you alone or in the company of friends to break through a terrifying zombie invasion.', descriptionFull: 'Left 4 Dead 2 — invites you alone or in the company of friends to break through a terrifying zombie invasion. The atmospheric first-person shooter, which has earned a lot of positive reviews, has received its sequel. Next generation co-op game! Get real pleasure from addictive gameplay. Various locations, but always dangerous and unpredictable. Great visuals, sound effects and mood.' },
    ];
  }

}
