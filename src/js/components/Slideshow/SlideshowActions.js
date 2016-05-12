import dispatcher from "../../dispatcher";

export function nextSlide(){
  dispatcher.dispatch({
    type: "NEXT_SLIDE"
  });
}

export function prevSlide(){
  dispatcher.dispatch({
    type: "PREV_SLIDE"
  });
}
