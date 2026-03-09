import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];
  searchText: string = '';
  statusFilter: string = 'all';

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data:any) => {
      this.characters = data.results;
    });
  }

  searchCharacter(): void {
    this.characterService
      .searchCharacters(this.searchText, this.statusFilter)
      .subscribe((data:any) => {
        this.characters = data.results;
      });
  }

}