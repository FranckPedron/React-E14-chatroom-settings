import {useEffect} from "react";

export function useSound(sound, ...dependencies) {
  useEffect(() => {
    const audio = new Audio(sound);
    audio.play();
  }, [...dependencies]);
}
