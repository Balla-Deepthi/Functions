console.log("Question-1")
function sayHello()
{
    console.log("Hello, World!")
}
sayHello();
console.log("Question-2")
function displayWarning()
{
    console.log("Warning! System overload!")
}
displayWarning();
console.log("Question-3")
function printStatus()
{
    console.log("System Status: Active")
}
printStatus();
console.log("Question-4")
function initialize()
{
    console.log("Initialization Complete")
    shutdown();
}
function shutdown()
{
    console.log("System Shutting Down...")
}
initialize();
console.log("Question-5")
function startProcess()
{
    console.log("Process Started")
    endProcess()
}
function endProcess()
{
    console.log("Process Ended")
}
startProcess()
console.log("Question-6")
function greetUser(name)
{
    console.log(`Hello, ${name}`)
}
greetUser("Deepthi")
greetUser("Deepak")
console.log("Question-7")
function calculateSum(a,b)
{
    console.log(`Sum:${a+b}`)
}
calculateSum(2,3)
calculateSum(6,4)
calculateSum(2,4)
console.log("Question-8")
function countDown()
{
    for(var i=5 ; i>=1 ;i--)
    {
        console.log(i)
    }
}
countDown()
console.log("Question-9")
function CheckEvenOdd(num)
{
     if(num % 2==0)
     {
        console.log(`Even Number : ${num}`)
     }
     else
     {
        console.log(`Odd Number : ${num}`)
     }
}
CheckEvenOdd(4)
CheckEvenOdd(5)
CheckEvenOdd(2)
CheckEvenOdd(7)
console.log("Question-10")
function beginSession()
{
    console.log("Session Started.")
    endSession()
}
function endSession()
{
    console.log("Session Ended.")
}
beginSession()
