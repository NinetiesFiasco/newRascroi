  
export const requiredField = value => {

  return value && value.length>0
    ? undefined
    : "Поле обязательно";
}
