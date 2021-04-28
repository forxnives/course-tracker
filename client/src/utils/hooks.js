import React, {useEffect, useRef} from 'react'

export function useLocalStorageState (key, defaultValue=''){

    const [state, setState] = React.useState(() => window.localStorage.getItem(key) || defaultValue)

    React.useEffect(() => {
      window.localStorage.setItem(key, state)
    }, [state, key])
    
    return [state, setState]
  }



  function useOutsideAlerter(ref, toggle) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                toggle(false);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}



export function OutsideAlerter(props) {
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, props.setDropDownToggle);

  return <div ref={wrapperRef}>{props.children}</div>;
}





//   export {useLocalStorageState}