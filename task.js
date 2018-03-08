function transform(input) {
    var output;
    output = "";
    // TODO: Write your code here
    if (!input) {
        output = "[]";
    } else {
        var stringLen;
        stringLen = input.length;

        if(stringLen > 1){
            output = '[';
            var stringArray = input.split("");
            var totalCharas = stringArray.length;

            for(var i = 0; i < totalCharas; i++){
                if(stringArray[i] == '(')
                    output += (output != "[") ? ' [' : "";
                else if(stringArray[i] == " ")
                    if(stringArray[i-1] == "(" || stringArray[i+1] == ")")
                       continue;
                   else
                    output += ", ";
                else if(stringArray[i] == ')')
                    output += ']';
                else
                    output += '"'+stringArray[i]+'"';
            }

            var outputArray = output.split("");
            var lenOutput = outputArray.length;

            output += (outputArray[lenOutput-1] != ']') ? ']' : "";
            output += (output.split("[").length != output.split("]").length) ? "]" : "";
        }
        else{
            $output = '["'+input+'"]';
        }

    }
    return output;
}
