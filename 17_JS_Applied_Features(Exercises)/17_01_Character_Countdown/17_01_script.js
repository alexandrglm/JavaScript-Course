
const msgInput = document.querySelector('.msgInput');
const msgCounter = document.querySelector('.msgCounter');
const maxValue = 144;


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
/*
* .onkeyup() event listener
*
* Func:
*        msgCounter.innerHTML = maxValue MINUS the predefined maxValue as length
* 
* 
* Scope: this needs its own scope so arrow functions it's not elegible
*/ 
msgInput.onkeyup = function () {

    console.log(this.value)
    
    msgCounter.innerHTML = maxValue -this.value.length

    /*
        * 
        *  Then, if ensure content length cannot be ensured ,
        *  text input will be disabled.
        */
    
    if ( !getCurrentContentLength( this.value, ( maxValue -1) )) {

        msgInput.disabled = true;
    
    }
}
