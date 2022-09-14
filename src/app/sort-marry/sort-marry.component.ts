import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sort-marry',
  templateUrl: './sort-marry.component.html',
  styleUrls: ['./sort-marry.component.scss']
})
export class SortMarryComponent implements OnInit {
  public title: string = "Sort Marry Generator";
  public haremList: string = "";
  public sortMarryList: string = "";
  public discordNitroUser: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  public ParseHaremList()
  {
    //take harem list, ignore everything between | and new line character
    //put every character into a list of objects, not string
    //have that list be publically available for a ui component to be able to sort/drag and drop.
  }

  public GenerateSortMarryString()
  {
    //turn the list of objects into a string following mudae structure $sm name$name2$name3
    //if discordNitro box is not checked, split the string into multiple commands using mudae structure $sm $lastNameInPrevious$nextName$etc
    //expose these strings publically so they can be displayed in the UI.
  }
}
