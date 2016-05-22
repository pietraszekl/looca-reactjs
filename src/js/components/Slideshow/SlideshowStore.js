import {EventEmitter} from "events";
import dispatcher from "../../dispatcher";

class SlideshowStore extends EventEmitter{
  constructor(){
    super();
    this.currentSlide = 0;
    this.slides = [];
  }
  getAll(slides){
    this.slides = slides;
    return this.slides;
  }
  nextSlide(){
    var current = this.currentSlide;
    var next = current + 1;
    if (next > this.slides.length - 1) {
      next = 0;
    }
    this.currentSlide = next;
    this.emit("change");
  }
  prevSlide(){
    var current = this.currentSlide;
    var prev = current - 1;
    if (prev < 0) {
      prev = this.slides.length - 1;
    }
    this.currentSlide = prev;
    this.emit("change");
  }
  toggleSlide(id){
    var index = this.slides.map(function(el) {
      return (
        el.id
      );
    });
    var currentIndex = index.indexOf(id);
    this.currentSlide = currentIndex;
    this.emit("change");
  }
  handleActions(action){
    switch (action.type) {
      case "NEXT_SLIDE":
      this.nextSlide()
      break;
      case "PREV_SLIDE":
      this.prevSlide()
      break;
      case "TOGGLE_SLIDE":
      this.toggleSlide(action.source)
      break;
      case "AUTO_ROTATE":
      this.nextSlide()
      break; 
    }
  }
}

const slideshowStore = new SlideshowStore;
dispatcher.register(slideshowStore.handleActions.bind(slideshowStore));

export default slideshowStore;
