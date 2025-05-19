
// Firstly, we set the new vars
const msgInputOne = document.querySelector('.msgInputOne');
const msgCounterOne = document.querySelector('.msgCounterOne');

const msgInputTwo = document.querySelector('.msgInputTwo');
const msgCounterTwo = document.querySelector('.msgCounterTwo');



// ensure character counting
/*
*
* func:    ensure that the message content has (or hasn't) a max lenght characters
* params:  
*          content -> The message from input
*          maxValue -> The max lenght set @ maxValue const
* 
* Return:    True or False
*/ 
const getCurrentContentLength = (content, maxValue) => {
    
    const maxLength = maxValue;

    if (content.length > maxLength) {
        return false;
    } else {
        return true;
    }
}


// event listeners watch for keyUp -> Pressing key, when finished typing
// But, NOW, we set a "global" function which can wrap any pair of "textInput + it's counter"
/*
* 
*   Func:       allInputsFieldLengthValidator
*   @params:    textField - counter - maxCount
* 
*   Invokation func( .msgInput, .msgCounter, numerical limit value)
*        
*/ 

const allInputsFieldLengthValidator = ( textField, counter, maxCount ) => {

    textField.onkeyup = function () {
    
        console.log(this.value)
        
        counter.innerHTML = maxCount - this.value.length;
        
        if ( !getCurrentContentLength ( this.value, (maxCount - 1) )) {

            textField.disabled = true;
        
        }
    }     

}


allInputsFieldLengthValidator(msgInputOne, msgCounterOne, 144);
allInputsFieldLengthValidator(msgInputTwo, msgCounterTwo, 20)
