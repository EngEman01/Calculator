function insert(num){
    event.preventDefault();
    var myString = document.form.textView.value
    // var lastChar = myString[myString.length-1]
    // if(myString.length < 30){
    //     if(!isNaN(lastChar) || lastChar==null || isNaN(num)){
            document.form.textView.value = myString + num
    //     }
    //     else if(num != lastChar){
    //         document.form.textView.value = myString.replace(lastChar , null)
    //     }
    // }
}

function equal(){
    event.preventDefault();
    var sum = document.form.textView.value
    if(sum){
        document.form.textView.value = eval(sum)
    }
}

function clean(){
    // event.preventDefault();
    document.form.textView.value=''
}

function back(){
    event.preventDefault();
    var number = document.form.textView.value
    document.form.textView.value = number.substring(0,number.length-1)
}