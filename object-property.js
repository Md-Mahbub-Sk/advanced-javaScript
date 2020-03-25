const student = [
    {id:12 ,name:"mahbub", roll:12 },
    {id:48 ,name:"mahfuz", roll:12 },
    {id:68,name:"anas" ,roll:12 },
    {id:12 ,name:"hasan", roll:12}
    
]
const name = [];
for (var i = 0; i<student.length; i++){
    var element = student[i].name;
    name.push(element);
}
console.log(name);

// another way to get names and ids.. this is possible by map .



var students  = student.map(sNames => sNames.name); // function sName (sName){sName.name};
var studentsIds = student.map(sIds =>sIds.id);
var studentsRoll = student.map(sRoll =>sRoll.roll);
console.log(studentsIds);
console.log(studentsRoll);
console.log(students);





var bigger = student.filter(function idsBigger (idsBigger){
    var idsBiggerThan = idsBigger.id>40;
    return idsBiggerThan;
})
// console.log(bigger);
 bigger = student.filter(sIds =>sIds.id>40);
 console.log(bigger);


 biggerOne = student.find(sIds =>sIds.id>40);// find means get first one element .. filter and find are not same they have two    different, Number 1 is filter get all elements when its condition is true or find get just start element just get one.. this is very simple.. don't use bangla because it is not readable ...
 console.log(biggerOne);


