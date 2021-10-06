import React from "react";

// hooks
function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    //estado de la aplicacion
    const [item,setItem] = React.useState(initialValue);
  
  
    React.useEffect(() => {
      setTimeout(() => {
  
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          // validar en local storage
          if (!localStorageItem){
            parsedItem = initialValue;
            localStorage.setItem(itemName,JSON.stringify(parsedItem));
            
          }else{
            parsedItem = JSON.parse(localStorageItem)
  
          }
  
          setItem(parsedItem)
          setLoading(false);
        } catch(error){
          setError(error)
        }
  
      }, 2000);
    });
  
  
  
    //Guardar en localStorage
    const saveItem = (newItem) => {
      try{
        localStorage.setItem(itemName,JSON.stringify(newItem))
        setItem(newItem)
      } catch(e){
        setError(e)
      }
      
    }
  
    return {
        item,
        saveItem,
        loading,
        error
      };
  
  }

  export {useLocalStorage}