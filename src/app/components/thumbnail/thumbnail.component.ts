import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input()
  public source: string; // Image source.

  @Input('side')
  public length: number; // Width/Height.

  // EventEmitter<> is an object which can report an event.
  // EventEmitter<string> sends one string in the event.

  @Output()
  public enter: EventEmitter<string> = new EventEmitter();

  @Output('exit')
  public leave: EventEmitter<string> = new EventEmitter();

  public mouseenter(): void {
    // Raising an event which gets the image source:
    this.enter.emit(this.source);
  }

  public mouseleave(): void {
    // Raising an event which gets the image source:
    this.leave.emit(this.source);
  }
}
