const calculate = (a,b,p) => {
    if (!a || !b || !p){
        return "Please provide all parameter";
    }
    switch (p){
        case '+' :{
            return a+b;
            break;
        }
        case '-' :{
            return a-b;
            break;
        }
        case '*' :{
            return a*b;
            break;
        }
        case '/' :{
            return a/b;
            break;
        }
        default : {
            return null;
            break;
        }
    }
}
exports.calculate = calculate;