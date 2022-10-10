
//валидатор на ввод какогото значения 

export const requered = value => {
    if(value) return undefined
    return 'Field is required'
}


//валидатор на максимальное значение длины ввода 
export const maxLengthCreator = maxLength => (value) => (value && value.length > maxLength)
        ? `Max length is ${maxLength} symbols`
        : undefined
    
   

