export const convertDate = (number)=>{
    var myDate = new Date(number);
    return myDate.getDate() + "/" + (myDate.getMonth()+1) ; //bcoz january at 0 index and feb is 1 and so on we need to add 1 in month
}