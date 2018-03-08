<?php

function transform ($input) {
    $output = '';
    // TODO: Write your code here
    if(!$input){
    	$output = "[]";
    }
    else{
    	$stringLen = strlen($input);
    	if($stringLen > 1){

    		$output = '[';
    		$stringArray = str_split($input);
    		$totalCharas = count($stringArray);
    		
    		for($i = 0; $i < $totalCharas; $i++){
    			if($stringArray[$i] == '(')
    				$output .= ($output != "[") ? ' [' : "";
    			else if($stringArray[$i] == " ")
                    if($stringArray[$i-1] == "(" || $stringArray[$i+1] == ")")
                       continue;
                   else
                    $output .= ", ";
    			else if($stringArray[$i] == ')')
    				$output .= ']';
    			else if(ctype_alnum($stringArray[$i]))
    				$output .= '"'.$stringArray[$i].'"';
    		}

    		$outputArray = str_split($output);
    		$lenOutput = count($outputArray);

    		$output .= ($outputArray[$lenOutput-1] != ']') ? ']' : "";
    		$output .= (substr_count($output, '[') != substr_count($output, ']')) ? "]" : "";
    	}
    	else{
    		$output = '["'.$input.'"]';
    	}
    }
    return $output;
}
